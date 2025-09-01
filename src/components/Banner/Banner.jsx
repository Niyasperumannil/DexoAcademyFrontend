import React from 'react';
import './Banner.css';

const Banner = () => {
  const content = (
    <>
      <span className="highlight">*</span> No Hype. Just Marketing
      <span className="highlight">*</span> Join the Dexo Academy
      <span className="highlight">*</span> Learn. Apply. Grow.
    </>
  );

  return (
    <div className="marquee-wrapper">
      <div className="marquee-content">
        {/* Duplicate text block ensures smooth infinite scroll */}
        <div className="marquee-text">{content}</div>
        <div className="marquee-text">{content}</div>
      </div>
    </div>
  );
};

export default Banner;
