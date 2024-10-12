import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { PopupWidget } from "react-calendly";

import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import LeftSideBar from "./components/LeftSideBar";
import ClassicLakeview from "./components/ClassicLakeView";

function App() {
  return (
    <div className="relative">
      <PopupWidget
        url="https://calendly.com/sutarvaibhav37/30min"
        rootElement={document.getElementById("root")}
        text="Schedule a meet with us"
        textColor="#ffffff"
        color="#08669d"
      />
      <Navbar />
      <HeroSection />
      <ClassicLakeview/> 
      <LeftSideBar />
      <Plots/>
      <Amenities/>
      <Footer />
    </div>
  );
}

export default App;
