import React, { useState, useEffect, useRef } from "react";
import { FaBookOpen, FaAward, FaUsers, FaUserGraduate } from "react-icons/fa";

const Counter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  const stats = [
    { id: 1, icon: FaBookOpen, number: 50, suffix: "+", label: "Degree Programs" },
    { id: 2, icon: FaAward, number: 15, suffix: "+", label: "Years Of History" },
    { id: 3, icon: FaUsers, number: 5000, suffix: "+", label: "Students" },
    { id: 4, icon: FaUserGraduate, number: 500, suffix: "+", label: "Alumni Network" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60 fps
    const totalFrames = Math.round(duration / frameDuration);

    stats.forEach((stat, index) => {
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.round(stat.number * progress);

        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = currentCount;
          return newCounts;
        });

        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);
    });
  }, [isVisible]);

  return (
    <div ref={counterRef} className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="flex flex-col items-center text-center relative p-6"
            >
              {/* Big Icon */}
              <Icon className="text-6xl text-red-500 mb-4" />

              {/* Animated Counter */}
              <h2 className="text-3xl font-bold text-black">
                {counts[index].toLocaleString()}{item.suffix}
              </h2>
              <p className="text-lg font-medium text-gray-700">{item.label}</p>

              {/* Vertical Divider (only for large screens, not last item) */}
              {index !== stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-[1.5px] h-28 bg-red-500"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Counter;