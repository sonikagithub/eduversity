import React from 'react';

const Specialization = () => {
  const specializations = [
    "Finance & Investment Banking",
    "Marketing Management",
    "Human Resource Management",
    "Operations & Supply Chain",
    "Information Technology",
    "Entrepreneurship",
    "International Business",
    "Healthcare Management"
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-4xl font-bold text-red-600 mb-3">
          Specializations
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Choose your area of expertise from our comprehensive MBA programs
        </p>

        {/* Buttons Grid */}
        <div className="flex flex-wrap justify-center gap-3">
          {specializations.map((spec, index) => (
            <button
              key={index}
              className="text-sm sm:text-base bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-red-600 hover:text-white shadow-sm transition-all duration-200"
            >
              {spec}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialization;
