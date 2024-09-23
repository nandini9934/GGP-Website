import React, { useState } from 'react';

const MakePaymentComponent = () => {
  const [couponCode, setCouponCode] = useState('');
  const [taxAmt, setTaxAmt] = useState(100); // Example amount
  const [error, setError] = useState(''); // State for error message

  const makePayment = async () => {
    const res = await initializeRazorpay();
    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    
    // Make API call to the serverless API with taxAmt and couponCode
    const data = await fetch("/api/razorpay", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        taxAmt,
        couponCode,
      }),
    }).then((t) => t.json());

    // Check for a valid payment response or error message
    if (data.id) {
      var options = {
        key: process.env.RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
        name: "Good Gut Project",
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        description: "Thank you for your test donation",
        image: "logo1.png",
        handler: function (response) {
          alert("Razorpay Response: " + response.razorpay_payment_id);
        },
        prefill: {
          name: "Akash Kushwaha",
          email: "Organikkanpur.in",
          contact: '7521816092',
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
      setError(''); // Clear any previous error message
    } else {
      // Display error message if coupon code is not valid
      if (data.message) {
        setError(data.message); // Show error message from server
      } else {
        setError('Payment failed'); // Fallback error message
      }
    }
  };

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  return (
    <div>
      <input 
        type="text" 
        value={couponCode} 
        onChange={(e) => setCouponCode(e.target.value)} 
        placeholder="Enter coupon code"
      />
      <button onClick={makePayment}>Pay Now</button>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error message */}
    </div>
  );
}

export default MakePaymentComponent;
