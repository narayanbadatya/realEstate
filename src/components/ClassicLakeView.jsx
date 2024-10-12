import React from "react";
import logobg from '../assets/logo.png'; 
import strikingImage from '../assets/StrikingImage.png'; // Import your main image
import divider from '../assets/divider.png';

const ClassicLakeview = () => {
  return (
    <>
    
    
    <div className="bg-[#111B37i] min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto bg-opacity-80 rounded-lg flex flex-col lg:flex-row">
        
        {/* Striking image on the left */}
        <div className="w-full lg:w-1/2">
          <img src={strikingImage} alt="Striking View" className="rounded-lg object-cover max-w-full h-auto" />
        </div>

        {/* Text content on the right with logo as background */}
        <div className="relative flex flex-col justify-center w-full lg:w-1/2 p-6">
          <div
            className="absolute inset-0 bg-no-repeat bg-right ml-52 bg-cover opacity-30"
            style={{ backgroundImage: `url(${logobg})` }}
          />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Classic Lakeview</h2>
            <p className="text-white mb-2">
              <i className="fas fa-map-marker-alt"></i> Mumbai
            </p>
            <p className="text-white mb-1">
            Located in a tranquil setting, Classic Lakeview features stunning waterfront properties with breathtaking views. This community blends modern living with beautiful landscapes, offering spacious homes and lush green spaces. Residents can enjoy parks, hiking trails, and a vibrant local culture. Perfect for families and outdoor enthusiasts, Classic Lakeview is an ideal place to call home. Discover your dream property today!
            </p>
          </div>
        </div>
      </div>

      {/* Branding at the bottom */}
      
    </div>
    <div className="bg-[#111B37] flex justify-center">
    <img src={divider} alt="" />
  </div>
  </>
  );
};

export default ClassicLakeview;
