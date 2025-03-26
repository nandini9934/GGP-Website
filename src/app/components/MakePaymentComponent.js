"use client";

import React, { useState ,useEffect} from 'react';
import { useSearchParams } from "next/navigation";
import axios from "axios";

const MakePaymentComponent = () => {
  const searchParams = useSearchParams();
  const userID = searchParams.get("userid");
  const type = searchParams.get("type");
  const [couponCode, setCouponCode] = useState('');
  const [amount, setAmount] = useState(100); // Default ₹100
  const [error, setError] = useState('');
  const [isLoading ,setIsLoading] = useState(false);

  useEffect(()=>
  {
    setAmount(type === 'M' ? 1 : 2)
  },[type])
  const makePayment = async () => {
    if (amount < 1) {
      alert("❌ Amount must be at least ₹1");
      return;
    }
    
    setError(""); // Reset error if valid

    const res = await initializeRazorpay();
    if (!res) {
      alert("❌ Razorpay SDK Failed to Load");
      return;
    }

    // Make API call to the serverless API with amount and couponCode
    const data = await fetch("/api/razorpays", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, couponCode }),
    }).then((t) => t.json());

    console.log("✅ Razorpay Order Response:", data);

    if (data.error) {
      alert(data.error);
      return;
    }

    // Show discount message
    if (data.discount) {
      alert(`🎉 Coupon applied! You saved ₹${data.discount}`);
    }

    var options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      order_id: data.orderId,
      amount:type === 'M' ? 1 : 2,
      currency: "INR",
      name: "Good Gut Project",
      description: "Thank you for your test donation",
      handler: function (response) {
        eventOnPaymentSuccess(response.razorpay_payment_id);
      },
      prefill: {
        name: "Akash Kushwaha",
        email: "Organikkanpur.in",
        contact: "7521816092",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

const eventOnPaymentSuccess =(paymentID)=>
{
  setIsLoading(true);
  axios
  .post("/api/successpayment", { userid:userID })
  .then(function (response) {
    console.log(response);
    setIsLoading(false);
    window.location.href = `/payment-success?payment_id=${paymentID}`;
  })
  .catch(function (error) {
    setIsLoading(false);
    alert("Something went wrong!!")
  });
}

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
      {/* <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Enter amount"
        className='w-60 border-2 border-black my-2 mx-2 px-2'
      /> */}
    {!isLoading ? <> <h3>Please Pay {type === "M" ? 2000 : 2500} to book your Medical test</h3>
      <br />
      <input
        type="text"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        placeholder="Enter coupon code"
        className='w-60 border-2 border-black my-2 mx-2 px-2'
      /><br />
      <button onClick={makePayment} className='w-60 border-2 border-black bg-orange-400 mx-2 px-2'>Pay Now</button>
      {error && <p style={{ color: 'red' }}>{error}</p>} </>: <h1>Redirecting to Acknowledgement Page</h1>} 
    </div>
  );
}

export default MakePaymentComponent;
