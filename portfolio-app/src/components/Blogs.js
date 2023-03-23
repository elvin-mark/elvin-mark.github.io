import React from 'react';
import './Blogs.css'
import blogList from "../data/blogs.json"

const Blogs = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-header">Recent Blog Posts</h2>
      <div className="blog-list">
        {blogList.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-details">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <a href="/" className="blog-button">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
