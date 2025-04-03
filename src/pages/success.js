"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../src/app/_sections/navbar.js";
import Footer from "../../src/app/_sections/footer.js";

function PaymentSuccess() {
  const router = useRouter();
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    // Retrieve appointment details from session storage
    const storedData = sessionStorage.getItem("appointmentData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setAppointmentData(parsedData);

      // 🔥 Facebook Pixel Purchase Event Tracking 🔥
      if (window.fbq) {
        window.fbq("track", "Purchase", {
          value: parsedData.price || 0,  // Price (agar hai to)
          currency: "INR",  // Currency set karein
        });
      }
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-green-100">
      <Navbar />
      <div className="flex justify-center items-center flex-grow">
        <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full text-center">
          <h2 className="text-xl font-bold mb-4 text-green-600">Payment Successful! 🎉</h2>
          {appointmentData ? (
            <div className="text-left">
              <p><strong>Name:</strong> {appointmentData.name}</p>
              <p><strong>Age:</strong> {appointmentData.age}</p>
              <p><strong>Gender:</strong> {appointmentData.gender}</p>
              <p><strong>Appointment Date:</strong> {appointmentData.date}</p>
              <p><strong>Time:</strong> {appointmentData.appointmentTime}</p>
              <p><strong>Email:</strong> {appointmentData.email}</p>
              <p><strong>Contact:</strong> {appointmentData.contact}</p>
            </div>
          ) : (
            <p>No appointment data found.</p>
          )}
          <button
            onClick={() => router.push("/")}
            className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4"
          >
            Go to Home
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PaymentSuccess;
