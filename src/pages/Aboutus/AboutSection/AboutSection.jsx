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
          Dexo Academy was founded by two passionate digital marketers who turned their
          vision into a mission — to equip students and professionals with the skills,
          strategies, and tools needed to succeed in the digital era. What began as a
          small initiative between two friends has now grown into a full-fledged Digital
          Marketing Institute trusted by learners across the region. At Dexo, we focus on
          simplifying complex concepts of SEO, social media, paid ads, and content
          strategy through practical, hands-on training. Our approach combines industry
          experience, innovation, and mentorship — guiding learners from the basics to
          advanced techniques that truly drive results in the real world.
        </p>
      </div>
    </section>
  );
}
