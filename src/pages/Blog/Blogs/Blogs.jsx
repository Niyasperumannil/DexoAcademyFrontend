import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import "./Blogs.css";
import Blog1 from '../../Blog/Blog1';
import Footer from "../../../components/Footer/Footer";

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`http://localhost:5005/api/blog/${id}`);
        setPost(res.data);
      } catch (err) {
        console.error("Failed to fetch blog:", err);
        setError("Failed to fetch blog. Please check the ID or try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <p className="loading-text">Loading blog...</p>;
  if (error) return <p className="error-text">{error}</p>;
  if (!post) return <p className="error-text">Blog not found.</p>;

  return (
    <>
    <Blog1 />
      <div className="blog-detail">
        {post.image && (
          <div className="blog-image-container">
            <img
              src={post.image}
              alt={post.title}
              className="blog-detail-image"
            />
          </div>
        )}
        <div className="blog-text-container">
          <h1>{post.title}</h1>
          <p className="blog-meta">
            <FaRegCalendarAlt />{" "}
            {new Date(post.createdAt).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            &nbsp; | &nbsp;
            <FaRegClock /> ~1 min read
          </p>
          <div className="blog-content">
            <ReactMarkdown>{post.description}</ReactMarkdown>
          </div>
          <p className="author-text">
            <strong>Written by:</strong> {post.written}
          </p>
        </div>
      </div>
        <Footer />
    </>
  );
};

export default BlogDetail;
