import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Amity from "../../assets/Amity.png";
import GLA from "../../assets/GLA.webp";
import Integral from "../../assets/IntegralUniversity.jpg";
import Mangalayatan from "../../assets/Mangalayatan.jpg";
import Manipal from "../../assets/Manipal.webp";
import SikkimManipal from "../../assets/SikkimManipal.png";
import Icon1 from "../../assets/GLA.png";
import Icon2 from "../../assets/GLA.png";
import Icon3 from "../../assets/Integral.png";
import Icon4 from "../../assets/Mangalayatan.png";
import Icon5 from "../../assets/Manipal.png";
import Icon6 from "../../assets/SMU.png";

const Hero = () => {
  const [currentBackground, setCurrentBackground] = useState("https://media.collegedekho.com/media/img/institute/crawled_images/None/amityl.jpg");
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    { id: 1, logo: Icon1, img: Amity},
    { id: 2, logo: Icon2, img: GLA },
    { id: 3, logo: Icon3, img: Integral },
    { id: 4, logo: Icon4, img: Mangalayatan},
    { id: 5, logo: Icon5, img: Manipal },
    { id: 6, logo: Icon6, img: SikkimManipal },
  ];

  // Handle slide change
  const handleSlideChange = (current) => {
    setCurrentSlide(current);
    setCurrentBackground(cards[current].img || "https://media.collegedekho.com/media/img/institute/crawled_images/None/amityl.jpg");
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => handleSlideChange(next),
    responsive: [
      { 
        breakpoint: 1280, 
        settings: { 
          slidesToShow: 3,
          slidesToScroll: 1
        } 
      },
      { 
        breakpoint: 1024, 
        settings: { 
          slidesToShow: 3,
          slidesToScroll: 1
        } 
      },
      { 
        breakpoint: 768, 
        settings: { 
          slidesToShow: 2,
          slidesToScroll: 1
        } 
      },
      { 
        breakpoint: 480, 
        settings: { 
          slidesToShow: 1,
          slidesToScroll: 1
        } 
      },
    ],
  };

  return (
    <section className="relative w-full min-h-[70vh] bg-cover bg-center mt-10">
      {/* Background Image with Transition */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url('${currentBackground}')`,
        }}
      ></div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(238, 44, 60, 0.9) 0%, rgba(238, 44, 60, 0.1) 90%, rgba(238, 44, 60, 0) 100%)",
        }}
      ></div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full min-h-[70vh] flex flex-col justify-between py-6 px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Top Content Section */}
        <div className="w-full max-w-7xl mx-auto mt-6 sm:mt-8 md:mt-10 lg:mt-12">
          <div className="w-full lg:w-1/2 xl:w-2/5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight sm:leading-snug md:leading-snug">
              Let's Help Navigate Your Career <br className="hidden sm:block" /> 
              & Expand Your Skillset
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl">
              Unlimited access to world-class courses, hands-on projects, and
              job-ready certificate programs.
            </p>
            {/* i want to set here some cirtificate logo witch is render on every card change agin and again  */}
            <div className="mt-4 sm:mt-5 flex flex-wrap gap-2 sm:gap-3">
              <button className="px-3 sm:px-5 py-2 bg-white text-[#EE2C3C] text-xs sm:text-sm font-medium rounded-lg shadow-lg hover:bg-red-700 transition whitespace-nowrap">
                Enquire Now
              </button>
              <button className="px-3 sm:px-5 py-2 bg-transparent border border-white text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-white hover:text-black transition whitespace-nowrap">
                Talk To Counsellor
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Slider Section */}
        <div className="w-full max-w-7xl mx-auto mt-4 sm:mt-6">
          <div className="w-full lg:w-4/5 xl:w-3/4 ml-auto">
            <Slider {...settings}>
              {cards.map((card, index) => (
                <div key={card.id} className="px-2 sm:px-3">
                  <div 
                    className={`relative bg-white rounded-3xl mt-4 overflow-hidden shadow-lg w-full h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] xl:h-[200px] transition-all duration-300 group cursor-pointer ${
                      index === currentSlide ? 'scale-105' : ''
                    }`}
                  >
                    {/* Card Image - Full Size */}
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient Overlay on Card */}
                    <div 
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.7) 100%)"
                      }}
                    ></div>
                    
                    {/* Logo at Bottom */}
                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
                      <div className="bg-white rounded-lg p-1 shadow-lg">
                        <img
                          src={card.logo}
                          alt={`${card.title} Logo`}
                          className="w-20 h-5 sm:w-32 sm:h-8 object-contain"
                        />
                      </div>
                    </div>
                    
                  
                    
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom Arrows
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} !text-[#EE2C3C] !text-xl z-20`}
      onClick={onClick}
      style={{ display: "block" }}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} !text-[#EE2C3C] !text-xl z-20`}
      onClick={onClick}
      style={{ display: "block" }}
    />
  );
}

export default Hero;