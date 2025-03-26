"use client"; 
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const PaymentSuccess = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentSuccessContent />
    </Suspense>
  );
};

const PaymentSuccessContent = () => {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("payment_id");

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>🎉 Payment Successful!</h1>
      <p>Thank you for your payment.</p>
      <a href="/">Go to Home</a>
    </div>
  );
};

export default PaymentSuccess;
