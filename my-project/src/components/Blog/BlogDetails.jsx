import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

const BlogDetails = () => {
  const location = useLocation();
  const blog = location.state; // ✅ This is the clicked blog data
  const sliderRef = useRef(null);
  const pageUrl = window.location.href;
  const pageTitle = blog?.title || "Blog Details";

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Blog not found
        </h2>
      </div>
    );
  }

  // Sample data for slider cards
  const sliderCards = [
    {
      id: 1,
      title: "Web Development Trends 2023",
      excerpt: "Explore the latest trends in web development...",
      date: "Mar 15, 2023",
    },
    {
      id: 2,
      title: "React Best Practices",
      excerpt: "Learn the best practices for React development...",
      date: "Mar 10, 2023",
    },
    {
      id: 3,
      title: "CSS Framework Comparison",
      excerpt: "Comparing popular CSS frameworks in 2023...",
      date: "Mar 05, 2023",
    },
    {
      id: 4,
      title: "JavaScript ES2023 Features",
      excerpt: "New features coming to JavaScript this year...",
      date: "Feb 28, 2023",
    },
  ];

  // Sample comments data
  const comments = [
    {
      id: 1,
      name: "John Doe",
      date: "2 days ago",
      content: "This is a great article! Very informative and well written.",
      replies: [
        {
          id: 1,
          name: "Author",
          date: "1 day ago",
          content: "Thank you for your feedback!",
        },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      date: "1 week ago",
      content:
        "I learned a lot from this post. Looking forward to more content!",
      replies: [],
    },
  ];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Comment component
  const Comment = ({ comment }) => (
    <div className="border-b border-gray-200 pb-6 mb-6 last:border-b-0">
      <div className="flex items-start space-x-3">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-900">{comment.name}</h4>
            <span className="text-sm text-gray-500">{comment.date}</span>
          </div>
          <p className="text-gray-700 mb-3">{comment.content}</p>
          <button className="text-red-600 text-sm font-medium hover:text-red-700">
            Reply
          </button>

          {/* Replies */}
          {comment.replies && comment.replies.length > 0 && (
            <div className="ml-8 mt-4 space-y-4">
              {comment.replies.map((reply) => (
                <div key={reply.id} className="border-l-2 border-gray-200 pl-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-semibold text-gray-900">
                          {reply.name}
                        </h5>
                        <span className="text-sm text-gray-500">
                          {reply.date}
                        </span>
                      </div>
                      <p className="text-gray-700">{reply.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 bg-gray-50 mt-10">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Blog Content */}
          <div className="lg:w-2/3">
            {/* Blog Header */}
           <header className="mb-8">
  <h1 className="text-4xl font-bold text-gray-900 mb-2">{blog.title}</h1>
  <div className="flex items-center text-gray-600 text-sm">
    <span>{blog.date}</span>
    <span className="mx-2">•</span>
    <span>20 Comments</span>
  </div>
</header>

            {/* Blog Image */}
           <img
  src={blog.image}
  alt={blog.title}
  className="w-full h-auto rounded-lg shadow-md mb-8"
/>

            {/* Blog Content */}
       <article className="prose max-w-none mb-12">
  <p className="text-gray-700 mb-4">{blog.description}</p>
  <p className="text-gray-700 mb-4">
    This article explores more about {blog.title}. Stay tuned for details and
    insights that can enhance your understanding of this topic.
  </p>
</article>

            {/* Tags Section */}
            <section className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Marketing",
                  "Free Courses",
                  "Talk with instructor",
                  "Idea",
                  "Learning",
                ].map((tag) => (
                  <button
                    key={tag}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition duration-200"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </section>

            {/* Related Posts Slider */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Related Posts
                </h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => sliderRef.current?.slickPrev()}
                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition duration-200"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => sliderRef.current?.slickNext()}
                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition duration-200"
                  >
                    →
                  </button>
                </div>
              </div>

              <Slider ref={sliderRef} {...sliderSettings}>
                {sliderCards.map((card) => (
                  <div key={card.id} className="px-2">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition duration-200">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {card.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        {card.excerpt}
                      </p>
                      <span className="text-xs text-gray-500">{card.date}</span>
                    </div>
                  </div>
                ))}
              </Slider>
            </section>

            {/* Comments Section */}
            <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Comments ({comments.length})
              </h3>

              {/* Comments List */}
              <div className="space-y-6 mb-8">
                {comments.map((comment) => (
                  <Comment key={comment.id} comment={comment} />
                ))}
              </div>

              {/* Comment Form */}
              <form className="space-y-4">
                <h4 className="text-lg font-medium text-gray-900">
                  Leave a Comment
                </h4>
                <p className="text-sm text-gray-600">
                  Your email address will not be published. Required fields are
                  marked *
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Comment*
                  </label>
                  <textarea
                    id="comment"
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="save-info"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="save-info"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Save my name and email in this browser for the next time I
                    comment
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-200 font-medium"
                >
                  Post Comment
                </button>
              </form>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6 sticky top-24">
              {/* Top Links */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Top Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Free courses",
                    "Marketing",
                    "Ideas",
                    "Talk with Instructor",
                    "Learning",
                    "Knowladgable",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition duration-200 block"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Share */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Share
                </h3>
                <div className="flex items-center space-x-3">
                  {/* Facebook */}
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      pageUrl
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
                  >
                    <FaFacebookF size={18} />
                  </a>

                  {/* Twitter / X */}
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      pageUrl
                    )}&text=${encodeURIComponent(pageTitle)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-lg hover:bg-black hover:text-white transition duration-300"
                  >
                    <FaXTwitter size={18} />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                      pageUrl
                    )}&title=${encodeURIComponent(pageTitle)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-lg hover:bg-blue-700 hover:text-white transition duration-300"
                  >
                    <FaLinkedinIn size={18} />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                      pageTitle
                    )}%20${encodeURIComponent(pageUrl)}`}
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Previous Articles
                </h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="border-b border-gray-200 pb-4 last:border-b-0 flex items-start gap-3"
                    >
                      {/* Small square image */}
                      <div className="w-14 h-14 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                        <img
                          src={`https://via.placeholder.com/80?text=${item}`}
                          alt={`Article ${item}`}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Text content */}
                      <div>
                        <div className="text-sm text-gray-500 mb-1">
                          February {item}, 2023
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Culture use one third cycle. Value takes place only
                          permitted events complete from it.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
