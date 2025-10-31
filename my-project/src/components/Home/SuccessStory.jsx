import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Rohit Sharma",
      star: "⭐ ⭐ ⭐ ⭐ ⭐",
      company: "Tech Solutions Inc.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image:
        "https://img.freepik.com/free-photo/pleased-handsome-male-customer-show-thumb-up-approval_176420-17945.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      name: "Shivani Maurya",
      star: "⭐ ⭐ ⭐ ⭐ ⭐",
      company: "Digital Innovations Ltd.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Rekha Singh",
      company: "Creative Minds Co.",
      star: "⭐ ⭐ ⭐ ⭐ ⭐",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Ankit Verma",
      company: "Bright Future Tech",
      star: "⭐ ⭐ ⭐ ⭐ ⭐",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Pooja Patel",
      company: "Skyline Creatives",
      star: "⭐ ⭐ ⭐ ⭐ ⭐",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Rahul Mehta",
      company: "NextGen Innovations",
      star: "⭐ ⭐ ⭐ ⭐ ⭐",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
      {
      name: "Ankit Verma",
      company: "Bright Future Tech",
      star: "⭐ ⭐ ⭐ ⭐ ⭐",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Pooja Patel",
      company: "Skyline Creatives",
      star: "⭐ ⭐ ⭐ ⭐ ⭐",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Rahul Mehta",
      company: "NextGen Innovations",
      star: "⭐ ⭐ ⭐ ⭐ ⭐",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 px-2 sm:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            Success Stories
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>

        {/* Slider Section */}
        <div className="relative">
          <Swiper
            modules={[Navigation,  Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              el: '.custom-pagination',
            }}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { 
                slidesPerView: 1,
                spaceBetween: 30
              },
              768: { 
                slidesPerView: 2,
                spaceBetween: 40
              },
              1024: { 
                slidesPerView: 3,
                spaceBetween: 40
              },
            }}
            className="pb-16"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="py-4">
                  <div className="relative group flex justify-center w-full max-w-xs mx-auto mt-16">
                    {/* Background tilted card */}
                    <div className="absolute w-full h-full bg-red-600 transform rotate-6 rounded-2xl z-0 transition-all duration-300"></div>

                    {/* Main card */}
                    <div className="relative bg-white rounded-2xl p-6 z-10 h-full flex flex-col shadow-2xl transition-all duration-300 pt-20 w-full">
                      
                      {/* Image */}
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-20">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-lg">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="text-center flex-1 mt-6">
                        <h2 className="text-lg font-medium mb-2">{member.star}</h2>
                        <h2 className="text-xl font-bold text-black mb-2 tracking-wide">
                          {member.name}
                        </h2>
                        <div className="w-12 h-1 bg-red-600 mx-auto mb-3"></div>
                        <p className="text-base font-semibold text-gray-800 mb-4 tracking-wide">
                          {member.company}
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="custom-prev absolute top-1/2 -left-4 lg:-left-8 transform -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button className="custom-next absolute top-1/2 -right-4 lg:-right-8 transform -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Custom Pagination */}
          <div className="custom-pagination flex justify-center space-x-2 mt-8"></div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;