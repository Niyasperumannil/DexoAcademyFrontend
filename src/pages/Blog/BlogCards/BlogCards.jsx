// BlogCards.jsx
import React, { useEffect, useRef, useState } from "react";
import "./BlogCards.css";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BlogCards = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("https://dexoacademybackend.onrender.com/api/blog");
        setBlogPosts(res.data);
      } catch (err) {
        console.error("Failed to load blogs", err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-section" ref={sectionRef}>
      {blogPosts.map((post) => (
        <div
          key={post._id}
          className={`blog-card ${isVisible ? "show" : ""}`}
          style={{ backgroundColor: "#f9f9f9" }}
        >
          <div className="blog-image" onClick={() => navigate(`/blog/${post._id}`)} style={{ cursor: "pointer" }}>
            <img src={post.image} alt={post.title} />
          </div>
          <div className="blog-content">
            <h3 onClick={() => navigate(`/blog/${post._id}`)} style={{ cursor: "pointer" }}>{post.title}</h3>
            <div className="blog-meta">
              <span>
                <FaRegCalendarAlt />{" "}
                {new Date(post.createdAt).toLocaleDateString()}
              </span>
              <span>
                <FaRegClock /> ~1 min read
              </span>
            </div>
            <p className="blog-description">
              {post.description.slice(0, 100)}...
            </p>
            <button
              className="read-more-btn"
              onClick={() => navigate(`/blog/${post._id}`)}
            >
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;
