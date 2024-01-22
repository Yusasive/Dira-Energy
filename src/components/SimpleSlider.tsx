import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface ExtendedSliderSettings extends SliderSettings {
  centerMode?: boolean;
  centerPadding?: string;
}

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  responsive: Array<{ breakpoint: number; settings: Partial<SliderSettings> }>;
}

interface SliderArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Swiper: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings: ExtendedSliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const intervalId = setInterval(() => {
        slider.slickNext();
      }, 4000);
      return () => clearInterval(intervalId);
    }
  }, []);

  const CustomNextArrow: React.FC<SliderArrowProps> = ({ onClick }) => (
    <button
      onClick={onClick}
      className="slick-arrow right-arrow sm:right-[60px]  bg-slate-800 bg-opacity-50 px-3 py-2 font-black text-lg text-white rounded-full"
      style={{
        position: "absolute",
        right: "55px",
        bottom: "70px",
        zIndex: 1,
      }}>
      &rarr;
    </button>
  );

  const CustomPrevArrow: React.FC<SliderArrowProps> = ({ onClick }) => (
    <button
      onClick={onClick}
      className="slick-arrow left-arrow left-[400px] sm:left-[600px] md:left-[650px] lg:left-[700px] bg-slate-800 bg-opacity-50 px-3 py-2 font-black text-lg text-white rounded-full"
      style={{
        position: "absolute",
        bottom: "70px",
        zIndex: 1,
      }}>
      &larr;
    </button>
  );
  return (
    <section className="bg-hero-bg bg-cover h-full ">
      <div className="max-w-screen-xl -ml-36 lg:-ml-52 lg:-mt-28 relative  lg:w-2/3 justify-start">
        <Slider
          ref={(ref) => (sliderRef.current = ref)}
          {...settings}
          nextArrow={<CustomNextArrow />}
          prevArrow={<CustomPrevArrow />}>
          <div className="h-full bg-greenText bg-opacity-70">
            <div className="py-24 px-6 h-full space-y-2 object-cover  text-white transition-transform transform scale-50 slick-current">
              <h1 className="text-4xl font-semibold leading-normal">
                Harnessing the power of the sun to redefine energy – Dira
                Energy, where innovation meets sustainability.
              </h1>
              <p className="text-lg font-medium">
                Solar energy, unlimited potential
              </p>
            </div>
          </div>
          <div className="h-full bg-greenText bg-opacity-70">
            <div className="py-24 px-6 h-full space-y-2 object-cover  text-white  transition-transform transform scale-50 slick-current">
              <h1 className="text-4xl font-semibold leading-normal">
                Harvesting the power of the sun for a brighter tomorrow – Dira
                Energy leading the way in solar innovation.
              </h1>
              <p className="text-lg font-medium">
                Empowering progress, one ray at a time
              </p>
            </div>
          </div>

          <div className="h-full bg-greenText bg-opacity-70">
            <div className="py-[123px] px-6 h-full space-y-2 object-cover  text-white  transition-transform transform scale-50 slick-current">
              <h1 className="text-4xl font-semibold leading-normal">
                Where Renewable Energy Meets Innovation and Community
                Development.
              </h1>
              <p className="text-lg font-medium">Creativity and solution</p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Swiper;
