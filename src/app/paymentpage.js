// "use client";

// import { useState, useEffect } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import axios from "axios";

// export default function PaymentPage() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const [amount, setAmount] = useState(0);
//   const [orderId, setOrderId] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [razorpayKey, setRazorpayKey] = useState("");

//   useEffect(() => {
//     axios.get("/api/getRazorpayKey")
//       .then(res => setRazorpayKey(res.data.key))
//       .catch(() => alert("Failed to fetch Razorpay key"));
//   }, []);

//   useEffect(() => {
//     const amt = searchParams.get("amount") || 2500; // Default ₹2500
//     setAmount(amt);

//     axios.post("/api/razorpays", { amount: amt })
//       .then(res => setOrderId(res.data.orderId))
//       .catch(() => alert("Failed to create order"));
//   }, [searchParams]);

//   const handlePayment = async () => {
//     if (!orderId) {
//       alert("Order ID not found! Try again.");
//       return;
//     }

//     setLoading(true);

//     const isLoaded = await new Promise(resolve => {
//       if (window.Razorpay) return resolve(true);
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });

//     if (!isLoaded) {
//       alert("Failed to load Razorpay. Check your internet connection.");
//       setLoading(false);
//       return;
//     }

//     const options = {
//       key: razorpayKey,
//       amount: amount * 100,
//       currency: "INR",
//       name: "GGP Medical",
//       description: "Appointment Payment",
//       order_id: orderId,
//       handler: async (response) => {
//         alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
//         axios.post("/api/paymentSuccess", { paymentId: response.razorpay_payment_id });
//         router.push("/success"); // Redirect to success page
//       },
//       prefill: {
//         name: "User",
//         email: "user@example.com",
//         contact: "9999999999",
//       },
//       theme: { color: "#F37254" },
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();

//     setLoading(false);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
//         <h2 className="text-xl font-bold mb-4">Payment Details</h2>
//         <p className="text-lg">Amount: ₹{amount}</p>
//         <p className="text-sm text-gray-500">Order ID: {orderId}</p>
//         <button
//           onClick={handlePayment}
//           disabled={loading}
//           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
//         >
//           {loading ? "Processing..." : "Pay Now"}
//         </button>
//       </div>
//     </div>
//   );
// }
