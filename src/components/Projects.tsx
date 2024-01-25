import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import Image4 from "../assets/image4.png";
import Image5 from "../assets/image5.png";
import Image6 from "../assets/image6.png";

interface AnimatedImageProps {
  src: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ src }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const { opacity, transform } = useSpring({
    from: { opacity: 0, transform: "translateX(-100%)" },
    to: async (next) => {
      if (inView) {
        await next({ opacity: 1, transform: "translateX(0)" });
      }
    },
    config: { duration: 1000 },
  });

  return (
    <animated.div
      ref={ref}
      style={{ opacity, transform }}
      className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md min-h-[15rem] lg:min-h-[30rem] items-end overflow-hidden"
    >
      <img
        src={src}
        alt="bg"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/10"></div>
    </animated.div>
  );
};

const Projects = () => {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];

  return (
    <section className="container mx-auto px-8 py-6 lg:py-16">
      <h2 className="block antialiased tracking-normal text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.3] text-greenText">
        TOP PROJECTS COMPLETED
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {images.map((image, index) => (
          <AnimatedImage key={index} src={image} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

