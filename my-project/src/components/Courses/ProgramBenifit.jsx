import React from "react";
import { FaPaintBrush } from "react-icons/fa"; // example icon

const ProgramBenifit = () => {
  const benefits = [
    {
      title: "Professional Advancement",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
    {
      title: "Professional Advancement",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
    {
      title: "Professional Advancement",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
    {
      title: "Professional Advancement",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
    {
      title: "Professional Advancement",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
    {
      title: "Professional Advancement",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
  ];

  return (
    <div className="bg-white py-16 px-6 md:px-12 lg:px-20">
        <h1 className="text-4xl text-black text-center font-bold py-10">Program <span className="text-red-600">Benefits</span> </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-red-100 p-4 rounded-md">
                <FaPaintBrush className="text-red-500 text-2xl" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {benefit.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramBenifit;
