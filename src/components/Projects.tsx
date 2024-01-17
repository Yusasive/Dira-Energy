import React from "react";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import Image4 from "../assets/image4.png";
import Image5 from "../assets/image5.png";
import Image6 from "../assets/image6.png";


const Projects = () => {
  return (
    <section className="container mx-auto px-8 py-6 lg:py-16">
      <h2 className="block antialiased tracking-normal text-center text-3xl font-semibold leading-[1.3] text-greenText">
        TOP PROJECTS COMPLETED
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md min-h-[30rem] items-end overflow-hidden">
          <img
            src={Image1}
            alt="bg"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        <div className=" flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden">
          <img
            src={Image2}
            alt="bg"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        <div className=" flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden">
          <img
            src={Image3}
            alt="bg"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md min-h-[30rem] items-end overflow-hidden">
          <img
            src={Image4}
            alt="bg"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        <div className=" flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden">
          <img
            src={Image5}
            alt="bg"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        <div className=" flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden">
          <img
            src={Image6}
            alt="bg"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
