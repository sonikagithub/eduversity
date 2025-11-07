import React from 'react';
import { FaBriefcase, FaUserGraduate, FaChartLine, FaGlobe, FaBuilding, FaLaptopCode } from 'react-icons/fa';

const CollageCareer = () => {
  const cards = [
    {
      icon: <FaBriefcase />,
      title: 'Corporate Roles',
      desc: 'Opportunities in management, consulting, and corporate strategy across leading global firms.',
    },
    {
      icon: <FaUserGraduate />,
      title: 'Higher Education',
      desc: 'Pursue postgraduate or doctoral studies in reputed universities worldwide.',
    },
    {
      icon: <FaChartLine />,
      title: 'Entrepreneurship',
      desc: 'Start your own venture with strong analytical and business foundations.',
    },
    {
      icon: <FaGlobe />,
      title: 'International Exposure',
      desc: 'Build a global career with multinational companies and international collaborations.',
    },
    {
      icon: <FaBuilding />,
      title: 'Public Sector',
      desc: 'Work in government organizations, NGOs, and developmental sectors making societal impact.',
    },
    {
      icon: <FaLaptopCode />,
      title: 'Technology & Innovation',
      desc: 'Explore roles in IT, digital transformation, and tech-driven business solutions.',
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-6 lg:px-20">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-12">
        Career <span className='text-red-600'>Prospect</span>
      </h2>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-6 bg-white rounded-2xl shadow-lg"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#EE2C3C] text-4xl sm:text-5xl p-4 bg-red-100 rounded-2xl">
                  {card.icon}
                </div>
                <h3 className="text-black text-base sm:text-lg font-semibold leading-snug">
                  {card.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollageCareer;
