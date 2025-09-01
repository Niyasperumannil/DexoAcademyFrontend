import { useState } from "react";
import axios from "axios";
import "./detail.css";

const Details = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    try {
      const res = await axios.post("http://localhost:5005/api/details", formData);
      setStatus({ type: "success", message: res.data.message || "Detail submitted successfully!" });
      setFormData({ firstname: "", lastname: "", email: "", phonenumber: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", message: err.response?.data?.message || "Submission failed" });
    }
  };

  return (
    <div className="details-container">
      <form className="details-form" onSubmit={handleSubmit}>
        <h2>Submit Your Details</h2>

        <div className="form-row">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phonenumber"
          placeholder="Phone Number"
          value={formData.phonenumber}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message (Optional)"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        {status.message && (
          <p className={`status ${status.type}`}>{status.message}</p>
        )}

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Details;
