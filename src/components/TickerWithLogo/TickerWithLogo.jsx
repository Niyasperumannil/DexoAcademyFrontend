import React from 'react';
import './TickerWithLogo.css';

const markets = [
  {
    name: 'Ethereum',
    price: '270.7',
    change: '+1.10',
    changePercent: '(+0.45%)',
    positive: true,
    icon: '🔷',
  },
  {
    name: 'S&P 500 Index',
    price: '6,395.2',
    change: '-6.40',
    changePercent: '(-0.10%)',
    positive: false,
    icon: '500',
  },
  {
    name: 'US 100 Cash CFD',
    price: '23,651.8',
    change: '-10.50',
    changePercent: '(-0.04%)',
    positive: false,
    icon: '100',
  },
  {
    name: 'EUR to USD',
    price: '1.16092',
    change: '-0.00',
    changePercent: '(-0.25%)',
    positive: false,
    icon: '🇪🇺',
  },
  {
    name: 'Bitcoin',
    price: '120,046',
    change: '+736.00',
    changePercent: '(+0.62%)',
    positive: true,
    icon: '₿',
  },
  {
    name: 'Ethereum',
    price: '4,270.7',
    change: '+19.10',
    changePercent: '(+0.45%)',
    positive: true,
    icon: '🔷',
  },
  {
    name: 'S&P 500 Index',
    price: '6,395.2',
    change: '-6.40',
    changePercent: '(-0.10%)',
    positive: false,
    icon: '500',
  },
  {
    name: 'US 100 Cash CFD',
    price: '23,651.8',
    change: '-10.50',
    changePercent: '(-0.04%)',
    positive: false,
    icon: '100',
  },
  {
    name: 'EUR to USD',
    price: '1.16092',
    change: '-0.00',
    changePercent: '(-0.25%)',
    positive: false,
    icon: '🇪🇺',
  },
  {
    name: 'US 100 Cash CFD',
    price: '23,651.8',
    change: '-10.50',
    changePercent: '(-0.04%)',
    positive: false,
    icon: '100',
  },
  {
    name: 'EUR to USD',
    price: '1.16092',
    change: '-0.00',
    changePercent: '(-0.25%)',
    positive: false,
    icon: '🇪🇺',
  },
  {
    name: 'EUR to USD',
    price: '1.16092',
    change: '-0.00',
    changePercent: '(-0.25%)',
    positive: false,
    icon: '🇪🇺',
  },
  {
    name: 'US 100 Cash CFD',
    price: '23,651.8',
    change: '-10.50',
    changePercent: '(-0.04%)',
    positive: false,
    icon: '100',
  },
  {
    name: 'EUR to USD',
    price: '1.16092',
    change: '-0.00',
    changePercent: '(-0.25%)',
    positive: false,
    icon: '🇪🇺',
  },
  {
    name: 'US 100 Cash CFD',
    price: '23,651.8',
    change: '-10.50',
    changePercent: '(-0.04%)',
    positive: false,
    icon: '100',
  },
  {
    name: 'EUR to USD',
    price: '1.16092',
    change: '-0.00',
    changePercent: '(-0.25%)',
    positive: false,
    icon: '🇪🇺',
  },
  {
    name: 'US 100 Cash CFD',
    price: '23,651.8',
    change: '-10.50',
    changePercent: '(-0.04%)',
    positive: false,
    icon: '100',
  },
  {
    name: 'EUR to USD',
    price: '1.16092',
    change: '-0.00',
    changePercent: '(-0.25%)',
    positive: false,
    icon: '🇪🇺',
  },
];

const MarketTicker = () => {
  const chunkSize = Math.ceil(markets.length / 3);
  const rows = [
    markets.slice(0, chunkSize),
    markets.slice(chunkSize, chunkSize * 2),
    markets.slice(chunkSize * 2),
  ];

  return (
    <div className="market-ticker-multirow">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="marquee-container">
          <div className="market-row marquee-content">
            {[...row, ...row].map((item, index) => (
              <div key={index} className="market-item">
                <div className="market-name">
                  <span className="market-icon">{item.icon}</span> {item.name}
                </div>
                <div className="market-price">{item.price}</div>
                <div className={`market-change ${item.positive ? 'positive' : 'negative'}`}>
                  {item.change} <span className="percent">{item.changePercent}</span>
                </div>
                {index !== row.length * 2 - 1 && <div className="separator" />}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketTicker;
