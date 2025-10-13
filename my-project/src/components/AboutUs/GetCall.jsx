import React from "react";

const GetCall = ({
  image,
  title1,
  title2,
  description,
  buttonText,
  bgColor = "bg-red-600",
  textColor = "text-white",
  buttonColor = "bg-white",
  buttonTextColor = "text-red-600",
}) => {
  return (
    <div
      className={`${bgColor} ${textColor} p-6 mt-2 mb-3 rounded-lg max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6`}
    >
      {/* Left Side: Image */}
      <div className="w-full md:w-1/3">
        <img src={image} alt="Section Visual" className="rounded-lg w-full" />
      </div>

      {/* Right Side: Text */}
      <div className="w-full md:w-2/3 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">{title1}</h2>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{title2}</h2>
        <p className="text-lg md:text-2xl mb-6">{description}</p>

        {/* Button */}
        <button
          className={`${buttonColor} ${buttonTextColor} font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition duration-300`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default GetCall;
