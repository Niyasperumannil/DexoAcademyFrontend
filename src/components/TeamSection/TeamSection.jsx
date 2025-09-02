// TeamSection.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './TeamSection.css';

const TeamSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="team-section">
      <div className="team-content" data-aos="fade-right">
        <button className="team-tag">Our Team</button>
        <h1 className="team-heading">
          Experts Guiding Your<br />
          Digital Marketing Journey
        </h1>

        <p className="team-description">
          Led by experienced marketers and strategists, Dexo Academy equips you with the skills to excel in today’s
          competitive digital landscape.
        </p>
<button
  className="read-more"
  onClick={() => window.open("https://wa.me/918714257276", "_blank")}
>
  Join Now
</button>
      </div>

      <div className="team-image-container" data-aos="fade-left">
        <img
          src="https://pipstick.in/wp-content/uploads/2025/04/About-Us-Main.png"
          alt="Team"
          className="team-image"
        />
      </div>
    </section>
  );
};

export default TeamSection;
