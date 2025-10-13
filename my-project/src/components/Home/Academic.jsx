import React from "react";
import { FaHandPointRight } from "react-icons/fa";

const Academic = () => {
  const Courses = [
    { id: 1, coursename: "Marketing Management" },
    { id: 2, coursename: "Data Science" },
    { id: 3, coursename: "Finance & Accounting" },
    { id: 4, coursename: "Human Resources" },
    { id: 5, coursename: "International Business" },
    { id: 6, coursename: "Operations Management" },
    { id: 7, coursename: "Project Management" },
    { id: 8, coursename: "Information Technology" },
    { id: 9, coursename: "Business Analytics" },
    { id: 10, coursename: "Entrepreneurship" },
    { id: 11, coursename: "Digital Marketing" },
    { id: 12, coursename: "Healthcare Management" },
  ];

  // Split courses into 3 columns for desktop
  const columns = [[], [], []];
  Courses.forEach((course, index) => {
    columns[index % 3].push(course);
  });

  return (
    <div className="w-full bg-gray-50 py-12 px-6 md:px-16 overflow-hidden">
      <div className="grid md:grid-cols-4 gap-8 items-start">
        {/* Left Side Title */}
        <div className="md:col-span-1 text-left">
          <h3 className="text-red-500 font-semibold text-lg mb-2">Academic</h3>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Top <span className="text-red-500">Specializations</span> to Advance Your Career
          </h2>
        </div>

        {/* Right Side */}
        <div className="md:col-span-3">
          {/* For large screens: 3 vertical marquee columns */}
          <div className="hidden md:grid grid-cols-3 gap-4 text-left">
            {columns.map((col, i) => (
              <div key={i} className="marquee-column flex flex-col gap-3 overflow-hidden h-72 relative">
                <div className="animate-marquee space-y-3">
                  {[...col, ...col].map((course, idx) => (
                    <button
                      key={idx}
                      className="flex items-center gap-3 bg-white border border-gray-200 rounded-md shadow-sm 
                                 px-4 py-2 text-gray-800 font-medium hover:bg-red-50 hover:border-red-400 
                                 transition-all duration-300 w-full text-left"
                    >
                      <FaHandPointRight className="text-red-500 text-lg" />
                      <span>{course.coursename}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* For small devices: single continuous vertical marquee */}
          <div className="block md:hidden overflow-hidden h-72 relative">
            <div className="animate-marquee-sm space-y-3">
              {[...Courses, ...Courses].map((course, idx) => (
                <button
                  key={idx}
                  className="flex items-center gap-3 bg-white border border-gray-200 rounded-md shadow-sm 
                             px-4 py-2 text-gray-800 font-medium hover:bg-red-50 hover:border-red-400 
                             transition-all duration-300 w-full text-left"
                >
                  <FaHandPointRight className="text-red-500 text-lg" />
                  <span>{course.coursename}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }

          @keyframes marqueeSm {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }

          .animate-marquee {
            display: flex;
            flex-direction: column;
            animation: marquee 12s linear infinite;
            will-change: transform;
          }

          .animate-marquee-sm {
            display: flex;
            flex-direction: column;
            animation: marqueeSm 12s linear infinite;
            will-change: transform;
          }

          .marquee-column:hover .animate-marquee,
          .animate-marquee-sm:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

export default Academic;
