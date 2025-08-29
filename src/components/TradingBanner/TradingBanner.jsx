import React from 'react';
import './TradingBanner.css';

export default function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="banner-content">
        {/* Text Section */}
        <div className="text-section">
          <h1 className="banner-title">
            Trading Made Simple<br />and Rewarding
          </h1>
          <p className="banner-subtitle">
            Take control of your financial future. Join Pipstick’s community and learn strategies that lead to real success.
          </p>
          <button className="banner-cta">
            Join Our Community
          </button>
        </div>

        {/* Image Section */}
        <div className="image-section">
          <img
            src="https://pipstick.in/wp-content/uploads/2025/04/Chart12.png"
            alt="rising chart"
          />
        </div>
      </div>
    </section>
  );
}
