import React from "react";
import bgImage from "../../assets/background.png";

// Dummy Courses Data
const courses = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_M9m2_fxlcMG2GcyEY63LX77KhVU-i-AJiQ&s",
    title: "MBA in Data Science",
    fee: "₹1,50,000",
    duration: "2 Years",
    approvals: "UGC, AICTE Approved",
    emi: "EMI Available",
  },
  {
    id: 2,
    image:
      "https://www.lloydbusinessschool.edu.in/images/LBS/website/images/blog/bba-course-specializations.jpg",
    title: "MBA in Business Analytics",
    fee: "₹1,80,000",
    duration: "2 Years",
    approvals: "UGC, AICTE Approved",
    emi: "EMI Available",
  },
  {
    id: 3,
    image: "https://www.accurate.in/img/college/1652878380-poster.jpg",
    title: "MBA in Finance",
    fee: "₹2,00,000",
    duration: "2 Years",
    approvals: "UGC, AICTE Approved",
    emi: "EMI Available",
  },
];

const TopCourses = () => {
  return (
    <div
      className="relative min-h-lvh bg-cover bg-center py-16"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay (optional dark layer for readability) */}
      <div className="absolute inset-0"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-black text-center mb-12">
          Top Universities & Courses
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-3 transition duration-300"
            >
              {/* Top Image */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Course Details */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-gray-800">
                  {course.title}
                </h3>
                <p className="text-gray-600">
                  <span className="font-semibold">Fee:</span> {course.fee}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Duration:</span> {course.duration}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Approvals:</span>{" "}
                  {course.approvals}
                </p>
                <p className="text-green-600 font-semibold">{course.emi}</p>

                {/* Button */}
                <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCourses;
