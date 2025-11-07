import React, { useState } from 'react';

const CourseFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is an Online MBA in Marketing?",
      answer: "Lovely Professional University, Punjab online programs are delivered in a 100% online mode so that students can attend live classes on weekends and complete the program remotely, while also pursuing their professional and personal commitments in parallel.",
      hasAnswer: true
    },
    {
      question: "What skills will I learn in an Online MBA in Marketing?",
      answer: "Answer coming soon...",
      hasAnswer: false
    },
    {
      question: "How does an Online MBA in Marketing differ from a regular MBA with a marketing concentration?",
      answer: "Answer coming soon...",
      hasAnswer: false
    },
    {
      question: "Will an Online MBA in Marketing help me earn a higher salary?",
      answer: "Answer coming soon...",
      hasAnswer: false
    },
    {
      question: "Can I switch careers with an Online MBA in Marketing?",
      answer: "Answer coming soon...",
      hasAnswer: false
    },
    {
      question: "Can I work while pursuing an Online MBA in Marketing?",
      answer: "Answer coming soon...",
      hasAnswer: false
    }
  ];

  const teamMembers = [
    {
      name: "John Smith",
      role: "Admissions Counselor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sarah Johnson",
      role: "Program Advisor",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Mike Chen",
      role: "Student Support",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Davis",
      role: "Academic Coordinator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Frequently <span className='text-red-600'>asked questions</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about the eduversity admissions.
        </p>
      </div>

      <div className=" items-start">
        {/* FAQ Content */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-red-50 transition-all duration-200 rounded-xl"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="text-lg font-semibold text-gray-800 pr-4 leading-tight">
                  {faq.question}
                </h2>
                <span className="flex-shrink-0 ml-4 bg-red-100 p-1 rounded-full">
                  {openIndex === index ? (
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 animate-fade-in">
                  <div className="border-t border-gray-100 pt-4">
                    <p className={`leading-relaxed ${faq.hasAnswer ? 'text-gray-700 text-lg' : 'text-gray-500 italic'}`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

       

         

        
        </div>
      </div>


  );
};

export default CourseFAQ;