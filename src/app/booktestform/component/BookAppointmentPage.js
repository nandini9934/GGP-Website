"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../_sections/navbar";
import Footer from "../../_sections/footer";

function BookAppointmentPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    address: "",
    pincode: "",
    email: "",
    contact: "",
    appointmentTime: "",
    date: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validate Form
  const validateForm = () => {
    if (!form.name || !form.age || !form.gender || !form.address || !form.pincode || !form.email || !form.contact || !form.appointmentTime || !form.date) {
      alert("Please fill out all fields.");
      return false;
    }
    if (!/^\d{6}$/.test(form.pincode)) {
      alert("Invalid Pincode. Must be 6 digits.");
      return false;
    }
    if (!/^\d{10}$/.test(form.contact)) {
      alert("Invalid Contact Number. Must be 10 digits.");
      return false;
    }
    return true;
  };

  // Handle Form Submission & Redirect to Razorpay
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      // Store form details in session storage before redirection
      sessionStorage.setItem("appointmentData", JSON.stringify(form));

      // Redirect to Razorpay payment page
      const razorpayPaymentPageURL = "https://rzp.io/rzp/8AtzhSV";
      router.push(razorpayPaymentPageURL);
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("Payment failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-orange-100">
      <Navbar />
      <div className="flex justify-center items-center flex-grow">
        <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
          <h2 className="text-xl font-bold mb-4 text-center">Appointment Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: "Name", name: "name", type: "text" },
              { label: "Age", name: "age", type: "number" },
              { label: "Gender", name: "gender", type: "text" },
              { label: "Address", name: "address", type: "text" },
              { label: "Pincode", name: "pincode", type: "text" },
              { label: "Email", name: "email", type: "email" },
              { label: "Contact Number", name: "contact", type: "tel" },
              { label: "Appointment Time", name: "appointmentTime", type: "time" },
              { label: "Date", name: "date", type: "date" },
            ].map(({ label, name, type }) => (
              <div key={name}>
                <label className="block font-medium">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
            ))}
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg w-full"
              disabled={loading}
            >
              {loading ? "Processing..." : "Book & Pay ₹2500"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BookAppointmentPage;
