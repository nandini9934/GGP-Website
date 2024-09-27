export default function Header() {
  return (
    <div className="container">
      <section className="bg-peach py-5 px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          {/* Left Content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight font-amsterdam">
              <span className="text-orange-600">TRANSFORM</span>
              <span className="text-slate-800 ml-2">YOUR</span>
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight whitespace-nowrap font-tanker">
              HEALTH WITH GOOD GUT
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight font-tanker">
              PROJECT
            </h1>
            <p className="text-lg md:text-2xl text-slate-600 mt-4 md:mt-6">
              Tailored Diet Plans, Professional Advice, and Trusted Health Content for Your Wellness Journey
            </p>
            <div className="flex items-center mt-4 md:mt-6">
              <div className="flex space-x-2">
                {/* Placeholder for profile images */}
                <img src="profile1.jpg" alt="profile1" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="profile2.jpg" alt="profile2" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="profile3.jpg" alt="profile3" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="profile4.jpg" alt="profile4" className="w-10 h-10 rounded-full border-2 border-white" />
              </div>
              <p className="text-orange-500 text-lg ml-4">5.0 <span className="text-slate-500">From 50+ Success Stories</span></p>
            </div>
            <div className="flex items-center mt-4 md:mt-8">
              <button className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 md:py-3 px-4 md:px-8 rounded-lg">
                Join Now
              </button>
              <p className="ml-2 text-lg font-semibold text-slate-800">30-DAYS MONEY BACK GUARANTEE</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 mt-4 md:mt-0">
            <img src="/lady.avif" alt="Meditation" className="w-full h-auto max-w-md mx-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}
