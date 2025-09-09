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
          <img src="/dexologoo.png" alt="Pipstick Academy Logo" />
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

          {/* Contact Info Column (replaced duplicate Community) */}
          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li><a href="tel:+911234567890">📞 +91 87142 57276</a></li>
              <li><a href="mailto:info@dexoacademy.com">✉️ info@dexoacademy.com</a></li>
              <li><a href="#">Trimurti Tower, 2nd floor,AKG Rd, Cherpulassery, Kerala 679503</a></li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 Dexo Academy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
