import React from 'react';

const CircularLogo = () => (
  <div className="logo-container">
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      className="circular-logo"
    >
      <defs>
        <path
          id="circlePath"
          d="
            M100,100
            m-75,0
            a75,75 0 1,0 150,0
            a75,75 0 1,0 -150,0
          "
        />
      </defs>
      <g>
        {/* Central Icon */}
        <circle cx="100" cy="100" r="30" fill="#fff" />
        <path d="M100 80 L110 100 L100 120" stroke="#e63946" strokeWidth="6" fill="none" />
      </g>
      <text className="circle-text">
        <textPath href="#circlePath">
          JUST TRADE · NO HYPE · JUST TRADE · NO HYPE ·
        </textPath>
      </text>
    </svg>
  </div>
);

export default CircularLogo;
