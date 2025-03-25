import Razorpay from "razorpay";

export async function POST(req) {
  try {
    const { amount } = await req.json();

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      return Response.json({ error: "Razorpay API keys missing" }, { status: 500 });
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: amount * 100, // Convert to paise
      currency: "INR",
      receipt: `receipt_${Math.random()}`,
    };

    const order = await razorpay.orders.create(options);

    return Response.json({ orderId: order.id, amount: order.amount }, { status: 200 });

  } catch (error) {
    console.error("🚨 Razorpay Error:", error);
    return Response.json({ error: "Payment initialization failed" }, { status: 500 });
  }
}
