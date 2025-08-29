import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      {/* Tagline Button */}
      <div className="hero-tagline">
        <span>✨ Learn. Trade. Grow.</span>
      </div>

      {/* Heading */}
      <h1 className="hero-title">
        Master the Markets <br />
        with Dexo Academy
      </h1>

      {/* Subtext */}
      <p className="hero-subtext">
        Step into the world of trading with expert-led education, hands-on strategies,
        and powerful tools built for success.
      </p>

      {/* CTA Buttons */}
      <div className="hero-buttons">
        <button className="btn-apply">
          🔥 Apply Now
        </button>
       
      </div>

      {/* Circular Badge */}
      <div className="hero-badge">
        <span>• NO HYPE • JUST TRADE • NO HYPE • JUST TRADE •</span>
        <div className="badge-icon">↗</div>
      </div>
    </section>
  );
}
