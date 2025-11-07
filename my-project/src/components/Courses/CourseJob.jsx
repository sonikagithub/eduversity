import React from 'react';
import { FaBriefcase, FaChartLine, FaUserTie, FaLaptopCode, FaBuilding } from 'react-icons/fa';

const CourseJob = () => {
  const jobs = [
    { icon: <FaBriefcase />, title: "Business Analyst" },
    { icon: <FaChartLine />, title: "Marketing Executive" },
    { icon: <FaUserTie />, title: "Human Resource Manager" },
    { icon: <FaLaptopCode />, title: "IT Consultant" },
    { icon: <FaBuilding />, title: "Operations Manager" },
  ];

  return (
    <div className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Job<span className='text-red-600'> Opportunities</span></h2>
        <p className="text-gray-600 mt-3">
          Explore a range of promising career paths you can pursue after completing this course.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="flex items-center bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition-all duration-200"
          >
            <div className="bg-red-600 text-white p-4 rounded-full text-xl flex items-center justify-center mr-4">
              {job.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseJob;
