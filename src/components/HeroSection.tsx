import React, { useEffect } from "react";
import HeroImage from "../assets/Hero.svg";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  const transition = { duration: 1.5 }; 

  return (
    <div className="bg-white">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={textVariants}
              transition={transition}
            >
              <h1 className="text-3xl font-semibold text-greenText lg:text-[32px]">
                Who We Are
              </h1>

              <p className="mt-3 text-black text-base font-normal">
                We believe in the extraordinary capabilities of solar energy to
                drive positive change in the world. Our team consists of
                forward-thinking professionals committed to creating sustainable
                solutions that not only meet the energy needs of today but also
                pave the way for a more sustainable tomorrow.
              </p>

              <div className="flex flex-col mt-6">
                <Link
                  to="/services"
                  className="py-2 text-lg font-bold text-blueText transition-colors duration-300 transform hover:text-blue-400"
                >
                  Get to Know Us &gt;
                  <hr className="h-[3px] w-1/3 md:w-1/4 bg-yellow-400 border-none" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <motion.img
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={imageVariants}
              transition={transition}
              className="w-full h-full max-w-md"
              src={HeroImage}
              alt="HeroImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
