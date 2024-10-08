// app/privacy-policy/page.js

import React from 'react';
import Navbar from '../_sections/navbar';
import Footer from '../_sections/footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-10 py-8 bg-peach">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

        <section className="mb-8">
          <p className="text-lg ml-5">At Good Gut Project, we are committed to protecting your privacy and ensuring that your personal information is handled responsibly. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website or use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
          <p className="text-lg ml-5">We may collect personal information from you when you interact with our website, including but not limited to:
          </p>
          <ul className="list-disc list-inside text-lg ml-5">
            <li><span className='font-bold'>Personal Identification Information:</span> Name, email address, phone number, and any other information you voluntarily provide.
            </li>
            <li><span className='font-bold'>Health Information::</span> Information related to your health and nutritional needs, which may be collected through forms or consultations.
            </li>
            <li><span className='font-bold'>Payment Information:</span> Credit card details and billing information when you make a purchase.
            </li>
            <li><span className='font-bold'>Usage Data:</span> Information about your interactions with our website, such as IP address, browser type, and pages visited.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
          <p className="text-lg ml-5">We use the information we collect for various purposes, including:</p>
          <ul className="list-disc list-inside text-lg ml-5">
            <li>To provide and maintain our services.
              To process your transactions and send you related information, including purchase confirmations and invoices.
            </li>
            <li>To communicate with you, including responding to your inquiries and providing customer support.</li>
            <li> To send you marketing communications, newsletters, and promotional offers</li>
            <li>To improve our website and services based on user feedback and usage data.
              To comply with legal obligations and protect our rights.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Sharing Your Information</h2>
          <p className="text-lg ml-5">We do not sell or rent your personal information to third parties. We may share your information with:</p>
          <ul className="list-disc list-inside text-lg ml-5">
            <li><span className='font-bold'>Service Providers:</span> Third-party vendors who assist us in providing our services (e.g., payment processors, email service providers). They are obligated to protect your information.</li>
            <li><span className='font-bold'>Usage Data:</span>When required by law or to protect our rights, safety, or property, or the rights, safety, or property of others.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Security of Your Information</h2>
          <p className="text-lg ml-5">We take the security of your personal information seriously and implement reasonable measures to protect it from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
          <p className="text-lg ml-5">You have the following rights regarding your personal information:</p>
          <ul className="list-disc list-inside text-lg ml-5">
            <li><span className='font-bold'>Access:</span> You can request access to the personal information we hold about you.
              Correction: You can request that we correct any inaccurate or incomplete information.</li>
            <li><span className='font-bold'>Deletion:</span>  You can request that we delete your personal information, subject to certain exceptions.</li>
            <li><span className='font-bold'>Opt-Out:</span>  You can request that we delete your personal information, subject to certain exceptions.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">6. Cookies</h2>
          <p className="text-lg ml-5">Our website uses cookies to enhance your experience. Cookies are small text files placed on your device that help us analyze website traffic and improve our services. You can control cookie preferences through your browser settings.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">7. Changes to This Privacy Policy</h2>
          <p className="text-lg ml-5">We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about our practices.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
          <p className="text-lg ml-5 mb-3">If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p className="text-lg ml-5 font-bold">Good Gut Project</p>
          <ul className=" list-inside text-lg ml-5">
            <li><span className='font-bold'>Address:</span> 1st Floor , 64 Rajendra Nagar Naubasta Kanpur 208021</li>
            <li><span className='font-bold'>Email Address:</span> info@goodgutproject.in</li>
            <li><span className='font-bold'>Phone Number:</span> 9236371617, 9236381618</li>
          </ul>
        </section>
      </div>
      <Footer/>
    </>
  );
}

export default PrivacyPolicy;
