import React from "react";
import Jaylh from "../assets/enhance jaly 1 1.svg";
import Mc from "../assets/mc_dream-removebg-preview 1 1.svg";
import Ideal from "../assets/idea_1-removebg-preview 1 1.svg";
import "./Customer.css"; 

const Customer: React.FC = () => {
  const logos = [Jaylh, Mc, Ideal, Jaylh, Mc, Ideal, Jaylh, Mc, Ideal, Jaylh, Mc, Ideal, Jaylh, Mc, Ideal, Jaylh, Mc, Ideal];

  return (
    <div className="bg-white md:py-24 py-4">
      <div className="mx-auto max-w px-6 lg:px-12">
        <div className="marquee-container">
          {logos.map((src, index) => (
            <img
              key={index}
              className="max-h-12 w-full object-contain mx-6 lg:mx-10"
              src={src}
              alt={`Customer Logo ${index + 1}`}
              width={100}
              height={48}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customer;

