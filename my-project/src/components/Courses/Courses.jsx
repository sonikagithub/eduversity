import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSpecs, setSelectedSpecs] = useState([]);
  const [selectedUniversities, setSelectedUniversities] = useState([]);
  const [selectedCost, setSelectedCost] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const courseCategories = [
    { name: "Graduate Program" },
    { name: "Job Linked Program" },
    { name: "Masters Program" },
  ];

  const topSpecifications = [
    "Agri Business Management",
    "Business Analytics",
    "Data Science",
    "Digital Marketing",
  ];

  const universities = [
    "Amity University Online",
    "MBA University Online",
    "Integral University Online",
    "LIVU University Online",
    "Manglarytan University Online",
  ];

  const costRanges = [
    "10,000 - 60,000",
    "10,000 - 80,000",
    "10,000 - 150,000",
    "10,000 - 180,000",
  ];

  const courses = Array(6).fill({
    university: "Manipal University Online",
    title: "MBA (Master Of Business Administration In HB Management)",
    duration: "2 years",
    students: 156,
    cost: "1,75,000",
    type: "MBA Program",
    rating: 4.5, // Added rating
  });

  const placeholders = [
    "Search course ...",
    "Search specialization ...",
    "Search university ...",
  ];
  const [placeholder, setPlaceholder] = useState(placeholders[0]);

  // Cycle the placeholder text every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholder((prev) => {
        const currentIndex = placeholders.indexOf(prev);
        const nextIndex = (currentIndex + 1) % placeholders.length;
        return placeholders[nextIndex];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.university.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const toggleSpecification = (spec) => {
    if (selectedSpecs.includes(spec)) {
      setSelectedSpecs(selectedSpecs.filter((s) => s !== spec));
    } else {
      setSelectedSpecs([...selectedSpecs, spec]);
    }
  };

  const toggleUniversity = (university) => {
    if (selectedUniversities.includes(university)) {
      setSelectedUniversities(
        selectedUniversities.filter((u) => u !== university)
      );
    } else {
      setSelectedUniversities([...selectedUniversities, university]);
    }
  };

  // Star rating component
  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-3 h-3 ${
              index < fullStars
                ? "text-yellow-400 fill-current"
                : hasHalfStar && index === fullStars
                ? "text-yellow-400 fill-current"
                : "text-gray-300 fill-current"
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-xs text-gray-600 ml-1">{rating}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div
        className="relative h-80 w-full bg-cover bg-center mb-12"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(238, 44, 60, 0.9) 0%, rgba(238, 44, 60, 0.6) 50%, rgba(238, 44, 60, 0.3) 100%), url('https://png.pngtree.com/background/20210709/original/pngtree-cartoon-education-training-cram-school-picture-image_917042.jpg')`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover Your Perfect Course
            </h1>
            <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">
              Explore thousands of courses from top universities worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-[#EE2C3C] hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Browse All Courses
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Main Content */}
      <div className="py-8 px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="max-w-12xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar - Improved Design */}
            <div className="lg:w-1/5">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sticky top-6">
                {/* Header with decorative element */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-8 bg-[#EE2C3C] rounded-full"></div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      All Filters
                    </h2>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Refine your course search
                  </p>
                </div>

                {/* Course Category */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#EE2C3C] rounded-full"></span>
                    Course Category
                  </h3>
                  <div className="space-y-3">
                    {courseCategories.map((category, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between group"
                      >
                        <label className="flex items-center space-x-3 cursor-pointer flex-1">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category.name)}
                            onChange={() => toggleCategory(category.name)}
                            className="h-4 w-4 text-[#EE2C3C] rounded border-gray-300 focus:ring-[#EE2C3C]"
                          />
                          <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                            {category.name}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Initiatives */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#EE2C3C] rounded-full"></span>
                    Initiatives
                  </h3>
                  <div className="space-y-3">
                    {universities.map((university, index) => (
                      <label
                        key={index}
                        className="flex items-center space-x-3 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={selectedUniversities.includes(university)}
                          onChange={() => toggleUniversity(university)}
                          className="h-4 w-4 text-[#EE2C3C] rounded border-gray-300 focus:ring-[#EE2C3C]"
                        />
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                          {university}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Top Specifications in MBA */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#EE2C3C] rounded-full"></span>
                    Top Specifications in MBA
                  </h3>
                  <div className="space-y-3">
                    {topSpecifications.map((spec, index) => (
                      <label
                        key={index}
                        className="flex items-center space-x-3 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={selectedSpecs.includes(spec)}
                          onChange={() => toggleSpecification(spec)}
                          className="h-4 w-4 text-[#EE2C3C] rounded border-gray-300 focus:ring-[#EE2C3C]"
                        />
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                          {spec}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Cost */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#EE2C3C] rounded-full"></span>
                    Cost
                  </h3>
                  <div className="space-y-3">
                    {costRanges.map((range, index) => (
                      <label
                        key={index}
                        className="flex items-center space-x-3 cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="cost"
                          checked={selectedCost === range}
                          onChange={() => setSelectedCost(range)}
                          className="h-4 w-4 text-[#EE2C3C] border-gray-300 focus:ring-[#EE2C3C]"
                        />
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                          {range}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Reset Filters Button */}
                <button
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedSpecs([]);
                    setSelectedUniversities([]);
                    setSelectedCost("");
                    setSelectedLocation("");
                    setSearchTerm("");
                  }}
                  className="w-full text-gray-700 hover:text-red-600 py-3 rounded-lg duration-200 font-medium"
                >
                  Reset All Filters
                </button>
              </div>
            </div>

            {/* Courses List - Three per row */}
            <div className="lg:w-4/5">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                {/* Search Header */}
                <div className="mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900 mb-2">
                        Explore Top University Programs
                      </h1>
                      <p className="text-gray-600">
                        Find the perfect course for your career goals
                      </p>
                    </div>
                    <div className="relative w-full sm:w-64">
                      <input
                        type="text"
                        placeholder={placeholder}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EE2C3C] focus:border-[#EE2C3C] outline-none transition-colors"
                      />
                      <svg
                        className="absolute left-3 top-3.5 h-4 w-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Results Count */}
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600">
                      Showing{" "}
                      <span className="font-semibold">
                        {filteredCourses.length}
                      </span>{" "}
                      courses
                    </p>
                  </div>
                </div>

                {/* Courses Grid - Three per row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.map((course, index) => (
                    <div
                      key={index}
                      onClick={() => navigate("/course-detail")}
                      className="bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden"
                    >
                      {/* Image with Logo Area */}
                      <div className="relative">
                        <img
                          src={
                            course.image ||
                            "https://campuspro.co.in/collage-image/1749038685_row_211.jpg"
                          }
                          alt={course.title}
                          className="w-full h-64 object-cover rounded-2xl"
                        />
                        {/* Logo Area - Top Left */}
                        <div className="absolute top-3 left-3 bg-white rounded-lg shadow-md p-2 w-32 h-12 flex items-center justify-center">
                          <img
                            src={
                              course.image ||
                              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIIEVWp9WNqpPQHXg_zDk03EDSkoWJPVmTBQ&s"
                            }
                            alt="University Logo"
                            className="h-full object-contain"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        {/* University name with rating stars */}
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-gray-500 text-sm font-medium">
                            {course.university}
                          </p>
                          <StarRating rating={course.rating} />
                        </div>

                        <h3 className="text-[15px] leading-snug font-semibold text-gray-900 mb-4 hover:text-[#EE2C3C] transition-colors">
                          {course.title}
                        </h3>

                        <div className="flex flex-col gap-2 text-sm text-gray-700 mb-3">
                          <div className="flex items-center gap-2">
                            {/* Clock Icon for Duration */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 text-red-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 text-[#EE2C3C]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12l2 2 4-4m1-6H8a2 2 0 00-2 2v14l4-2 4 2 4-2V6a2 2 0 00-2-2z"
                              />
                            </svg>
                            <span>UGC-entitled, NAAC A+ Accredited</span>
                          </div>
                        </div>

                        {/* Gray Line */}
                        <div className="border-t border-gray-200 my-3"></div>

                        {/* Bottom Section with Total Cost and View More Button */}
                        <div className="flex items-center justify-between">
                          {/* Left Side - Total Cost */}
                          <div className="text-left">
                            <p className="text-xs text-gray-500">Total Cost</p>
                            <p className="text-lg font-bold text-gray-900">
                              {course.cost || "$999"}
                            </p>
                          </div>

                          {/* Right Side - View More Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              // Add your view more logic here
                              console.log(
                                "View more clicked for:",
                                course.title
                              );
                            }}
                            className="flex items-center gap-1 text-[#EE2C3C] hover:text-red-700 font-medium text-sm px-3 py-2 rounded-lg hover:bg-red-50 transition-colors"
                          >
                            View More
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* No Results State */}
                {filteredCourses.length === 0 && (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 mx-auto mb-4 text-gray-300">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-lg mb-4">
                      No courses found for the selected filters.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedCategories([]);
                        setSelectedSpecs([]);
                        setSelectedUniversities([]);
                        setSelectedCost("");
                        setSelectedLocation("");
                        setSearchTerm("");
                      }}
                      className="bg-[#EE2C3C] text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium"
                    >
                      Reset Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
