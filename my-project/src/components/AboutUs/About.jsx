import React from "react";
import VisionMission from "./VisionMission";
import Card from "../AboutUs/Card";
import BookVisit from "./BookVisit";
import MeetTeam from "./MeetTeam";
import GetCall from "./GetCall";
import SampleImage from '../../assets/Vector.png'
import CTATrustSection from "./CTATrustSection";

export default function About() {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-white dark:bg-gray-900 py-16">
      {/* MAIN ABOUT CONTENT */}
      <div className="w-full max-w-7xl mx-auto grid gap-12 md:grid-cols-2 items-center px-6">
      {/* LEFT: Text content */}
<div className="text-center md:text-left">
  <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
    Our Journey — From Guidance to Growth 
  </h2>

  <p className="text-gray-700 leading-relaxed mb-6">
    What began in <strong>2011</strong> as a small dream in <strong>Bhopal</strong> 
    has evolved into one of India’s most trusted <strong>EdTech success stories!</strong> 
  </p>

  <p className="text-gray-700 leading-relaxed mb-6">
    From guiding students to the 
    <strong className="text-[#EE2C3C]"> Right University </strong> and 
    <strong className="text-[#EE2C3C]"> Right Course,</strong> 
    to collaborating with top universities like <strong>Amity</strong>, 
    <strong> Manipal</strong>, <strong>Mangalayatan</strong>, and 
    <strong> GLA Online</strong>, we’ve empowered 
    <strong> 5,000+ learners</strong> to build brighter careers.
  </p>

  <p className="text-gray-700 leading-relaxed mb-6">
    With strong foundations in <strong>Kanpur</strong> and <strong>Lucknow</strong>, 
    and <strong>50+ counselling centers</strong> across <strong>U.P.</strong>, 
    <strong> M.P.</strong>, <strong>Bihar</strong>, and <strong>Rajasthan</strong>, 
    Eduversity continues to lead the way — proudly aligned with 
    <strong> NSDC Skill Development Programs</strong> under Central and State Government 
    initiatives.
  </p>

  <p className="text-gray-700 leading-relaxed mb-8">
    It’s where <strong>guidance meets growth</strong>, and 
    <strong> learning sparks transformation.</strong> 
  </p>

  <div className="flex justify-center md:justify-start gap-3">
    <a
      href="#courses"
      className="inline-block px-6 py-3 bg-[#EE2C3C] text-white rounded-lg shadow hover:bg-[#d92433] transition"
    >
      Explore Courses
    </a>
    <a
      href="#about"
      className="inline-block px-6 py-3 border border-[#EE2C3C] text-[#EE2C3C] rounded-lg hover:bg-red-50 transition"
    >
      Learn More
    </a>
  </div>
</div>



        {/* RIGHT: Video */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg bg-gray-100">
            <video
              controls
              playsInline
              className="w-full h-80 md:h-80 object-cover"
              poster="/path/to/poster.jpg"
            >
              <source src="/path/to/eduversity-intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="p-4 text-center">
              <p className="text-sm text-gray-600">
                Watch an overview of Eduversity — accessible, engaging learning
                since 2012.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ADDITIONAL SECTIONS */}
      <div className="w-full mt-20">
        <VisionMission />
      </div>

      <div className="w-full mt-10">
        <Card />
      </div>

      <div className="w-full mt-10">
        <BookVisit />
      </div>
      <div className="w-full mt-10">
        <MeetTeam />
      </div>
     {/* <GetCall
      image={SampleImage}
      title1="Have a Question?"
      title2="We’re here to help!"
      description="Our team is happy to assist you. Ask about colleges, courses, careers, or anything else. Our highly trained representatives are standing by to help."
      buttonText="Call Us Now"
    /> */}
    <CTATrustSection/>
    </section>
  );
}
