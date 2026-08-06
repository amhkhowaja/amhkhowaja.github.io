import { cv } from '../data/cv';
import './Skills.css';

function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <p className="route-label" data-aos="fade-up">/skills</p>
        <h2 data-aos="fade-up" data-aos-delay="80">Technical stack</h2>

        <div className="skills-grid" data-aos="fade-up" data-aos-delay="120">
          {Object.entries(cv.skills).map(([category, items]) => (
            <div key={category} className="skills-category">
              <h4>{category}</h4>
              <div className="stack-tags">
                {items.map((skill, i) => (
                  <span key={i} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
