import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';

const Footer = () => {
  const [ugExpanded, setUgExpanded] = useState(false);
  const [pgExpanded, setPgExpanded] = useState(false);

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

  return (
    <footer className="bg-[#191E27] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Useful Links - First Grid */}
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

          {/* UG Programs - Second Grid */}
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

          {/* PG Programs - Third Grid */}
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

          {/* Contact Information - Fourth Grid (Last) */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              Let's Make Learning Happen — Reach Out!
            </h3>
            <p className="text-lg mb-2 text-white">Chat with Our Career Specialist</p>
            <p className="text-white mb-6">Your ideas deserve to shine. Book a free consultation with us!</p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <a href="tel:+918081873431" className="text-white hover:text-red-500 transition-colors">
                  +91-8081873431
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a href="mailto:info@eduversityedutech.com" className="text-white hover:text-red-500 transition-colors">
                  info@eduversityedutech.com
                </a>
              </div>
            </div>

            {/* Subscription Search Bar */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-white">Subscribe to Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-1 focus:ring-white focus:border-transparent"
                />
                <button className="bg-red-500  px-4 py-2 rounded-r-lg transition-colors duration-200 font-medium">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-white mt-2">Stay updated with our latest courses and news</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              {[
                { 
                  name: 'Facebook', 
                  icon: <FaFacebookF className="w-4 h-4" />,
                  color: 'hover:bg-red-500',
                  href: 'https://facebook.com'
                },
                { 
                  name: 'Twitter', 
                  icon: <FaTwitter className="w-4 h-4" />,
                  color: 'hover:bg-red-500',
                  href: 'https://twitter.com'
                },
                { 
                  name: 'LinkedIn', 
                  icon: <FaLinkedinIn className="w-4 h-4" />,
                  color: 'hover:bg-red-500',
                  href: 'https://linkedin.com'
                },
                { 
                  name: 'Threads', 
                  icon: <FaThreads className="w-4 h-4" />,
                  color: 'hover:bg-red-500',
                  href: 'https://threads.net'
                },
                { 
                  name: 'Instagram', 
                  icon: <FaInstagram className="w-4 h-4" />,
                  color: 'hover:bg-red-500',
                  href: 'https://instagram.com'
                }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center ${social.color} transition-all duration-300 transform hover:scale-110`}
                  aria-label={social.name}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
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