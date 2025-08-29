import React from 'react';
import './Banner.css';

const Banner = () => {
  const content = (
    <>
      <span className="highlight">*</span> No Hype. Just Trading
      <span className="highlight">*</span> Join the Pipstick Movement
      <span className="highlight">*</span> Learn. Practice. Profit.
    </>
  );

  return (
    <div className="marquee-wrapper">
      <div className="marquee-content">
        <div className="marquee-text">{content}</div>
        <div className="marquee-text">{content}</div> {/* duplicate */}
      </div>
    </div>
  );
};

export default Banner;
