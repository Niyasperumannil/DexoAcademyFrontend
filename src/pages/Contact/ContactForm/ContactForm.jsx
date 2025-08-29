import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./ContactForm.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactForm = () => {
  const formRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    try {
      const res = await axios.post("http://localhost:5005/api/details", formData);
      setStatus({ type: "success", message: res.data.message || "Detail submitted successfully!" });
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        message: "",
      });
    } catch (err) {
      setStatus({
        type: "error",
        message: err.response?.data?.message || "Submission failed",
      });
    }
  };

  return (
    <div ref={formRef} className={`contact-container ${isVisible ? "animate" : ""}`}>
      {/* Left Form Section */}
      <form className="contact-left" onSubmit={handleSubmit}>
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">
          We’d love to hear from you! Please fill out the form below.
        </p>

        <div className="input-group">
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

        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
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
        </div>

        <textarea
          name="message"
          placeholder="Type your message here"
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

      {/* Right Info Section */}
      <div className="contact-right">
        <h3>Office Address</h3>
        <p>
          <FaMapMarkerAlt className="icon" /> Fourth floor-2410, T2,
          2/1149/I155, HiLITE Business Park, HiLITE City, NH 17 Thondayad
          By-pass, Guruvayoorappan College P.O, Calicut–673 014
        </p>

        <h3>Phone Number</h3>
        <p>
          <FaPhoneAlt className="icon" /> +91 6238 845 454
        </p>

        <h3>Email Address</h3>
        <p>
          <FaEnvelope className="icon" /> info@pipstick.in
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
