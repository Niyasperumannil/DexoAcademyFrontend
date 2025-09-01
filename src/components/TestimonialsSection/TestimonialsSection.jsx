import React from 'react';
import './TestimonialsSection.css';

const testimonials = [
  { 
    name: 'Amit D', 
    message: 'The instructors explain every digital marketing concept clearly with real-world examples. I’ve already applied strategies that boosted my freelance projects!', 
    avatar: 'https://pipstick.in/wp-content/uploads/2025/04/Story-main.png' 
  },
  { 
    name: 'Neha S', 
    message: 'As a complete beginner, I was nervous about digital marketing. Dexo Academy made everything easy to understand. Now I run campaigns confidently!', 
    avatar: 'https://pipstick.in/wp-content/uploads/2025/04/Story-main.png' 
  },
  { 
    name: 'Sana K', 
    message: 'I tried free YouTube content before, but nothing comes close to Dexo’s structured approach to SEO and social media marketing. Totally worth it.', 
    avatar: 'https://pipstick.in/wp-content/uploads/2025/04/Story-main.png' 
  },
  { 
    name: 'Raj P', 
    message: 'Great experience with Dexo Academy! I learned content marketing and already landed my first client.', 
    avatar: 'https://pipstick.in/wp-content/uploads/2025/04/Story-main.png' 
  },
  { 
    name: 'Kiran M', 
    message: 'The strategies for Google Ads and social media marketing are simple yet effective. Highly recommended!', 
    avatar: 'https://pipstick.in/wp-content/uploads/2025/04/Story-main.png' 
  },
  { 
    name: 'Neha S', 
    message: 'Dexo’s guidance gave me the confidence to handle digital campaigns independently for my startup.', 
    avatar: 'https://pipstick.in/wp-content/uploads/2025/04/Story-main.png' 
  },
  { 
    name: 'Sana K', 
    message: 'The support and resources are amazing. I’m happy to be part of this growing digital marketing community.', 
    avatar: 'https://pipstick.in/wp-content/uploads/2025/04/Story-main.png' 
  },
  { 
    name: 'Amit D', 
    message: 'The community is very supportive and the courses are practical. I now understand how to scale businesses online.', 
    avatar: 'https://pipstick.in/wp-content/uploads/2025/04/Story-main.png' 
  },
];

const TestimonialsSection = () => (
  <section className="testimonials-section">
    <div className="testimonials-header">
      <button className="label-button">Testimonials</button>
      <h2>What They <span>Say</span> About Us?</h2>
      <p><strong>200+ Learners Have Shared Their Success with Dexo Academy</strong></p>
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

      {/* Extra duplicate columns for flow (unchanged) */}
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
