import { FaUsers, FaGlobe, FaQuestionCircle } from "react-icons/fa";
import "./ContactCards.css";

export default function ContactCards() {
  return (
    <section className="contact-section">
      <h2 className="section-title">Talk To Us</h2>
      <p className="section-subtitle">
        We operate globally with a mission to empower traders everywhere. Reach
        out via email or social media — we’ll respond as soon as possible.
      </p>

      <div className="contact-cards">
        <div className="contact-card animate">
          <div className="icon-container">
            <FaUsers />
          </div>
          <h3>General Inquiries</h3>
          <p>
            Have a question about a course or enrollment process? We're here to
            help every step of the way.
          </p>
        </div>

        <div className="contact-card animate">
          <div className="icon-container">
            <FaGlobe />
          </div>
          <h3>Technical Support</h3>
          <p>
            Facing login issues or need help navigating the platform? Our
            support team has your back.
          </p>
        </div>

        <div className="contact-card animate">
          <div className="icon-container">
            <FaQuestionCircle />
          </div>
          <h3>Partnerships & Collaborations</h3>
          <p>
            Want to collaborate, become an affiliate, or invite us for a
            speaking session? We'd love to hear from you!
          </p>
        </div>
      </div>
    </section>
  );
}
