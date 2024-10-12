import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import LeftSideBar from "./components/LeftSideBar";
import ClassicLakeview from "./components/ClassicLakeView";
import PropertyList from "./components/Plots";
import Plots from "./components/Plots";
import Amenities from "./components/Amenities";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <ClassicLakeview/>
      <LeftSideBar />
      <Plots/>
      <Amenities/>
    </div>
  );
}

export default App;
