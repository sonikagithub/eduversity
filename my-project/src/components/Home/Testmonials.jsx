import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      position: "Computer Science Student",
      company: "IIT Delhi",
      content: "Eduversity's programming courses transformed my coding skills. The live projects and industry mentors helped me land my dream job at Google. The platform made complex concepts so easy to understand!",
      avatar: "👩‍🎓",
      rating: 5
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      position: "Professor & Course Creator",
      company: "University of Mumbai",
      content: "Creating my AI course on Eduversity reached thousands of students globally. The platform's tools for interactive content and live sessions made teaching incredibly engaging and effective.",
      avatar: "👨‍🏫",
      rating: 5
    },
    {
      id: 3,
      name: "Anita Patel",
      position: "Working Professional",
      company: "Infosys",
      content: "The flexible learning schedule allowed me to upskill while working full-time. The Data Science certification from Eduversity helped me get a 40% salary hike and a promotion.",
      avatar: "👩‍💼",
      rating: 5
    },
    {
      id: 4,
      name: "Michael Brown",
      position: "International Student",
      company: "From United States",
      content: "As an international student, I was amazed by the quality of Indian educators on Eduversity. The full-stack development course was more comprehensive than many expensive bootcamps in the US.",
      avatar: "👨‍💻",
      rating: 5
    },
    {
      id: 5,
      name: "Deepika Reddy",
      position: "Career Changer",
      company: "Former Banker",
      content: "Transitioning from banking to tech seemed impossible until I found Eduversity. Their structured learning path and placement support helped me become a software developer in just 6 months.",
      avatar: "👩‍🔧",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return (
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-6 h-6 ${index < rating ? 'text-[#EE2C3C]' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F6F4F5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black mb-4"><span className='text-[#EE2C3C]'>Success Stories</span> from Our Learners</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join thousands of students and professionals who transformed their careers through Eduversity's innovative learning platform
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200">
          {/* Main Testimonial Content */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="text-center">
                    {/* Avatar & Rating */}
                    <div className="text-6xl mb-4">{testimonial.avatar}</div>
                    {renderStars(testimonial.rating)}
                    
                    {/* Quote */}
                    <blockquote className="text-xl md:text-2xl font-light text-gray-800 mb-8 leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    
                    {/* Author Info */}
                    <div className="mt-8">
                      <p className="text-xl font-semibold text-black">{testimonial.name}</p>
                      <p className="text-lg text-gray-700 mt-2">
                        {testimonial.position}
                      </p>
                      <p className="text-md text-[#EE2C3C] font-medium mt-1">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200 border border-gray-200"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-[#EE2C3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200 border border-gray-200"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-[#EE2C3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-[#EE2C3C] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

      

        {/* CTA Section */}
        {/* <div className="text-center mt-16">
          <div className="bg-[#EE2C3C] text-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of successful learners and transform your career with industry-relevant courses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#EE2C3C] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Explore Courses
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#EE2C3C] transition-colors duration-200">
                Book Demo
              </button>
            </div>
          </div>
        </div> */}

        {/* Trust Indicators */}
        {/* <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Trusted by students and professionals from</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <span className="text-lg font-semibold text-gray-700">IITs & NITs</span>
            <span className="text-lg font-semibold text-gray-700">Infosys</span>
            <span className="text-lg font-semibold text-gray-700">TCS</span>
            <span className="text-lg font-semibold text-gray-700">Wipro</span>
            <span className="text-lg font-semibold text-gray-700">Google</span>
            <span className="text-lg font-semibold text-gray-700">Microsoft</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Testimonials;