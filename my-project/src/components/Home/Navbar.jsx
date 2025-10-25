import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CoursesTag from "../Courses/CousesTag";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <span className="text-xl font-bold text-[#EE2C3C]">Eduversity</span>
        </Link>

        {/* Right Side */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-[#EE2C3C] hover:bg-[#c92230] 
              focus:ring-4 focus:outline-none focus:ring-[#f36b76] font-medium 
              rounded-full text-sm px-5 py-2 text-center transition-all duration-200"
          >
            Refer and Earn
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center 
              text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
              focus:outline-none focus:ring-2 focus:ring-gray-200 
              dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul
            className="flex flex-col p-4 md:p-0 mt-4 font-medium border 
              border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse 
              md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 
              md:dark:bg-gray-900 dark:border-gray-700"
          >
            {/* ✅ Online Courses Dropdown */}
            <li className="relative"
                onMouseEnter={() => setIsCoursesDropdownOpen(true)}
                onMouseLeave={() => setIsCoursesDropdownOpen(false)}>
              <button
                onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
                className={`flex items-center justify-between py-2 px-3 
                  transition-all duration-200 md:p-0 ${
                  isCoursesDropdownOpen
                    ? "text-[#EE2C3C] font-semibold"
                    : "text-gray-900 hover:text-[#EE2C3C]"
                }`}
              >
                Online Courses
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    isCoursesDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
             {isCoursesDropdownOpen && (
  <div className="fixed inset-0 z-30 flex items-center justify-center">
  <div className="w-[90vw] h-[90vh] max-w-6xl bg-white rounded-2xl shadow-2xl border border-gray-200">
    <div className="p-4">
      <CoursesTag />
    </div>
  </div>
</div>
)}
            </li>

            {/* About Us */}
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-3 transition-all duration-200 ${
                    isActive
                      ? "text-[#EE2C3C] font-semibold"
                      : "text-gray-900 hover:text-[#EE2C3C]"
                  }`
                }
              >
                About Us
              </NavLink>
            </li>

            {/* Compare Colleges */}
            <li>
              <NavLink
                to="/compaircollage"
                className={({ isActive }) =>
                  `block py-2 px-3 transition-all duration-200 ${
                    isActive
                      ? "text-[#EE2C3C] font-semibold"
                      : "text-gray-900 hover:text-[#EE2C3C]"
                  }`
                }
              >
                Compare Colleges
              </NavLink>
            </li>

            {/* Top Universities */}
            <li>
              <NavLink
                to="/top-universities"
                className={({ isActive }) =>
                  `block py-2 px-3 transition-all duration-200 ${
                    isActive
                      ? "text-[#EE2C3C] font-semibold"
                      : "text-gray-900 hover:text-[#EE2C3C]"
                  }`
                }
              >
                Top Universities
              </NavLink>
            </li>

            {/* More Dropdown */}
            <li className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full py-2 px-3 
                  text-gray-900 hover:text-[#EE2C3C] md:p-0 dark:text-white"
              >
                More
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <NavLink
                        to="/bloglisting"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/partner"
                        className="block px-4 py-2 text-[#EE2C3C] hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        Partner with Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        Contact Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/tools"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        Calculator Tools
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;