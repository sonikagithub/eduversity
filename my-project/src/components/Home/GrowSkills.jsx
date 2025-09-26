import React from "react";
import Frame from "../../assets/Frame.png";
import { FaCheck } from "react-icons/fa";

const GrowSkills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Left Grid (Image) */}
      <div className="flex justify-center">
        <img
          src={Frame}
          alt="Eduversity"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>

      {/* Right Grid (Text + Button) */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-black font-semibold mb-6">
          Grow your skills with Eduversity
        </h1>
        <ul className="space-y-3 mb-6 text-base sm:text-lg w-full max-w-md">
    <li className="flex items-center gap-2">
      <FaCheck className="text-red-500 shrink-0" />
      <span>Industry-Relevant Curriculum</span>
    </li>
    <li className="flex items-center gap-2">
      <FaCheck className="text-red-500 shrink-0" />
      <span>Career-Oriented Growth</span>
    </li>
    <li className="flex items-center gap-2">
      <FaCheck className="text-red-500 shrink-0" />
      <span>Affordable & Accessible Education</span>
    </li>
    <li className="flex items-center gap-2">
      <FaCheck className="text-red-500 shrink-0" />
      <span>Flexible Learning Anytime, Anywhere</span>
    </li>
  </ul>
        <button className="px-6 py-3 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition">
          Explore Courses
        </button>
      </div>
    </div>
  );
};

export default GrowSkills;
