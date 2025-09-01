import { FaUsers, FaGlobe, FaQuestionCircle } from "react-icons/fa";
import "./ContactCards.css";

export default function ContactCards() {
  return (
    <section className="contact-section">
      <h2 className="section-title">Talk To Us</h2>
      <p className="section-subtitle">
        We operate globally with a mission to empower learners in digital
        marketing. Reach out via email or social media — we’ll respond as soon
        as possible.
      </p>

      <div className="contact-cards">
        <div className="contact-card animate">
          <div className="icon-container">
            <FaUsers />
          </div>
          <h3>General Inquiries</h3>
          <p>
            Have a question about our courses, curriculum, or enrollment
            process? We're here to guide you at every step.
          </p>
        </div>

        <div className="contact-card animate">
          <div className="icon-container">
            <FaGlobe />
          </div>
          <h3>Technical Support</h3>
          <p>
            Facing login issues or need help accessing online classes and
            resources? Our support team is ready to assist.
          </p>
        </div>

        <div className="contact-card animate">
          <div className="icon-container">
            <FaQuestionCircle />
          </div>
          <h3>Partnerships & Collaborations</h3>
          <p>
            Want to collaborate, invite us for a seminar, or discuss corporate
            training opportunities? We’d love to connect with you!
          </p>
        </div>
      </div>
    </section>
  );
}
