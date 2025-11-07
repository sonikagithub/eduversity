import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Semester = () => {
  const [openSemesters, setOpenSemesters] = useState([]);

  const toggleSemester = (index) => {
    setOpenSemesters((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const semesters = [
    {
      title: 'Semester 1',
      subjects: [
        'Software Engineering Practices',
        'Programming Fundamentals',
        'Data Communication',
        'Mathematics for Computing',
        'Computer Organization',
        'Professional Skills',
      ],
    },
    {
      title: 'Semester 2',
      subjects: [
        'Database Management Systems',
        'Object-Oriented Programming',
        'Data Structures',
        'Computer Networks',
      ],
    },
    {
      title: 'Semester 3',
      subjects: [
        'Operating Systems',
        'Web Technologies',
        'Software Testing',
        'Project Management',
      ],
    },
    {
      title: 'Semester 4',
      subjects: [
        'Artificial Intelligence',
        'Cloud Computing',
        'Cyber Security',
        'Capstone Project',
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left column (Semester 1 & 4) */}
      <div className="flex flex-col gap-8">
        {[0, 3].map((index) => {
          const sem = semesters[index];
          const isOpen = openSemesters.includes(index);
          return (
            <div key={index} className="border border-red-600 rounded-lg overflow-hidden shadow-sm">
              {/* Header */}
              <div
                className="flex items-center justify-between bg-red-50 px-5 py-4 cursor-pointer"
                onClick={() => toggleSemester(index)}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-red-500 text-white rounded-full p-2">
                    {isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}
                  </div>
                  <h2 className="font-semibold text-lg">{sem.title}</h2>
                </div>
              </div>

              {/* Content */}
              {isOpen && sem.subjects.length > 0 && (
                <div className="bg-white">
                  {sem.subjects.slice(0, 4).map((subject, i) => (
                    <div
                      key={i}
                      className=" py-2 px-5 text-gray-700 font-medium hover:text-red-600"
                    >
                      {subject}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Right column (Semester 2 & 3) */}
      <div className="flex flex-col gap-8">
        {[1, 2].map((index) => {
          const sem = semesters[index];
          const isOpen = openSemesters.includes(index);
          return (
            <div key={index} className="border border-red-600 rounded-lg overflow-hidden shadow-sm">
              {/* Header */}
              <div
                className="flex items-center justify-between bg-red-50 px-5 py-4 cursor-pointer"
                onClick={() => toggleSemester(index)}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-red-500 text-white rounded-full p-2">
                    {isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}
                  </div>
                  <h2 className="font-semibold text-lg">{sem.title}</h2>
                </div>
              </div>

              {/* Content */}
              {isOpen && sem.subjects.length > 0 && (
                <div className="bg-white border-t border-red-200 p-6gap-6">
                  {sem.subjects.slice(0, 4).map((subject, i) => (
                    <div
                      key={i}
                      className="py-2 px-5 text-gray-700 font-medium hover:text-red-600"
                    >
                      {subject}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Semester;
