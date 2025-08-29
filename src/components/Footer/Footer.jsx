import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="dexologoo.png" alt="Pipstick Academy Logo" />
          <h1>DEXO <span>ACADEMY</span></h1>
        </div>

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
            <ul>
              <li><a href="#">Instagram</a></li>
               <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                 <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2025 Dexo All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
