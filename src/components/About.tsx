import { cv } from '../data/cv';
import './About.css';

function About() {
  // Flatten all skills into a single array for tags
  const allSkills = Object.values(cv.skills).flat().slice(0, 15);

  return (
    <section id="about">
      <div className="wrap">
        <p className="route-label" data-aos="fade-up">/about</p>
        <h2 data-aos="fade-up" data-aos-delay="80">A bit about how I work</h2>
        <p className="about-body" data-aos="fade-up" data-aos-delay="120">
          {cv.summary}
        </p>
        <div className="stack-tags" data-aos="fade-up" data-aos-delay="160">
          {allSkills.map((s) => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
