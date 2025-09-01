import React, { useEffect } from 'react';
import './Pipstick.css';

const Pipstick = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="pipstick-container">
      <h1 className="animate-on-scroll">
        <span className="highlight"></span>Welcome To Dexo Academy
      </h1>
      <div className="content-wrapper">
        {/* Left Section */}
        <div className="left-card animate-on-scroll">
          <h2>Learn Digital Marketing Professionally</h2>
          <p>
            At Dexo Academy, we provide cutting-edge training in Digital Marketing
            with a focus on real-world skills. Our curriculum covers SEO, Social Media
            Marketing, Google Ads, Content Strategy, and Analytics — ensuring you are
            ready to take on today’s fast-paced digital world.
          </p>
          <p>
            Whether you’re a beginner or a professional, our hands-on courses help you
            build confidence, master strategies, and prepare for global certifications
            that boost your career opportunities.
          </p>
          <button className="join-btn">Enroll Now</button>
        </div>

        {/* Right Section */}
        <div className="right-cards animate-on-scroll">
          {/* Top Card */}
          <div className="card top-card">
            <div className="avatars">
              <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="avatar1" />
              <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="avatar2" />
              <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="avatar3" />
              <img src="https://randomuser.me/api/portraits/women/4.jpg" alt="avatar4" />
              <img src="https://randomuser.me/api/portraits/men/5.jpg" alt="avatar5" />
            </div>
            <h3>
              Rated <strong>4.9</strong> By <span className="highlight-red">Students</span> Worldwide
            </h3>
            <p>
              Join thousands of learners who trust Dexo Academy for practical, industry-driven
              digital marketing training.
            </p>
          </div>

          {/* Bottom Card */}
          <div className="card bottom-card">
            <div className="icon">
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 
                1.79-4 4 1.79 4 4 4zm0 2c-2.67 
                0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <h3>
              5k+ Global <span className="highlight-red">Learners</span> Community
            </h3>
            <p>
              Be part of a thriving community of marketers, entrepreneurs, and professionals
              sharing ideas and growing together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pipstick;
