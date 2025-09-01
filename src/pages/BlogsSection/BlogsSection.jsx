import { useState } from 'react';
import axios from 'axios';
import './BlogsSection.css';

const DexoBlogsSection = () => {
  const [form, setForm] = useState({
    title: '',
    written: '',
    description: '',
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = e => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.title || !form.written || !form.description) {
      alert('Please fill in all fields');
      return;
    }
    setLoading(true);

    try {
      let imageUrl = '';
      if (image) {
        const formData = new FormData();
        formData.append('images', image);
        const uploadRes = await axios.post(
          'https://dexoacademybackend.onrender.com/api/upload',
          formData,
          { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        imageUrl = uploadRes.data.urls[0];
      }

      await axios.post('https://dexoacademybackend.onrender.com/api/blog', {
        ...form,
        image: imageUrl,
      });

      alert('Blog posted successfully!');
      setForm({ title: '', written: '', description: '' });
      setImage(null);
      setPreview(null);
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dexo-blog-container">
      <form className="dexo-blog-form" onSubmit={handleSubmit}>
        <h2 className="dexo-blog-title">📝 Create a New Blog</h2>

        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="written"
          placeholder="Written By"
          value={form.written}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Blog Description"
          rows="5"
          value={form.description}
          onChange={handleChange}
          required
        ></textarea>

        <input type="file" accept="image/*" onChange={handleImageChange} />

        {preview && (
          <div className="dexo-image-preview">
            <img src={preview} alt="Preview" />
          </div>
        )}

        <button type="submit" disabled={loading}>
          {loading ? 'Posting...' : 'Post Blog'}
        </button>
      </form>
    </div>
  );
};

export default DexoBlogsSection;
