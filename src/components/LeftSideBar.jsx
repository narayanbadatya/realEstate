import React from "react";

const LeftSidebar = () => {
  return (
    <div className="fixed left-0 bottom-0 flex flex-col space-y-4 p-4 z-10">
      <a href="#" className="text-white hover:text-gray-400">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="#" className="text-white hover:text-gray-400">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="#" className="text-white hover:text-gray-400">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#" className="text-white hover:text-gray-400">
        <i className="fab fa-youtube"></i>
      </a>
    </div>
  );
};

export default LeftSidebar;
