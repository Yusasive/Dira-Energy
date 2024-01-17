import React from "react";
import Street from "../assets/StreetSolar.svg";
import CommunitySolar from "../assets/CommunitySolar.svg";
import CommercialSOlar from "../assets/CommercialSolar.svg";
import BoreholeSolar from "../assets/BoreholeSolar.svg";
import SmartSolar from "../assets/SmartSolar.svg";
import ResidentialSolar from "../assets/ResidentialSolar.svg";

const OurServices = () => {
  return (
    <div className="bg-white">
      <h1 className="text-center text-greenText font-semibold text-3xl py-6">
        Our Services
      </h1>
      <div className="container px-6 py-4 mt-8 mx-auto bg-grayBg">
        <div className="items-center lg:flex">
          <div className="flex items-center justify-center w-full mt-6  lg:mt-0 lg:w-1/2">
            <img src={Street} alt="Street" />
          </div>

          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg lg:pl-16">
              <h1 className="text-3xl font-semibold text-blueText lg:text-[32px]">
                Solar Street Light Solutions
              </h1>

              <p className="mt-3 text-black text-base font-medium w-full">
                Darkness does not only increase hazards to users of urban
                streets, but brings about low technical and economic complexity
                in the societal business. Installation of properly designed and
                maintained street lighting will produce quick, accurate, and
                comfortable visibility at night, which will safeguard,
                facilitate, and encourage both vehicular and pedestrian traffic.
                Street lighting is an essential part of most facilities. <br />
                Our Solar Street Light is designed to collect and store solar
                energy during the daytime, and release it as light energy during
                the night. Our system is composed of five major components: LED
                street light, high efficiency solar panel, battery, solar
                controller and pole. Each component of our solar system is
                carefully selected, integrated and configured to ensure that you
                receive the most compact, reliable, and efficient solar lighting
                system.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-6 mx-auto  py-16 lg:py-0 bg-grayBg">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-blueText lg:text-[32px]">
                Community Solar Project
              </h1>

              <p className="mt-3 text-black text-base font-medium">
                Join our community solar initiatives, where we bring neighbors
                together to invest in shared solar projects. Enjoy the benefits
                of renewable energy while fostering a sense of community and
                shared responsibility.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img src={CommunitySolar} alt="CommunitySolar" />
          </div>
        </div>
      </div>

      <div className="container px-6 mx-auto py-16 lg:py-0 bg-grayBg">
        <div className="items-center lg:flex">
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img src={CommercialSOlar} alt="CommercialSolar" />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg lg:pl-16 ">
              <h1 className="text-3xl font-semibold text-blueText lg:text-[32px]">
                Commercial and Industrial Solutions:
              </h1>

              <p className="mt-3 text-black text-base font-medium">
                Empower your business with our tailored commercial and
                industrial renewable energy solutions. Boost efficiency, cut
                operational costs, and demonstrate your commitment to corporate
                social responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-6 mx-auto py-16 lg:py-0 bg-grayBg">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-blueText lg:text-[32px]">
                Solar Powered Boreholes:
              </h1>

              <p className="mt-3 text-black text-base font-medium">
                Our Solar pump is composed of solar panel array, sealed
                controllers, and a DC deep well pump that comes with accessories
                like the stainless-steel screw, cable connector, water level
                sensor, or cable for the solar panel. Moreover, the outlet, pump
                body, motor body, screws and nuts are made of quality stainless
                steel for a heavy duty and long-lasting performance. <br />
                We will bring you the most ideal and efficient solution for your
                various water consumption needs. Our solar pumps have different
                types of models to suit your desired solar pump, machine power,
                length of use, solar panel power, voltage, the volume of water
                discharged, and other specific requirements.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img src={BoreholeSolar} alt="CommunitySolar" />
          </div>
        </div>
      </div>

      <div className="container px-6 mx-auto py-16 lg:py-0 bg-grayBg">
        <div className="items-center lg:flex">
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img src={SmartSolar} alt="CommunitySolar" />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg lg:pl-16">
              <h1 className="text-3xl font-semibold text-blueText lg:text-[32px]">
                Smart Grid Technology:
              </h1>

              <p className="mt-3 text-black text-base font-medium">
                Our smart grid solutions integrate seamlessly into existing
                energy infrastructures, offering real-time monitoring,
                predictive analytics, and adaptive controls. Experience an
                energy network that is not just smart but sustainable.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-6 pb-16 mx-auto py-16 lg:py-0 bg-grayBg">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2 ">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-greenText lg:text-[32px]">
                Residential Solar Solutions:
              </h1>

              <p className="mt-3 text-black text-base font-medium">
                Transform your home into an eco-friendly haven with our
                residential solar solutions. Generate clean energy, reduce your
                carbon footprint, and enjoy significant savings on your energy
                bills.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img src={ResidentialSolar} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
