// app/contact-us/page.js
"use client";
import React, { useState } from 'react';
import axios from "axios";


const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios
        .post("/api/contactus", {name, email, message
        })
        .then(function (response) {
          console.log(response);
          alert("Request send successfully.");
        })
        .catch(function (error) {
          console.log(error.message);
          alert(error.message);
        });
    } catch (error) {
      console.error("Error during form submission", error);
      alert("Form submission failed. Please try again later.");
    }
  };


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Message</label>
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            className="w-full px-4 py-2 border rounded-lg"
            rows="5"
            required
          ></textarea>
        </div>
        
        <button type="submit" className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-lg" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;