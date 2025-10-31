import React from 'react'
import Marquee from "react-fast-marquee";

const Academic = () => {
  const Courses = [
    { id: 1, coursename: "Marketing Management" },
    { id: 2, coursename: "Data Science" },
    { id: 3, coursename: "Finance & Accounting" },
    { id: 4, coursename: "Human Resources" },
    { id: 5, coursename: "International Business" },
    { id: 6, coursename: "Operations Management" },
    { id: 7, coursename: "Project Management" },
  ];

  const handleClick = (course) => {
    alert(`You clicked on ${course.coursename}`);
  };

  return (
    <div className="w-full bg-gray-50 py-12 px-4 sm:px-6 md:px-12 text-center">
      <h3 className="text-red-500 font-semibold text-lg">Academic</h3>
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Top <span className="text-red-500">Specializations</span> to Advance Your Career
      </h2>

      {/* First Marquee */}
      <Marquee speed={50} gradient={false}>
        <div className="flex gap-6 mt-10 ">
          {Courses.map((course) => (
            <button
              key={course.id}
              onClick={() => handleClick(course)}
              className="px-6 py-2 border border-red-500 text-red-500 font-medium rounded-md 
                         hover:bg-red-500 hover:text-white transition duration-300"
            >
              {course.coursename}
            </button>
          ))}
          {/* Spacer for gap between last and first */}
          <div className="w-1"></div>
        </div>
      </Marquee>

      {/* Second Marquee */}
      <Marquee speed={50} gradient={false} direction="right">
        <div className="flex gap-6 mt-10">
          {Courses.map((course) => (
            <button
              key={course.id}
              onClick={() => handleClick(course)}
              className="px-6 py-2 border border-red-500 text-red-500 font-medium rounded-md 
                         hover:bg-red-500 hover:text-white transition duration-300"
            >
              {course.coursename}
            </button>
          ))}
          {/* Spacer */}
          <div className="w-1"></div>
        </div>
      </Marquee>
    </div>
  );
};

export default Academic;
