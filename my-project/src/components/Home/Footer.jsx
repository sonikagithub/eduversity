import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';

const Footer = () => {
  const [ugExpanded, setUgExpanded] = useState(false);
  const [pgExpanded, setPgExpanded] = useState(false);
  const [email, setEmail] = useState('');

  const ugPrograms = [
    'Bachelor of Business Administration (BBA)',
    'Bachelor of Commerce (B. COM)',
    'Bachelor of Computer Applications (BCA)',
    'Bachelor of Arts (B.A)',
    'Bachelor of Science (B.Sc)'
  ];

  const pgPrograms = [
    'Master of Business Administration (MBA)',
    'Master of Commerce (M. COM)',
    'Master of Computer Applications (MCA)',
    'Master of Science (Mathematics) (MSC)',
    'Master of Science (Economics) (MSC)',
    'Master of Arts (English) (M.A)',
    'Master of Arts (History) (M.A)',
    'Master of Arts (Sociology) (M.A)',
    'Master of Arts (Political Science) (M.A)',
    'Master of Arts (Economics) (M.A)',
    'Master of Arts (Education)',
    'Master of Arts (Public Administration)',
    'Master of Social Works (MSW)',
    'Master of Arts in Journalism & Mass Communication (MA JMC)'
  ];

  const displayedUgPrograms = ugExpanded ? ugPrograms : ugPrograms.slice(0, 3);
  const displayedPgPrograms = pgExpanded ? pgPrograms : pgPrograms.slice(0, 5);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing email:', email);
    setEmail('');
    // Add your subscription API call or logic here
  };

  return (
    <footer className="bg-[#191E27] text-white">
      {/* Social Media Links - Top Center */}
      <div className=" py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            {[
              { 
                name: 'Facebook', 
                icon: <FaFacebookF className="w-5 h-5" />,
                href: 'https://www.facebook.com/people/Eduversity/61572444541535/'
              },
              { 
                name: 'Twitter', 
                icon: <FaTwitter className="w-5 h-5" />,
                href: 'https://x.com/EduversityEd'
              },
              { 
                name: 'LinkedIn', 
                icon: <FaLinkedinIn className="w-5 h-5" />,
                href: 'https://www.linkedin.com/in/eduversityedutech'
              },
              { 
                name: 'Threads', 
                icon: <FaThreads className="w-5 h-5" />,
                href: 'https://www.threads.com/@eduversity_edutech1'
              },
              { 
                name: 'Instagram', 
                icon: <FaInstagram className="w-5 h-5" />,
                href: 'https://www.instagram.com/eduversity_edutech1/'
              }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-500 transition-all duration-300 transform hover:scale-110"
                aria-label={social.name}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Address and Contact - First Grid */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-white border-b border-gray-600 pb-2">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="w-5 h-5 mr-3 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Address</p>
                  <p className="text-gray-300 text-sm">Office no- 520, 5th Floor, Parsvanath Plaza, Opposite Summit Building, Vibhuti Khand, Gomti Nagar, Lucknow </p>
                </div>
              </div>
              <div className="flex items-center">
                <FaPhone className="w-4 h-4 mr-3 text-red-500 flex-shrink-0" />
                <div>
                  <a href="tel:+918081873431" className="text-white hover:text-red-500 transition-colors font-medium">
                    +91-8081873431
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="w-4 h-4 mr-3 text-red-500 flex-shrink-0" />
                <div>
                  <a href="mailto:info@eduversityedutech.com" className="text-white hover:text-red-500 transition-colors font-medium">
                    info@eduversityedutech.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Useful Links - Second Grid */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white border-b border-gray-600 pb-2">Useful Links</h4>
            <ul className="space-y-2">
              {['Home', 'Courses', 'Blog', 'About Us', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white hover:text-red-500 transition-colors hover:translate-x-1 transform duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* UG Programs - Third Grid */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white border-b border-gray-600 pb-2">U.G. Programs</h4>
            <ul className="space-y-2 text-sm">
              {displayedUgPrograms.map((program) => (
                <li key={program}>
                  <a href="#" className="text-white hover:text-red-500 transition-colors block py-1">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
            {ugPrograms.length > 3 && (
              <button
                onClick={() => setUgExpanded(!ugExpanded)}
                className="mt-3 text-red-500 hover:text-red-400 font-medium text-sm transition-colors duration-200"
              >
                {ugExpanded ? 'Show Less' : 'Read More'}
              </button>
            )}
          </div>

          {/* PG Programs - Fourth Grid */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white border-b border-gray-600 pb-2">P.G. Programs</h4>
            <ul className="space-y-2 text-sm">
              {displayedPgPrograms.map((program) => (
                <li key={program}>
                  <a href="#" className="text-white hover:text-red-500 transition-colors block py-1">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
            {pgPrograms.length > 5 && (
              <button
                onClick={() => setPgExpanded(!pgExpanded)}
                className="mt-3 text-red-500 hover:text-red-400 font-medium text-sm transition-colors duration-200"
              >
                {pgExpanded ? 'Show Less' : 'Read More'}
              </button>
            )}
          </div>

          {/* Subscribe and Chat - Fifth Grid (Last) */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Stay Connected With Us
            </h3>
            
            {/* Subscription Section */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-white">Subscribe to Newsletter</h4>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
                <button 
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg transition-colors duration-200 font-medium transform hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-300 mt-2">Stay updated with our latest courses and news</p>
            </div>

            {/* Chat with Us Button */}
            <div className="mt-6">
              <button className="w-full bg-transparent border-2 border-red-500 text-white hover:bg-red-500 px-6 py-3 rounded-lg transition-all duration-200 font-medium transform hover:scale-105 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Chat with Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 bg-[#151920]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm text-center md:text-left">
              Copyright © 2025 Eduversity | All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;