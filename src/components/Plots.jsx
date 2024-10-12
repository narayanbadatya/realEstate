import React from 'react';

// Property Card Component
const PropertyCard = ({ image, title, description, range, price, area }) => {
  return (
    <div className="bg-[#111B37] text-white p-6 flex justify-center mb-10">
      <div className="flex flex-col lg:flex-row bg-[#111B37]  rounded-lg overflow-hidden max-w-4xl">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-auto max-h-64 lg:max-h-80" // Restrict image height
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 p-6 flex flex-col items-center justify-center text-center">
          <h3 className="text-sm uppercase text-gray-400 mb-2">{range}</h3>
          <h2 className="text-2xl font-semibold mb-4">{title} | {area}</h2>
          <p className="text-gray-300 mb-6">{description}</p>
          <p className="text-xl font-semibold">{price}</p>
        </div>
      </div>
    </div>
  );
};

// Timeline Component
const Timeline = () => {
  return (
    <div className="flex flex-col items-center mt-60">
      {/* Timeline Items */}
      <div className="flex flex-col items-center relative mb-10">
        <div className="flex items-center justify-center w-12 h-12 bg-[#111B37] text-white rounded-full border border-gray-500">
          <span>01</span>
        </div>
        <div className="h-96 border-l-2 border-gray-300"></div>
      </div>

      <div className="flex flex-col items-center relative mb-10">
        <div className="flex items-center justify-center w-12 h-12 bg-[#111B37] text-white rounded-full border border-gray-500">
          <span>02</span>
        </div>
        <div className="h-96 border-l-2 border-gray-300"></div>
      </div>

      <div className="flex flex-col items-center relative">
        <div className="flex items-center justify-center w-12 h-12 bg-[#111B37] text-white rounded-full border border-gray-500">
          <span>03</span>
        </div>
      </div>
    </div>
  );
};

// Main Plots Component
const Plots = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-center min-w-screen mt-28 text-white">
      {/* Timeline Section */}
      <div className="hidden lg:flex lg:flex-col lg:mr-10">
        <Timeline />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center">
        {/* Title Section */}
        <h1 className="text-4xl text-center">Plots</h1>
        <h2 className="text-center max-w-screen-sm m-10">
          Luxury real estate plots are premium land parcels intended for the construction of upscale homes or villas. These plots offer exclusivity, expansive space, and are often located in highly desirable areas, appealing to affluent buyers.
        </h2>

        {/* Property Cards */}
        <PropertyCard
          image="https://via.placeholder.com/400" // Replace with actual image URL
          title="2BHK"
          area="2100sq.ft"
          range="Basic Range"
          description="Looking for your dream home? Discover this expansive 2BHK apartment offering unmatched comfort and space in the heart of the city!"
          price="₹ 2.8Cr"
        />

        <PropertyCard
          image="https://via.placeholder.com/400" // Replace with actual image URL
          title="3BHK"
          area="3400sq.ft"
          range="Luxury Range"
          description="Your dream home awaits! Explore this beautifully designed 3BHK apartment, offering a blend of space, comfort, and modern living."
          price="₹ 4.4Cr"
        />

        <PropertyCard
          image="https://via.placeholder.com/400" // Replace with actual image URL
          title="4BHK"
          area="5100sq.ft"
          range="Ultra Luxury Range"
          description="Upgrade your lifestyle with this stunning 4BHK apartment offering luxury, space, and modern amenities in a prime location!"
          price="₹ 7.1Cr"
        />
      </div>
    </div>
  );
};

export default Plots;
