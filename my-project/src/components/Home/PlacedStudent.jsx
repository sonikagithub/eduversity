import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../../assets/LPU.png";
import Photo from "../../assets/Person.jpg";

const PlacedStudent = () => {
  const students = [
    { id: 1, image: Photo },
    { id: 2, image: Photo },
    { id: 3, image: Photo },
    { id: 4, image: Photo },
    { id: 5, image: Photo },
    { id: 6, image: Photo },
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="bg-white py-16 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Our Proud <span className="text-4xl md:text-5xl font-bold text-red-600 mb-4" >Alumni</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Success stories that inspire generations
        </p>
      </div>

      {/* Carousel Section */}
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {students.map((student, index) => (
            <div key={index} className="px-3 focus:outline-none">
              {/* Card Container */}
              <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform  border border-red-100 overflow-hidden">
                
                {/* Profile Image Section */}
                <div className="relative pt-8 px-8">
                  <div className="relative mx-auto">
                    {/* Red Background Decoration */}
                    <div className="absolute inset-0 bg-red-50 rounded-2xl transform rotate-3 scale-105 group-hover:rotate-2 group-hover:scale-110 transition-transform duration-500"></div>
                    
                    {/* Profile Image */}
                    <div className="relative z-10">
                      <img
                        src={student.image}
                        alt="Alumni"
                        className="w-32 h-32 mx-auto rounded-2xl object-cover border-4 border-white shadow-md"
                      />
                    </div>
                  </div>
                </div>

                {/* Logo Section */}
                <div className="p-6 text-center">
                  <div className="flex justify-center items-center">
                    <div className="bg-white rounded-lg p-3 shadow-sm border border-red-200">
                      <img
                        src={logo}
                        alt="University Logo"
                        className="h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                  </div>
                  
                  {/* Red Dots Decoration */}
                  {/* <div className="mt-4 flex justify-center space-x-1">
                    {[1, 2, 3].map((dot) => (
                      <div
                        key={dot}
                        className="w-2 h-2 bg-red-400 rounded-full opacity-60 group-hover:opacity-100 group-hover:bg-red-600 transition-all duration-300"
                      ></div>
                    ))}
                  </div> */}
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-300 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Bottom Decoration */}
      <div className="flex justify-center mt-12 space-x-4">
        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse delay-150"></div>
        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse delay-300"></div>
      </div>
    </div>
  );
};

export default PlacedStudent;