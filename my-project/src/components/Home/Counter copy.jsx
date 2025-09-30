import React, { useEffect, useState, useRef } from 'react';

const CircularProgressBar = ({ 
  lineWidth = 6, 
  color = "#1ABC9C", 
  startingPosition = 25, 
  percent = 80, 
  percentage = true,
  text = "JQuery Script Net",
  animationDuration = 3000 
}) => {
  const [progress, setProgress] = useState(startingPosition);
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startValue = startingPosition;
    const startTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progressRatio = Math.min(elapsed / animationDuration, 1);

      const easedProgress = progressRatio < 0.5 
        ? 2 * progressRatio * progressRatio 
        : -1 + (4 - 2 * progressRatio) * progressRatio;

      const currentProgress = Math.floor(startValue + easedProgress * (percent - startValue));
      setProgress(currentProgress);

      if (progressRatio < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, percent, startingPosition, animationDuration]);

  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress /100) * circumference;

  return (
    <div ref={progressRef} className="my-progress-bar flex justify-center items-center">
      <div className="relative w-48 h-48">
        <svg 
          className="w-full h-full transform -rotate-90 circular-progress-bar" 
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth={lineWidth}
            fill="none"
          />
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke={color}
            strokeWidth={lineWidth}
            strokeLinecap="round"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-300 ease-out"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-center">
            <div className="progress-percentage mb-1">
              <span className="text-3xl font-bold text-gray-800">
                {progress}
              </span>
            </div>
            <div className="progress-text">
              <span className="text-sm text-gray-600">
                {text}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgressBarDemo = () => {
  const progressItems = [
    {
      lineWidth: 6,
      color: "#1ABC9C",
      startingPosition: 25,
      percent: 50,
      text: "Degree Programs"
    },
    {
      lineWidth: 8,
      color: "#3498DB",
      startingPosition: 10,
      percent: 15,
      text: "Years Of History"
    },
    {
      lineWidth: 6,
      color: "#9B59B6",
      startingPosition: 40,
      percent: 5000,
      text: "Students"
    },
    {
      lineWidth: 10,
      color: "#E74C3C",
      startingPosition: 5,
      percent: 500,
      text: "Alumni Network"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Circular Progress Bars
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Four progress indicators in one line
        </p>
        
        <div className="flex justify-center items-center gap-6">
          {progressItems.map((item, index) => (
            <CircularProgressBar
              key={index}
              lineWidth={item.lineWidth}
              color={item.color}
              startingPosition={item.startingPosition}
              percent={item.percent}
              text={item.text}
              animationDuration={3000 + index * 500}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBarDemo;