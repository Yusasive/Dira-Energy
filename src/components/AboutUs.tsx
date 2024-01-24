import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const contentAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-100%)",
    from: { opacity: 0, transform: "translateX(-100%)" },
  });

  const whyChooseUsAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateY(-100%)",
    from: { opacity: 0, transform: "translateY(-100%)" },
  });

  return (
    <div id="about" className="bg-about-bg bg-cover">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <animated.div ref={ref} style={contentAnimation}>
              <div className="lg:max-w-lg">
                <h1 className="py-2 text-lg font-medium text-yellow-400 transition-colors duration-300 transform hover:text-blue-400">
                  About Us
                  <hr className="h-[2px] w-1/5 md:w-2/12 bg-orangeText border-none" />
                </h1>

                <div className="flex flex-row space-x-12">
                  <h1 className="font-bold text-[20px] bg-orangeText text-white pl-2 h-24 py-2 mt-20 leading-6">
                    DIRA <br />
                    <span className="font-black text-[40px]">
                      ENE
                    </span> <br /> RGY
                  </h1>
                  <p className="mt-3 text-white text-[12px] font-normal">
                    Welcome to Dira Energy Ltd: Where Renewable Energy Meets
                    Innovation and Community Development! <br /> At Dira Energy
                    Ltd, we are not just a renewable energy company; we are
                    architects of a sustainable future. Our commitment extends
                    beyond harnessing clean, renewable energy – we embrace
                    cutting-edge technology and prioritize community development
                    to create a positive impact on the world around us. Our
                    company provides turn-key solar PV installations to customers.
                    We survey, design, procure, install, and commission the
                    installation for our clients. Whether you’re a homeowner, or
                    business, electricity costs can make up a large portion of
                    your monthly expenses. We are committed to delivering you a
                    service that will save you money, provide reliability, and
                    realize your eco-friendly dreams. <br /> Dira Energy Ltd has a
                    group of highly qualified, knowledgeable, motivated staff who
                    embrace true professionalism and continued human resource
                    development in renewable energy sector. Our team are driven by
                    new ideas and skills to offer best solutions with strict
                    adherence to ethics. In the last 5 years, we have implemented
                    solar many projects for government organizations,
                    non-governmental organizations, agencies, colleges/university,
                    farms as well as estate developer in both rural and urban
                    electrification in accordance to their needs.
                  </p>
                </div>
              </div>
            </animated.div>
          </div>

          <div className="flex items-center justify-center w-full mt-10 lg:mt-0 lg:w-1/2">
            <animated.div style={whyChooseUsAnimation}>
              <div className="bg-white py-2 px-8">
                <h1 className="uppercase font-semibold text-greenText text-3xl text-center">
                  Why Choose Us
                </h1>
                <div className="space-y-6 pt-4">
                  <div className="flex flex-row bg-white space-x-4">
                    <h1 className="font-bold text-white text-sm h-24  md:h-auto bg-blueText px-4 md:px-6 py-4 md:py-8 lg:p-6">
                      <span className="text-3xl font-black">01</span> <br /> DIRA
                    </h1>
                    <p className="text-sm font-normal">
                      <span className="font-medium text-blueText">
                        Sustainable Solutions, Powered by Innovation:
                      </span>{" "}
                      <br /> We harness the power of renewable energy sources,
                      from solar and wind to bioenergy, employing state-of-the-art
                      technologies to create efficient and reliable solutions. Our
                      innovative approach ensures that your energy needs are met
                      with a minimal environmental footprint.
                    </p>
                  </div>
                  <div className="flex flex-row bg-white space-x-4">
                    <h1 className="font-bold text-white text-sm h-24  md:h-auto bg-blueText px-4 md:px-6 py-4 md:py-8 lg:p-6">
                      <span className="text-3xl font-black">02</span> <br /> DIRA
                    </h1>
                    <p className="text-sm font-normal">
                      <span className="font-medium text-blueText">
                        Technology at the Heart of Our Mission:
                      </span>{" "}
                      <br /> Embracing the latest advancements in energy
                      technology, we deliver smart, connected solutions. Our
                      systems are not just sources of power; they are intelligent
                      networks that optimize energy production, consumption, and
                      storage for maximum efficiency.
                    </p>
                  </div>
                  <div className="flex flex-row bg-white space-x-4 pb-4">
                    <h1 className="font-bold text-white text-sm h-24  md:h-auto bg-blueText px-4 md:px-6 py-4 md:py-8 lg:p-6">
                      <span className="text-3xl font-black">03</span> <br /> DIRA
                    </h1>
                    <p className="text-sm font-normal">
                      <span className="font-medium text-blueText">
                        Community Development Initiatives:
                      </span>{" "}
                      <br /> Beyond technology, we believe in empowering
                      communities. Our initiatives focus on local development,
                      creating job opportunities, and fostering sustainable
                      practices. We work hand-in-hand with communities to build a
                      brighter, cleaner, and more prosperous future for all.
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

export default AboutUs;
