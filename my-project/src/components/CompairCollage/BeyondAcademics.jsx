import React from 'react';

const BeyondAcademics = () => {
  const cardData = [
    {
      title: "Academic Excellence",
      description: "Review the curriculum and teaching methods to ensure the program is comprehensive and delivered by qualified, experienced faculty.",
      icon: "🎓"
    },
    {
      title: "Recognition & Accreditation",
      description: "Confirm that the institution is recognized by regulatory bodies such as UGC, AICTE, or AIU to guarantee credibility and value of your degree.",
      icon: "⭐"
    },
    {
      title: "Affordability & Financial Support",
      description: "Evaluate tuition costs and explore options like scholarships, grants, or student loans that can ease your financial burden.",
      icon: "💰"
    },
    {
      title: "Alumni Connections",
      description: "A strong alumni community and partnerships with top companies can open valuable opportunities for networking and career advancement.",
      icon: "👥"
    },
    {
      title: "Campus Infrastructure",
      description: "Modern amenities such as libraries, laboratories, and digital learning resources can significantly enrich your learning experience.",
      icon: "🏛️"
    },
    {
      title: "Career & Placement Services",
      description: "Look into the college's placement history and industry collaborations to assess your prospects for internships and job opportunities after graduation.",
      icon: "💼"
    },
  ];

  return (
    <div className="w-full bg-[#F6F4F5] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Selecting a college goes <span className="text-red-600">Beyond Academics</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Consider these important factors when making your decision
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-red-100 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4 text-4xl">{card.icon}</div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeyondAcademics;
