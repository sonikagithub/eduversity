import React from 'react';
import CertificateImg from '../../assets/Certificate.jpg';

const CourseCertificate = () => {
  return (
    <div className=" lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug mb-4">
            Get a Prestigious Online Degree from NAAC A+ University
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Mangalayatan University offers globally recognized online degrees that are 
            equivalent to on-campus programs. Approved by governments and accepted by 
            leading organizations, these degrees enhance career prospects and open 
            doors to better professional opportunities.
          </p>
        </div>

        {/* Right Image with Red Background Frame */}
        <div className="relative flex justify-center items-center">
          {/* Red Background Frame - Extended on right side */}
          <div className="absolute right-0 w-full h-[100%] bg-red-600 rounded-l-[30px] -z-10 translate-x-8"></div>
          
          {/* Certificate Image */}
          <div className="">
            <img
              src={CertificateImg}
              alt="Degree Certificate"
              className="w-full max-w-md shadow-lg rounded-lg object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCertificate;