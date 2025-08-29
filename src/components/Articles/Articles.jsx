import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Articles.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get("http://localhost:5005/api/blog");
        setArticles(res.data);
      } catch (err) {
        console.error("Failed to load articles", err);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="articles-section">
      <h2>
        <span className="highlight">Latest</span> Articles
      </h2>
      <div className="articles-grid">
        {articles.map((article) => (
          <div className="article-card" key={article._id}>
            <img src={article.image} alt={article.title} />
            <h3>{article.title}</h3>
            <p className="meta">
              <span role="img" aria-label="calendar">📅</span>{" "}
              {new Date(article.createdAt).toLocaleDateString()} &nbsp;|&nbsp; 
              <span role="img" aria-label="clock">⏱</span> 1 min read
            </p>
          </div>
        ))}
      </div>
      {/* Button to navigate to /blog page */}
      <button 
        className="read-more-btn" 
        onClick={() => navigate("/blog")}
      >
        Read More
      </button>
    </div>
  );
};

export default Articles;
