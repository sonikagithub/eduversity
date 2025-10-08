import React from "react";
import SampleImage from "../../assets/Vector.png"; // replace with your image path

const GetCall = () => {
  return (
    <div className="bg-red-600 text-white p-6 rounded-lg max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/3">
        <img src={SampleImage} alt="Call" className="rounded-lg w-full" />
      </div>

      {/* Right Side: Text */}
      <div className="w-full md:w-2/3">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">Have a Question?</h2>
        <h2 className="text-2xl md:text-4xl font-bold mb-4">We’re here to help!</h2>
        <p className="text-lg md:text-2xl">
          Our team is happy to assist you. Ask about colleges, courses, careers,
          or anything else. Our highly trained representatives are standing by to help.
        </p>
      </div>
    </div>
  );
};

export default GetCall;
