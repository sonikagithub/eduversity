import React, { useState, useRef, useEffect } from "react";
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
import CourseFAQ from "./CourseFAQ";

const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState("specializations");
  const [isSticky, setIsSticky] = useState(false);
  const scrollRef = useRef(null);
  const tabSectionRef = useRef(null);
  const sectionRefs = useRef({});

  const tabs = [
    { id: "specializations", label: "Specializations", component: <Specilization /> },
    { id: "highlights", label: "Why LPU Online", component: <WhyChoose /> },
    { id: "skills", label: "Skills You'll Learn", component: <CourseSkills /> },
    { id: "program-usps", label: "Program USPs", component: <ProgramBenifit /> },
    { id: "curriculum", label: "Curriculum", component: <Semester /> },
    { id: "certificate", label: "Certificate", component: <CourseCertificate /> },
    { id: "career-placements", label: "Career & Placements", component: <CollageCareer /> },
    { id: "job-opportunities", label: "Job Opportunities", component: <CourseJob /> },
    { id: "faqs", label: "FAQs", component: <CourseFAQ /> },
  ];

  // Set up section refs
  useEffect(() => {
    tabs.forEach(tab => {
      sectionRefs.current[tab.id] = document.getElementById(tab.id);
    });
  }, []);

  // Sticky tab effect
  useEffect(() => {
    const handleScroll = () => {
      // Sticky tabs
      if (tabSectionRef.current) {
        const tabSectionTop = tabSectionRef.current.offsetTop;
        const shouldSticky = window.scrollY > tabSectionTop;
        setIsSticky(shouldSticky);
      }

      // Auto-activate tabs based on scroll position
      const scrollPosition = window.scrollY + 150; // Offset for better UX

      for (let i = tabs.length - 1; i >= 0; i--) {
        const tab = tabs[i];
        const element = sectionRefs.current[tab.id];
        
        if (element && scrollPosition >= element.offsetTop) {
          setActiveTab(tab.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tabs]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
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
              className="p-6 text-left flex flex-col justify-center"
            >
              <h3 className="text-xl font-semibold text-black">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.value}</p>
              <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🧭 Sticky Tab Navigation */}
      <section 
        ref={tabSectionRef}
        className={`relative max-w-8xl mx-auto px-4 mt-16 transition-all duration-300 ${
          isSticky 
            ? 'fixed top-0 left-0 right-0 z-50 bg-white shadow-lg py-4 mt-0 border-b' 
            : 'relative'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          {/* Navigation Wrapper */}
          <div className="relative flex items-center">
            {/* Left Button */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 border border-gray-200 transition-all"
            >
              ‹
            </button>

            {/* Tabs List */}
            <ul
              ref={scrollRef}
              className="flex overflow-x-auto whitespace-nowrap scrollbar-hide gap-8 mx-12 border-b-0 pb-0"
            >
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  className={`cursor-pointer text-lg font-medium transition-all duration-200 px-2 py-3 rounded-lg ${
                    activeTab === tab.id
                      ? "text-white bg-red-600 shadow-md"
                      : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                  }`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  <button className="focus:outline-none px-3 py-1 font-semibold">
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Right Button */}
            <button
              onClick={scrollRight}
              className="absolute right-0 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 border border-gray-200 transition-all"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* Spacer when tabs become sticky */}
      {isSticky && <div className="h-20"></div>}

      {/* All Content Sections */}
      <div className="max-w-full mx-auto px-4 py-8">
        {tabs.map((tab) => (
          <section
            key={tab.id}
            id={tab.id}
            className="scroll-mt-28 mb-12"
          >
            <div className={`p-6 rounded-xl ${
              activeTab === tab.id ? 'bg-white' : 'bg-white'
            } transition-all duration-300`}>
              {tab.component}
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default CourseDetails;