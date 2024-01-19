import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import Residential from "../assets/Residential.svg";
import Smart from "../assets/Smart.svg";
import Community from "../assets/Community.svg";
import Power from "../assets/Power.svg";
import Commercial from "../assets/Commercial.svg";
import Street from "../assets/Street.svg";

interface CardProps {
  image: string;
  alt: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ image, alt, title }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-50%)", // Initial position off-screen to the left
    from: { opacity: 0, transform: "translateX(-50%)" },
    config: { duration: 2000 },
  });

  useEffect(() => {
    if (inView) {
      // Any additional logic you want to perform when the component comes into view
    }
  }, [inView]);

  return (
    <animated.div ref={ref} style={springProps} className="w-full p-8 space-y-1 text-start">
      <img
        className="transition-transform duration-300 transform hover:scale-110"
        src={image}
        alt={alt}
      />
      <p className="font-semibold text-xl text-grayText">{title}</p>
      <hr className="h-[2px] w-9/12 bg-yellow-400 border-none" />
    </animated.div>
  );
};

const Doings: React.FC = () => {
  const data: CardProps[] = [
    { image: Residential, alt: "Residential", title: "Residential Solar Solutions:" },
    { image: Smart, alt: "Smart", title: "Smart Grid Technology:" },
    { image: Community, alt: "Community", title: "Community Solar Project:" },
    { image: Power, alt: "Power", title: "Solar Powered Boreholes:" },
    { image: Commercial, alt: "Commercial", title: "Commercial and Industrial Solutions:" },
    { image: Street, alt: "Street", title: "Solar Street Light Solutions:" },
  ];

  return (
    <div id="doings" className="bg-white">
      <div className="container px-4 py-8 mx-auto">
        <h1 className="font-semibold text-center text-greenText text-3xl">What We Do</h1>
        <div className="grid grid-cols-1 gap-1 mt-2 xl:mt-12 xl:gap-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doings;
