import React from 'react';
import './TestimonialsSection.css';

const testimonials = [
  { name: 'Amit D', message: 'The instructors explain every concept clearly, with real examples. I’ve already recovered my course fee through my profits!', avatar: 'https://pipstick.in/wp-content/uploads/2025/04/Story-main.png' },
  { name: 'Neha S', message: 'As a complete beginner, I was nervous about trading. Pipstick made everything easy to understand. Now I trade daily!', avatar: 'https://pipstick.in/wp-content/uploads/2025/04/Story-main.png' },
  { name: 'Sana K', message: 'I tried free YouTube content before, but nothing comes close to Pipstick’s structured approach. Totally worth it.', avatar: 'https://pipstick.in/wp-content/uploads/2025/04/Story-main.png' },
  { name: 'Raj P', message: 'Great experience with Pipstick, learned a lot and earned well!', avatar: 'https://pipstick.in/wp-content/uploads/2025/04/Story-main.png' },
  { name: 'Kiran M', message: 'The trading strategies are simple and effective. Recommended!', avatar: 'https://pipstick.in/wp-content/uploads/2025/04/Story-main.png' },
  { name: 'Neha S', message: 'Pipstick’s guidance gave me confidence to trade independently.', avatar: 'https://pipstick.in/wp-content/uploads/2025/04/Story-main.png' },
  { name: 'Sana K', message: 'Support and resources are amazing. Happy to be part of this.', avatar: 'https://pipstick.in/wp-content/uploads/2025/04/Story-main.png' },
  { name: 'Amit D', message: 'The community is very supportive and the courses are well-structured.', avatar: 'https://pipstick.in/wp-content/uploads/2025/04/Story-main.png' },
  
  
];

const TestimonialsSection = () => (
  <section className="testimonials-section">
    <div className="testimonials-header">
      <button className="label-button">Testimonials</button>
      <h2>What They <span>Say</span> About Us?</h2>
      <p><strong>200+ People Have Said How Good Pipstick</strong></p>
    </div>

    <div className="testimonials-marquee-wrapper">
      {/* Left column - scrolls down */}
      <div className="testimonials-marquee marquee-down">
        <div className="testimonials-list">
          {testimonials.slice(0, 4).map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="header">
                <img src={t.avatar} alt={`${t.name} avatar`} className="avatar" />
                <h4 className="author-name">{t.name}</h4>
              </div>
              <p className="message">{t.message}</p>
            </div>
          ))}
          {/* Duplicate for seamless scroll */}
          {testimonials.slice(0, 4).map((t, i) => (
            <div key={`duplicate-down-${i}`} className="testimonial-card">
              <div className="header">
                <img src={t.avatar} alt={`${t.name} avatar`} className="avatar" />
                <h4 className="author-name">{t.name}</h4>
              </div>
              <p className="message">{t.message}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right column - scrolls up */}
      <div className="testimonials-marquee marquee-up">
        <div className="testimonials-list">
          {testimonials.slice(4, 8).map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="header">
                <img src={t.avatar} alt={`${t.name} avatar`} className="avatar" />
                <h4 className="author-name">{t.name}</h4>
              </div>
              <p className="message">{t.message}</p>
            </div>
          ))}
          {/* Duplicate for seamless scroll */}
          {testimonials.slice(4, 8).map((t, i) => (
            <div key={`duplicate-up-${i}`} className="testimonial-card">
              <div className="header">
                <img src={t.avatar} alt={`${t.name} avatar`} className="avatar" />
                <h4 className="author-name">{t.name}</h4>
              </div>
              <p className="message">{t.message}</p>
            </div>
          ))}
        </div>
      </div>
       <div className="testimonials-marquee marquee-down">
        <div className="testimonials-list">
          {testimonials.slice(0, 4).map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="header">
                <img src={t.avatar} alt={`${t.name} avatar`} className="avatar" />
                <h4 className="author-name">{t.name}</h4>
              </div>
              <p className="message">{t.message}</p>
            </div>
          ))}
          {/* Duplicate for seamless scroll */}
          {testimonials.slice(0, 4).map((t, i) => (
            <div key={`duplicate-down-${i}`} className="testimonial-card">
              <div className="header">
                <img src={t.avatar} alt={`${t.name} avatar`} className="avatar" />
                <h4 className="author-name">{t.name}</h4>
              </div>
              <p className="message">{t.message}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="testimonials-marquee marquee-up">
        <div className="testimonials-list">
          {testimonials.slice(4, 8).map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="header">
                <img src={t.avatar} alt={`${t.name} avatar`} className="avatar" />
                <h4 className="author-name">{t.name}</h4>
              </div>
              <p className="message">{t.message}</p>
            </div>
          ))}
          {/* Duplicate for seamless scroll */}
          {testimonials.slice(4, 8).map((t, i) => (
            <div key={`duplicate-up-${i}`} className="testimonial-card">
              <div className="header">
                <img src={t.avatar} alt={`${t.name} avatar`} className="avatar" />
                <h4 className="author-name">{t.name}</h4>
              </div>
              <p className="message">{t.message}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  </section>
);

export default TestimonialsSection;
