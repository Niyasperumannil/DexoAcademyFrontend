import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = () => {
    navigate("/contact");
    setIsMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <div className="cherpulassery-dexo-app-container fade-in">
      <header className="cherpulassery-dexo-header fade-in">
        <div className="cherpulassery-dexo-logo-container">
          <img
            src="Screenshot_2025-09-19_215748-removebg-preview.png"
            alt="Cherpulassery Dexo Academy Logo"
            className="cherpulassery-dexo-logo"
          />
        </div>

        <nav className="cherpulassery-dexo-navbar">
          <ul className="cherpulassery-dexo-nav-list">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "cherpulassery-dexo-nav-link" + (isActive ? " active" : "")
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "cherpulassery-dexo-nav-link" + (isActive ? " active" : "")
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  "cherpulassery-dexo-nav-link" + (isActive ? " active" : "")
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>

        <button
          className="cherpulassery-dexo-contact-button desktop-only"
          onClick={handleContactClick}
        >
          Contact
        </button>

        <button
          className="cherpulassery-dexo-burger-menu-button mobile-only"
          onClick={toggleMobileMenu}
          aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
        >
          {isMenuOpen ? "❌" : "☰"}
        </button>
      </header>

      <div
        className={`cherpulassery-dexo-mobile-menu ${
          isMenuOpen ? "open fade-in" : "closed fade-out"
        }`}
      >
        <nav className="cherpulassery-dexo-mobile-navbar">
          <ul className="cherpulassery-dexo-mobile-nav-list">
            <li>
              <NavLink
                to="/"
                onClick={toggleMobileMenu}
                className={({ isActive }) =>
                  "cherpulassery-dexo-nav-link" + (isActive ? " active" : "")
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={toggleMobileMenu}
                className={({ isActive }) =>
                  "cherpulassery-dexo-nav-link" + (isActive ? " active" : "")
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                onClick={toggleMobileMenu}
                className={({ isActive }) =>
                  "cherpulassery-dexo-nav-link" + (isActive ? " active" : "")
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={toggleMobileMenu}
                className={({ isActive }) =>
                  "cherpulassery-dexo-nav-link" + (isActive ? " active" : "")
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <main className="cherpulassery-dexo-hero-section fade-in">
        <p className="cherpulassery-dexo-tagline">Learn. Apply. Repeat.</p>
        <h1 className="cherpulassery-dexo-hero-title">
          Master Digital Marketing
          <br />
          with Dexo Academy
        </h1>
        <p className="cherpulassery-dexo-hero-subtitle">
          Join our Digital Marketing Course in Cherpulassery and gain
          industry-ready skills with hands-on training, real client projects,
          and expert-led sessions designed to make you job-ready.
        </p>

        <div className="cherpulassery-dexo-cta-buttons">
          <button
            className="cherpulassery-dexo-cta-demo"
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=QusJ4fpWQwA",
                "_blank"
              )
            }
          >
            Try Demo
          </button>

          <button
            className="cherpulassery-dexo-cta-apply"
            onClick={() =>
              window.open("https://wa.me/918714257276", "_blank")
            }
          >
            Apply Now
          </button>
        </div>
      </main>
    </div>
  );
}

export default Navbar;
