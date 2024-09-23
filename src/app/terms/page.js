// app/terms/page.js

import React from 'react';

const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Terms and Conditions</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p className="text-lg">Welcome to Good Gut Project. These terms and conditions outline the rules and regulations for the use of our website.</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Intellectual Property</h2>
        <p className="text-lg">We own all the intellectual property rights and materials contained in this website.</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Restrictions</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Publishing website material in other media</li>
          <li>Selling or sublicensing website material</li>
          <li>Damaging the website</li>
          <li>Using the website in a harmful way</li>
          <li>Contrary to applicable laws and regulations</li>
          <li>Data mining or harvesting</li>
          <li>Engaging in advertising or marketing</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Privacy</h2>
        <p className="text-lg">Please read our Privacy Policy.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Limitation of Liability</h2>
        <p className="text-lg">We are not liable for any damages arising out of the use of this website.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Indemnification</h2>
        <p className="text-lg">You indemnify us against any liabilities arising from your use of our website.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Changes to Terms</h2>
        <p className="text-lg">We may revise these terms at any time. Please review them regularly.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">8. Governing Law</h2>
        <p className="text-lg">These terms are governed by the laws of the State of [State].</p>
      </section>
    </div>
  );
}

export default Terms;
