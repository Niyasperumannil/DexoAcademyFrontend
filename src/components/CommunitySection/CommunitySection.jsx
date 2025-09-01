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
      <div className="community-container">
        <div className="community-image">
          <img
            src="https://pipstick.in/wp-content/uploads/2025/04/Story-main.png"
            alt="Students in a digital marketing workshop"
          />
        </div>
        <div className="community-content">
          <button className="story-button">Our Story</button>
          <h2>Building a Global Digital Marketing Community</h2>
          <p>
            Dexo Academy was founded to bridge the gap between theory and practice,
            empowering learners to master digital marketing with hands-on strategies
            used by industry experts worldwide.
          </p>
<button
  className="read-more"
  onClick={() => window.open("https://wa.me/919876543210", "_blank")}
>
  Read More
</button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
