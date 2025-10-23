import React from "react";

const CTATrustSection = ({
  title = "Ready to Start Your Learning Journey?",
  subtitle = "Join thousands of successful learners and transform your career with industry-relevant courses",
  primaryBtnText = "Explore Courses",
  secondaryBtnText = "Book Demo",
  trustedBy = ["IITs & NITs", "Infosys", "TCS", "Wipro", "Google", "Microsoft"],
}) => {
  return (
    <div className="w-full">
      {/* CTA Section */}
      <div className="text-center mt-16">
        <div className="bg-[#EE2C3C] text-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-lg mb-6 opacity-90">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#EE2C3C] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              {primaryBtnText}
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#EE2C3C] transition-colors duration-200">
              {secondaryBtnText}
            </button>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="text-center mt-16">
        <p className="text-gray-600 mb-6">Trusted by students and professionals from</p>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          {trustedBy.map((brand, index) => (
            <span key={index} className="text-lg font-semibold text-gray-700">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CTATrustSection;
