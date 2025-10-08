import React from "react";
import { FaRocket, FaBookOpen, FaUsers, FaLightbulb } from "react-icons/fa";

const Card = () => {
  const cards = [
    {
      icon: <FaRocket />,
      title: "Fueling Future Success",
      desc: "Delivering expert-led resources to help you succeed in your studies, career, and beyond.",
    },
    {
      icon: <FaBookOpen />,
      title: "Learning Without Limits",
      desc: "Delivering learning experiences that evolve with you, your career, and the world around you.",
    },
    {
      icon: <FaUsers />,
      title: "Connecting Minds, Creating Futures",
      desc: "Creating an inclusive space where learners, mentors, and experts connect, share, and grow together.",
    },
    {
      icon: <FaLightbulb />,
      title: "Inspiring Innovation",
      desc: "Encouraging creative thinking and empowering learners to bring innovative ideas to life.",
    },
  ];

  return (
    <section className="w-full bg-[#EE2C3C] dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
              {/* Icon + Title Row */}
              <div className="flex items-center gap-4 mb-4">
                <div className="text-white text-4xl sm:text-5xl p-4 bg-white/20 rounded-2xl">
                  {card.icon}
                </div>
                <h3 className="text-white text-base sm:text-lg font-semibold leading-snug">
                  {card.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-100 text-sm sm:text-base leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
