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
        <img
          src="https://pipstick.in/wp-content/uploads/2025/04/About-Us-Main.png"
          alt="Our Team"
        />
      </div>

      {/* Right Content */}
      <div className="mv-content">
        <div className="mv-item">
          <FaBullseye className="mv-icon" />
          <h2>
            <span>Our</span> Mission
          </h2>
          <p>
            To make quality digital marketing education accessible to everyone
            and empower individuals with the skills they need to succeed online.
            Through practical training, real client projects, and expert
            mentorship, we’re preparing learners to build impactful careers in
            the digital world.
          </p>
        </div>

        <div className="mv-item">
          <FaEye className="mv-icon" />
          <h2>
            <span>Our</span> Vision
          </h2>
          <p>
            To build a global community of digital marketers who create, innovate,
            and lead the future of online business. We envision a world where
            every learner is confident, industry-ready, and capable of driving
            measurable digital growth.
          </p>
        </div>
      </div>
    </section>
  );
}
