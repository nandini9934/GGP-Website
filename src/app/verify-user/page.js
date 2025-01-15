'use client'
import { useState, useEffect } from 'react';
import axios from "axios";
import Navbar from '../_sections/navbar';
import Footer from '../_sections/footer';

export default function VerifyUser() {
  const [isLoading, setIsLaoding] = useState(true);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const API_URL = "https://api.goodgutproject.in";
  const verifyToken = (token) => {
    setIsLaoding(true);

    const data = axios.post(API_URL + '/api/verifyuser', { token: token }, {
      headers: {
        'x-api-key': '67890-fghij'
      }
    }).then((response) => {
      const data = response?.data;
      setMessage(data?.message);
      setTitle(data?.title);
      setIsLaoding(false);
    })
      .catch((error) => {
        setMessage(error.message);
      }
      )

  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location?.search);
    const tokenFromUrl = urlParams.get('token');
    verifyToken(tokenFromUrl);
  }, [])


  return (<>
    <Navbar />
    <div className="bg-peach">

      <div className="flex items-center justify-center rounded-2xl h-[550px] mx-4">
        <div className="bg-white p-6 text-center shadow-xl ">
          {isLoading ? <h1>Verifying User.....</h1> : <>
            {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
            <p>{message}</p>
            <a href='/'><button
              className="bg-orange-500 hover:bg-[#fdeacc] text-white hover:text-orange-500 border-2 border-orange-500 font-bold py-2 mt-3 px-4 rounded-xl"
            >
              Go to Homepage
            </button></a></>}
        </div>
      </div>
    </div>
    <Footer />
  </>
  )
}