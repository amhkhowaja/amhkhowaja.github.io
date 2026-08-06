import { cv } from '../data/cv';
import './Contact.css';

function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <p className="route-label" data-aos="fade-up">/contact</p>
        <h2 data-aos="fade-up" data-aos-delay="80">Let's talk</h2>
        <p className="contact-body" data-aos="fade-up" data-aos-delay="120">
          Open to senior backend and AI engineering roles across Europe. The fastest way to
          reach me is email.
        </p>
        <div className="contact-links" data-aos="fade-up" data-aos-delay="160">
          <a href={`mailto:${cv.email}`}>email</a>
          <a href={cv.linkedin} target="_blank" rel="noreferrer">linkedin</a>
          <a href={cv.github} target="_blank" rel="noreferrer">github</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
