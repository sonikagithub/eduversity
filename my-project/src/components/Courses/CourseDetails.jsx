import React, { useState, useRef } from "react";
import BgImage from "../../assets/Mangalayatan.jpg";
import CourseImg from "../../assets/Mangalayatan.jpg";
import Logo1 from "../../assets/AICTE.png";
import Logo2 from "../../assets/AICTE.png";
import Logo3 from "../../assets/AICTE.png";
import Specilization from "./Specilization";
import WhyChoose from "./WhyChoose";
import CourseSkills from "./CourseSkills";
import ProgramBenifit from "./ProgramBenifit";
import Semester from "./Semester";
import CourseCertificate from "./CourseCertificate";
import CollageCareer from "./CollageCareer";
import CourseJob from "./CourseJob";

const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState("specializations");
  const scrollRef = useRef(null);

  const tabs = [
    { id: "specializations", label: "Specializations" },
    { id: "highlights", label: "Why LPU Online" },
    { id: "fee-and-eligibility", label: "Fee & Eligibility" },
    { id: "program-usps", label: "Program USPs" },
    { id: "faculty", label: "Instructors" },
    { id: "curriculum", label: "Curriculum" },
    { id: "lms", label: "LMS" },
    { id: "career-placements", label: "Career & Placements" },
    { id: "admissions", label: "Admissions" },
    { id: "faqs", label: "FAQs" },
  ];

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <>
      {/* 🌄 Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-20"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-white">
          {/* Left side */}
          <div className="md:w-1/2 space-y-6 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Unlock Your Potential with Our{" "}
              <span className="text-red-600">Online Courses</span>
            </h1>
            <p className="text-lg text-gray-700">
              The Online Master of Computer Applications (MCA) program offers
              five specializations, preparing tech enthusiasts for rewarding
              careers in the digital era. The program having industry-oriented
              curriculum comes with LIVE lectures by top-tier faculty on
              weekends, Master Classes by industry experts, Flexible Online
              Exams, Placement Support, and much more.
            </p>

            <div className="flex items-center gap-6 mt-6">
              {[Logo1, Logo2, Logo3].map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt={`Partner ${i + 1}`}
                  className="w-16 h-16 rounded-full border-2 border-white shadow-md object-cover"
                />
              ))}
            </div>

          
          </div>

          {/* Right side */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src={CourseImg}
              alt="Course Illustration"
              className="w-80 md:w-96 rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* 🟦 Info Card Grid Section */}
      <div className="relative z-20 -mt-20 max-w-6xl mx-auto px-6">
        <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-gray-300 overflow-hidden">
          {[
            {
              title: "Duration",
              value: "2 Years",
              desc: "Total of 4 semesters",
            },
            {
              title: "Commitment",
              value: "8–10 hours/week",
              desc: "Recommended hours for the program",
            },
            {
              title: "Model",
              value: "LIVE + Recorded",
              desc: "Video Lectures by Expert Faculty",
            },
            {
              title: "Fee",
              value: "₹ 40,400 / Sem.",
              desc: "No-Cost EMI available",
            },
            {
              title: "Application Deadline",
              value: "10th Nov '25",
              desc: "Batches start every 6 months",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 text-center flex flex-col justify-center"
            >
              <h3 className="text-xl font-semibold text-black">
                {item.title}
              </h3>
              <div className="border-t border-gray-300 my-3"></div>
              <p className="text-gray-600">{item.value}</p>
              <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🧭 Tab Section */}
      <section className="relative max-w-6xl mx-auto px-4 mt-16 mb-10">
        {/* Navigation Wrapper */}
        <div className="relative flex items-center">
          {/* Left Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
          >
            ‹
          </button>

          {/* Tabs List */}
          <ul
            ref={scrollRef}
            className="flex overflow-x-auto whitespace-nowrap scrollbar-hide gap-8 mx-10 border-b border-gray-300 pb-2"
          >
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className={`cursor-pointer text-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "text-red-600 border-b-2 border-red-600 pb-2"
                    : "text-gray-600 hover:text-black"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <a href={`#${tab.id}`}>{tab.label}</a>
              </li>
            ))}
          </ul>

          {/* Right Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
          >
            ›
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow-md text-gray-700 leading-relaxed">
          {activeTab === "specializations" && (
            <p>
              Explore multiple specializations tailored to align your interests
              with your career goals.
            </p>
          )}
          {activeTab === "highlights" && (
            <p>
              Learn why LPU Online stands out with its modern LMS, top faculty,
              and flexible learning model.
            </p>
          )}
          {activeTab === "fee-and-eligibility" && (
            <p>
              Get complete details about the program fee structure, eligibility
              criteria, and EMI options.
            </p>
          )}
          {activeTab === "program-usps" && (
            <p>
              Discover unique program USPs such as mentorship, live sessions,
              and real-world projects.
            </p>
          )}
          {activeTab === "faculty" && (
            <p>Meet experienced instructors from academia and industry.</p>
          )}
          {activeTab === "curriculum" && (
            <p>Review detailed semester-wise curriculum and subjects.</p>
          )}
          {activeTab === "lms" && (
            <p>Experience LPU’s state-of-the-art learning management system.</p>
          )}
          {activeTab === "career-placements" && (
            <p>
              Know about placement support, career guidance, and top recruiters.
            </p>
          )}
          {activeTab === "admissions" && (
            <p>Check the step-by-step process to apply and secure your admission.</p>
          )}
          {activeTab === "faqs" && (
            <p>Find answers to common queries about the program.</p>
          )}
        </div>
      </section>
      <Specilization/>
      <WhyChoose/>
      <CourseSkills/>
      <ProgramBenifit/>
      <Semester/>
      <CourseCertificate/>  
      <CollageCareer/>
      <CourseJob/>
    </>
  );
};

export default CourseDetails;
