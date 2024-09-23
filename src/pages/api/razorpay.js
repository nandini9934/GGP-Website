import Razorpay from "razorpay";
import shortid from "shortid";

const couponCodes = {
  "DISCOUNT10": 10, // 10% discount
  "DISCOUNT20": 20, // 20% discount
  // Add more coupon codes as needed
};

const validateCoupon = (coupon) => {
  if (coupon in couponCodes) {
    return couponCodes[coupon];
  }
  return 0; // No discount
};

export default async function handler(req, res) {
  const { taxAmt, couponCode } = req.body;

  if (req.method === "POST") {
    // Initialize razorpay object
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    // Validate coupon code
    const discountPercentage = validateCoupon(couponCode);
    if (discountPercentage === 0 && couponCode) {
      // If coupon code is provided but invalid
      return res.status(400).json({ message: "Coupon code is not valid" });
    }

    const discountAmount = (taxAmt * discountPercentage) / 100;
    const finalAmount = taxAmt - discountAmount;

    // Create an order -> generate the OrderID -> Send it to the Front-end
    const payment_capture = 1;
    const amount = finalAmount;
    const currency = "INR";
    const options = {
      amount: (amount * 100).toString(), // Amount in paise
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err) {
      // Return specific error messages from Razorpay
      const errorMessage = err.error && err.error.description ? err.error.description : "Payment order creation failed";
      res.status(400).json({ message: errorMessage });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
