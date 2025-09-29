import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      description: "Learn the fundamentals of React and how to build your first application with this powerful JavaScript library.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "May 15, 2023"
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS",
      description: "Discover how to create beautiful, responsive designs quickly with Tailwind CSS utility-first framework.",
      image: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.png",
      date: "June 2, 2023"
    },
    {
      id: 3,
      title: "JavaScript ES6+ Features",
      description: "Explore the latest JavaScript features including arrow functions, destructuring, and async/await.",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "July 10, 2023"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section - Updated Layout */}
        <div className="flex justify-between items-center mb-12">
          {/* Left side - Latest Blog text */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Recent <span className='text-red-500'>Blogs </span></h1>
            <p className="text-lg text-gray-600 mt-2 max-w-2xl">
              Free Blogs to explore
            </p>
          </div>
          
          {/* Right side - View Blog button */}
          <div>
            <button className="text-black rounded-xl border-2  font-semibold py-2 px-6 transition duration-300 ease-in-out">
              All Blogs
            </button>
          </div>
        </div>

        {/* Blog Posts Grid - Only 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
              style={{ minHeight: '480px' }} // Increased height
            >
              {/* Image at the top */}
              <div className="h-56 overflow-hidden"> {/* Increased from h-48 to h-56 */}
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              {/* Text content below */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center text-sm text-gray-500">
                    {/* Calendar Icon */}
                    <svg 
                      className="w-4 h-4 mr-1 text-red-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                      />
                    </svg>
                    {post.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                  {post.description}
                </p>
                
                <button className="text-red-500 font-medium flex items-center transition-colors duration-300 mt-auto">
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;