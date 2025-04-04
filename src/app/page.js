"use client";
import React from 'react';
import Link from 'next/link';
import { Card, CardBody, CardHeader, CardFooter } from '@nextui-org/card';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./globals.css";
import Navbar from './_sections/navbar';
import Header from './_sections/header';
import AboutUs from './_sections/about';
import Services from './_sections/services';
import OtherServices from './_sections/otherservices';
import Health from './_sections/health';
import Testimonial from './_sections/testimonial';
import Footer from './_sections/footer';

export default function Home() {


  return (
    <>
      <div className="grid grid-cols-1 divide-y divide-stone-300" >
        {/* Navbar section*/}
        <Navbar />
        {/* Header Section */}

        <Header />

        {/* About Section */}
        <AboutUs />
        {/* Services Section */}
        <Services />

        {/*Health Section*/}
        <Health />

        {/*Testimonial section*/}
        <Testimonial />

        {/*Footer Section */}
        <Footer />
      </div >
    </>
  );
}
