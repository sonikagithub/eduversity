import React from 'react';
import Image from '../../assets/visit.png'; // replace with your image path

const BookVisit = () => {
  return (
    <section className="w-full bg-white dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT: Image */}
    <div className="flex justify-center">
  <img 
    src={Image} 
    alt="Book a Visit" 
    className="w-full max-w-xl "
  />
</div>


        {/* RIGHT: Text & Buttons */}
        <div className="text-gray-800 dark:text-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">More than a platform — we’re a community built for lifelong learning Join us and unlock your true potential.</h2>
          <p className="text-lg mb-6">
            Experience our vibrant campus life, meet faculty, and explore facilities firsthand.
            Discover how Eduversity can help shape your future.
          </p>
          
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Visit your nearest offline centre for a free session</li>
            <li>Get personalized expert guidance on your career path</li>
            <li>Call us for more details and support</li>
            <li>Visit us today to start your journey</li>
          </ul>

          <div className="flex gap-4">
            <button className="bg-[#EE2C3C] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#d82633] transition">
              Book Your Visit
            </button>
            <button className="border border-[#EE2C3C] text-[#EE2C3C] px-6 py-3 rounded-lg hover:bg-[#EE2C3C] hover:text-white transition">
              Call Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookVisit;
