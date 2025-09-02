import React from 'react';
import './TickerWithLogo.css';

// ✅ Import logo images
import metaLogo from '../../../public/meta-removebg-preview.png';
import googleAdsLogo from '../../../public/adwords-removebg-preview.png';
import wordpressLogo from '../../../public/wordpress-removebg-preview.png';
import linkedinLogo from '../../../public/linkedin-removebg-preview.png';
import shopifyLogo from '../../../public/shopify-removebg-preview.png';
import youtubeLogo from '../../../public/youtube-removebg-preview.png';
import instagramLogo from '../../../public/instagram-removebg-preview.png';
import googleLogo from '../../../public/google-removebg-preview.png';
import photoshopLogo from '../../../public/photoshop-removebg-preview.png';
import whatsappLogo from '../../../public/whatsapp-removebg-preview.png';
import mailchimpLogo from '../../../public/ma.png';   // ✅ Mailchimp
import ahrefsLogo from '../../../public/ahrefs-removebg-preview.png';       // ✅ Ahrefs
import analyticsLogo from '../../../public/analyitics.png'; // ✅ Google Analytics
import spyfuLogo from '../../../public/spy.png';         // ✅ SpyFu

const courses = [
  { name: 'Meta Ads', description: 'Run powerful ad campaigns', logo: metaLogo },
  { name: 'Google Ads', description: 'Drive instant leads', logo: googleAdsLogo },
  { name: 'WordPress', description: 'Build websites easily', logo: wordpressLogo },
  { name: 'LinkedIn Marketing', description: 'Grow professional network', logo: linkedinLogo },
  { name: 'Shopify', description: 'Launch online stores', logo: shopifyLogo },
  { name: 'YouTube Marketing', description: 'Boost video reach', logo: youtubeLogo },
  { name: 'Instagram Growth', description: 'Engage & convert followers', logo: instagramLogo },
  { name: 'Google Analytics', description: 'Track performance', logo: analyticsLogo }, // ✅ updated with real GA logo
  { name: 'Photoshop', description: 'Design like a pro', logo: photoshopLogo },
  { name: 'WhatsApp Marketing', description: 'Connect with your audience', logo: whatsappLogo },
  { name: 'Mailchimp', description: 'Email marketing made easy', logo: mailchimpLogo }, // ✅ new
  { name: 'Ahrefs', description: 'SEO & backlinks analysis', logo: ahrefsLogo },       // ✅ new
  { name: 'SpyFu', description: 'Competitor keyword research', logo: spyfuLogo },      // ✅ new
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
                  <img src={item.logo} alt={item.name} className="institute-logo" /> {item.name}
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
