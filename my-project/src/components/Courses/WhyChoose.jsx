import React, { useState, useEffect, useCallback } from 'react';
import { FaGraduationCap, FaShieldAlt, FaHandshake, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const WhyChoose = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const cards = [
    {
      icon: FaGraduationCap,
      title: "On-Campus Degrees",
      content: "Gain the same credibility, expert mentorship, career opportunities, and exposure as traditional on-campus programs.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FaShieldAlt,
      title: "Attractive Scholarships",
      content: "Avail scholarships for meritorious students, defense personnel, government employees, and the differently-abled.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: FaHandshake,
      title: "Placement Assistance",
      content: "Benefit from personalized resume building, interview preparation, skill assessments, and placement drives.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: FaStar,
      title: "Industry Relevant Curriculum",
      content: "Learn from constantly updated curriculum designed in collaboration with industry experts and top companies.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: FaGraduationCap,
      title: "Flexible Learning",
      content: "Study at your own pace with recorded lectures, live sessions, and 24/7 access to learning materials.",
      color: "from-red-500 to-red-600"
    }
  ];

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  }, [cards.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  }, [cards.length, isTransitioning]);

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  // Handle transition end
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Show 3 cards on desktop, 1 on mobile
  const getVisibleCards = () => {
    if (window.innerWidth >= 1024) {
      // Desktop - show 3 cards
      const start = currentSlide % cards.length;
      const end = (start + 3) % cards.length;
      
      if (end > start) {
        return cards.slice(start, start + 3);
      } else {
        return [...cards.slice(start), ...cards.slice(0, end)];
      }
    } else {
      // Mobile - show current slide only
      return [cards[currentSlide]];
    }
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 ">
            Why Choose Our Programs?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the unique advantages that make our programs stand out and 
            help you achieve your career goals with confidence.
          </p>
        </div>
        
        {/* Mobile & Tablet View - Slider */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden rounded-3xl">
            <div className={`flex transition-transform duration-500 ease-out ${
              isTransitioning ? 'transform-gpu' : ''
            }`}>
              {visibleCards.map((card, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white rounded-3xl shadow-2xl p-8 h-80 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 border border-gray-100">
                    {/* Icon Circle */}
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${card.color} flex items-center justify-center mb-6 shadow-lg transform -translate-y-2`}>
                      <card.icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed flex-grow">
                      {card.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows - Mobile */}
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                  index === currentSlide 
                    ? 'bg-red-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                } ${isTransitioning ? 'cursor-not-allowed' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop View - Grid with Slider */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Navigation Arrows - Desktop */}
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="absolute -left-16 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-5 shadow-2xl transition-all duration-300 hover:scale-110 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed z-10"
            >
              <FaChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="absolute -right-16 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-5 shadow-2xl transition-all duration-300 hover:scale-110 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed z-10"
            >
              <FaChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            <div className={`grid grid-cols-3 gap-8 transition-opacity duration-500 ${
              isTransitioning ? 'opacity-70' : 'opacity-100'
            }`}>
              {visibleCards.map((card, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-80 flex flex-col items-center text-center border border-gray-100 group"
                >
                  {/* Animated Icon Circle */}
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${card.color} flex items-center justify-center mb-6 shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <card.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight group-hover:text-gray-900 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed flex-grow">
                    {card.content}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Desktop Navigation Dots */}
            <div className="flex justify-center mt-12 space-x-6">
              <div className="flex space-x-2 items-center">
                {cards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    disabled={isTransitioning}
                    className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                      index === currentSlide
                        ? 'bg-red-600 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    } ${isTransitioning ? 'cursor-not-allowed' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;