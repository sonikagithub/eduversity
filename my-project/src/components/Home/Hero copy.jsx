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
import Certificate1 from "../../assets/AICTE.png"
import Certificate2 from "../../assets/WRIF.png"
import Certificate3 from "../../assets/WES.png"
import Certificate4 from "../../assets/NAAC.png"
import Certificate5 from "../../assets/NIRF.png"

const Hero = () => {
  const [currentBackground, setCurrentBackground] = useState("https://media.collegedekho.com/media/img/institute/crawled_images/None/amityl.jpg");
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = React.useRef(null);

  const cards = [
    { 
      id: 1, 
      logo: Icon1, 
      img: Amity,
      name: "Amity University",
      description: "UGC Recognized | NAAC A+ Accredited",
      certificates: [Certificate1, Certificate2, Certificate3, Certificate4, Certificate5],
      phoneNumber: "+91-1800-123-4567",
      enquiryText: "Enquire About Amity University"
    },
    { 
      id: 2, 
      logo: Icon2, 
      img: GLA,
      name: "GLA University",
      description: "UGC Approved | NAAC A Grade",
      certificates: [Certificate1, Certificate2, Certificate3, Certificate4, Certificate5],
      phoneNumber: "+91-1800-234-5678",
      enquiryText: "Enquire About GLA University"
    },
    { 
      id: 3, 
      logo: Icon3, 
      img: Integral,
      name: "Integral University",
      description: "UGC Recognized | AICTE Approved",
      certificates: [Certificate1, Certificate4, Certificate5],
      phoneNumber: "+91-1800-345-6789",
      enquiryText: "Enquire About Integral University"
    },
    { 
      id: 4, 
      logo: Icon4, 
      img: Mangalayatan,
      name: "Mangalayatan University",
      description: "UGC Approved | Bar Council of India",
      certificates: [Certificate1, Certificate4, Certificate5],
      phoneNumber: "+91-1800-456-7890",
      enquiryText: "Enquire About Mangalayatan University"
    },
    { 
      id: 5, 
      logo: Icon5, 
      img: Manipal,
      name: "Manipal University",
      description: "NAAC A++ | World Ranked University",
      certificates: [Certificate1, Certificate4, Certificate5],
      phoneNumber: "+91-1800-567-8901",
      enquiryText: "Enquire About Manipal University"
    },
    { 
      id: 6, 
      logo: Icon6, 
      img: SikkimManipal,
      name: "Sikkim Manipal University",
      description: "UGC Recognized | NAAC A+ Accredited",
      certificates: [Certificate1, Certificate2, Certificate3, Certificate4, Certificate5],
      phoneNumber: "+91-1800-678-9012",
      enquiryText: "Enquire About Sikkim Manipal University"
    },
  ];

  const allCertificates = [
    { id: 1, logo: Certificate1, name: "AICTE" },
    { id: 2, logo: Certificate2, name: "WRIF" },
    { id: 3, logo: Certificate3, name: "WES" },
    { id: 4, logo: Certificate4, name: "NAAC" },
    { id: 5, logo: Certificate5, name: "NIRF" },
  ];

  // Handle slide change from slider
  const handleSlideChange = (current) => {
    setCurrentSlide(current);
    setCurrentBackground(cards[current].img || "https://media.collegedekho.com/media/img/institute/crawled_images/None/amityl.jpg");
  };

  // Handle card click from any position
  const handleCardClick = (index) => {
    setCurrentSlide(index);
    setCurrentBackground(cards[index].img || "https://media.collegedekho.com/media/img/institute/crawled_images/None/amityl.jpg");
    
    // Sync the slider to the clicked card
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  // Handle button clicks
  const handleEnquireNow = () => {
    const currentUniversity = cards[currentSlide];
    alert(`Enquiry for ${currentUniversity.name}\nPhone: ${currentUniversity.phoneNumber}`);
    // You can replace this with actual enquiry functionality
  };

  const handleTalkToCounsellor = () => {
    const currentUniversity = cards[currentSlide];
    alert(`Connecting you with counsellor for ${currentUniversity.name}\nPhone: ${currentUniversity.phoneNumber}`);
    // You can replace this with actual counsellor connection functionality
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

  const currentUniversity = cards[currentSlide];

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
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Left Content - University Info */}
            <div className="w-full lg:w-1/2 xl:w-2/5">
              {/* University Logo */}
              <div className="mb-4">
                <div className="bg-white rounded-lg p-2 shadow-lg inline-block">
                  <img
                    src={currentUniversity.logo}
                    alt={`${currentUniversity.name} Logo`}
                    className="w-32 h-8 sm:w-40 sm:h-10 object-contain"
                  />
                </div>
              </div>

              {/* University Name and Description - FIXED */}
              <div className="mb-4 sm:mb-6">
                <div className="overflow-hidden">
                  <h1 
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis"
                    // style={{ 
                    //   whiteSpace: 'nowrap', 
                    //   overflow: 'hidden', 
                    //   textOverflow: 'ellipsis',
                    //   maxWidth: '100%',
                    //   lineHeight: '1.2',
                    //   display: 'block',
                    //   margin: 0,
                    //   padding: '2px 0'
                    // }}
                  >
                    {currentUniversity.name}
                  </h1>
                </div>
                <p className="text-white text-sm sm:text-lg mt-2 sm:mt-3 opacity-90">
                  {currentUniversity.description}
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-4 sm:mt-5 flex flex-wrap gap-2 sm:gap-3">
                <button 
                  onClick={handleEnquireNow}
                  className="px-3 sm:px-5 py-2 bg-white text-[#EE2C3C] text-xs sm:text-sm font-medium rounded-lg shadow-lg hover:bg-gray-100 transition whitespace-nowrap"
                >
                  {currentUniversity.enquiryText}
                </button>
                <button 
                  onClick={handleTalkToCounsellor}
                  className="px-3 sm:px-5 py-2 bg-transparent border border-white text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-white hover:text-black transition whitespace-nowrap"
                >
                  Talk To Counsellor
                </button>
              </div>
            </div>

            {/* Right Content - Certificates */}
            <div className="w-full lg:w-2/5 xl:w-1/3 mt-4 lg:mt-0">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/30">
                <p className="text-white text-sm sm:text-base font-medium mb-3 sm:mb-4 text-center lg:text-left">
                  Recognized & Accredited by:
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
                  {currentUniversity.certificates.map((certificate, index) => {
                    const certInfo = allCertificates.find(cert => cert.logo === certificate);
                    return (
                      <div key={index} className="flex flex-col items-center">
                        <div className="bg-white rounded-full p-2 sm:p-3 shadow-lg w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                          <img
                            src={certificate}
                            alt={certInfo?.name || "Certificate"}
                            className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded-full"
                          />
                        </div>
                        <span className="text-white text-xs mt-2 text-center font-medium">
                          {certInfo?.name || "Certificate"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Slider Section */}
        <div className="w-full max-w-7xl mx-auto mt-4 sm:mt-6">
          <div className="w-full lg:w-4/5 xl:w-3/4 ml-auto">
            <Slider ref={sliderRef} {...settings}>
              {cards.map((card, index) => (
                <div key={card.id} className="px-2 sm:px-3">
                  <div 
                    className="relative bg-white rounded-3xl mt-4 overflow-hidden shadow-lg w-full h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] xl:h-[200px] transition-all duration-300 group cursor-pointer"
                    onClick={() => handleCardClick(index)}
                  >
                    {/* Card Image - Full Size */}
                    <img
                      src={card.img}
                      alt={card.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient Overlay on Card */}
                    <div 
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 90%, rgba(0,0,0,0.7) 100%)"
                      }}
                    ></div>
                    
                    {/* Logo at Bottom */}
                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
                      <div className="bg-white rounded-lg p-1 shadow-lg">
                        <img
                          src={card.logo}
                          alt={`${card.name} Logo`}
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