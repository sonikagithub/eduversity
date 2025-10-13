import React, { useState } from "react";
import { FaUniversity, FaFilter, FaPlus, FaTimes, FaStar, FaCheck, FaChevronDown } from "react-icons/fa";
import BeyondAcademics from "./beyondacademics";
import TopUniversity from "./TopUniversity";
import SampleImage from '../../assets/Vector.png'
import GetCall from "../AboutUs/GetCall";

const CompairCollege = () => {
  const [showThirdSearch, setShowThirdSearch] = useState(false);
  const [searchValues, setSearchValues] = useState(["NMIMS CDOE", "Amity University Online", ""]);
  const [dropdownOpen, setDropdownOpen] = useState([false, false, false]);
  const [selectedFields, setSelectedFields] = useState([
    "Institute Type", "Establishment", "Abbreviation", "About", 
    "Accreditation", "Programs", "Specialisation", "Duration", 
    "Learning Methodology", "Degree", "Fees", "Review", 
    "Eligibility", "Our Recommendation", "Rating", "Website"
  ]);

  // Dummy data for colleges
  const collegeData = {
    "NMIMS CDOE": {
      "Institute Type": "Deemed-to-be University",
      "Establishment": "1981",
      "Abbreviation": "NMIMS",
      "About": "NMIMS CDOE is a leading distance learning institute offering quality education through online mode with industry-relevant curriculum.",
      "Accreditation": "UGC-DEB, NAAC A+",
      "Programs": "MBA, BBA, MCA, B.Com, M.Com",
      "Specialisation": "Marketing, Finance, HR, IT, Operations",
      "Duration": "2-3 years",
      "Learning Methodology": "Online Live Classes, Recorded Lectures, Digital Library",
      "Degree": "UGC Recognized Degree",
      "Fees": "₹2,00,000 - ₹4,00,000",
      "Review": "4.2/5",
      "Eligibility": "Graduation with 50% marks",
      "Our Recommendation": "Highly Recommended for Working Professionals",
      "Rating": "4.5/5",
      "Website": "https://cdoe.nmims.edu"
    },
    "Amity University Online": {
      "Institute Type": "Private University",
      "Establishment": "2005",
      "Abbreviation": "Amity Online",
      "About": "Amity University Online offers UGC-entitled online degrees with industry-relevant curriculum and global recognition.",
      "Accreditation": "UGC-DEB, NAAC A+",
      "Programs": "MBA, BBA, BCA, MCA, B.Com, M.Com",
      "Specialisation": "Digital Marketing, Data Science, Finance, International Business",
      "Duration": "2-4 years",
      "Learning Methodology": "Interactive Online Platform, Virtual Labs, Webinars",
      "Degree": "UGC Recognized Degree",
      "Fees": "₹1,80,000 - ₹3,50,000",
      "Review": "4.0/5",
      "Eligibility": "10+2 for UG, Graduation for PG",
      "Our Recommendation": "Good for Career Advancement",
      "Rating": "4.3/5",
      "Website": "https://amity.edu/online"
    },
    "Manipal University": {
      "Institute Type": "Private University",
      "Establishment": "1953",
      "Abbreviation": "MUJ",
      "About": "Manipal University offers online programs through its dedicated online learning platform with expert faculty.",
      "Accreditation": "UGC-DEB, NAAC A++",
      "Programs": "MBA, BBA, BCA, MCA, Data Science",
      "Specialisation": "Business Analytics, Finance, Marketing, IT Management",
      "Duration": "2-4 years",
      "Learning Methodology": "Blended Learning, Virtual Classroom, LMS",
      "Degree": "UGC Recognized Degree",
      "Fees": "₹2,50,000 - ₹4,50,000",
      "Review": "4.3/5",
      "Eligibility": "Minimum 50% in qualifying exam",
      "Our Recommendation": "Excellent for Technical Programs",
      "Rating": "4.4/5",
      "Website": "https://manipal.edu"
    },
    "LPU Online": {
      "Institute Type": "Private University",
      "Establishment": "2005",
      "Abbreviation": "LPU",
      "About": "Lovely Professional University offers comprehensive online programs with flexible learning options.",
      "Accreditation": "UGC-DEB, NAAC A+",
      "Programs": "MBA, BBA, B.Com, M.Com, BCA",
      "Specialisation": "General Management, Finance, Marketing, HR",
      "Duration": "2-3 years",
      "Learning Methodology": "Online Classes, E-Library, Discussion Forums",
      "Degree": "UGC Recognized Degree",
      "Fees": "₹1,50,000 - ₹3,00,000",
      "Review": "3.9/5",
      "Eligibility": "10+2 for UG, Graduation for PG",
      "Our Recommendation": "Budget-friendly Option",
      "Rating": "4.0/5",
      "Website": "https://lpu.in"
    },
    "Sikkim Manipal University": {
      "Institute Type": "Private University",
      "Establishment": "1995",
      "Abbreviation": "SMU",
      "About": "Sikkim Manipal University offers distance education programs with industry-oriented curriculum.",
      "Accreditation": "UGC-DEB, NAAC A",
      "Programs": "MBA, BBA, BCA, MCA, B.Com",
      "Specialisation": "Finance, Marketing, HR, IT",
      "Duration": "2-4 years",
      "Learning Methodology": "Online Platform, Study Material, Webinars",
      "Degree": "UGC Recognized Degree",
      "Fees": "₹1,80,000 - ₹3,20,000",
      "Review": "4.1/5",
      "Eligibility": "10+2 for UG, Graduation for PG",
      "Our Recommendation": "Good for Working Professionals",
      "Rating": "4.2/5",
      "Website": "https://smu.edu.in"
    },
    "Vignan University": {
      "Institute Type": "Private University",
      "Establishment": "1997",
      "Abbreviation": "VU",
      "About": "Vignan University offers online programs with focus on practical learning and industry exposure.",
      "Accreditation": "UGC-DEB, NAAC A",
      "Programs": "MBA, BBA, B.Com, BCA",
      "Specialisation": "Business Management, Finance, Marketing",
      "Duration": "2-3 years",
      "Learning Methodology": "Online Classes, Virtual Labs, Assessments",
      "Degree": "UGC Recognized Degree",
      "Fees": "₹1,60,000 - ₹2,80,000",
      "Review": "3.8/5",
      "Eligibility": "10+2 for UG, Graduation for PG",
      "Our Recommendation": "Affordable Quality Education",
      "Rating": "4.0/5",
      "Website": "https://vignan.ac.in"
    }
  };

  // Available universities for dropdown
  const availableUniversities = Object.keys(collegeData);

  const toggleDropdown = (index) => {
    const newDropdownOpen = [...dropdownOpen];
    newDropdownOpen[index] = !newDropdownOpen[index];
    setDropdownOpen(newDropdownOpen);
  };

  const handleUniversitySelect = (index, university) => {
    const newValues = [...searchValues];
    newValues[index] = university;
    setSearchValues(newValues);
    
    const newDropdownOpen = [...dropdownOpen];
    newDropdownOpen[index] = false;
    setDropdownOpen(newDropdownOpen);
  };

  const handleFilterClick = () => {
    setShowThirdSearch(!showThirdSearch);
    if (!showThirdSearch) {
      const newValues = [...searchValues];
      newValues[2] = "Manipal University";
      setSearchValues(newValues);
    } else {
      const newValues = [...searchValues];
      newValues[2] = "";
      setSearchValues(newValues);
    }
  };

  const handleSearchChange = (index, value) => {
    const newValues = [...searchValues];
    newValues[index] = value;
    setSearchValues(newValues);
  };

  const handleRemoveCollege = (index) => {
    const newValues = [...searchValues];
    newValues[index] = "";
    setSearchValues(newValues);
    if (index === 2) setShowThirdSearch(false);
    
    const newDropdownOpen = [...dropdownOpen];
    newDropdownOpen[index] = false;
    setDropdownOpen(newDropdownOpen);
  };

  const getCollegeData = (collegeName) => {
    return collegeData[collegeName] || null;
  };

  const fields = [
    "Institute Type",
    "Establishment",
    "Abbreviation",
    "About",
    "Accreditation",
    "Programs",
    "Specialisation",
    "Duration",
    "Learning Methodology",
    "Degree",
    "Fees",
    "Review",
    "Eligibility",
    "Our Recommendation",
    "Rating",
    "Website"
  ];

  const toggleFieldSelection = (field) => {
    if (selectedFields.includes(field)) {
      setSelectedFields(selectedFields.filter(f => f !== field));
    } else {
      setSelectedFields([...selectedFields, field]);
    }
  };

  const selectAllFields = () => {
    setSelectedFields(fields);
  };

  const clearAllFields = () => {
    setSelectedFields([]);
  };

  const selectedColleges = searchValues.filter(val => val && getCollegeData(val));

  return (
    <>
      <div className="py-8 md:py-20 bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl bg-white border border-red-200 rounded-xl md:rounded-3xl shadow-lg md:shadow-2xl p-4 sm:p-6 md:p-8">
          {/* Heading */}
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
            Compare <span className="text-red-600">Online Colleges</span> Side-By-Side
          </h1>
          <p className="text-center text-sm sm:text-base text-gray-700 mb-6 md:mb-8 px-2">
            Easily Compare Top Online Colleges Side By Side And Make An Informed Decision For Your Future.
          </p>

          {/* Search Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 md:mb-8 transition-all duration-300">
            {/* Search 1 */}
            <div className="relative w-full sm:w-1/3 lg:w-1/4">
              <div className="flex items-center border rounded-lg px-3 py-2 w-full relative">
                <FaUniversity className="text-red-500 mr-2 text-lg flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search University..."
                  className="w-full focus:outline-none text-gray-700 text-sm sm:text-base"
                  value={searchValues[0]}
                  onChange={(e) => handleSearchChange(0, e.target.value)}
                  onFocus={() => toggleDropdown(0)}
                />
                <button
                  onClick={() => toggleDropdown(0)}
                  className="absolute right-8 text-gray-400 hover:text-red-500"
                >
                  <FaChevronDown />
                </button>
                {searchValues[0] && (
                  <button
                    onClick={() => handleRemoveCollege(0)}
                    className="absolute right-2 text-gray-400 hover:text-red-500"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
              
              {/* Dropdown for Search 1 */}
              {dropdownOpen[0] && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto mt-1">
                  {availableUniversities
                    .filter(university => 
                      university.toLowerCase().includes(searchValues[0].toLowerCase())
                    )
                    .map((university, index) => (
                      <div
                        key={index}
                        className="p-3 hover:bg-red-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                        onClick={() => handleUniversitySelect(0, university)}
                      >
                        <div className="font-medium text-gray-800">{university}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          {collegeData[university]?.["Institute Type"]}
                        </div>
                      </div>
                    ))
                  }
                </div>
              )}
            </div>

            {/* Search 2 */}
            <div className="relative w-full sm:w-1/3 lg:w-1/4">
              <div className="flex items-center border rounded-lg px-3 py-2 w-full relative">
                <FaUniversity className="text-red-500 mr-2 text-lg flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search University..."
                  className="w-full focus:outline-none text-gray-700 text-sm sm:text-base"
                  value={searchValues[1]}
                  onChange={(e) => handleSearchChange(1, e.target.value)}
                  onFocus={() => toggleDropdown(1)}
                />
                <button
                  onClick={() => toggleDropdown(1)}
                  className="absolute right-8 text-gray-400 hover:text-red-500"
                >
                  <FaChevronDown />
                </button>
                {searchValues[1] && (
                  <button
                    onClick={() => handleRemoveCollege(1)}
                    className="absolute right-2 text-gray-400 hover:text-red-500"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
              
              {/* Dropdown for Search 2 */}
              {dropdownOpen[1] && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto mt-1">
                  {availableUniversities
                    .filter(university => 
                      university.toLowerCase().includes(searchValues[1].toLowerCase())
                    )
                    .map((university, index) => (
                      <div
                        key={index}
                        className="p-3 hover:bg-red-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                        onClick={() => handleUniversitySelect(1, university)}
                      >
                        <div className="font-medium text-gray-800">{university}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          {collegeData[university]?.["Institute Type"]}
                        </div>
                      </div>
                    ))
                  }
                </div>
              )}
            </div>
                
            {/* Conditionally Rendered Search 3 */}
            {showThirdSearch && (
              <div className="relative w-full sm:w-1/3 lg:w-1/4">
                <div className="flex items-center border rounded-lg px-3 py-2 w-full animate-fadeIn relative">
                  <FaUniversity className="text-red-500 mr-2 text-lg flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Search University..."
                    className="w-full focus:outline-none text-gray-700 text-sm sm:text-base"
                    value={searchValues[2]}
                    onChange={(e) => handleSearchChange(2, e.target.value)}
                    onFocus={() => toggleDropdown(2)}
                  />
                  <button
                    onClick={() => toggleDropdown(2)}
                    className="absolute right-8 text-gray-400 hover:text-red-500"
                  >
                    <FaChevronDown />
                  </button>
                  {searchValues[2] && (
                    <button
                      onClick={() => handleRemoveCollege(2)}
                      className="absolute right-2 text-gray-400 hover:text-red-500"
                    >
                      <FaTimes />
                    </button>
                  )}
                </div>
                
                {/* Dropdown for Search 3 */}
                {dropdownOpen[2] && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto mt-1">
                    {availableUniversities
                      .filter(university => 
                        university.toLowerCase().includes(searchValues[2].toLowerCase())
                      )
                      .map((university, index) => (
                        <div
                          key={index}
                          className="p-3 hover:bg-red-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                          onClick={() => handleUniversitySelect(2, university)}
                        >
                          <div className="font-medium text-gray-800">{university}</div>
                          <div className="text-xs text-gray-500 mt-1">
                            {collegeData[university]?.["Institute Type"]}
                          </div>
                        </div>
                      ))
                    }
                  </div>
                )}
              </div>
            )}

            {/* Filter Button with Icon */}
            <button
              onClick={handleFilterClick}
              className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg flex items-center justify-center transition-all duration-300 w-full sm:w-auto mt-2 sm:mt-0"
              title={showThirdSearch ? "Remove College" : "Add College"}
            >
              {showThirdSearch ? <FaTimes /> : <FaPlus />}
              <span className="ml-2 sm:hidden">
                {showThirdSearch ? "Remove College" : "Add College"}
              </span>
            </button>
          </div>

          {/* Filter Section */}
          <div className="mb-6 md:mb-8">
            {/* Filter Tags */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 max-h-40 sm:max-h-none overflow-y-auto py-2">
              {fields.map((item, index) => (
                <button
                  key={index}
                  onClick={() => toggleFieldSelection(item)}
                  className={`px-3 py-2 sm:px-4 sm:py-3 border rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1 sm:gap-2 ${
                    selectedFields.includes(item)
                      ? "bg-[#F9E6E6] text-black border-red-600 shadow-lg transform scale-105"
                      : "bg-white text-gray-700 border-gray-300 hover:border-red-300 hover:bg-red-50"
                  }`}
                >
                  {selectedFields.includes(item) && <FaCheck className="text-xs sm:text-sm" />}
                  <span className="whitespace-nowrap">{item}</span>
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-2">
              <button 
                onClick={selectAllFields}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <FaCheck />
                Select All Fields
              </button>
              <button 
                onClick={clearAllFields}
                className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-gray-300 hover:border-red-500 text-gray-700 hover:text-red-600 font-semibold rounded-lg transition-all hover:bg-red-50 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <FaTimes />
                Clear All
              </button>
              <button className="px-6 sm:px-8 py-2 sm:py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all text-sm sm:text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                <FaFilter />
                Compare Now
              </button>
            </div>
          </div>

          {/* College Comparison Grid - Table Style */}
          <div className="mt-6 md:mt-8 border-2 border-gray-200 rounded-xl overflow-hidden shadow-xl md:shadow-2xl overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Table Header */}
              <div className="grid grid-cols-4 bg-gradient-to-r from-red-600 to-red-700 text-white">
                <div className="p-4 sm:p-6 font-bold text-base sm:text-lg border-r border-red-500">Comparison Criteria</div>
                {selectedColleges.slice(0, 3).map((college, index) => (
                  <div key={index} className="p-4 sm:p-6 font-bold text-base sm:text-lg text-center border-r border-red-500 last:border-r-0">
                    <div className="truncate" title={college}>
                      {college}
                    </div>
                  </div>
                ))}
                {selectedColleges.length === 0 && (
                  <div className="col-span-3 p-4 sm:p-6 text-center text-sm sm:text-base">
                    Select colleges to compare
                  </div>
                )}
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {selectedFields.map((field, fieldIndex) => (
                  <div 
                    key={fieldIndex} 
                    className={`grid grid-cols-4 ${
                      fieldIndex % 2 === 0 ? 'bg-white' : 'bg-red-50'
                    } hover:bg-gray-100 transition-colors duration-200`}
                  >
                    {/* Field Name */}
                    <div className="p-3 sm:p-4 font-semibold text-gray-800 border-r border-gray-200 flex items-center text-sm sm:text-base">
                      {field}
                    </div>
                    
                    {/* College Data */}
                    {selectedColleges.slice(0, 3).map((collegeName, collegeIndex) => {
                      const college = getCollegeData(collegeName);
                      return (
                        <div 
                          key={collegeIndex} 
                          className="p-3 sm:p-4 border-r border-gray-200 last:border-r-0"
                        >
                          {field === "Rating" ? (
                            <div className="flex items-center justify-center space-x-1">
                              <FaStar className="text-yellow-400 text-sm sm:text-base" />
                              <span className="font-semibold text-sm sm:text-base">{college?.[field]}</span>
                            </div>
                          ) : field === "Our Recommendation" ? (
                            <span className={`px-2 py-1 rounded-full text-xs sm:text-sm font-medium ${
                              college?.[field]?.includes("Highly") ? "bg-green-100 text-green-800" :
                              college?.[field]?.includes("Excellent") ? "bg-blue-100 text-blue-800" :
                              college?.[field]?.includes("Good") ? "bg-yellow-100 text-yellow-800" :
                              "bg-gray-100 text-gray-800"
                            }`}>
                              {college?.[field]}
                            </span>
                          ) : field === "Website" ? (
                            <a 
                              href={college?.[field]} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 underline break-all text-xs sm:text-sm"
                            >
                              {college?.[field]}
                            </a>
                          ) : field === "Fees" ? (
                            <span className="font-semibold text-red-600 text-sm sm:text-base">{college?.[field]}</span>
                          ) : field === "About" ? (
                            <div className="text-gray-700 text-xs sm:text-sm max-h-20 overflow-y-auto">
                              {college?.[field] || "—"}
                            </div>
                          ) : (
                            <span className="text-gray-700 text-xs sm:text-sm">{college?.[field] || "—"}</span>
                          )}
                        </div>
                      );
                    })}
                    
                    {/* Empty state */}
                    {selectedColleges.length === 0 && (
                      <div className="col-span-3 p-3 sm:p-4 text-center text-gray-500 text-sm sm:text-base">
                        —
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>  

      <BeyondAcademics/>
      <TopUniversity/>
      <GetCall
        image={SampleImage}
        title1="Have a Question?"
        title2="Do Your want to get all Information About MBA?"
        description="Ask about colleges, courses, careers, or anything else. Our highly trained reps are standing by, ready to help."
        buttonText="Call Us Now"
      />
    </>
  );
};

export default CompairCollege;