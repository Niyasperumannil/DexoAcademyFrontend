import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function App() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = () => navigate("/contact");
  const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen);

  // Intersection observer for hero reveal
  const heroRef = useRef(null);
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="dexoacademy-app-container">
      {/* HEADER */}
      <header className="dexoacademy-header">
        <div className="dexoacademy-logo-container">
          <img
            src="dexologoo.png"
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

      {/* HERO SECTION with step reveal */}
      <main className="dexoacademy-hero-section dexoacademy-seq" ref={heroRef}>
        <p className="dexoacademy-tagline" style={{ "--i": 1 }}>
          Learn. Apply. Repeat.
        </p>
        <h1 className="dexoacademy-hero-title" style={{ "--i": 2 }}>
          Master Digital Marketing
          <br />
          with Dexo Academy
        </h1>
        <p className="dexoacademy-hero-subtitle" style={{ "--i": 3 }}>
          Join our Digital Marketing Course in Cherpulassery and gain
          industry-ready skills with hands-on training, real client
          projects, and expert-led sessions designed to make you job-ready.
        </p>

<div className="dexoacademy-cta-buttons" style={{ "--i": 4 }}>
  <button
    className="dexoacademy-cta-demo"
    onClick={() => window.open("https://www.youtube.com/watch?v=QusJ4fpWQwA", "_blank")}
  >
    Try Demo
  </button>

  <button
    className="dexoacademy-cta-apply"
    onClick={() => window.open("https://wa.me/919876543210", "_blank")}
  >
    Apply Now
  </button>
</div>



      </main>
    </div>
  );
}

export default App;
