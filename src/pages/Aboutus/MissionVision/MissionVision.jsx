import React, { useEffect, useRef, useState } from "react";
import "./MissionVision.css";
import { FaBullseye, FaEye } from "react-icons/fa";

export default function MissionVision() {
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
      className={`mission-vision ${isVisible ? "show" : ""}`}
      ref={sectionRef}
    >
      {/* Left Image */}
      <div className="mv-image">
        <img src="https://pipstick.in/wp-content/uploads/2025/04/About-Us-Main.png" alt="Our Team" />
      </div>

      {/* Right Content */}
      <div className="mv-content">
        <div className="mv-item">
          <FaBullseye className="mv-icon" />
          <h2>
            <span>Our</span> Mission
          </h2>
          <p>
            To democratize trading education and give individuals the tools they
            need to make informed, confident financial decisions. Through
            practical learning, community support, and expert mentorship, we’re
            helping people reshape their financial future.
          </p>
        </div>

        <div className="mv-item">
          <FaEye className="mv-icon" />
          <h2>
            <span>Our</span> Vision
          </h2>
          <p>
            To build a global network of financially aware individuals empowered
            to thrive in any market condition. We envision a world where everyone
            has the knowledge and confidence to take control of their financial
            journey.
          </p>
        </div>
      </div>
    </section>
  );
}
