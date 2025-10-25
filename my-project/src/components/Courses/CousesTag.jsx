import React, { useState, useEffect } from "react";

const CoursesTag = () => {
  const domains = [
    "Master of Business Administration",
    "Bachelor of Business Administration",
    "Master of Computer Application",
    "Bachelor of Computer Application",
    "Master of Arts",
    "Bachelor of Arts",
    "Master of Commerce",
    "Bachelor of Commerce",
    "Master of Science",
    "Bachelor of Science",
  ];

  const programTypes = [
    "All Programs",
    "PG Programs",
    "UG Programs",
    "Certification",
  ];

  const colleges = [
    "Dr. D.Y Patil Vidyapeeth, Pune",
    "NMIMS University",
    "Noida International University",
    "Vivekananda Global University",
    "Amity University",
  ];

  const courses = [
    { name: "Marketing Management (MBA)", duration: "2 years", type: "MBA" },
    { name: "Human Resource Management (MBA)", duration: "2 years", type: "MBA" },
    { name: "Finance Management (MBA)", duration: "2 years", type: "MBA" },
    { name: "Information Technology (MBA)", duration: "2 years", type: "MBA" },
    { name: "Operations Management (MBA)", duration: "2 years", type: "MBA" },
  ];

  const [selectedDomain, setSelectedDomain] = useState(domains[0]);
  const [selectedProgram, setSelectedProgram] = useState(programTypes[0]);
  const [selectedCollege, setSelectedCollege] = useState(colleges[0]);
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let filtered = courses;
    if (selectedProgram === "PG Programs") {
      filtered = filtered.filter((course) => course.type === "MBA");
    } else if (selectedProgram === "UG Programs") {
      filtered = filtered.filter((course) => course.type === "UG");
    }
    setFilteredCourses(filtered);
  }, [selectedDomain, selectedProgram, selectedCollege]);

  return (
    <div className="min-h-screen p-6">
      {/* Main Container */}
<div className="max-w-7xl mx-auto rounded-2xl overflow-hidden">
  <div className="flex flex-col lg:flex-row h-[80vh]">
    {/* Left Sidebar - Scrollable */}
    <div className="lg:w-1/4 bg-gray-50 p-6 border-r border-gray-200 overflow-y-auto">
      {/* Domain */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">DOMAIN</h3>
        <ul className="space-y-2">
          {domains.map((domain, index) => (
            <li
              key={index}
              onClick={() => setSelectedDomain(domain)}
              className={`flex items-center gap-2 cursor-pointer transition-colors duration-200 ${
                selectedDomain === domain
                  ? "text-[#EE2C3C] font-medium"
                  : "text-gray-700 hover:text-[#EE2C3C]"
              }`}
            >
              <span className="text-sm">➤</span>
              {domain}
            </li>
          ))}
        </ul>
      </div>

      {/* Program */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          PROGRAM WISE
        </h3>
        <ul className="space-y-2">
          {programTypes.map((program, index) => (
            <li
              key={index}
              onClick={() => setSelectedProgram(program)}
              className={`flex items-center gap-2 cursor-pointer transition-colors duration-200 ${
                selectedProgram === program
                  ? "text-[#EE2C3C] font-medium"
                  : "text-gray-700 hover:text-[#EE2C3C]"
              }`}
            >
              <span className="text-sm">➤</span>
              {program}
            </li>
          ))}
        </ul>
      </div>

      {/* Colleges */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">COLLEGES</h3>
        <ul className="space-y-2">
          {colleges.map((college, index) => (
            <li
              key={index}
              onClick={() => setSelectedCollege(college)}
              className={`flex items-center gap-2 cursor-pointer transition-colors duration-200 ${
                selectedCollege === college
                  ? "text-[#EE2C3C] font-medium"
                  : "text-gray-700 hover:text-[#EE2C3C]"
              }`}
            >
              <span className="text-sm">➤</span>
              {college}
            </li>
          ))}
        </ul>
      </div>
    </div>
 


<div className="lg:w-3/4 p-6 overflow-y-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {filteredCourses.map((course, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-36 flex flex-col justify-between"
      >
        {/* Top section - course name and type */}
        <div className="p-4 pb-0">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-semibold text-gray-800">
              {course.name}
            </h3>
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full whitespace-nowrap">
              {course.type}
            </span>
          </div>
        </div>

        {/* Bottom section - duration & button */}
        <div className="flex justify-between items-center px-4 py-3 border-t border-gray-100">
          <span className=" text-gray-600 text-xs px-3 py-1 rounded-full">
            {course.duration}
          </span>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#EE2C3C] text-white px-4 py-1.5 rounded-sm hover:bg-red-700 text-xs font-medium"
          >
            View
          </button>
        </div>
      </div>
    ))}
  </div>

  {filteredCourses.length === 0 && (
    <div className="text-center py-12">
      <p className="text-gray-500 text-lg">
        No courses found for the selected filters.
      </p>
      <button
        onClick={() => {
          setSelectedProgram("All Programs");
          setSelectedDomain(domains[0]);
        }}
        className="mt-4 bg-[#EE2C3C] text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
      >
        Reset Filters
      </button>
    </div>
  )}
</div>


        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Course Details
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">
                    Selected College
                  </h3>
                  <p className="text-blue-900">{selectedCollege}</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">
                    Selected Program
                  </h3>
                  <p className="text-green-900">
                    {selectedDomain} - {selectedProgram}
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">
                    Course Information
                  </h3>
                  <p className="text-purple-900">
                    Detailed course information would be displayed here including
                    curriculum, fees, admission requirements, and more.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600"
                >
                  Close
                </button>
                <button className="flex-1 bg-[#EE2C3C] text-white py-3 rounded-lg hover:bg-red-700">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesTag;
