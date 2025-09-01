import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./aboutus.css";

function App() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = () => navigate("/contact");
  const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="app-container">
      {/* HEADER */}
      <header className="header">
        <div className="logo-container">
          <img
            src="/dexologoo.png"
            alt="Dexo Academy Logo"
            className="logo"
          />
        </div>

        {/* Desktop Navbar */}
        <nav className="navbar">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>

        <button
          className="contact-button"
          onClick={handleContactClick}
        >
          Contact
        </button>

        {/* Mobile Burger Menu */}
        <button
          className="burger-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Open mobile menu"
        >
          ☰
        </button>
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <button
          className="close-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Close mobile menu"
        >
          ❌
        </button>
        <nav className="mobile-navbar">
          <ul>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={toggleMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={toggleMobileMenu}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={toggleMobileMenu}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={toggleMobileMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <button
          className="contact-button mobile-contact-button"
          onClick={handleContactClick}
        >
          Contact
        </button>
      </div>

      {/* HERO SECTION */}
      <main className="hero-section">
        <p className="tagline">Learn. Apply. Repeat.</p>
        <h1 className="hero-title">
          Master Digital Marketing
          <br />
          with Dexo Academy
        </h1>
        <p className="hero-subtitle">
          Join our Digital Marketing Course in Cherpulassery and gain
          industry-ready skills with hands-on training, real client
          projects, and expert-led sessions designed to make you
          job-ready.
        </p>

        <div className="cta-buttons">
          <button className="cta-demo">Try Demo</button>
        </div>
      </main>
    </div>
  );
}

export default App;
