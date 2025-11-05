import React from 'react'

const Specialization = () => {
  const specializations = [
    "Finance & Investment Banking",
    "Marketing Management", 
    "Human Resource Management",
    "Operations & Supply Chain",
    "Information Technology",
    "Entrepreneurship",
    "International Business",
    "Healthcare Management"
  ];

  return (
    <div className=" bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
             Specializations
          </h1>
          <p className="text-xl text-gray-600">
            Choose your area of expertise from our comprehensive MBA programs
          </p>
        </div>

        {/* Specializations List */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {specializations.map((spec, index) => (
              <li 
                key={index}
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors duration-200"
              >
                <span className="w-3 h-3 bg-red-600 rounded-full mr-4"></span>
                <span className="text-lg font-medium text-gray-800">{spec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Specialization