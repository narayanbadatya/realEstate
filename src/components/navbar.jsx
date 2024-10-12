import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="animate-fadeIn sticky top-0 left-0 w-full p-6 flex justify-between text-white z-20">
      <div className="text-2xl font-bold"><img src={logo} alt="Logo" /></div>
      <ul className="hidden md:flex space-x-6 text-lg">
        <li>
          <Link to="home" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
            Home
          </Link>
        </li>
        <li>
          <Link to="plots" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
            Plots
          </Link>
        </li>
        <li>
          <Link to="amenities" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
            Amenities
          </Link>
        </li>
        <li>
          <Link to="map" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
            Map
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
