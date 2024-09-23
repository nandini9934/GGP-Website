// app/cancellation-refund/page.js

import React from 'react';

const CancellationRefund = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Cancellation and Refund Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Cancellation Policy</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Orders can be cancelled within 24 hours of purchase.</li>
          <li>To cancel your order, please contact our support team at [email address].</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Refund Policy</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Refunds are processed within 7-10 business days after cancellation.</li>
          <li>If the order has been shipped, the refund will be processed after we receive the returned product.</li>
          <li>The refund will be issued to the original payment method used for the purchase.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Non-Refundable Items</h2>
        <p className="text-lg">Certain items are non-refundable, including personalized products and final sale items.</p>
      </section>
    </div>
  );
}

export default CancellationRefund;
