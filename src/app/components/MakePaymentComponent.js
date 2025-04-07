"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const MakePaymentComponent = () => {
  const searchParams = useSearchParams();
  const userID = searchParams.get("userid");
  const [couponCode, setCouponCode] = useState("");
  const [amount, setAmount] = useState(2);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // ✅ Success State
  const [paymentID, setPaymentID] = useState("");
  const [isuserValid, setIsUserValid] = useState(true); // ✅ Store Payment ID
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    contact: "",
  });
  useEffect(() => {
    console.log("here");
    validateUser();
  }, []);

  const makePayment = async () => {
    if (amount < 1) {
      alert("❌ Amount must be at least ₹1");
      return;
    }

    setError("");

    const res = await initializeRazorpay();
    if (!res) {
      alert(
        "❌ Payment system is not loading. Please check your internet connection or try again later."
      );
      return;
    }

    const data = await fetch("/api/razorpays", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, couponCode }),
    }).then((t) => t.json());

    console.log("✅ Razorpay Order Response:", data);

    if (data.error) {
      alert(data.error);
      return;
    }

    if (data.discount) {
      alert(`🎉 Coupon applied! You saved ₹${data.discount}`);
    }

    var options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      order_id: data.orderId,
      amount: data.amount,
      currency: "INR",
      name: "Good Gut Project",
      description: "Thank you for your test donation",
      handler: function (response) {
        eventOnPaymentSuccess(response.razorpay_payment_id);
      },
      prefill: {
        name: userDetails.name,
        email: userDetails.email,
        contact: userDetails.contact,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const eventOnPaymentSuccess = (paymentID) => {
    setIsLoading(true);
    axios
      .post("/api/successpayment", { userid: userID, paymentID: paymentID })
      .then(function (response) {
        console.log(response);
        setIsLoading(false);
        setIsSuccess(true); // ✅ Show success message inside the same box
        setPaymentID(paymentID); // ✅ Store Payment ID
        window.fbq("track", "Successs");
      })
      .catch(function (error) {
        setIsLoading(false);
        alert("Something went wrong!!");
      });
  };

  const validateUser = () => {
    setIsLoading(true);
    axios
      .post("/api/validateuser", { userid: userID })
      .then(function (response) {
        console.log(response);
        const { amount, isPaymentDone, isValidUser, name, email, contact } =
          response.data?.userInfo;
        setIsLoading(false);
        setAmount(amount);
        setIsSuccess(isPaymentDone); // ✅ Success State
        setIsUserValid(isValidUser);
        setUserDetails({
          ...userDetails,
          email: email,
          name: name,
          contact: contact,
        });
      })
      .catch(function (error) {
        //console.log(error);
        setIsLoading(false);
        setIsUserValid(false);
        setUserDetails({ ...userDetails, email: "", name: "", contact: "" });
      });
  };

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-peach">
      <div className="py-12 px-8 w-fit flex flex-col items-center bg-white rounded-lg shadow-lg">
        {/* ✅ Show Payment Page If Not Success */}
        {isuserValid ? (
          !isSuccess ? (
            <>
              {!isLoading ? (
                <>
                  <h4 className="pb-5 text-2xl font-semibold">Payment Page</h4>
                  <h3 className="text-center">
                    Please pay {amount} Rs. to book your Medical Test
                  </h3>
                  <br />
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter coupon code"
                    className="w-64 border-2 border-gray-300 py-2 px-2 rounded-xl"
                  />
                  <br />
                  <button
                    onClick={makePayment}
                    className="border-2 bg-orange-600 px-8 py-3 rounded-xl text-white font-bold"
                  >
                    Pay Now
                  </button>
                  {error && <p className="text-red-600">{error}</p>}
                </>
              ) : (
                // ✅ Show Loader Instead of "Redirecting..."
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 border-4 border-gray-300 border-t-orange-500 rounded-full animate-spin"></div>
                  <h1 className="mt-4 text-gray-700">Processing Payment...</h1>
                </div>
              )}
            </>
          ) : (
            // ✅ Show Success Message Inside Same Box
            <div className="text-center">
              <h1 className="text-green-600 text-2xl font-bold">
                🎉 Payment Successful!
              </h1>
              <p className="mt-2">Thank you for your payment.</p>
              <a href="/" className="text-blue-600 mt-4 inline-block">
                Go to Home
              </a>
            </div>
          )
        ) : (
          <h3>Invalid User</h3>
        )}
      </div>
    </div>
  );
};

export default MakePaymentComponent;
