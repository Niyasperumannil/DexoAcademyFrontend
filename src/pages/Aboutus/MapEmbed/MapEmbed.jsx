import React from "react";
import "./MapEmbed.css";

const MapEmbed = () => {
  return (
    <div className="map-container">
      <iframe
        title="Dexo Innovation Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.247255955346!2d76.3127013!3d10.8790715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7d1000984fd8f%3A0xdb889c7f9fe47193!2sDexo%20Innovation!5e1!3m2!1sen!2sin!4v1756802876144!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
