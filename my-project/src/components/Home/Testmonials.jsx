import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Aditi Upadhyay",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "Excellent platform for upskilling! I loved the flexibility and practical approach to learning new technologies.",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "Excellent platform for upskilling! I loved the flexibility and practical approach to learning new technologies.",
  },
  {
    id: 3,
    name: "Ananya Singh",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "Excellent platform for upskilling! I loved the flexibility and practical approach to learning new technologies.",
  },
  {
    id: 4,
    name: "Vikram Patel",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    text: "I successfully transitioned into a new role thanks to Eduversity's structured courses and real-world projects.",
  },
  {
    id: 5,
    name: "Neha Gupta",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    text: "The interactive sessions and case studies helped me apply what I learned directly at work.",
  },
  {
    id: 6,
    name: "Arjun Mehta",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    text: "Practical, flexible, and affordable – Eduversity is the perfect choice for professionals looking to grow.",
  },
];

// Custom Arrows with responsive positioning
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -translate-y-1/2 bg-red-500 text-white p-2 md:p-3 rounded-full cursor-pointer z-10 hover:bg-red-600 transition-colors hidden sm:block"
    onClick={onClick}
    style={{
      right: '-34px',
    }}
  >
    <FaArrowRight className="text-sm md:text-base" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -translate-y-1/2 bg-red-500 text-white p-2 md:p-3 rounded-full cursor-pointer z-10 hover:bg-red-600 transition-colors hidden sm:block"
    onClick={onClick}
    style={{
      left: '-34px',
    }}
  >
    <FaArrowLeft className="text-sm md:text-base" />
  </div>
);

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280, // xl screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024, // lg screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 768, // md screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 640, // sm screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '20px',
        }
      }
    ],
  };

  return (
    <div className="bg-gray-100 py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>

        {/* Slider Container */}
        <div className="relative px-2 sm:px-4">
          <Slider {...settings}>
            {testimonials.map((item) => (
              <div key={item.id} className="px-2 sm:px-3 lg:px-4">
                <div className="bg-red-500 rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 lg:p-8 text-center flex flex-col items-center min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] mx-auto max-w-xs sm:max-w-none">
                  
                  {/* Circle Image */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border-2 sm:border-4 border-white overflow-hidden shadow-md mb-3 sm:mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center mb-3 sm:mb-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className="mx-0.5 sm:mx-1 text-xs sm:text-sm lg:text-base" 
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-xs sm:text-sm lg:text-base text-white leading-relaxed mb-4 sm:mb-6 line-clamp-4 sm:line-clamp-none">
                    {item.text}
                  </p>

                  {/* Name */}
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mt-auto">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Custom styles for slick dots */}
      <style jsx>{`
        :global(.slick-dots) {
          bottom: -40px !important;
        }
        :global(.slick-dots li button:before) {
          font-size: 10px !important;
        }
        :global(.slick-dots li.slick-active button:before) {
          color: #ef4444 !important;
        }
        @media (min-width: 768px) {
          :global(.slick-dots) {
            bottom: -50px !important;
          }
          :global(.slick-dots li button:before) {
            font-size: 12px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;