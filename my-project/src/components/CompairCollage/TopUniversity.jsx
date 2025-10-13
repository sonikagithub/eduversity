import React, { useState, useEffect, useCallback } from "react";

const TopUniversity = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // === UNIVERSITY DATA ===
  const universities = [
    {
      id: 1,
      name: "Manipal University Jaipur",
      since: "1953",
      offers: "MBA, BBA, MCA, Data Science",
      accreditation: "NAAC A+ | UGC-Entitled",
      ranking: "#1 Private University (QS Ranking 2024)",
      fee: "₹1,75,000",
      image: "https://amity.edu/asb/globuss2019/assets/images/about-amity.jpg",
      badge: "Premium"
    },
    {
      id: 2,
      name: "Amity University Online",
      since: "2005",
      offers: "MBA, MCA, BCA, BBA, Data Science",
      accreditation: "UGC | NAAC A+ | WES Accredited",
      ranking: "#1 in India for Online MBA (QS 2024)",
      fee: "₹1,79,000",
      image: "https://amity.edu/asb/globuss2019/assets/images/about-amity.jpg",
      badge: "Top Rated"
    },
    {
      id: 3,
      name: "GLA University, Mathura",
      since: "1998",
      offers: "MBA, MCA, BCA, BBA",
      accreditation: "UGC | NAAC A+ | AICTE Approved",
      ranking: "Top 50 Private Universities (India Today)",
      fee: "₹1,60,000",
      image: "https://amity.edu/asb/globuss2019/assets/images/about-amity.jpg"
    },
    {
      id: 4,
      name: "Integral University, Lucknow",
      since: "2004",
      offers: "MBA, BBA, MCA, B.Tech",
      accreditation: "UGC | NAAC A+ | AIU Member",
      ranking: "Top 100 Universities (NIRF 2023)",
      fee: "₹1,50,000",
      image: "https://amity.edu/asb/globuss2019/assets/images/about-amity.jpg"
    },
    {
      id: 5,
      name: "Lovely Professional University (LPU)",
      since: "2005",
      offers: "MBA, BBA, MCA, BCA, B.Tech",
      accreditation: "UGC | NAAC A++ | AICTE Approved",
      ranking: "#2 Among Top Private Universities (NIRF 2024)",
      fee: "₹1,85,000",
      image: "https://amity.edu/asb/globuss2019/assets/images/about-amity.jpg",
      badge: "Featured"
    },
    {
      id: 6,
      name: "Mangalayatan University",
      since: "2006",
      offers: "MBA, BBA, BCA, MCA",
      accreditation: "UGC | NAAC | AICTE Approved",
      ranking: "Emerging University of the Year (2023)",
      fee: "₹1,20,000",
      image: "https://amity.edu/asb/globuss2019/assets/images/about-amity.jpg"
    },
    {
      id: 7,
      name: "Sikkim Manipal University (SMU)",
      since: "1995",
      offers: "MBA, MCA, BBA, Data Analytics",
      accreditation: "UGC | NAAC A+ | ISO Certified",
      ranking: "Top 10 for Distance Learning (Outlook 2024)",
      fee: "₹1,70,000",
      image: "https://amity.edu/asb/globuss2019/assets/images/about-amity.jpg"
    },
    {
      id: 8,
      name: "Vivekananda Global University (VGU)",
      since: "2012",
      offers: "MBA, BBA, MCA, B.Tech",
      accreditation: "UGC | NAAC A+ | AICTE Approved",
      ranking: "Top 30 Private Universities (India Today)",
      fee: "₹1,40,000",
      image: "https://amity.edu/asb/globuss2019/assets/images/about-amity.jpg"
    },
    {
      id: 8,
      name: "Vivekananda Global University (VGU)",
      since: "2012",
      offers: "MBA, BBA, MCA, B.Tech",
      accreditation: "UGC | NAAC A+ | AICTE Approved",
      ranking: "Top 30 Private Universities (India Today)",
      fee: "₹1,40,000",
      image: "https://amity.edu/asb/globuss2019/assets/images/about-amity.jpg"
    },
  ];

  // Cards per slide based on screen size
  const getCardsPerSlide = () => {
    if (typeof window === 'undefined') return 1;
    const width = window.innerWidth;
    if (width >= 1024) return 3; // lg screens
    if (width >= 768) return 2;  // md screens
    return 1;                    // sm screens
  };

  const [cardsPerSlide, setCardsPerSlide] = useState(getCardsPerSlide());

  // Update cards per slide on resize
  useEffect(() => {
    const handleResize = () => {
      setCardsPerSlide(getCardsPerSlide());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Create slides with dynamic number of cards
  const slides = [];
  for (let i = 0; i < universities.length; i += cardsPerSlide) {
    slides.push(universities.slice(i, i + cardsPerSlide));
  }

  // Improved auto-play with transition handling
  useEffect(() => {
    if (!isAutoPlaying || slides.length <= 1) return;
    
    const interval = setInterval(() => {
      handleNextSlide();
    }, 3000); // Reduced to 3 seconds for better user experience
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Improved slide handlers with transition prevention
  const handleNextSlide = useCallback(() => {
    if (isTransitioning || slides.length <= 1) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, slides.length]);

  const handlePrevSlide = useCallback(() => {
    if (isTransitioning || slides.length <= 1) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, slides.length]);

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide || slides.length <= 1) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Touch swipe functionality
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || slides.length <= 1) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNextSlide();
    } else if (isRightSwipe) {
      handlePrevSlide();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Calculate transform for smooth single card movement
  const getTransformValue = () => {
    if (slides.length <= 1) return 'translateX(0)';
    return `translateX(-${currentSlide * (100 / slides.length)}%)`;
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      {/* Header */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <div className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-200 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
          🎓 Trusted by 50,000+ Students Nationwide
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-black bg-clip-text text-transparent">
          Explore <span className="text-red-600">Top Universities</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Discover India's premier educational institutions with UGC-entitled degrees, 
          NAAC accreditation, and globally recognized rankings
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {["UGC-entitled", "NAAC Accredited", "Ranked Institutions", "Placement Assistance"].map((item, index) => (
            <div key={index} className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Slider Section */}
      <div 
        className="relative max-w-7xl mx-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation Buttons */}
        {slides.length > 1 && (
          <>
            <button
              onClick={handlePrevSlide}
              disabled={isTransitioning}
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white text-red-600 rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold hover:bg-red-200 hover:text-white transition-all duration-300 shadow-xl border border-gray-200 hover:border-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ‹
            </button>
            <button
              onClick={handleNextSlide}
              disabled={isTransitioning}
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white text-red-600 rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold hover:bg-red-200 hover:text-white transition-all duration-300 shadow-xl border border-gray-200 hover:border-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ›
            </button>
          </>
        )}

        {/* Slider Container */}
        <div className="overflow-hidden rounded-3xl  backdrop-blur-sm p-6 ">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: getTransformValue(),
              width: `${slides.length * 100}%`
            }}
          >
            {slides.map((slide, slideIndex) => (
              <div 
                key={slideIndex} 
                className="flex-shrink-0"
                style={{ width: `${100 / slides.length}%` }}
              >
                <div className={`grid gap-8 px-4 ${
                  cardsPerSlide === 3 ? 'grid-cols-1 lg:grid-cols-3' :
                  cardsPerSlide === 2 ? 'grid-cols-1 md:grid-cols-2' :
                  'grid-cols-1'
                }`}>
                  {slide.map((uni) => (
                    <div
                      key={uni.id}
                      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
                    >
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={uni.image}
                          alt={uni.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        
                        {/* University Badge */}
                        {uni.badge && (
                          <div className="absolute top-4 right-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                              uni.badge === "Premium" ? "bg-gradient-to-r from-yellow-500 to-orange-500" :
                              uni.badge === "Top Rated" ? "bg-gradient-to-r from-green-500 to-emerald-500" :
                              "bg-gradient-to-r from-purple-500 to-pink-500"
                            }`}>
                              {uni.badge}
                            </span>
                          </div>
                        )}
                        
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-xl font-bold text-white mb-1">{uni.name}</h3>
                          <div className="flex items-center text-blue-200 text-sm">
                            <span>Est. {uni.since}</span>
                            <span className="mx-2">•</span>
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                              {uni.ranking.split(' ')[0]}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="space-y-4 mb-6">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-900">Popular Courses</p>
                              <p className="text-sm text-gray-600">{uni.offers}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-900">Accreditation</p>
                              <p className="text-sm text-gray-600">{uni.accreditation}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-900">Starting Fees</p>
                              <p className="text-lg font-bold text-gray-900">{uni.fee}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex space-x-3">
                          <button className="flex-1 bg-gradient-to-r from-red-600 to-red-600 text-white py-3 px-4 rounded-xl font-semibold text-sm hover:from-red-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            Explore Now
                          </button>
                          <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium text-sm hover:bg-gray-50 transition-all duration-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots and Progress */}
        {slides.length > 1 && (
          <div className="flex flex-col items-center mt-10 space-y-4">
            <div className="flex justify-center space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? "bg-red-600 scale-125 shadow-lg" 
                      : "bg-gray-300 hover:bg-gray-400"
                  } ${isTransitioning ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                />
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-sm text-gray-500">
                Slide {currentSlide + 1} of {slides.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopUniversity;