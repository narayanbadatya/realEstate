import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import LeftSideBar from "./components/LeftSideBar";
import ClassicLakeview from "./components/ClassicLakeView";
import { PopupWidget } from "react-calendly";
import Footer from "./components/Footer";

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
      {/* <LeftSideBar /> */}
      <Footer />
    </div>
  );
}

export default App;
