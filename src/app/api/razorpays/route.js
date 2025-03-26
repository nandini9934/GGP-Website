import Razorpay from "razorpay";
import { NextResponse } from "next/server";

const validCoupons = { 
  "DISCOUNT50": 50,  // Example: ₹50 discount
  "SAVE20": 20       // Example: ₹20 discount
};

export async function POST(req) {
  try {

    const { amount, couponCode } = await req.json();
    console.log("📩 Received Data:", { amount, couponCode });

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      return NextResponse.json({ error: "❌ Razorpay API keys missing" }, { status: 500 });
    }

    let discount = 0;
    if (couponCode && validCoupons[couponCode]) {
      discount = validCoupons[couponCode]; // ✅ Apply discount if coupon is valid
    } else if (couponCode) {
      return NextResponse.json({ error: "❌ Invalid Coupon Code" }, { status: 400 });
    }

    const finalAmount = Math.max(amount - discount, 1); // ✅ Ensure amount is not negative

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: finalAmount * 100, // Convert INR to paise
      currency: "INR",
      receipt: `receipt_${Math.random()}`,
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json({ orderId: order.id, amount: finalAmount * 100, discount }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "❌ Payment initialization failed", details: error.message }, { status: 500 });
  }
}
