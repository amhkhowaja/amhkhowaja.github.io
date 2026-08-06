import { cv } from '../data/cv';
import './Hero.css';

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-inner">
        <div data-aos="fade-up">
          <p className="route-label">system status: open to work</p>
          <h1 className="hero-title">{cv.name}</h1>
          <p className="hero-role">{cv.title}</p>
          <p className="hero-tagline">{cv.summary}</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#projects">View projects</a>
            <a className="btn btn-ghost" href="#contact">Get in touch</a>
          </div>
        </div>

        <div className="hero-photo-wrap" data-aos="fade-left" data-aos-delay="150">
          <img src="/photo.png" alt="Aadarsh Mehdi" className="hero-photo" />
          <div className="hero-photo-ring" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
