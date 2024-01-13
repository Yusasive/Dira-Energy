import React from "react";
import Customer from "../components/Customer";
import HeroSection from "../components/HeroSection";
import Doings from "../components/Doings";
import OurProjects from "../components/OurProjects";
import AboutUs from "../components/AboutUs";
import Mission from "../components/Misson";
import SimpleSlider from "../components/SimpleSlider";

const Home = () => {
  return (
    <div>
      <SimpleSlider />
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
