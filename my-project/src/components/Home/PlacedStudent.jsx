import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../../assets/LPU.png";

const PlacedStudent = () => {
  const students = [
    {
      image:
        "https://img.freepik.com/free-photo/portrait-young-woman-blue-dress_23-2148743678.jpg",
    },
    {
      image:
        "https://img.freepik.com/free-photo/portrait-smiling-indian-man-wearing-traditional-kurta_53876-15267.jpg",
    },
    {
      image:
        "https://img.freepik.com/free-photo/portrait-beautiful-smiling-woman-with-long-hair_23-2149089315.jpg",
    },
    {
      image:
        "https://img.freepik.com/free-photo/portrait-confident-young-man_23-2148221800.jpg",
    },
    {
      image:
        "https://img.freepik.com/free-photo/portrait-handsome-smiling-man-wearing-traditional-yellow-kurta_53876-15267.jpg",
    },
    {
      image:
        "https://img.freepik.com/free-photo/portrait-young-woman-blue-dress_23-2148743678.jpg",
    },
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 700,
    slidesToShow: 5, // ✅ Show 5 cards at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280, // large tablets / small laptops
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768, // mobile landscape
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480, // small mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="bg-[#FCEEEF] py-12 px-4">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-red-600 mb-10">
        Testimonials
      </h2>
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {students.map((student, index) => (
            <div key={index} className="px-3">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center border border-gray-200 transition-transform duration-300 mb-5">
                <img
                  src={student.image}
                  alt={`Student ${index + 1}`}
                  className="w-full h-64 object-cover border-4 border-white rounded-2xl"
                />
                <div className="w-full bg-white p-4 flex flex-col items-center">
                  <img
                    src={logo}
                    alt="University Logo"
                    className="w-24 h-auto mb-2"
                  />
                  
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PlacedStudent;
