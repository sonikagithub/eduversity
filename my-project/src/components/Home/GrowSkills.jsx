import React from "react";
import Logo1 from "../../assets/SamLogo.jpg";
import Logo2 from "../../assets/Bandhanlogo.jpg";
import Logo3 from "../../assets/UTlogo.jpg";
import Logo4 from "../../assets/SamLogo.jpg";
import Logo5 from "../../assets/Bandhanlogo.jpg";
import Logo6 from "../../assets/UTlogo.jpg";

const GrowSkills = () => {
  // Array of company logos with different variations
  const companyLogos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-white py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Corporate<span className="text-red-600"> Partners</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Join Many of companies that trust our platform for their growth and success
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* First Marquee - Left to Right */}
        <div className="marquee-container overflow-hidden py-6 mb-6">
          <div className="marquee-left-to-right flex space-x-12">
            {[...companyLogos, ...companyLogos, ...companyLogos].map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 group relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group-hover:border-red-200">
                  <img
                    src={logo}
                    alt={`Company ${(index % companyLogos.length) + 1}`}
                    className="h-8 sm:h-12 object-contain transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Hover effect */}
                <div className="absolute inset-0 bg-red-500 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Second Marquee - Right to Left */}
        <div className="marquee-container overflow-hidden py-4">
          <div className="marquee-right-to-left flex space-x-12">
            {[...companyLogos, ...companyLogos, ...companyLogos].map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 group relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200">
                  <img
                    src={logo}
                    alt={`Company ${(index % companyLogos.length) + 1}`}
                    className="h-8 sm:h-12 object-contain transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Hover effect */}
                <div className="absolute inset-0 bg-blue-500 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowSkills;