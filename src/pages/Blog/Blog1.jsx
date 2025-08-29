import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

// The CSS has been embedded here for a single, self-contained file.
const embeddedCss = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

  :root {
    --primary-color: #080854;
    --secondary-color: #ffffff;
    --background-color: #2f0897;
    --gradient-start: #1a214c;
    --gradient-end: #000000;
    --button-hover-red: #150b46;
  }

  body {
    margin: 0;
    font-family: 'Poppins', Arial, sans-serif;
    background-color: var(--background-color);
    color: var(--secondary-color);
  }

  .app-container {
    height: 100vh;
    background: radial-gradient(circle, var(--gradient-start) 0%, var(--gradient-end) 100%);
    display: flex;
    flex-direction: column;
  }

  /* Header/Navigation */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 50px;
  }

  .logo {
    height: 50px;
  }

  .navbar ul {
    list-style: none;
    display: flex;
    gap: 30px;
    margin: 0;
    padding: 0;
  }

  .nav-link {
    text-decoration: none;
    color: var(--secondary-color);
    padding: 14px 25px;
    border-radius: 35px;
    font-size: 1.25rem;
    transition: background-color 0.3s;
  }

  .nav-link.active {
    background-color: var(--primary-color);
  }

  .contact-button {
    background-color: transparent;
    color: var(--secondary-color);
    border: 2px solid var(--secondary-color);
    border-radius: 25px;
    padding: 12px 28px;
    font-size: 1.25rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
    user-select: none;
  }

  .contact-button:hover {
    background-color: var(--secondary-color);
    color: var(--background-color);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
    transform: scale(1.05);
  }

  .contact-button:focus {
    outline: none;
    box-shadow: 0 0 20px rgba(255, 255, 255, 1);
    transform: scale(1.1);
  }

  /* Hide mobile elements by default on desktop */
  .burger-menu-button, .mobile-menu {
    display: none;
  }

  /* Hero Section */
.hero-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-grow: 1;
  padding: 30px 0px 100px;
}


  .tagline {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    margin: 20px;
    padding: 10px 28px;
    border-radius: 35px;
    font-size: 1.25rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: background 0.3s ease;
    user-select: none;
    display: inline-block;
  }

  .tagline:hover {
    background: linear-gradient(90deg, #1565c0, #42a5f5);
    box-shadow: 0 4px 12px rgba(66, 165, 245, 0.6);
    cursor: default;
  }

  .hero-title {
    font-size: 6rem;
    line-height: 1.2; /* tighter line spacing */
    font-weight: 500;
    margin: 15px 0 10px;
  }
   
  .hero-subtitle {
    max-width: 600px;
    line-height: 1.5;
    margin: 30px auto 30px;
    font-size: 1.1rem;
    text-align: center;
  }

  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
    font-size: 1.1rem;

  }

  .cta-buttons button {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    will-change: transform, box-shadow;
  }

  .cta-buttons button:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(70, 30, 232, 0.6);
  }

  .cta-buttons button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(70, 30, 232, 0.8);
  }

  .cta-apply, .cta-demo {
    padding: 15px 30px;
    border-radius: 25px;
    font-weight: 1000;
    cursor: pointer;
    border: none;
    font-size: 1rem;
  }

  .cta-apply {
    background: linear-gradient(90deg, #0d47a1, #1976d2);
    color: var(--secondary-color);
    border-radius: 35px;
    padding: 20px ;
    margin: 10px auto 30px;
    font-size: 1rem;
      font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: background 0.3s ease;
    user-select: none;
    display: inline-block;
  }

  .cta-apply:hover {
    background-color: var(--button-hover-red);
  }

  .cta-demo {
    background-color: transparent;
    color: var(--secondary-color);
    border: 1px solid var(--secondary-color);
  }

  .cta-demo:hover {
    background-color: rgba(47, 10, 122, 0.1);
  }

  /* Animations */
  @keyframes slideUpFadeIn {
    0% {
      opacity: 0;
      transform: translateY(30px) rotateX(15deg);
      transform-origin: bottom center;
    }
    100% {
      opacity: 1;
      transform: translateY(0) rotateX(0);
      transform-origin: bottom center;
    }
  }

  .header, .hero-section, .tagline, .hero-title, .hero-subtitle, .cta-buttons, .logo, .navbar ul li, .contact-button {
    opacity: 0;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
    animation-name: slideUpFadeIn;
    animation-duration: 0.6s;
  }

  .header { animation-delay: 0.05s; }
  .logo { animation-delay: 0.15s; }
  .navbar ul li:nth-child(1) { animation-delay: calc(0.2s + 0 * 0.1s); }
  .navbar ul li:nth-child(2) { animation-delay: calc(0.2s + 1 * 0.1s); }
  .navbar ul li:nth-child(3) { animation-delay: calc(0.2s + 2 * 0.1s); }
  .contact-button { animation-delay: 0.5s; }

  .tagline { animation-delay: 0.1s; }
  .hero-title { animation-delay: 0.3s; }
  .hero-subtitle { animation-delay: 0.5s; }
  .cta-buttons { animation-delay: 0.7s; }

  /* Mobile-Specific Styles */
  @media (max-width: 768px) {
    /* Disable desktop animations on mobile */
    .header, .logo, .navbar ul li, .contact-button, .hero-section, .tagline, .hero-title, .hero-subtitle, .cta-buttons {
      animation: none;
      opacity: 1;
    }
    
    /* Hide desktop items */
    .navbar, .contact-button {
      display: none;
    }
    .logo {
    height: 40px;
  }
    /* Show the burger menu button */
    .burger-menu-button {
      display: block;
      background: transparent;
      border: none;
      color: white;
      font-size: 2rem;
      cursor: pointer;
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 200;
    }

    /* Styling for the off-canvas menu */
    .mobile-menu {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: black;
      z-index: 100;
      transition: transform 0.3s ease-in-out;
      transform: translateX(-100%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .mobile-menu.open {
      transform: translateX(0);
    }

    .close-menu-button {
      position: absolute;
      top: 20px;
      right: 20px;
      background: transparent;
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
    }

    /* Styling for the menu content */
    .mobile-navbar ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 30px;
      text-align: center;
    }

    .mobile-navbar a {
      color: white;
      text-decoration: none;
      font-size: 1.5rem;
      padding: 10px 0;
      display: block;
    }

    .mobile-navbar a.active {
      color: #ff0000;
    }
    
    /* Responsive Hero Section adjustments */
    .hero-section {
      padding: 5px 20px 50px;
    }
    .tagline {
      font-size: 1rem;
    }
    .hero-title {
      font-size: 2rem;
    }

    .hero-subtitle {
      font-size: 0.75rem;
      max-width: 90%;
    }
    
    .cta-buttons {
      flex-direction: column;
      width: 80%;
      max-width: 300px;
    }

    .cta-buttons button {
      width: 100%;
    }
      .cta-apply {
      font-size: 1rem;
      margin-left: 30px;
      }
  }
`;

function App() {
    const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const handleContactClick = () => {
    navigate("/contact");
  };
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app-container">
      {/* A style tag is used here to embed the CSS directly for a single, runnable file */}
      <style>{embeddedCss}</style>
      
      {/* Header/Navigation */}
      <header className="header">
        <div className="logo-container">
          <img src="dexologoo.png" alt="Pipstick Academy Logo" className="logo" />
        </div>
        
        {/* Desktop Navbar */}
         <nav className="navbar">
      <ul>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
        
 <button className="contact-button" onClick={handleContactClick}>
        Contact
      </button>
        {/* Burger menu button for small screens */}
        <button className="burger-menu-button" onClick={toggleMobileMenu}>
          ☰
        </button>
      </header>

      {/* Mobile Off-canvas Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="close-menu-button" onClick={toggleMobileMenu}>
          ❌
        </button>
        <nav className="mobile-navbar">
          <ul>
            <li><a href="/home" className="nav-link active">Home</a></li>
            <li><a href="/about" className="nav-link">About Us</a></li>
            <li><a href="/blog" className="nav-link">Blog</a></li>
            <li><a href="/contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
        <button className="contact-button mobile-contact-button">Contact</button>
      </div>

      {/* Hero Section */}
      <main className="hero-section">
        <div className="hero-content">
          <p className="tagline">Learn. Trade. Grow.</p>
          <h1 className="hero-title">Master the Markets<br/>with Dexo Academy</h1>
          <p className="hero-subtitle">
            Step into the world of trading with expert-led education, hands-on strategies, and powerful tools built for success.
          </p>
          <div className="cta-buttons">
            
          </div>
        </div>
      </main>
      
    </div>
  );
}

export default App;
