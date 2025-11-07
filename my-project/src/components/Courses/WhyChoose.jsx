import React, { useState, useEffect, useCallback } from 'react';
import {
  FaGraduationCap,
  FaShieldAlt,
  FaHandshake,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from 'react-icons/fa';

const WhyChoose = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const cards = [
    {
      icon: FaGraduationCap,
      title: 'On-Campus Degrees',
      content:
        'Gain the same credibility, expert mentorship, career opportunities, and exposure as traditional on-campus programs.',
    },
    {
      icon: FaShieldAlt,
      title: 'Attractive Scholarships',
      content:
        'Avail scholarships for meritorious students, defense personnel, government employees, and the differently-abled.',
    },
    {
      icon: FaHandshake,
      title: 'Placement Assistance',
      content:
        'Benefit from personalized resume building, interview preparation, skill assessments, and placement drives.',
    },
    {
      icon: FaStar,
      title: 'Industry Relevant Curriculum',
      content:
        'Learn from constantly updated curriculum designed in collaboration with industry experts and top companies.',
    },
    {
      icon: FaGraduationCap,
      title: 'Flexible Learning',
      content:
        'Study at your own pace with recorded lectures, live sessions, and 24/7 access to learning materials.',
    },
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

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const getVisibleCards = () => {
    if (window.innerWidth >= 1024) {
      const start = currentSlide % cards.length;
      const end = (start + 3) % cards.length;
      return end > start
        ? cards.slice(start, start + 3)
        : [...cards.slice(start), ...cards.slice(0, end)];
    } else {
      return [cards[currentSlide]];
    }
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">
            Why Choose <span className="text-red-600">Our Programs?</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Discover the unique advantages that make our programs stand out and
            help you achieve your career goals with confidence.
          </p>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="flex transition-transform duration-500 ease-out">
              {visibleCards.map((card, index) => (
                <div key={index} className="w-full flex-shrink-0 px-3">
                  <div className="bg-white rounded-2xl shadow-md p-8 h-80 flex flex-col items-center text-center border border-gray-200">
                    <div className="w-16 h-16 bg-red-600 flex items-center justify-center mb-6 shadow-md">
                      <card.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-base">{card.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md border border-gray-200"
            >
              <FaChevronLeft className="text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md border border-gray-200"
            >
              <FaChevronRight className="text-gray-600" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? 'bg-red-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block relative">
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-md border border-gray-200"
          >
            <FaChevronLeft className="text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-md border border-gray-200"
          >
            <FaChevronRight className="text-gray-600" />
          </button>

          <div className="grid grid-cols-3 gap-8">
            {visibleCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-10 h-80 flex flex-col items-center text-center border border-gray-200"
              >
                <div className="w-20 h-20 bg-red-600 flex items-center justify-center mb-6 shadow-md">
                  <card.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-base">{card.content}</p>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-10 space-x-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? 'bg-red-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
