import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const BlogListing = () => {
  const navigate = useNavigate();

  // Page meta for social sharing
  const pageUrl = window.location.href;
  const pageTitle = "Our Latest Blogs - Learn and Grow";

  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "Best LearnPress WordPress Theme Collection for 2023",
      date: "Jan 24, 2023",
      category: "Home",
      excerpt: "Looking for an amazing & well-functional LearnPress WordPress Theme? Check out our curated collection of the best themes for 2023 that will enhance your e-learning platform.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Advanced WordPress Development Techniques",
      date: "Feb 15, 2023",
      category: "Development",
      excerpt: "Learn advanced WordPress development techniques to create custom plugins and themes that stand out from the competition.",
      image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "SEO Optimization for WordPress Sites",
      date: "Mar 8, 2023",
      category: "SEO",
      excerpt: "Complete guide to optimizing your WordPress website for search engines and improving your organic traffic.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "WordPress Security Best Practices",
      date: "Apr 12, 2023",
      category: "Security",
      excerpt: "Essential security practices every WordPress site owner should implement to protect their website from threats.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "E-commerce Solutions with WooCommerce",
      date: "May 20, 2023",
      category: "E-commerce",
      excerpt: "Building powerful e-commerce stores using WooCommerce and customizing them for optimal user experience.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "WordPress Performance Optimization",
      date: "Jun 5, 2023",
      category: "Performance",
      excerpt: "Techniques to speed up your WordPress website and improve Core Web Vitals scores.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      readTime: "5 min read"
    }
  ];

  // Categories data
  const categories = [
    { name: "Marketing", count: 12 },
    { name: "Free Courses", count: 8 },
    { name: "Talk with Instructor", count: 15 },
    { name: "Ideas", count: 9 },
    { name: "Development", count: 11 },
    { name: "Learning", count: 7 },
  ];

  const recentPosts = blogPosts.slice(0, 4);

  // Handlers
  const handleCardClick = (post) => navigate(`/blog/${post.id}`, { state: post });
  const handleRecentPostClick = (post) => navigate(`/blog/${post.id}`, { state: post });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-5">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Blogs</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Blog Section */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => handleCardClick(post)}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-500 text-sm font-medium">{post.date}</span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
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
          {/* Categories + Share + Previous Articles */}
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
            {/* Top Categories */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Top Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((item) => (
                  <a
                    key={item.name}
                    href="#"
                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition duration-200 block"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Share */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Share</h3>
              <div className="flex items-center space-x-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
                >
                  <FaFacebookF size={18} />
                </a>

                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(pageTitle)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-lg hover:bg-black hover:text-white transition duration-300"
                >
                  <FaXTwitter size={18} />
                </a>

                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(pageTitle)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-lg hover:bg-blue-700 hover:text-white transition duration-300"
                >
                  <FaLinkedinIn size={18} />
                </a>

                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(pageTitle)}%20${encodeURIComponent(pageUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-lg hover:bg-green-500 hover:text-white transition duration-300"
                >
                  <FaWhatsapp size={18} />
                </a>
              </div>
            </div>

            {/* Previous Articles */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Previous Articles</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="border-b border-gray-200 pb-4 last:border-b-0 flex items-start gap-3"
                  >
                    <div className="w-14 h-14 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                      <img
                        src={`https://via.placeholder.com/80?text=${item}`}
                        alt={`Article ${item}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">February {item}, 2023</div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Culture uses one third cycle. Value takes place only through
                        permitted events.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Posts */}
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
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
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
