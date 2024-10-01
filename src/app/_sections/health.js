import Link from 'next/link';

export default function Health() {
  return (
    <div className="lg:bg-peach">
      <div className="container mx-auto">
        < section className="bg-peach my-20 py-10" >
          <div className="text-center mt-16">
            <h2 className='font-medium text-2xl lg:text-6xl font-serif text-slate-700 mx-20 mb-6'>Transform Your Health Today!</h2>
            <p className='mx-20 text-slate-500 text-lg lg:text-xl'>Don't wait! Take the first step towards a healthier, happier you. Join us today and unlock the full potential of your health with expert guidance and personalized care.</p>
          </div>
          <div className='flex justify-center mt-6 mb-16'>
            <button className="bg-orange-500 hover:bg-[#fdeacc] text-white hover:text-orange-500 border-2 border-orange-500 font-bold text-base py-3 px-5 rounded-xl">Book your Free consultation</button>
          </div>
        </section >
      </div>
    </div>
  )
}