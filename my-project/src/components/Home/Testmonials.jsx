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

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 bg-red-500 text-white p-3 rounded-full cursor-pointer z-10 hover:bg-red-600 transition-colors"
    onClick={onClick}
  >
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-[-40px] transform -translate-y-1/2 bg-red-500 text-white p-3 rounded-full cursor-pointer z-10 hover:bg-red-600 transition-colors"
    onClick={onClick}
  >
    <FaArrowLeft />
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
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, arrows: false },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
          Testimonials
          <span className="block w-24 h-1 bg-red-500 mx-auto mt-3"></span>
        </h2>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((item) => (
            <div key={item.id} className="px-4">
              <div className="bg-red-500 rounded-3xl shadow-lg p-8 text-center flex flex-col items-center min-h-[380px]">
                
                {/* Circle Image */}
                <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-md mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Stars */}
                <div className="flex justify-center mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="mx-1" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm text-white leading-relaxed mb-6">
                  {item.text}
                </p>

                {/* Name */}
                <h3 className="text-lg font-semibold text-white mt-auto">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
