export default function Header() {
  return (
    <div className="container mx-auto">
      <section className="flex items-center justify-center lg:block bg-peach py-[2rem] px-[1.5rem] lg:py-[5rem] lg:px-[2.5rem] md:px-8">
        <div className="grid grid-cols-1 items-start lg:grid lg:grid-cols-2 gap-4 items-center md:justify-between">
          {/* Left Content */}
          <div className="col-span-1 lg:mb-20 text-center lg:text-left">
            <h1 className="text-3xl xl:text-6xl md:text-2xl font-bold leading-tight font-amsterdam">
              <span className="text-orange-600">TRANSFORM</span>
              <span className="text-slate-800 ml-2">YOUR</span>
            </h1>
            <h1 className="text-3xl xl:text-6xl md:text-2xl font-bold text-slate-800 leading-tight whitespace-nowrap font-tanker">
              HEALTH WITH GOOD GUT
            </h1>
            <h1 className="text-3xl xl:text-6xl md:text-2xl font-bold text-slate-800 leading-tight font-tanker">
              PROJECT
            </h1>
            <p className="text-lg xl:text-2xl md:text-xl text-slate-600 mt-4 md:mt-6">
              Tailored Diet Plans, Professional Advice, and Trusted Health Content for Your Wellness Journey
            </p>
            <div className="lg:flex items-center mt-4 md:mt-6">
              <div className="flex justify-center space-x-2 pb-4 lg:pb-0">
                {/* Placeholder for profile images */}
                <img src="profile1.jpg" alt="profile1" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="profile2.jpg" alt="profile2" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="profile3.jpg" alt="profile3" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="profile4.jpg" alt="profile4" className="w-10 h-10 rounded-full border-2 border-white" />
              </div>
              <p className="text-orange-500 text-lg ml-4">5.0 <span className="text-slate-500">From 50+ Success Stories</span></p>
            </div>
            <div className="lg:flex items-center mt-4 justify-center lg:justify-start md:mt-8">
              <button className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 mb-4 xl:mb-0 md:py-3 px-4 md:px-8 rounded-lg">
                Join Now
              </button>
              <p className="ml-2 text-lg font-semibold text-slate-800">30-DAYS MONEY BACK GUARANTEE</p>
            </div>

          </div>

          {/* Right Image */}
          <div className="col-span-1">
            <img src="/lady.avif" alt="Meditation" className="m-4" />
          </div>
        
        </div>
      </section>
      </div>
  );
}
