import React, { useEffect, useRef, useState } from 'react';

const CircularProgress = ({ percent, delay = 0 }) => {
  const [displayPercent, setDisplayPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const circleRef = useRef(null);
  const animationRef = useRef(null);
  const containerRef = useRef(null);

  // Intersection Observer to trigger animation when component is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [delay]);

  // Animation effect
  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const duration = 1500;
    const startValue = 0;
    const endValue = percent;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const easedProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
      const currentValue = Math.ceil(startValue + easedProgress * (endValue - startValue));

      setDisplayPercent(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [percent, isVisible]);

  const degrees = percent * 3.6;
  const rotation = percent > 50 ? 180 + (percent - 50) * 3.6 : degrees;

  return (
    <div ref={containerRef} className="relative w-32 h-32 rounded-full overflow-hidden">
      {/* Left half */}
      <div className="absolute left-0 top-0 w-1/2 h-full bg-[#EE2C3C] overflow-hidden">
        <div
          className="absolute left-0 top-0 w-full h-full bg-[#EE2C3C] rounded-full"
          style={{
            transform: `rotate(${percent > 50 ? 180 : degrees}deg)`,
            transformOrigin: 'right center'
          }}
        ></div>
      </div>

      {/* Right half */}
      {percent > 50 && (
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[#EE2C3C] overflow-hidden">
          <div
            className="absolute right-0 top-0 w-full h-full bg-[#EE2C3C] rounded-full"
            style={{
              transform: `rotate(${(percent - 50) * 3.6}deg)`,
              transformOrigin: 'left center'
            }}
          ></div>
        </div>
      )}

      {/* Inner white circle */}
      <div className="absolute inset-3 bg-white rounded-full z-10 flex items-center justify-center">
        <span className="text-2xl font-bold text-gray-800">{displayPercent}%</span>
      </div>
    </div>
  );
};

const Counter = () => {
  const progressData = [75, 25, 50, 95];

  return (
    <div className=" flex items-center justify-center bg-gray-50 py-12 px-4">
      {/* Banner Card */}
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
          Performance Statistics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {progressData.map((percent, index) => (
            <CircularProgress key={index} percent={percent} delay={index * 300} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;
