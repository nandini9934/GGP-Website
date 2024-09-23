// app/privacy-policy/page.js

import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p className="text-lg">We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your data.</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Personal identification information (Name, email address, phone number, etc.)</li>
          <li>Payment details and transaction history</li>
          <li>Usage data and cookies</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
        <p className="text-lg">We use your data to:</p>
        <ul className="list-disc list-inside text-lg">
          <li>Provide and maintain our services</li>
          <li>Process transactions</li>
          <li>Improve our website and services</li>
          <li>Communicate with you</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Sharing Your Information</h2>
        <p className="text-lg">We do not sell or share your personal information with third parties, except to comply with the law, improve our services, or protect our rights.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
        <p className="text-lg">We implement appropriate measures to protect your data from unauthorized access, alteration, disclosure, or destruction.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
        <p className="text-lg">You have the right to access, update, or delete your personal information. To exercise these rights, please contact us.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Changes to This Policy</h2>
        <p className="text-lg">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
        <p className="text-lg">If you have any questions about this Privacy Policy, please contact us at [email address].</p>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
