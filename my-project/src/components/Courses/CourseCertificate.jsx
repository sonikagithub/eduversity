import React from 'react';
import CertificateImg from '../../assets/Certificate.jpg';

const CourseCertificate = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-20 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      {/* Left Content */}
<div className="text-center md:text-left px-4 sm:px-6">
  <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
    Get a Prestigious <span className="text-red-600">Online Degree</span> from 
    <br className="hidden sm:block" /> NAAC A+ University
  </h2>

  <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
    Mangalayatan University offers globally recognized online degrees that are 
    equivalent to on-campus programs. Approved by governments and accepted by 
    leading organizations, these degrees enhance career prospects and open 
    doors to better professional opportunities.
  </p>

  <div className="mt-8">
    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 shadow-md">
      Explore Programs
    </button>
  </div>
</div>


        {/* Right Image with Red Background Frame */}
        <div className="relative flex justify-center items-center">
          {/* Red Background Frame */}
          <div className="absolute right-0 sm:right-6 md:right-10 w-[60%] sm:w-[55%] md:w-[50%] h-full bg-red-600 -z-10 rounded-md"></div>

          {/* Certificate Image */}
          <div className="w-full flex justify-center">
            <img
              src={CertificateImg}
              alt="Degree Certificate"
              className="w-[90%] sm:w-[80%] md:w-full max-w-md object-contain py-6 sm:py-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCertificate;
