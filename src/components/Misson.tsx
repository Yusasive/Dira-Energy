import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const Misson = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const missionAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-100%)",
    from: { opacity: 0, transform: "translateX(-100%)" },
  });

  const visionAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateY(-100%)",
    from: { opacity: 0, transform: "translateY(-100%)" },
  });

  const partnerAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(100%)",
    from: { opacity: 0, transform: "translateY(100%)" },
  });

  return (
    <div className="bg-white">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <animated.div ref={ref} style={missionAnimation}>
              <div className="lg:max-w-lg space-y-8">
                <div className="space-y-2">
                  <h1 className="text-2xl font-semibold text-greenText lg:text-[32px]">
                    Our Mission
                  </h1>

                  <p className="mt-2 ml-6 text-black text-base font-normal">
                    To be a global leader in sustainable energy solutions,
                    leveraging technology for the benefit of the environment and
                    fostering community development. <br /> At Dira Energy, our
                    mission is to power a sustainable future by harnessing the
                    abundant and clean energy of the sun. Committed to driving the
                    global transition towards renewable energy, we strive to be a
                    leading force in the solar industry, delivering innovative and
                    reliable solar solutions that empower individuals, businesses,
                    and communities
                  </p>
                </div>
              </div>
            </animated.div>

            <animated.div ref={ref} style={visionAnimation}>
              <div className="space-y-2">
                <h1 className="text-2xl font-semibold text-greenText lg:text-[32px]">
                  Our Vision
                </h1>

                <p className="mt-2 ml-6 text-black text-base font-normal">
                  Imagine a world where energy is clean, abundant, and
                  accessible to all. That's the vision that drives us. At Dira
                  Energy Ltd, we see renewable energy not just as a source of
                  power but as a catalyst for progress. Our vision is to be at
                  the forefront of the energy revolution, leading the way in
                  technological advancements and community-driven initiatives.
                </p>
              </div>
            </animated.div>
          </div>

          <div className="flex items-center justify-center w-full mt-10 lg:mt-0 lg:w-1/2">
            <animated.div style={partnerAnimation}>
              <div className="bg-greenText py-2 px-8">
                <h1 className="uppercase font-medium text-yellow-500 text-2xl text-center">
                  Partner with Us for a Greener Tomorrow!
                </h1>
                <div className="space-y-6 pt-4">
                  <div className="flex flex-row  space-x-4">
                    <h1 className="font-bold text-white text-sm h-24 md:h-auto bg-blueText px-4 md:px-6 py-4 md:py-8 lg:p-6">
                      <span className="text-2xl font-black">01</span> <br /> DIRA
                    </h1>
                    <p className="text-base font-normal text-white">
                      <span className="font-medium ">
                        Enviromental Stewardship:
                      </span>
                      <br />
                      We are committed to preserving the planet for future
                      generations. Partner with us to be a part of the global
                      movement towards sustainable energy and environmental
                      stewardship.
                    </p>
                  </div>
                  <div className="flex flex-row space-x-4">
                    <h1 className="font-bold text-white text-sm h-24  md:h-auto bg-blueText px-4 md:px-6 py-4 md:py-8 lg:p-3">
                      <span className="text-2xl font-black">02</span> <br /> DIRA
                    </h1>
                    <p className="text-base font-normal text-white">
                      <span className="font-medium">
                        Technological Excellence:
                      </span>
                      <br /> Our team of experts ensures that you receive
                      cutting-edge solutions. From advanced solar panels to
                      intelligent energy storage, we bring the best of technology
                      to your doorstep.
                    </p>
                  </div>
                  <div className="flex flex-row  space-x-4 pb-4">
                    <h1 className="font-bold text-white text-sm h-24  md:h-auto bg-blueText px-4 md:px-6 py-4 md:py-8 lg:p-3">
                      <span className="text-3xl font-black">03</span> <br /> DIRA
                    </h1>
                    <p className="text-base font-normal text-white">
                      <span className="font-medium ">Social Impact:</span> <br />
                      We believe that sustainable development starts at the
                      grassroots. By choosing Dira Energy Ltd, you contribute to
                      projects that uplift communities and create lasting positive
                      change
                    </p>
                  </div>
                </div>
              </div>
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Misson;
