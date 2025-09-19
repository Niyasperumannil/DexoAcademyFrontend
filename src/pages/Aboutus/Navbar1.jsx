import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Aboutus.css";

function App() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = () => navigate("/contact");
  const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="dexoacademy-app-container">
      {/* HEADER */}
      <header className="dexoacademy-header">
        <div className="dexoacademy-logo-container">
          <img
            src="/Screenshot_2025-09-19_215748-removebg-preview.png"
            alt="Dexo Academy Logo"
            className="dexoacademy-logo"
          />
        </div>

        {/* Desktop Navbar */}
        <nav className="dexoacademy-navbar">
          <ul>
            <li>
              <NavLink to="/" className="dexoacademy-nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="dexoacademy-nav-link">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="dexoacademy-nav-link">
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>

        <button
          className="dexoacademy-contact-button"
          onClick={handleContactClick}
        >
          Contact
        </button>

        {/* Mobile Burger Menu */}
        <button
          className="dexoacademy-burger-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Open mobile menu"
        >
          ☰
        </button>
      </header>

      {/* MOBILE MENU */}
      <div className={`dexoacademy-mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <button
          className="dexoacademy-close-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Close mobile menu"
        >
          ❌
        </button>
        <nav className="dexoacademy-mobile-navbar">
          <ul>
            <li>
              <NavLink to="/" onClick={toggleMobileMenu} className="dexoacademy-nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={toggleMobileMenu} className="dexoacademy-nav-link">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" onClick={toggleMobileMenu} className="dexoacademy-nav-link">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={toggleMobileMenu} className="dexoacademy-nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* HERO SECTION */}
      <main className="dexoacademy-hero-section">
        <p className="dexoacademy-tagline">Learn. Apply. Repeat.</p>
        <h1 className="dexoacademy-hero-title">
          Step into the World of <br />
          Marketing Excellence
        </h1>
        <p className="dexoacademy-hero-subtitle">
          At Dexo, we empower aspiring digital marketers to thrive in today’s
          competitive online world. With expert-led training, cutting-edge
          tools, and hands-on mentorship, our platform helps you master SEO,
          social media, paid ads, and analytics—equipping you with the skills
          to create, manage, and scale impactful digital campaigns.
        </p>

        <div className="dexoacademy-cta-buttons">
          <button
            className="dexoacademy-cta-demo"
            onClick={() => window.open("https://wa.me/918714257276", "_blank")}
          >
            Book a Free Demo
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
