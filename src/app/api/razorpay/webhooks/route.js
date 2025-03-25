import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req) {
  try {
    const razorpaySecret = process.env.RAZORPAY_WEBHOOK_SECRET;
    if (!razorpaySecret) {
      return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 });
    }

    const webhookBody = await req.text();
    const receivedSignature = req.headers.get("x-razorpay-signature");

    console.log("🔍 Received Headers:", req.headers); // Debugging

    if (!receivedSignature) {
      return NextResponse.json({ error: "Signature missing" }, { status: 400 });
    }

    // ✅ Verify the signature
    const expectedSignature = crypto
      .createHmac("sha256", razorpaySecret)
      .update(webhookBody)
      .digest("hex");

    if (expectedSignature !== receivedSignature) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    // ✅ Parse the webhook payload
    const event = JSON.parse(webhookBody);
    console.log("📩 Webhook Event:", event);

    switch (event.event) {
      case "payment.captured":
        console.log("✅ Payment Captured:", event.payload.payment);
        // TODO: Store payment details in the database
        break;

      case "payment.failed":
        console.log("❌ Payment Failed:", event.payload.payment);
        // TODO: Handle failed payment scenario
        break;

      case "order.paid":
        console.log("✅ Order Paid:", event.payload.order);
        // TODO: Update order status in the database
        break;

      default:
        console.log("ℹ️ Unhandled Event:", event.event);
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("🚨 Webhook Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
