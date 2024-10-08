import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="animate-fadeIn absolute top-0 left-0 w-full p-6 flex justify-between text-white z-20">
      <div className="text-2xl font-bold"><img src={logo} alt="" /></div>
      <ul className="hidden md:flex space-x-6 text-lg">
        <li><a href="#home" className="hover:text-gray-300">Home</a></li>
        <li><a href="#plots" className="hover:text-gray-300">Plots</a></li>
        <li><a href="#amenities" className="hover:text-gray-300">Amenities</a></li>
        <li><a href="#map" className="hover:text-gray-300">Map</a></li>
        <li><a href="#contact" className="hover:text-gray-300">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
