import React from 'react';
import mapImage from '../assets/map.png'; // Update the path to your map image
import divider from '../assets/divider.png';

const LuxuryHouseSection = () => {
  return (
    <>
    
    
   
    <div className="bg-[#111B37] py-16 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-10">
        {/* Map Section */}
        <div className="lg:w-1/2 size-[70vh] w-full flex justify-center lg:justify-center">
          <img src={mapImage} alt="Map" className="rounded-lg shadow-lg w-full lg:w-auto" />
        </div>

        {/* Text Content Section */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Luxury Houses with Quality Comfort</h2>
          <p className="text-gray-300 mb-6">
            Experience the epitome of luxury living with our exceptional collection of houses
            that offer unparalleled comfort.
          </p>
          <button className="border border-white text-white py-2 px-6 rounded hover:bg-white hover:text-black transition-colors">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>


 </>
  );
};

export default LuxuryHouseSection;
