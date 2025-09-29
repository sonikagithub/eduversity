import React from "react";
import Image from "../../assets/image.jpeg";
import { FaCheck } from "react-icons/fa";

const CallExperts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Left Grid (Image) */}
      <div className="flex justify-center order-2 md:order-1">
        <img
          src={Image}
          alt="Eduversity"
          className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      </div>

      {/* Right Grid (Text + Button) */}
      <div className="flex flex-col order-1 md:order-2">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 font-bold leading-tight mb-8">
          Your Future, Your Call — Get Pro Career Tips to Pick the Perfect Path.
        </h1>
        
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          At our organization, we believe that people are our greatest strength.
          We are always looking for passionate, talented, and driven individuals
          to join our growing team. Whether you are starting your career or
          bringing years of experience, we offer an environment where your ideas
          are valued, your growth is supported, and your contributions make a
          real impact.
        </p>
        
        <ul className="space-y-4 mb-10">
          <li className="flex items-start gap-4">
            <div className="bg-red-50 p-2 rounded-full mt-1">
              <FaCheck className="text-red-500 text-sm" />
            </div>
            <span className="text-gray-700 text-lg font-medium">Personalized Guidance</span>
          </li>
          <li className="flex items-start gap-4">
            <div className="bg-red-50 p-2 rounded-full mt-1">
              <FaCheck className="text-red-500 text-sm" />
            </div>
            <span className="text-gray-700 text-lg font-medium">Clear Roadmap</span>
          </li>
          <li className="flex items-start gap-4">
            <div className="bg-red-50 p-2 rounded-full mt-1">
              <FaCheck className="text-red-500 text-sm" />
            </div>
            <span className="text-gray-700 text-lg font-medium">Industry Insights</span>
          </li>
          <li className="flex items-start gap-4">
            <div className="bg-red-50 p-2 rounded-full mt-1">
              <FaCheck className="text-red-500 text-sm" />
            </div>
            <span className="text-gray-700 text-lg font-medium">Career Boost Plan</span>
          </li>
        </ul>
        
        <button className="w-full sm:w-auto px-8 py-4 bg-red-500 text-white text-lg font-semibold rounded-xl hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Get a Call with Experts
        </button>
      </div>
    </div>
  );
};

export default CallExperts;