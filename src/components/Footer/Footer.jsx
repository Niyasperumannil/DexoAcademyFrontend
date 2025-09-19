import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        {/* Logo */}
        <div className="footer-logo">
          <img src="/Screenshot_2025-09-19_215748-removebg-preview.png" alt="Dexo Academy Logo" />
          <h1>
            <span>ACADEMY</span>
          </h1>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Community</h3>
            <ul className="social-icons">
              <li><a href="#"><FaInstagram /> Instagram</a></li>
              <li><a href="#"><FaFacebookF /> Facebook</a></li>
              <li><a href="#"><FaTwitter /> Twitter</a></li>
              <li><a href="#"><FaLinkedinIn /> LinkedIn</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li><a href="tel:+918714257276">📞 +91 87142 57276</a></li>
              <li><a href="mailto:info@dexoacademy.com">✉️ info@dexoacademy.com</a></li>
              <li><a href="#">Trimurti Tower, 2nd floor, AKG Rd, Cherpulassery, Kerala 679503</a></li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      {/* Bottom Section */}
     <div className="footer-bottom">
  <p className="footer-credit">
    Developed by{" "}
    <a
      href="https://www.dexoinnovation.com"
      target="_blank"
      rel="noopener noreferrer"
      className="innovation-link"
    >
      Dexo Innovation
    </a>. All Rights Reserved.
  </p>
</div>

    </footer>
  );
};

export default Footer;
