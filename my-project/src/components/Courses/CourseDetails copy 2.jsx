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
  const [selectorStyle, setSelectorStyle] = useState({});
  const scrollRef = useRef(null);
  const tabSectionRef = useRef(null);
  const sectionRefs = useRef({});
  const tabRefs = useRef({});

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

  // Sticky + scroll sync effect
  useEffect(() => {
    const handleScroll = () => {
      if (tabSectionRef.current) {
        const tabSectionTop = tabSectionRef.current.offsetTop;
        setIsSticky(window.scrollY > tabSectionTop);
      }

      const scrollPosition = window.scrollY + 150;
      for (let i = tabs.length - 1; i >= 0; i--) {
        const tab = tabs[i];
        const element = sectionRefs.current[tab.id];
        if (element && scrollPosition >= element.offsetTop) {
          setActiveTab(tab.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tabs]);

  // Update moving red selector
  useEffect(() => {
    const activeElement = tabRefs.current[activeTab];
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement;
      setSelectorStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [activeTab]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      const offset = 100;
      const offsetPosition = element.offsetTop - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <>
      {/* 🏞️ Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-20"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          {/* Left */}
          <div className="md:w-1/2 space-y-6 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Unlock Your Potential with Our{" "}
              <span className="text-red-600">Online Courses</span>
            </h1>
            <p className="text-lg text-gray-700">
              The Online Master of Computer Applications (MCA) program offers
              five specializations, preparing tech enthusiasts for rewarding
              careers in the digital era.
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

          {/* Right */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src={CourseImg}
              alt="Course Illustration"
              className="w-80 md:w-96 rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* 🧭 Sticky Tab Navigation */}
      <section
        ref={tabSectionRef}
        className={`${
          isSticky
            ? "fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b"
            : "relative"
        } transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto relative px-4">
          {/* Scroll buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md border p-2 rounded-full z-20"
          >
            ‹
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md border p-2 rounded-full z-20"
          >
            ›
          </button>

          {/* Tab List */}
          <div ref={scrollRef} className="overflow-x-auto scrollbar-hide relative">
            <ul id="navMenu-items" className="flex gap-8 px-10 py-3 relative">
              {/* Moving red underline */}
              <div
                id="menuSelector"
                className="absolute bottom-0 h-[3px] bg-red-600 transition-all duration-300"
                style={selectorStyle}
              ></div>

              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  ref={(el) => (tabRefs.current[tab.id] = el)}
                  className={`cursor-pointer text-base font-semibold ${
                    activeTab === tab.id
                      ? "text-red-600"
                      : "text-gray-700 hover:text-red-600"
                  }`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Spacer when sticky */}
      {isSticky && <div className="h-16"></div>}

      {/* Sections */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {tabs.map((tab) => (
          <section key={tab.id} id={tab.id} className="scroll-mt-28 mb-12">
            {tab.component}
          </section>
        ))}
      </div>
    </>
  );
};

export default CourseDetails;
