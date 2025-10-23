import React from "react";
import Image1 from "../../assets/mission.png";
import Image2 from "../../assets/vision.png";

const VisionMission = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white dark:bg-gray-900 py-16 px-6 mt-9 md:px-6">
      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center order-1 md:order-1">
          <img
            src={Image1}
            alt="Mission"
            className="rounded-2xl w-64 md:w-80 h-64 md:h-80 object-contain"
          />
        </div>

        <div className="text-center md:text-right order-2 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-[#EE2C3C]">Mission</span>
          </h2>
          <p className="text-gray-800 text-lg md:text-2xl dark:text-gray-300 leading-tight">
            To create an engaging and personalized learning experience by
            leveraging technology, expert mentorship, and real-world
            applications that prepare students for future challenges.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20 mt-16">
        <div className="flex justify-center order-1 md:order-2">
          <img
            src={Image2}
            alt="Vision"
            className="rounded-2xl w-64 md:w-80 h-64 md:h-80 object-contain"
          />
        </div>

        <div className="text-center md:text-left order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-[#EE2C3C]">Vision</span>
          </h2>
          <p className="text-gray-800 text-lg md:text-2xl dark:text-gray-300 leading-tight">
            To empower learners across the globe by providing accessible,
            innovative, and high-quality education that helps them achieve their
            personal and professional goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
