import React from "react";
import Image from "../../assets/image2.png";
import { FaCheck } from "react-icons/fa";

const CallExperts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Left Grid (Image) */}
      <div className="flex justify-center  order-2 md:order-1">
        <img
          src={Image}
          alt="Eduversity"
          className="w-full max-w-xs sm:max-w-sm lg:max-w-md  duration-300"
        />
      </div>

      {/* Right Grid (Text + Button) */}
      <div className="flex flex-col order-1 md:order-2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 font-bold leading-snug mb-6">
          Your Future, Your Call — Get Pro Career Tips to Pick the Perfect Path.
        </h1>

        <p className="text-base text-gray-600 leading-relaxed mb-6">
          At our organization, we believe that people are our greatest strength.
          We are always looking for passionate, talented, and driven individuals
          to join our growing team. Whether you are starting your career or
          bringing years of experience, we offer an environment where your ideas
          are valued, your growth is supported, and your contributions make a
          real impact.
        </p>

        <ul className="space-y-3 mb-8">
          {[
            "Personalized Guidance",
            "Clear Roadmap",
            "Industry Insights",
            "Career Boost Plan",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="bg-red-50 p-1.5 rounded-full mt-1">
                <FaCheck className="text-red-500 text-xs" />
              </div>
              <span className="text-gray-700 text-base font-medium">{item}</span>
            </li>
          ))}
        </ul>

        <button className="w-full sm:w-auto px-6 py-3 bg-red-500 text-white text-base font-semibold rounded-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
          Get a Call with Experts
        </button>
      </div>
    </div>
  );
};

export default CallExperts;