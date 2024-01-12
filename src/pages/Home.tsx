import React from "react";
import Customer from "../components/Customer";
import HeroSection from "../components/HeroSection";
import Doings from "../components/Doings";
import OurProjects from "../components/OurProjects";
import AboutUs from "../components/AboutUs";
import Mission from "../components/Misson";

const Home = () => {
  return (
    <div>
      <Customer />
      <HeroSection />
      <Doings />
      <OurProjects />
      <AboutUs />
      <Mission />
    </div>
  );
};

export default Home;
