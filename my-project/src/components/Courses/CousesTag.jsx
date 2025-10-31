import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react"; // ✅ Icon

const CoursesTag = ({ onNavigate }) => {
  const navigate = useNavigate();

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
    {
      name: "Marketing Management (MBA)",
      duration: "2 years",
      type: "MBA",
      college: "NMIMS University",
    },
    {
      name: "Human Resource Management (MBA)",
      duration: "2 years",
      type: "MBA",
      college: "Amity University",
    },
    {
      name: "Finance Management (MBA)",
      duration: "2 years",
      type: "MBA",
      college: "Dr. D.Y Patil Vidyapeeth, Pune",
    },
    {
      name: "Information Technology (MBA)",
      duration: "2 years",
      type: "MBA",
      college: "Noida International University",
    },
    {
      name: "Operations Management (MBA)",
      duration: "2 years",
      type: "MBA",
      college: "Vivekananda Global University",
    },
  ];

  const placeholders = [
    "Search courses ...",
    "Search specialization ...",
    "Search universities ...",
  ];

  const [selectedDomain, setSelectedDomain] = useState(domains[0]);
  const [selectedProgram, setSelectedProgram] = useState(programTypes[0]);
  const [selectedCollege, setSelectedCollege] = useState(colleges[0]);
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [searchTerm, setSearchTerm] = useState("");
  const [placeholder, setPlaceholder] = useState(placeholders[0]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholder((prev) => {
        const currentIndex = placeholders.indexOf(prev);
        const nextIndex = (currentIndex + 1) % placeholders.length;
        return placeholders[nextIndex];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let filtered = courses;

    // Program filter
    if (selectedProgram === "PG Programs") {
      filtered = filtered.filter((course) => course.type === "MBA");
    } else if (selectedProgram === "UG Programs") {
      filtered = filtered.filter((course) => course.type === "UG");
    }

    // Search filter
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter(
        (course) =>
          course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.college.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredCourses(filtered);
  }, [selectedDomain, selectedProgram, selectedCollege, searchTerm]);

  // Function to handle navigation
  const handleNavigation = () => {
    if (onNavigate) {
      onNavigate();
    }
    navigate("/courses");
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row h-[80vh]">
          {/* LEFT SIDEBAR */}
          <div className="lg:w-1/4 bg-white p-6 border-r border-gray-200 overflow-y-auto">
            {/* Domain Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                DOMAIN
              </h3>
              <ul className="space-y-2">
                {domains.map((domain, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectedDomain(domain)}
                    className={`flex items-center gap-2 cursor-pointer ${
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

            {/* Program Filter */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                PROGRAM WISE
              </h3>
              <ul className="space-y-2">
                {programTypes.map((program, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectedProgram(program)}
                    className={`flex items-center gap-2 cursor-pointer ${
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

            {/* College Filter */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                COLLEGES
              </h3>
              <ul className="space-y-2">
                {colleges.map((college, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectedCollege(college)}
                    className={`flex items-center gap-2 cursor-pointer ${
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

          {/* RIGHT SECTION */}
          <div className="lg:w-3/4 p-6 overflow-y-auto">
            {/* 🔍 Search Bar and Button */}

            <div className="flex justify-end items-center mb-6 gap-3">
              <div className="relative w-full md:w-1/3">
                <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={placeholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EE2C3C] focus:outline-none"
                />
              </div>
              <button
                onClick={() => navigate("/courses")}
                className="bg-[#EE2C3C] text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
              >
                All Courses
              </button>
            </div>

            {/* COURSE CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCourses.map((course, index) => (
                <div
                  key={index}
                  onClick={handleNavigation}
                  className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-36 flex flex-col justify-between cursor-pointer"
                >
                  <div className="p-4 pb-0">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-sm font-semibold text-gray-800">
                        {course.name}
                      </h3>
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {course.type}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">{course.college}</p>
                  </div>

                  <div className="flex justify-between items-center px-4 py-3 border-t border-gray-100">
                    <span className="text-gray-600 text-xs px-3 py-1 rounded-full">
                      {course.duration}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigation();
                      }}
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
                <p className="text-gray-500 text-lg">No courses found.</p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedProgram("All Programs");
                    setSelectedDomain(domains[0]);
                  }}
                  className="mt-4 bg-[#EE2C3C] text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesTag;
