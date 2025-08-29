import React, { useEffect, useRef, useState } from "react";
import "./StatsSection.css";

export default function StatsSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`stats-section ${isVisible ? "show" : ""}`}
      ref={sectionRef}
    >
      {/* Image */}
      <div className="stats-image">
        <img
          src="https://pipstick.in/wp-content/uploads/2025/04/About-Us-Main.png"
          alt="Team working together"
        />
      </div>

      {/* Stats Cards */}
      <div className="stats-cards">
        <div className="stat-card">
          <h2>15K<span>+</span></h2>
          <p>Student Learned</p>
        </div>
        <div className="stat-card">
          <h2>24<span>+</span></h2>
          <p>Cities Reached</p>
        </div>
        <div className="stat-card">
          <h2>8<span>+</span></h2>
          <p>Countries Covered</p>
        </div>
        <div className="stat-card">
          <h2>10K<span>+</span></h2>
          <p>Traders Community</p>
        </div>
      </div>
    </section>
  );
}
