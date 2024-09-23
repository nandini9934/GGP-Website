"use client";
import React from 'react';
import Link from 'next/link';
import { Card, CardBody, CardHeader, CardFooter } from '@nextui-org/card';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./globals.css";



export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <div className="container ">
        <div className="grid grid-cols-1 divide-y divide-stone-300" >
          {/* Navbar section*/}
          <section>
            <nav className="container bg-peach py-4 px-5">
              <div className="flex items-center">
                <div className="grid grid-cols-8 gap-4">
                  <div className='col-span-3 flex items-center justify-left'>
                    <img src="/logo.png" height={100} width={100} />
                  </div>

                  <div className="flex items-center justify-center text-lg ">
                    <Link href="/privacy-policy"
                      className={`text-gray-500 font-bold ${pathname === '/privacy-policy' ? 'active' : "hover:text-orange-500 hover:underline"}`}>
                      Home
                    </Link>
                  </div>
                  <div className="flex items-center justify-center text-lg">
                    <Link href="/payment"
                      className={`text-gray-500 font-bold ${pathname === '/payment' ? 'active' : "hover:text-orange-500 hover:underline"}`}>
                      Why Choose Us
                    </Link>
                  </div>
                  <div className="flex items-center justify-center text-lg">
                    <Link href="/terms"
                      className={`text-gray-500 font-bold  ${pathname === '/terms' ? 'active' : 'hover:text-orange-500 hover:underline'}`}>
                      Team
                    </Link></div>
                  <div className="flex items-center justify-center text-lg">
                    <Link href="/contactform"
                      className={`text-gray-500 font-bold  ${pathname === '/contactform' ? 'active' : 'hover:text-orange-500 hover:underline'}`}>
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </section>

          {/* Header Section */}
          <section className="bg-peach py-5 px-8">
            <div className="flex flex-col md:flex-row items-center ml-16 ">

              {/* Left Content */}
              <div className="md:w-1/2">
                <h1 className="text-6xl font-bold leading-tight font-amsterdam" >
                  <span className="text-orange-600">TRANSFORM</span>
                  <span className="text-slate-800 ml-2">YOUR</span>
                </h1>
                <h1 className="text-6xl font-bold text-slate-800 leading-tight whitespace-nowrap font-tanker">
                  HEALTH WITH GOOD GUT
                </h1>
                <h1 className="text-6xl font-bold text-slate-800 leading-tight font-tanker">
                  PROJECT
                </h1>
                <p className="text-2xl text-slate-600 mt-6">
                  Tailored Diet Plans, Professional Advice, and Trusted Health Content for Your Wellness Journey
                </p>
                <div className="flex items-center mt-6">
                  <div className="flex space-x-2">
                    {/* Placeholder for profile images */}
                    <img src="profile1.jpg" alt="profile1" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="profile2.jpg" alt="profile2" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="profile3.jpg" alt="profile3" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="profile4.jpg" alt="profile4" className="w-10 h-10 rounded-full border-2 border-white" />
                  </div>
                  <p className="text-orange-500 text-lg ml-4">5.0 <span className="text-slate-500">From 50+ Success Stories</span></p>
                </div>
                <div className="flex items-center mt-8">
                  <button className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-lg">
                    Join Now
                  </button>
                  <p className="ml-4 text-lg font-semibold text-slate-800">30-DAYS MONEY BACK GUARANTEE</p>
                </div>
              </div>

              {/* Right Image */}
              <div className="md:w-1/2  md:mt-0">
                <img src="/lady.avif" alt="Meditation" className="w-full h-auto max-w-md mx-auto" />
              </div>
            </div>
          </section>


          {/* About Section */}
          <section className="py-10 bg-orange-500 text-white text-center space-x-80">
            <div className="inline-block text-center">
              <div className="mb-20">
                <h2 className="text-5xl mb-1 mx-14">10+</h2>
                <h2 className="text-2xl mb-1 font-bold">Success Stories</h2>
              </div>
              <div className="">
                <h2 className="text-5xl mb-1 mx-24">3+</h2>
                <h2 className="text-2xl mb-1 font-bold">Years of Experience</h2>
              </div>
            </div>

            <div className='inline-block text-center'>
              <div className="mb-20">
                <h2 className="text-5xl mb-1 mx-16">4+</h2>
                <h2 className="text-2xl mb-1 font-bold">Team of Expert</h2>
              </div>

              <div className="">
                <h2 className="text-5xl mb-1 mx-14">98%</h2>
                <h2 className="text-2xl mb-1 font-bold">Satisfaction Rate</h2>
              </div>
            </div>

          </section >
        </div >
        {/* Services Section */}
        < section >
          <div className=" mx-auto text-center">
            <h2 className="text-4xl font-medium my-20">Our Standout Support for a Healthier You</h2>
            <img src='/healthier.avif' className='rounded-3xl px-20 pb-20  h-screen w-full object-cover' />
            <div className="text-left ">
              <h2 className='font-medium text-4xl font-serif text-slate-700 ml-20 mb-6'>Start Your Journey with Our Welcome Kit</h2>
              <p className='ml-20 text-slate-500 text-lg'>Begin your health transformation with a thoughtfully curated welcome kit. It includes essential tools, guides, and resources to kickstart your diet plan<p>and keep you motivated.</p></p>
            </div>
            <div className='items-center ml-20 my-5'>
              <button className="flex  bg-orange-500 hover:bg-[#fdeacc] text-white hover:text-orange-500 border-2 border-orange-500 font-bold py-2 px-4 rounded-xl"><Link href="/confirm">Get your welcome kit</Link></button>
            </div>
            <img src='/doctors.avif' className='rounded-3xl px-20 pb-20 pt-10 h-96 w-full object-cover ' />
            <div className="text-left ">
              <h2 className='font-medium text-4xl font-serif text-slate-700 ml-20 mb-6'>We're Here for You Anytime</h2>
              <p className='ml-20 text-slate-500 text-lg'>Enjoy unlimited call support from our team of nutrition experts. Whether you have questions or need motivation, we're just a phone call away to ensure you stay on track.</p>
            </div>
            <div className='items-center ml-20 my-5'>
              <button className="flex  bg-orange-500 hover:bg-[#fdeacc] text-white hover:text-orange-500 border-2 border-orange-500 font-bold py-2 px-4 rounded-xl"><Link href="/confirm">Talk to a specialist</Link></button>
            </div>
            <img src='/mobile.avif' className='rounded-3xl px-20 pb-20 pt-10 h-96 w-full ' />
            <div className="text-left ">
              <h2 className='font-medium text-4xl font-serif text-slate-700 ml-20 mb-6'>Instant Nutrition Support</h2>
              <p className='ml-20 text-slate-500 text-lg'>Get instant answers and guidance with our AI-powered nutrition chat bot. Available 24/7, it's like having a personal dietician in your pocket, ready to<p>help you anytime.</p></p>
            </div>
            <div className='items-center ml-20 my-5'>
              <button className="flex  bg-orange-500 hover:bg-[#fdeacc] text-white hover:text-orange-500 border-2 border-orange-500 font-bold py-2 px-4 rounded-xl"><Link href="/confirm">Chat now</Link></button>
            </div>
            <img src='/nutrients.avif' className='rounded-3xl px-20 pb-20 pt-10 h-screen w-full object-cover' />
            <div className="text-left ">
              <h2 className='font-medium text-4xl font-serif text-slate-700 ml-20 mb-6'>Tailored Diet Plans Just for You</h2>
              <p className='ml-20 text-slate-500 text-lg'>Experience the benefits of a diet plan designed specifically for your needs. Our personalized plans consider your unique goals, preferences, and health conditions to ensure optimal results.</p>
            </div>
            <div className='items-center ml-20 my-5'>
              <button className="flex  bg-orange-500 hover:bg-[#fdeacc] text-white hover:text-orange-500 border-2 border-orange-500 font-bold py-2 px-4 rounded-xl"><Link href="/confirm">Get your Personalized Plan</Link></button>
            </div>
            <h6 className="text-slate-400 font-bold mt-28 mb-5">Pricing</h6>
            <h2 className="font-medium text-5xl font-serif text-slate-700 ml-20 mb-6">Health Plans That Deliver Results!</h2>
            <p className='pl-24 text-slate-500 text-base'>Affordable,Expert-Guided Nutrition Plans for Every Need</p>
            <div className='flex mx-14'>
              <Card className='card w-full bg-peach mr-3 my-20 py-3 px-15'>
                <img src='/bottle.webp' className='h-72 w-72 py-10 px-10 ml-40 rounded-full' />
                <CardHeader className='justify-center font-medium text-3xl text-slate-700 font-serif'>
                  <p>Nutritional diet plan</p>
                </CardHeader>
                <CardBody className='text-start text-slate-500 mx-32 text-lg space-y-4'>
                  <li>Customized diet plan on daily basis</li>
                  <li>Weekly progress tracking on daily</li>
                  <li>Access to verified nutrition content</li>
                  <li>Monthly full body checkups</li>
                  <li>Direct access to certified dieticians</li>
                  <li>Priority customer support</li>
                </CardBody>
                <CardFooter className='justify-center mb-6'>
                  <button className="bg-orange-500 hover:bg-[#fdeacc] text-white hover:text-orange-500 border-2 border-orange-500 font-bold text-base py-3 mt-3 px-4 rounded-xl"><Link href="/confirm">Book Now</Link></button>
                </CardFooter>
              </Card>
              <Card className='card1 w-full bg-peach ml-3 my-20 py-3 px-15'>
                <img src='/pregnancy.gif' className='h-72 w-72 py-10 px-10 ml-40 rounded-full' />
                <CardHeader className='justify-center font-medium text-3xl text-slate-700 font-serif'>
                  <p>Pregnancy diet plan</p>
                </CardHeader>
                <CardBody className='text-start mx-32 text-slate-500 text-lg space-y-4'>
                  <li>Tailored Diet Plans for each trimester</li>
                  <li>Monthly consultation with dietician</li>
                  <li>Essential nutrition content</li>
                  <li>Post delivery diet plans</li>
                  <li>Direct access to certified dieticians</li>
                  <li>Priority customer support</li>
                </CardBody>
                <CardFooter className='justify-center mb-6'>
                  <button className="bg-orange-500 hover:bg-[#fdeacc] text-white hover:text-orange-500 border-2 border-orange-500 font-bold text-base py-3 mt-3 px-4 rounded-xl"><Link href="/confirm">Book Now</Link></button>
                </CardFooter>
              </Card>
            </div>
            <h6 className="text-slate-400 font-bold mt-28 mb-5">Team</h6>
            <h2 className="font-medium text-5xl font-serif text-slate-700 ml-20 mb-6">Meet Your Health Guides</h2>
            <p className='px-14 text-slate-500 text-base'>Meet our expert dieticians to your well-being. With years of experience and a passion for nutrition, they provide personalized support and scientifically-backed advice. Trust our professionals to guide you towards your health goals with care and expertise.</p>
          </div>
        </section >

        {/*Health Section*/}
        < section className="py-10 bg-peach my-20" >
          <div className="text-center mt-16">
            <h2 className='font-medium text-5xl font-serif text-slate-700 mx-20 mb-6'>Transform Your Health Today!</h2>
            <p className='mx-20 text-slate-500 text-xl'>Don't wait! Take the first step towards a healthier, happier you. Join us today and unlock the full potential of your health with expert guidance and personalized care.</p>
          </div>
          <div className='flex justify-center mt-6 mb-16'>
            <button className="bg-orange-500 hover:bg-[#fdeacc] text-white hover:text-orange-500 border-2 border-orange-500 font-bold text-base py-3 px-5 rounded-xl"><Link href="/confirm">Book your Free consultation</Link></button>
          </div>
        </section >

        {/*Testimonial section*/}
        < section >
          <h6 className="text-slate-400 font-bold mt-28 mb-5 text-center text-lg">Testimonials</h6>
          <h2 className="font-medium text-4xl font-serif text-slate-700 mx-20 mb-6 text-center">See what people say about us</h2>
          <div className='mx-14'>
            <Card className='card w-full bg-peach mr-3 my-20 py-3 px-15'>
              <CardBody className='text-start font-medium mx-5 text-orange-500 text-sm space-y-4'>
                Good Gut Project has completely transformed my approach to eating and health. Since starting their customised diet plan,<p>I've lost 25 pounds and feel more vibrant than ever.<p>The recipes are not only nutritious but also inctredibly tasty, making it easy to stick to the plan. The team provides outstanding support and keeps me motivated every step of the way.</p></p>
              </CardBody>
              <div className="flex space-x-1 justify-center">
                <i className="fas fa-star text-orange-500 text-3xl"></i>
                <i className="fas fa-star text-orange-500 text-3xl"></i>
                <i className="fas fa-star text-orange-500 text-3xl"></i>
                <i className="fas fa-star text-orange-500 text-3xl"></i>
                <i className="fas fa-star text-orange-500 text-3xl"></i>
              </div>
              <img src='/food.jpg' className='h-36 w-36 pt-5 pb-3 px-4 mx-auto rounded-full' />
              <p className='text-center font-bold text-base'>-- Kabir Singh</p>
              <p className='text-center text-slate-400 text-xs mb-5'>IT Professional</p>
            </Card>
            <Card className='card1 w-full bg-peach ml-3 my-20 py-3 px-15'>
              <CardBody className='text-start font-medium mx-5 text-orange-500 text-sm space-y-4'>
                Good Gut Project has completely transformed my approach to eating and health. Since starting their customised diet plan,<p>I've lost 25 pounds and feel more vibrant than ever.<p>The recipes are not only nutritious but also inctredibly tasty, making it easy to stick to the plan. The team provides outstanding support and keeps me motivated every step of the way.</p></p>
              </CardBody>
              <div className="flex space-x-1 justify-center">
                <i className="fas fa-star text-orange-500 text-3xl"></i>
                <i className="fas fa-star text-orange-500 text-3xl"></i>
                <i className="fas fa-star text-orange-500 text-3xl"></i>
                <i className="fas fa-star text-orange-500 text-3xl"></i>
                <i className="fas fa-star text-orange-500 text-3xl"></i>
              </div>
              <img src='/food.jpg' className='h-36 w-36 pt-5 pb-3 px-4 mx-auto rounded-full' />
              <p className='text-center font-bold text-base'>-- Aditi Kapoor</p>
              <p className='text-center text-slate-400 text-xs mb-5'>Home Maker</p>
            </Card>
            <Card className='card1 w-full bg-peach ml-3 my-20 py-3 px-15'>
              <CardBody className='text-start font-medium mx-5 text-orange-500 text-sm space-y-4'>
                I couldn't be happier with the results from Good Gut Projects's personalised diet plans! In just three months,<p>I've lost significant weight and gained so much energy.<p>The meal plans are easy to follow, delicious, and tailored to my needs. Their support and guidance have been incredible throughout this journey.</p></p>
              </CardBody>
              <div className="flex space-x-1 justify-center">
                <i className="fas fa-star text-orange-500 text-3xl"></i>
                <i className="fas fa-star text-orange-500 text-3xl"></i>
                <i className="fas fa-star text-orange-500 text-3xl"></i>
                <i className="fas fa-star text-orange-500 text-3xl"></i>
                <i className="fas fa-star text-orange-500 text-3xl"></i>
              </div>
              <img src='/food.jpg' className='h-36 w-36 pt-5 pb-3 px-4 mx-auto rounded-full' />
              <p className='text-center font-bold text-base'>-- Aryan Singhal</p>
              <p className='text-center text-slate-400 text-xs mb-5'>IT Professional</p>
            </Card>
          </div>
        </section >

        {/*Footer Section */}
        < section >
          <div className="relative flex flex-col items-center justify-center h-full mt-20 bg-peach">
            <div className="text-center mb-16">
              <h1 className="text-5xl  font-serif text-orange-500 pt-32">Let’s Make this happen</h1>
              <h2 className="text-8xl  text-orange-500 font-serif mt-2 mb-72">Together</h2>
            </div>
            <div className="absolute text-center text-white bottom-0 w-full bg-[#f27c21] h-[200px] rounded-t-full">
              <p className="text-sm pt-24 font-bold">©2024 Good Gut Project. All Rights Reserved.</p>
            </div>
          </div>
        </section >
      </div >
    </>
  );
}
