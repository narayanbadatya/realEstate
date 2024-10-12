import React, { useEffect, useState } from 'react';
import sanityClient, { urlFor } from '../sanity/sanityconfig';

// Property Card Component
const PropertyCard = ({ image, title, description, range, price, area }) => (
  <div className="bg-[#111B37] text-white p-6 flex justify-center mb-10">
    <div className="flex flex-col lg:flex-row bg-[#111B37] rounded-lg overflow-hidden max-w-4xl">
      <div className="w-full lg:w-1/2">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-auto max-h-64 lg:max-h-80"
        />
      </div>
      <div className="w-full lg:w-1/2 p-6 flex flex-col items-center justify-center text-center">
        <h3 className="text-sm uppercase text-gray-400 mb-2">{title}</h3>
        <h2 className="text-2xl font-semibold mb-4">
          {range} | {area}
        </h2>
        <p className="text-gray-300 mb-6">{description}</p>
        <p className="text-xl font-semibold">{price}</p>
      </div>
    </div>
  </div>
);

// Timeline Component (Dynamic based on the number of properties)
const Timeline = ({ count }) => (
  <div className="flex flex-col items-center mt-60">
    {Array.from({ length: count }).map((_, index) => (
      <div key={index} className="flex flex-col items-center relative mb-10">
        <div className="flex items-center justify-center w-12 h-12 bg-[#111B37] text-white rounded-full border border-gray-500">
          <span>{String(index + 1).padStart(2, '0')}</span>
        </div>
        {index < count - 1 && <div className="h-96 border-l-2 border-gray-300"></div>}
      </div>
    ))}
  </div>
);

// Main Plots Component
const Plots = () => {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch property data from Sanity
    sanityClient
      .fetch(
        `*[_type == "property"]{
          title,
          area,
          range,
          description,
          price,
          "image": image.asset->url
        }`
      )
      .then((data) => setProperties(data))
      .catch((err) => {
        console.error('Sanity fetch error:', err);
        setError('Failed to load properties. Please try again later.');
      });
  }, []);

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div id="plots" className="flex flex-col lg:flex-row items-start justify-center min-w-screen mt-28 text-white">
      {/* Timeline Section */}
      <div className="hidden lg:flex lg:flex-col lg:mr-10">
        <Timeline count={properties.length} />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-center">Plots</h1>
        <h2 className="text-center max-w-screen-sm m-10">
          Luxury real estate plots are premium land parcels intended for the construction of upscale homes or villas. These plots offer exclusivity, expansive space, and are often located in highly desirable areas, appealing to affluent buyers.
        </h2>

        {/* Render Property Cards */}
        {properties.map((property, index) => (
          <PropertyCard
            key={index}
            image={property.image}
            title={property.title}
            area={property.area}
            range={property.range}
            description={property.description}
            price={property.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Plots;
