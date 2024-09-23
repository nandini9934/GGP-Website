// app/shipping-exchange/page.js

import React from 'react';

const ShippingExchange = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Shipping and Exchange Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Shipping Policy</h2>
        <ul className="list-disc list-inside text-lg">
          <li>We offer free shipping on all orders above [amount].</li>
          <li>Orders are processed within 2-3 business days.</li>
          <li>Shipping times vary depending on the destination, typically taking 5-7 business days.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Exchange Policy</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Exchanges are accepted within 30 days of purchase.</li>
          <li>Products must be in their original condition, unused, and with all tags attached.</li>
          <li>To initiate an exchange, please contact our support team at [email address].</li>
        </ul>
      </section>
    </div>
  );
}

export default ShippingExchange;
