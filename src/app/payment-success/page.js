"use client";

import React from 'react';
import { useSearchParams } from 'next/navigation';

const PaymentSuccess = () => {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get('payment_id');

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>🎉 Payment Successful!</h1>
      <p>Thank you for your payment.</p>
      <a href="/">Go to Home</a>
    </div>
  );
};

export default PaymentSuccess;
