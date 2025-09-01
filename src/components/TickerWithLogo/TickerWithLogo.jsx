import React from 'react';
import './TickerWithLogo.css';

const courses = [
  {
    name: 'SEO Mastery',
    description: 'Boost rankings & traffic',
    positive: true,
    icon: '🔍',
  },
  {
    name: 'Social Media Marketing',
    description: 'Grow your brand online',
    positive: true,
    icon: '📱',
  },
  {
    name: 'Google Ads (PPC)',
    description: 'Drive instant leads',
    positive: true,
    icon: '💰',
  },
  {
    name: 'Email Marketing',
    description: 'Engage with audiences',
    positive: true,
    icon: '📧',
  },
  {
    name: 'Content Marketing',
    description: 'Attract & convert clients',
    positive: true,
    icon: '✍️',
  },
  {
    name: 'Analytics & Reporting',
    description: 'Track performance',
    positive: true,
    icon: '📊',
  },
  {
    name: 'Affiliate Marketing',
    description: 'Earn passive income',
    positive: true,
    icon: '🤝',
  },
  {
    name: 'Brand Strategy',
    description: 'Build strong identity',
    positive: true,
    icon: '🎯',
  },
];

const InstituteTicker = () => {
  const chunkSize = Math.ceil(courses.length / 3);
  const rows = [
    courses.slice(0, chunkSize),
    courses.slice(chunkSize, chunkSize * 2),
    courses.slice(chunkSize * 2),
  ];

  return (
    <div className="institute-ticker-multirow">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="marquee-container">
          <div className="institute-row marquee-content">
            {[...row, ...row].map((item, index) => (
              <div key={index} className="institute-item">
                <div className="institute-name">
                  <span className="institute-icon">{item.icon}</span> {item.name}
                </div>
                <div className="institute-desc">{item.description}</div>
                {index !== row.length * 2 - 1 && <div className="separator" />}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstituteTicker;
