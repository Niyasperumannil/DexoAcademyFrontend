import React from 'react';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="circle-text">
        <svg viewBox="0 0 200 200" className="text-circle">
          <path
            id="circlePath"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          />
          <text>
            <textPath href="#circlePath" startOffset="0%">
              • NO HYPE • JUST TRADE • NO HYPE • JUST TRADE •
            </textPath>
          </text>
        </svg>
      </div>
      <div className="center-arrow">↑</div>
    </div>
  );
};

export default Logo;
