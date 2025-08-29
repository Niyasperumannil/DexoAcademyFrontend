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
        <span className="highlight"></span>Welcome To Dexo
      </h1>
      <div className="content-wrapper">
        <div className="left-card animate-on-scroll">
          <h2>Learn Safely &amp; Securely</h2>
          <p>
            At Pipstick, we prioritize your safety while you master the skills needed to succeed in trading. Our platform is built with advanced security protocols to ensure your personal information and learning data are fully protected at every step. Our courses are designed to offer practical, real-world trading knowledge in a trusted environment.
          </p>
          <p>
            Learn confidently, interact freely, and progress steadily with Pipstick — your safe partner in building a strong financial future.
          </p>
          <button className="join-btn">Join Now</button>
        </div>

        <div className="right-cards animate-on-scroll">
          <div className="card top-card">
            <div className="avatars">
              <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="avatar1" />
              <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="avatar2" />
              <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="avatar3" />
              <img src="https://randomuser.me/api/portraits/women/4.jpg" alt="avatar4" />
              <img src="https://randomuser.me/api/portraits/men/5.jpg" alt="avatar5" />
            </div>
            <h3>
              Rated <strong>4.7</strong> By <span className="highlight-red">Traders</span> Worldwide
            </h3>
            <p>
              Join a vibrant, supportive community of traders worldwide. Learn, collaborate, and grow alongside thousands of active learners and professionals.
            </p>
          </div>

          <div className="card bottom-card">
            <div className="icon">
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <h3>
              4k+ Global <span className="highlight-red">Traders</span> Community
            </h3>
            <p>
              Be part of a growing network. With thousands of learners and real-time discussions, you’ll never trade alone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pipstick;
