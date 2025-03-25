import Razorpay from "razorpay";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  try {
    const order = await razorpay.orders.create({
      amount: req.body.amount,
      currency: req.body.currency,
      receipt: req.body.receipt,
    });

    res.status(200).json({ orderId: order.id, key: process.env.RAZORPAY_KEY_ID });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
