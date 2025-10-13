import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaChartLine,
  FaUsers,
  FaMoneyBillWave,
  FaGlobe,
  FaCogs,
  FaTasks,
  FaDatabase,
} from "react-icons/fa";

const Academic = () => {
  const Courses = [
    { id: 1, coursename: "Marketing Management", icon: <FaChartLine /> },
    { id: 2, coursename: "Data Science", icon: <FaDatabase /> },
    { id: 3, coursename: "Finance & Accounting", icon: <FaMoneyBillWave /> },
    { id: 4, coursename: "Human Resources", icon: <FaUsers /> },
    { id: 5, coursename: "International Business", icon: <FaGlobe /> },
    { id: 6, coursename: "Operations Management", icon: <FaCogs /> },
    { id: 7, coursename: "Project Management", icon: <FaTasks /> },
  ];

  const handleClick = (course) => {
    alert(`You clicked on ${course.coursename}`);
  };

  return (
    <div className="w-full bg-gray-50 py-12 px-4 text-center">
      <h3 className="text-red-500 font-semibold text-lg">Academic</h3>
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Top <span className="text-red-500">Specializations</span> to Advance Your Career
      </h2>

      {/* Marquee */}
      <div className="px-4 sm:px-6 md:px-32">
        <Marquee speed={50} gradient={false}>
          <div className="flex gap-6 mt-10">
            {Courses.map((course) => (
              <div
                key={course.id}
                onClick={() => handleClick(course)}
                className="cursor-pointer bg-white shadow-md border border-gray-200 rounded-lg 
                           px-6 py-4 w-72 flex items-center gap-4 whitespace-nowrap
                           hover:bg-red-500 hover:text-white transition duration-300 group"
              >
                <div className="text-2xl text-red-500 group-hover:text-white transition duration-300">
                  {course.icon}
                </div>
                <p className="font-medium text-base group-hover:text-white transition duration-300">
                  {course.coursename}
                </p>
              </div>
            ))}
            <div className="w-1"></div>
          </div>
        </Marquee>
      </div>
       <div className="px-4 sm:px-6 mt-2 md:px-32">
        <Marquee speed={50} gradient={false}>
          <div className="flex gap-6 mt-10">
            {Courses.map((course) => (
              <div
                key={course.id}
                onClick={() => handleClick(course)}
                className="cursor-pointer bg-white shadow-md border border-gray-200 rounded-lg 
                           px-6 py-4 w-72 flex items-center gap-4 whitespace-nowrap
                           hover:bg-red-500 hover:text-white transition duration-300 group"
              >
                <div className="text-2xl text-red-500 group-hover:text-white transition duration-300">
                  {course.icon}
                </div>
                <p className="font-medium text-base group-hover:text-white transition duration-300">
                  {course.coursename}
                </p>
              </div>
            ))}
            <div className="w-1"></div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Academic;