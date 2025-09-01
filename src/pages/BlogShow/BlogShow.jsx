import { useEffect, useState } from 'react';
import axios from 'axios';
import './blogShow.css';

const BlogShow = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('https://dexoacademybackend.onrender.com/api/blog');
        setBlogs(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="blog-loading">Loading blogs...</div>;
  }

  return (
    <div className="blogshow-container">
      <h2 className="blogshow-title">Latest Blogs</h2>
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div key={blog._id} className="blog-card">
            {blog.image && <img src={blog.image} alt={blog.title} className="blog-image" />}
            <div className="blog-content">
              <h3 className="blog-card-title">{blog.title}</h3>
              <p className="blog-card-author">✍ {blog.written}</p>
              <p className="blog-card-description">
                {blog.description.length > 100
                  ? blog.description.slice(0, 100) + '...'
                  : blog.description}
              </p>
              <p className="blog-card-date">
                {new Date(blog.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogShow;
