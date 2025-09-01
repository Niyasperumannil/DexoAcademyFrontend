import React from 'react';
import './TradingBanner.css';

export default function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="banner-content">
        {/* Text Section */}
        <div className="text-section">
          <h1 className="banner-title">
            Digital Marketing Made<br />Simple and Effective
          </h1>
          <p className="banner-subtitle">
            Take control of your career. Join Dexo Academy’s community and master
            SEO, Social Media, and Paid Ads with real-world strategies.
          </p>
          <button className="banner-cta">
            Join Our Academy
          </button>
        </div>

        {/* Image Section */}
        <div className="image-section">
          <img
            src="https://pipstick.in/wp-content/uploads/2025/04/Chart12.png"
            alt="digital marketing strategy"
          />
        </div>
      </div>
    </section>
  );
}
