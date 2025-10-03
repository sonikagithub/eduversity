import React, { useState } from "react";
import { FaLaptopCode, FaUsers, FaChartLine, FaTheaterMasks, FaAtom, FaFlask, FaBookOpen, FaChalkboardTeacher } from "react-icons/fa";

const TopSpecilisation = () => {
  const [activeTab, setActiveTab] = useState("masters");

  const tabs = [
    { id: "masters", label: "Master's Program" },
    { id: "graduate", label: "Graduate Program" },
    { id: "joblinked", label: "Job Linked Program" },
  ];

  const coursesData = {
    masters: [
      { id: 1, title: "Online MBA", icon: <FaTheaterMasks />, count: "38 Courses" },
      { id: 2, title: "Online MCA", icon: <FaLaptopCode />, count: "42 Courses" },
      { id: 3, title: "Online M.Com", icon: <FaUsers />, count: "25 Courses" },
      { id: 4, title: "Online MSW", icon: <FaBookOpen />, count: "18 Courses" },
      { id: 5, title: "Online MA", icon: <FaChalkboardTeacher />, count: "32 Courses" },
      { id: 6, title: "Online M.Sc", icon: <FaChartLine />, count: "45 Courses" },
      { id: 7, title: "Online MA(JMC)", icon: <FaLaptopCode />, count: "15 Courses" },
      { id: 8, title: "Online M.Sc(Math)", icon: <FaAtom />, count: "22 Courses" },
      { id: 9, title: "Online MA(Science)", icon: <FaFlask />, count: "28 Courses" },
      { id: 10, title: "Online M.Tech", icon: <FaTheaterMasks />, count: "35 Courses" },
    ],
    graduate: [
      { id: 1, title: "B.Tech", icon: <FaLaptopCode />, count: "52 Courses" },
      { id: 2, title: "BBA", icon: <FaUsers />, count: "40 Courses" },
      { id: 3, title: "BCA", icon: <FaChartLine />, count: "38 Courses" },
      { id: 4, title: "B.Com", icon: <FaBookOpen />, count: "45 Courses" },
      { id: 5, title: "BA", icon: <FaChalkboardTeacher />, count: "30 Courses" },
      { id: 6, title: "B.Sc", icon: <FaAtom />, count: "42 Courses" },
      { id: 7, title: "B.Arch", icon: <FaFlask />, count: "20 Courses" },
      { id: 8, title: "B.Des", icon: <FaTheaterMasks />, count: "25 Courses" },
      { id: 9, title: "B.Pharma", icon: <FaLaptopCode />, count: "18 Courses" },
      { id: 10, title: "B.Ed", icon: <FaUsers />, count: "22 Courses" },
    ],
    joblinked: [
      { id: 1, title: "Full Stack Dev", icon: <FaLaptopCode />, count: "15 Courses" },
      { id: 2, title: "Data Science", icon: <FaChartLine />, count: "20 Courses" },
      { id: 3, title: "Digital Marketing", icon: <FaUsers />, count: "18 Courses" },
      { id: 4, title: "AI & ML", icon: <FaAtom />, count: "25 Courses" },
      { id: 5, title: "Cloud Computing", icon: <FaFlask />, count: "12 Courses" },
      { id: 6, title: "Cybersecurity", icon: <FaBookOpen />, count: "16 Courses" },
      { id: 7, title: "UI/UX Design", icon: <FaTheaterMasks />, count: "14 Courses" },
      { id: 8, title: "Business Analytics", icon: <FaChartLine />, count: "22 Courses" },
      { id: 9, title: "Project Management", icon: <FaUsers />, count: "18 Courses" },
      { id: 10, title: "Data Analytics", icon: <FaAtom />, count: "20 Courses" },
    ]
  };

  const currentCourses = coursesData[activeTab] || [];

  return (
  <div className="w-full bg-gray-50 py-12 px-4 sm:px-6 md:px-12 text-center">
      {/* Heading */}
      <h3 className="text-red-500 font-semibold text-lg">Boost Your Skills</h3>
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Explore Our <span className="text-red-500">Courses</span>
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-md border font-medium transition ${
              activeTab === tab.id
                ? "bg-red-500 text-white border-red-500"
                : "bg-white text-black border-red-500 hover:bg-red-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
  {currentCourses.map((course) => (
    <div
      key={course.id}
      className="border rounded-xl p-6 text-center shadow-sm bg-gray-100 cursor-pointer 
                 hover:bg-white hover:shadow-lg hover:scale-105 
                 transition-transform transform duration-300 ease-in-out"
    >
      <div className="text-red-500 text-3xl mb-3 mx-auto flex justify-center">
        {course.icon}
      </div>
      <h3 className="font-semibold text-gray-800">{course.title}</h3>
      <p className="text-sm text-gray-500">{course.count}</p>
    </div>
  ))}
</div>

    </div>
  );
};

export default TopSpecilisation;