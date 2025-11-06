import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Semester = () => {
  // store multiple open semesters
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
        'Software Engineering Practices',
        'Software Engineering Practices',
        'Software Engineering Practices',
        'Software Engineering Practices',
        'Software Engineering Practices',
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
    <div className="max-w-6xl mx-auto my-8">
      {semesters.map((sem, index) => {
        const isOpen = openSemesters.includes(index);
        return (
          <div key={index} className="mb-4  border border-red-600">
            {/* Header */}
            <div
              className="flex items-center justify-between bg-red-50 px-4 py-3 cursor-pointer"
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
              <div className="bg-white border-t border-red-200 p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sem.subjects.map((subject, i) => (
                  <div
                    key={i}
                    className="border border-red-400 rounded-md py-4 px-5 text-black font-medium text-base"
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
  );
};

export default Semester;
