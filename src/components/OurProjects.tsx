import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import Projects from "../assets/Projects.svg";
import { Link } from "react-router-dom";

interface NumberAnimationProps {
  value: number;
}

const NumberAnimation: React.FC<NumberAnimationProps> = ({ value }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const { number, opacity } = useSpring({
    from: { number: 0, opacity: 0 },
    to: async (next) => {
      await next({ opacity: inView ? 1 : 0 });
      await next({ number: inView ? value : 0 });
    },
    config: { duration: 1500 },
  });

  return (
    <div ref={ref} className="flex items-center">
      <h1 className="text-greenText text-base lg:text-[28.57px] font-bold">
        <animated.span style={{ opacity }}>
          {number.to((val) => Math.floor(val))}
        </animated.span>
      </h1>
    </div>
  );
};

const OurProjects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const { opacity, transform } = useSpring({
    from: { opacity: 0, transform: "translateY(-100%)" },
    to: async (next) => {
      await next({
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0%)" : "translateY(-100%)",
      });
    },
    config: { duration: 1500 },
  });

  return (
    <div id="projects" className="bg-white">
      <div className="container px-6 py-8 md:py-16 mx-auto ">
        <div className="items-center lg:flex ">
          <div className="w-full md:w-1/2">
            <animated.div ref={ref} style={{ opacity, transform }}>
              <div className="lg:max-w-lg space-y-10 lg:space-y-20">
                <h1 className="text-3xl font-semibold text-greenText lg:text-[32px]">
                  Our Projects
                </h1>

                <div className="flex flex-row space-x-6  lg:space-x-16 xl:space-x-24 ml-4 lg:ml-12">
                  <div>
                    <h1 className="flex flex-row text-greenText text-base lg:text-xl font-bold">
                      <span className="text-xl  md:text-3xl">
                        <NumberAnimation value={16} />
                      </span>
                      GW
                    </h1>
                    <p className="text-orangeText text-base font-medium  ml-1 md:ml-2">
                      DEVELOPED
                    </p>
                  </div>

                  <div>
                    <h1 className="flex flex-row text-greenText text-base lg:text-xl font-bold">
                      <span className="text-xl md:text-3xl">
                        <NumberAnimation value={44} />
                      </span>
                      GW
                    </h1>
                    <p className="text-orangeText text-base font-medium  ml-1 md:ml-2">
                      PIPELINE
                    </p>
                  </div>

                  <div>
                    <h1 className="flex flex-row text-greenText text-3xl lg:text-3xl font-bold">
                      <span className="text-xl md:text-5xl">
                        <NumberAnimation value={100} />
                      </span>
                      <span className="-mt-2">+</span>
                    </h1>
                    <p className="text-orangeText text-base font-medium  ml-1 md:ml-2">
                      PROJECTS
                    </p>
                  </div>
                  {/* ... rest of the code ... */}
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
            </animated.div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <animated.img
              style={{ opacity, transform }}
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
