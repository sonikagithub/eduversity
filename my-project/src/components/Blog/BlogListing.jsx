import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogListing = () => {
  const navigate = useNavigate();

  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "Best LearnPress WordPress Theme Collection for 2023",
      date: "Jan 24, 2023",
      category: "Home",
      excerpt: "Looking for an amazing & well-functional LearnPress WordPress Theme? Check out our curated collection of the best themes for 2023 that will enhance your e-learning platform.",
      description: "Looking for an amazing & well-functional LearnPress WordPress Theme? Check out our curated collection of the best themes for 2023 that will enhance your e-learning platform. This comprehensive guide covers the top themes with detailed features and pricing.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Advanced WordPress Development Techniques",
      date: "Feb 15, 2023",
      category: "Development",
      excerpt: "Learn advanced WordPress development techniques to create custom plugins and themes that stand out from the competition.",
      description: "Learn advanced WordPress development techniques to create custom plugins and themes that stand out from the competition. We'll cover custom post types, REST API integration, and performance optimization strategies.",
      image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "SEO Optimization for WordPress Sites",
      date: "Mar 8, 2023",
      category: "SEO",
      excerpt: "Complete guide to optimizing your WordPress website for search engines and improving your organic traffic.",
      description: "Complete guide to optimizing your WordPress website for search engines and improving your organic traffic. This post covers on-page SEO, technical SEO, and content optimization strategies specifically for WordPress.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "WordPress Security Best Practices",
      date: "Apr 12, 2023",
      category: "Security",
      excerpt: "Essential security practices every WordPress site owner should implement to protect their website from threats.",
      description: "Essential security practices every WordPress site owner should implement to protect their website from threats. Learn about secure hosting, plugin management, and security monitoring tools.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "E-commerce Solutions with WooCommerce",
      date: "May 20, 2023",
      category: "E-commerce",
      excerpt: "Building powerful e-commerce stores using WooCommerce and customizing them for optimal user experience.",
      description: "Building powerful e-commerce stores using WooCommerce and customizing them for optimal user experience. This guide covers setup, customization, payment integration, and performance optimization.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "WordPress Performance Optimization",
      date: "Jun 5, 2023",
      category: "Performance",
      excerpt: "Techniques to speed up your WordPress website and improve Core Web Vitals scores.",
      description: "Techniques to speed up your WordPress website and improve Core Web Vitals scores. We'll discuss caching, image optimization, CDN integration, and database optimization techniques.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      readTime: "5 min read"
    }
  ];

  // Categories data
  const categories = [
    { name: "Marketing", count: 12 },
    { name: "Free Courses", count: 8 },
    { name: "Talk with instructor", count: 15 },
    { name: "Idea", count: 9 },
    { name: "Development", count: 11 },
    { name: "Learning", count: 7 },
  ];

  // Recent posts for sidebar
  const recentPosts = blogPosts.slice(0, 4);

  // Handle card click to navigate to blog details
  const handleCardClick = (post) => {
    navigate(`/blog/${post.id}`, { state: post });
  };

  // Handle recent post click in sidebar
  const handleRecentPostClick = (post) => {
    navigate(`/blog/${post.id}`, { state: post });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-5">
      <h1>Blogs</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Blog Posts - 2 columns, 3 rows */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <div 
                key={post.id} 
                onClick={() => handleCardClick(post)}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-500 text-sm font-medium">{post.date}</span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <button className="text-red-600 px-4 py-2 rounded-lg transition-colors duration-200 font-medium">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          
          {/* Categories Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
              Categories
            </h3>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li 
                  key={index}
                  className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                >
                  <span className="text-gray-700 font-medium">{category.name}</span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                    {category.count}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
              Recent Posts
            </h3>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div 
                  key={post.id}
                  onClick={() => handleRecentPostClick(post)}
                  className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                >
                  <div className="flex-shrink-0">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1">
                      {post.title}
                    </h4>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogListing;