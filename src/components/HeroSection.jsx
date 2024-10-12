import React from "react";
import bg from '../assets/bg.png';

const HeroSection = () => {
  return (
    <div id='home' className=" relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg})` }}>
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Dark overlay */}
      
      <div className="animate-fadeIn relative z-10 flex flex-col items-end justify-center h-full px-6 md:text-end lg:text-end sm:text-center text-white ">
        <div className="max-w-2xl md:m-12 lg:m-12 ">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Luxury Real Estate</h1>
          <p className="text-lg md:text-xl mb-6">
            Our portfolio includes exquisite properties nestled in prime locations and prestigious neighborhoods renowned for their desirability.
          </p>
          <a href="#trial" className="inline-block px-6 py-3 bg-blue-600 rounded-lg text-lg hover:bg-blue-700">
            Take a Free Trial
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
