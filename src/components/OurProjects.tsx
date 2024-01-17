import React from "react";
import Projects from "../assets/Projects.svg";
import { Link } from "react-router-dom";

const OurProjects = () => {
  return (
    <div id="projects" className="bg-white">
      <div className="container px-6 py-8 md:py-16 mx-auto ">
        <div className="items-center lg:flex ">
          <div className="w-full md:w-1/2 ">
            <div className="lg:max-w-lg space-y-10 lg:space-y-20">
              <h1 className="text-3xl font-semibold text-greenText lg:text-[32px]">
                Our Projects
              </h1>

              <div className="flex flex-row space-x-6  lg:space-x-16 xl:space-x-24 ml-4 lg:ml-12">
                <div>
                  <h1 className="text-greenText text-base md:text-[28.57px] font-bold">
                    <span className="text-3xl  md:text-5xl">16</span>GW
                  </h1>
                  <p className="text-orangeText text-base font-medium -mt-2 ml-1 md:ml-3">
                    DEVELOPE
                  </p>
                </div>

                <div>
                  <h1 className="text-greenText text-base md:text-[28.57px] font-bold">
                    <span className="text-3xl md:text-5xl">44</span>GW
                  </h1>
                  <p className="text-orangeText text-base font-medium -mt-2 ml-1 md:ml-4">
                    PIPELINE
                  </p>
                </div>

                <div>
                  <h1 className="text-greenText text-3xl md:text-5xl font-bold">
                    <span className="text-3xl md:text-5xl">100</span>+
                  </h1>
                  <p className="text-orangeText text-base font-medium -mt-2 ml-1 md:ml-3">
                    PROJECTS
                  </p>
                </div>
              </div>

              <div className="flex flex-col mt-6 ml-4">
                <Link
                  to="/services"
                  className="py-2 text-base font-medium text-blueText transition-colors duration-300 transform hover:text-blue-400">
                  View Projects <span className="ml-8">&gt;</span>
                  <hr className="h-[3px] w-1/3 md:w-1/4 bg-orangeText border-none" />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full max-w-md"
              src={Projects}
              alt="HeroImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
