import { useEffect, useState } from 'react';
import axios from 'axios';
import './BlogShow.css';

const DexoBlogShow = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch blogs
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

  // Delete blog
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;

    try {
      await axios.delete(`https://dexoacademybackend.onrender.com/api/blog/${id}`);
      setBlogs((prev) => prev.filter((blog) => blog._id !== id));
      alert('Blog deleted successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to delete blog. Try again.');
    }
  };

  if (loading) {
    return <div className="dexo-blog-loading">Loading blogs...</div>;
  }

  return (
    <div className="dexo-blogshow-container">
      <h2 className="dexo-blogshow-title">Latest Blogs</h2>
      <div className="dexo-blog-grid">
        {blogs.map((blog) => (
          <div key={blog._id} className="dexo-blog-card">
            {blog.image && <img src={blog.image} alt={blog.title} className="dexo-blog-image" />}
            <div className="dexo-blog-content">
              <h3 className="dexo-blog-card-title">{blog.title}</h3>
              <p className="dexo-blog-card-author">✍ {blog.written}</p>
              <p className="dexo-blog-card-description">
                {blog.description.length > 100
                  ? blog.description.slice(0, 100) + '...'
                  : blog.description}
              </p>
              <p className="dexo-blog-card-date">
                {new Date(blog.createdAt).toLocaleDateString()}
              </p>

              {/* Delete button */}
              <button
                className="dexo-delete-btn"
                onClick={() => handleDelete(blog._id)}
              >
                🗑 Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DexoBlogShow;
