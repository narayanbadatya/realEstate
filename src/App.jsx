import React from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { PopupWidget } from "react-calendly";
import Plots from "./components/Plots";
import Amenities from "./components/Amenities";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import LeftSideBar from "./components/LeftSideBar";
import ClassicLakeview from "./components/ClassicLakeView";
import LuxuryHouseSection from "./components/LuxurySection";
import ContactForm from "./components/Contact";

const fadeIn = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, rotate: [0, 10, -10, 0] },
};

const transitionSettings = {
  duration: 1,
  type: "spring",
  stiffness: 100,
  damping: 20,
  staggerChildren: 0.2,
};

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
      <motion.div
        initial="hidden"
        whileInView="show"
        transition={transitionSettings}
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <HeroSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        transition={transitionSettings}
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <ClassicLakeview />
      </motion.div>
      <LeftSideBar />
      <motion.div
        initial="hidden"
        whileInView="show"
        transition={transitionSettings}
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <Plots />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        transition={transitionSettings}
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <Amenities />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        transition={transitionSettings}
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <LuxuryHouseSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        transition={transitionSettings}
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <ContactForm />
      </motion.div>
      {/* <ContactUs /> */}
      <Footer />
    </div>
  );
}

export default App;
