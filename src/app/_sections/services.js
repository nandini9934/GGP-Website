import Link from 'next/link';
import { Card, CardBody, CardHeader, CardFooter } from '@nextui-org/card';

export default function Services()
{
    return(
       <div className="container mx-auto"> < section >
          <div className="mx-auto text-center">
            <h2 className="text-4xl font-medium my-20">Our Standout Support for a Healthier You</h2>
            <img src='/healthier.avif' className='rounded-3xl px-20 pb-20  lg:h-screen lg:w-full object-cover' />
            <div className="text-center px-10">
              <h2 className='font-medium text-4xl font-serif text-slate-700 mb-6'>Start Your Journey with Our Welcome Kit</h2>
              <p className='text-slate-500 text-lg'>Begin your health transformation with a thoughtfully curated welcome kit. It includes essential tools, guides, and resources to kickstart your diet plan<p>and keep you motivated.</p></p>
            </div>
            <div className='flex justify-center my-5'>
              <button className="flex  bg-orange-500 hover:bg-[#fdeacc] text-white hover:text-orange-500 border-2 border-orange-500 font-bold py-2 px-4 rounded-xl"><Link href="/confirm">Get your welcome kit</Link></button>
            </div>
            <img src='/doctors.avif' className='rounded-3xl px-20 pb-20 pt-10 h-96 w-full object-cover ' />
            <div className="text-center px-10">
              <h2 className='font-medium text-4xl font-serif text-slate-700 mb-6'>We're Here for You Anytime</h2>
              <p className='text-slate-500 text-lg'>Enjoy unlimited call support from our team of nutrition experts. Whether you have questions or need motivation, we're just a phone call away to ensure you stay on track.</p>
            </div>
            <div className='flex justify-center my-5'>
              <button className="flex  bg-orange-500 hover:bg-[#fdeacc] text-white hover:text-orange-500 border-2 border-orange-500 font-bold py-2 px-4 rounded-xl"><Link href="/confirm">Talk to a specialist</Link></button>
            </div>
            <img src='/mobile.avif' className='rounded-3xl px-20 pb-20 pt-10 h-96 w-full ' />
            <div className="text-center px-10">
              <h2 className='font-medium text-4xl font-serif text-slate-700 mb-6'>Instant Nutrition Support</h2>
              <p className='text-slate-500 text-lg'>Get instant answers and guidance with our AI-powered nutrition chat bot. Available 24/7, it's like having a personal dietician in your pocket, ready to<p>help you anytime.</p></p>
            </div>
            <div className='flex justify-center my-5'>
              <button className="flex  bg-orange-500 hover:bg-[#fdeacc] text-white hover:text-orange-500 border-2 border-orange-500 font-bold py-2 px-4 rounded-xl"><Link href="/confirm">Chat now</Link></button>
            </div>
            <img src='/nutrients.avif' className='rounded-3xl px-20 pb-20 pt-10 lg:h-screen lg:w-full object-cover' />
            <div className="text-center px-10">
              <h2 className='font-medium text-4xl font-serif text-slate-700 mb-6'>Tailored Diet Plans Just for You</h2>
              <p className='text-slate-500 text-lg'>Experience the benefits of a diet plan designed specifically for your needs. Our personalized plans consider your unique goals, preferences, and health conditions to ensure optimal results.</p>
            </div>
            <div className='flex justify-center my-5'>
              <button className="flex  bg-orange-500 hover:bg-[#fdeacc] text-white hover:text-orange-500 border-2 border-orange-500 font-bold py-2 px-4 rounded-xl"><Link href="/confirm">Get your Personalized Plan</Link></button>
            </div>
            <h6 className="text-slate-400 font-bold mt-28 mb-5">Pricing</h6>
            <h2 className="font-medium text-5xl font-serif text-slate-700 mb-6">Health Plans That Deliver Results!</h2>
            <p className='px-10 text-slate-500 text-base'>Affordable,Expert-Guided Nutrition Plans for Every Need</p>
            <div className='lg:flex mx-14'>
              <div className='w-full bg-peach my-20 py-3 px-15 justify-center rounded-[0.875rem] shadow-xl'>
                <img src='/bottle.webp' className='h-72 w-72 py-10 px-10 rounded-full' />
                <div className='justify-center font-medium text-3xl text-slate-700 font-serif mb-[1rem]'>
                  <p>Nutritional diet plan</p>
                </div>
                <div className='text-start text-slate-500 px-4 lg:pl-[8rem] lg:pl-[8rem] text-lg space-y-4 mb-4'>
                  <li>Customized diet plan on daily basis</li>
                  <li>Weekly progress tracking on daily</li>
                  <li>Access to verified nutrition content</li>
                  <li>Monthly full body checkups</li>
                  <li>Direct access to certified dieticians</li>
                  <li>Priority customer support</li>
                </div>
                <div className='justify-center mb-6'>
                  <button className="bg-orange-500 hover:bg-[#fdeacc] text-white hover:text-orange-500 border-2 border-orange-500 font-bold text-base py-3 mt-3 px-4 rounded-xl"><Link href="/confirm">Book Now</Link></button>
                </div>
              </div>
              <div className='w-full bg-peach my-20 py-3 px-15 justify-center rounded-[0.875rem] shadow-xl'>
                <img src='/pregnancy.gif' className='h-72 w-72 py-10 px-10 rounded-full' />
                <div className='justify-center font-medium text-3xl mb-4 text-slate-700 font-serif'>
                  <p>Pregnancy diet plan</p>
                </div>
                <div className='text-start text-slate-500 px-4 lg:pl-[8rem] lg:pl-[8rem] text-lg space-y-4 mb-4'>
                  <li>Tailored Diet Plans for each trimester</li>
                  <li>Monthly consultation with dietician</li>
                  <li>Essential nutrition content</li>
                  <li>Post delivery diet plans</li>
                  <li>Direct access to certified dieticians</li>
                  <li>Priority customer support</li>
                </div>
                <div className='justify-center mb-6'>
                  <button className="bg-orange-500 hover:bg-[#fdeacc] text-white hover:text-orange-500 border-2 border-orange-500 font-bold text-base py-3 mt-3 px-4 rounded-xl"><Link href="/confirm">Book Now</Link></button>
                </div>
              </div>
            </div>
            <h6 className="text-slate-400 font-bold mt-28 mb-5">Team</h6>
            <h2 className="font-medium text-5xl font-serif text-slate-700 mb-6">Meet Your Health Guides</h2>
            <p className='px-14 text-slate-500 text-base'>Meet our expert dieticians to your well-being. With years of experience and a passion for nutrition, they provide personalized support and scientifically-backed advice. Trust our professionals to guide you towards your health goals with care and expertise.</p>
          </div>
        </section ></div>
    )
}