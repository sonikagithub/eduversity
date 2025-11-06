import React from 'react';

const CourseSkills = () => {
  const skills = [
    {
      name: "Advanced Business Analytics",
      icon: "📊"
    },
    {
      name: "Leadership and Team Management",
      icon: "👥"
    },
    {
      name: "Strategic Decision Making", 
      icon: "🎯"
    },
    {
      name: "Understanding Consumer Behavior",
      icon: "👤"
    },
    {
      name: "Data Analysis",
      icon: "📈"
    },
    {
      name: "Project Management",
      icon: "📋"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side - Image */}
        <div className="lg:w-1/2 w-full">
          <div className="bg-gradient-to-br from-red-400 to-red-600 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold mb-2">Master In-Demand Skills</h3>
              <p className="text-blue-100">Build expertise that employers are looking for</p>
            </div>
          </div>
          {/* Alternatively, you can use an actual image:
          <img 
            src="/path-to-your-image.jpg" 
            alt="Course Skills" 
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
          */}
        </div>

        {/* Right Side - Skills Grid */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
           <span className='text-red-600'> Key Skills</span> You'll Learn
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Develop essential competencies that will propel your career forward and make you stand out in the competitive job market.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-red-200"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">{skill.icon}</span>
                </div>
                <span className="text-base font-semibold text-gray-800">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default CourseSkills;