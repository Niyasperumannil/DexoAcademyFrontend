import React, { useEffect, useRef } from 'react';
import './CommunitySection.css';

const CommunitySection = () => {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        ([entry], obs) => {
          if (entry.isIntersecting) {
            el.classList.add('visible');
            obs.unobserve(el);
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    } else {
      el.classList.add('visible');
    }
  }, []);

  return (
    <section className="community-section" ref={ref}>
      <div className="community-container image-left-content-right">
        {/* IMAGE ON LEFT */}
        <div className="community-image">
          <img
            src="https://pipstick.in/wp-content/uploads/2025/04/Story-main.png"
            alt="Students in a digital marketing workshop"
          />
        </div>
        {/* CONTENT ON RIGHT */}
        <div className="community-content">
          <button className="story-button">Our Story</button>
          <h2>Trading Made Simple <br />and Rewarding</h2>
          <p>
            Take control of your financial future. Join Dexo’s community
            and learn strategies that lead to real success.
          </p>
          <button
            className="read-more"
            onClick={() => window.open("https://wa.me/918714257276", "_blank")}
          >
            Join Our Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
