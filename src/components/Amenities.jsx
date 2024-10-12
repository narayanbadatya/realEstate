import React from 'react';
import groceryStoreIcon from '../assets/grocerystore.png'; // Path to your image
import waterPipelineIcon from '../assets/waterpipeline.png'; // Path to your image
import partyHallIcon from '../assets/partyhall.png'; // Path to your image
import officeSpaceIcon from '../assets/officespace.png'; // Path to your image

const Amenities = () => {
  return (
    <div className="bg-[#111B37] py-12 px-4">
      {/* Title */}
      <h2 className="text-center text-white text-3xl font-semibold mb-8">Amenities</h2>

      {/* Amenities Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
        {/* Grocery Store */}
        <div className="flex flex-row space-x-4 items-center">
          <img src={groceryStoreIcon} alt="Grocery Store" className="w-12 h-12 mb-2" />
          <span className="text-white text-sm">GROCERY STORE</span>
        </div>

        {/* Water Pipeline */}
        <div className="flex flex-row  space-x-4 items-center">
          <img src={waterPipelineIcon} alt="Water Pipeline" className="w-12 h-12 mb-2" />
          <span className="text-white text-sm">WATER PIPELINE</span>
        </div>

        {/* Party Hall */}
        <div className="flex flex-row items-center space-x-4">
          <img src={partyHallIcon} alt="Party Hall" className="w-12 h-12 mb-2" />
          <span className="text-white text-sm">PARTY HALL</span>
        </div>

        {/* Office Space */}
        <div className="flex flex-row items-center space-x-4">
          <img src={officeSpaceIcon} alt="Office Space" className="w-12 h-12 mb-2" />
          <span className="text-white text-sm">OFFICE SPACE</span>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
