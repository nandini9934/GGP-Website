//pages->payment.js
"use client";
import React from 'react'
import MakePaymentComponent from '@/app/components/MakePaymentComponent';
import { Suspense } from "react";

const PaymentSus = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Payment />
    </Suspense>
  );
};


const Payment = () => {

  return (
    <div>
        <h4>Payment Page</h4>
        <MakePaymentComponent/>
    </div>
  )
}

export default PaymentSus