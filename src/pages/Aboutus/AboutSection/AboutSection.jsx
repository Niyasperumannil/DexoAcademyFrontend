import React, { useEffect, useState } from "react";
import "./AboutSection.css";

export default function AboutSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 200); // delay before animation starts
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`about-section ${animate ? "show" : ""}`}>
      <div className="about-left">
        <h1>
          Who <span>We Are</span> ?
        </h1>
      </div>
      <div className="about-right">
        <p>
          Pipstick was founded by two young market enthusiasts who turned their passion
          for trading into a purpose — to empower others with the knowledge, discipline,
          and tools needed to navigate financial markets successfully. What started as a
          small initiative between two friends has grown into a full-fledged trading
          education hub trusted by thousands. At Pipstick, we focus on simplifying
          complex trading concepts through practical, real-world strategies. Our approach
          blends experience, innovation, and mentorship — guiding learners from the
          basics to advanced techniques that truly work in volatile markets.
        </p>
      </div>
    </section>
  );
}
