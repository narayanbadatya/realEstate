import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#111B37]  text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between space-y-10 md:space-y-0">
        {/* Left Section */}
        <div className="flex flex-col space-y-4">
        <div className="flex flex-row space-x-3">
            <img src={logo} alt="" className='h-10' />
          <h2 className="text-2xl font-bold text-[#f2b195]">
            LUXREALTY <span className="block text-sm text-gray-400">PROPERTIES</span>
          </h2>
            </div>
          <p className="text-gray-300">
            Our portfolio includes exquisite properties nestled in prime locations renowned
            for their desirability.
          </p>
          <div className="flex space-x-4 text-xl">
            <FaInstagram className="cursor-pointer" />
            <FaFacebookF className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
          </div>
        </div>

        {/* Center Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-[#f2b195]">Home</li>
            <li className="cursor-pointer hover:text-[#f2b195]">Plots</li>
            <li className="cursor-pointer hover:text-[#f2b195]">Amenities</li>
            <li className="cursor-pointer hover:text-[#f2b195]">Map</li>
            <li className="cursor-pointer hover:text-[#f2b195]">Contact</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p>Flat 3B, Kesar Heights,</p>
          <p>S.V. Road, Borivali (West),</p>
          <p>Mumbai - 400092.</p>
          <p className="mt-2">📞 +91 98765 43210</p>
          <p>📧 hello@luxrealty.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
