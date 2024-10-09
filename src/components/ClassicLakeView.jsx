import React from "react";
import logobg from '../assets/logo.png'; 
import strikingImage from '../assets/StrikingImage.png'; // Import your main image

const ClassicLakeview = () => {
  return (
    <div className="bg-[#111B37] min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto bg-opacity-80 rounded-lg p-6 flex flex-col lg:flex-row">
        
        {/* Striking image on the left */}
        <div className="w-full lg:w-1/2">
          <img src={strikingImage} alt="Striking View" className="rounded-lg object-cover max-w-full h-auto" />
        </div>

        {/* Text content on the right with logo as background */}
        <div className="relative flex flex-col justify-center w-full lg:w-1/2 p-6">
          <div
            className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-30"
            style={{ backgroundImage: `url(${logobg})` }}
          />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Classic Lakeview</h2>
            <p className="text-white mb-2">
              <i className="fas fa-map-marker-alt"></i> Mumbai
            </p>
            <p className="text-white mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Suspendisse varius enim in eros
              elementum tristique.
            </p>
          </div>
        </div>
      </div>

      {/* Branding at the bottom */}
      
    </div>
  );
};

export default ClassicLakeview;
