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
        <div className="contact-cards" data-aos="fade-up" data-aos-delay="160">
          <a href={`mailto:${cv.email}`} className="contact-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="#EA4335" strokeWidth="2" width="28" height="28">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <div className="contact-card-info">
              <span className="contact-card-label">Email</span>
              <span className="contact-card-value">{cv.email}</span>
            </div>
          </a>

          <a href={cv.linkedin} target="_blank" rel="noreferrer" className="contact-card">
            <svg viewBox="0 0 24 24" fill="#0A66C2" width="28" height="28">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <div className="contact-card-info">
              <span className="contact-card-label">LinkedIn</span>
              <span className="contact-card-value">Aadarsh Mehdi</span>
            </div>
          </a>

          <a href={cv.github} target="_blank" rel="noreferrer" className="contact-card">
            <svg viewBox="0 0 16 16" fill="#FFFFFF" width="28" height="28">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            <div className="contact-card-info">
              <span className="contact-card-label">GitHub</span>
              <span className="contact-card-value">amhkhowaja</span>
            </div>
          </a>

          <div className="contact-card contact-card-location">
            <svg viewBox="0 0 24 24" fill="none" stroke="#5fd1a3" strokeWidth="2" width="28" height="28">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <div className="contact-card-info">
              <span className="contact-card-label">Location</span>
              <span className="contact-card-value">{cv.location}</span>
            </div>
          </div>

          <a href="/cv" className="contact-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="#e8a33d" strokeWidth="2" width="28" height="28">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div className="contact-card-info">
              <span className="contact-card-label">Resume</span>
              <span className="contact-card-value">View & Download CV</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
