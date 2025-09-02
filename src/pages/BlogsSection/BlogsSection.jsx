import { useState, useCallback } from 'react';
import axios from 'axios';
import Cropper from 'react-easy-crop';
import './BlogsSection.css';

const DexoBlogsSection = () => {
  const [form, setForm] = useState({
    title: '',
    written: '',
    description: '',
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [cropping, setCropping] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setCropping(true);
    }
  };

  // --- Generate cropped image from canvas ---
  const getCroppedImg = useCallback((imageSrc, crop, zoom) => {
    return new Promise(resolve => {
      const image = new Image();
      image.src = imageSrc;
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const size = 300; // final cropped size
        canvas.width = size;
        canvas.height = size;

        const scale = image.width / image.naturalWidth;
        const x = crop.x * scale;
        const y = crop.y * scale;

        ctx.drawImage(
          image,
          x, y, size * zoom, size * zoom,
          0, 0, size, size
        );

        canvas.toBlob(blob => {
          resolve(blob);
        }, 'image/jpeg');
      };
    });
  }, []);

  const handleCropComplete = async () => {
    const croppedBlob = await getCroppedImg(preview, crop, zoom);
    setCroppedImage(URL.createObjectURL(croppedBlob));
    setImage(new File([croppedBlob], "cropped.jpg", { type: "image/jpeg" }));
    setCropping(false);
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
      setCroppedImage(null);
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

        {/* Cropping UI */}
        {cropping && preview && (
          <div className="crop-container">
            <Cropper
              image={preview}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
            />
            <button type="button" onClick={handleCropComplete}>
              Confirm Crop
            </button>
          </div>
        )}

        {/* Cropped Preview */}
        {croppedImage && (
          <div className="dexo-image-preview">
            <img src={croppedImage} alt="Cropped Preview" />
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
