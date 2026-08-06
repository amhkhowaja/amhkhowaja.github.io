import { cv } from '../data/cv';
import './Experience.css';

const logos: Record<string, string> = {
  'Ericsson Hungary': '/logos/ericsson.png',
  'Eötvös Loránd University': '/logos/elte.png',
  'Nokia Hungary': '/logos/nokia.png',
};

function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <p className="route-label" data-aos="fade-up">/experience</p>
        <h2 data-aos="fade-up" data-aos-delay="80">Where I've worked</h2>

        <div className="timeline">
          {cv.experience.map((job, i) => (
            <div className="timeline-item" key={i} data-aos="fade-up" data-aos-delay={120 + i * 80}>
              <div className="timeline-marker" />
              <div className="timeline-period">{job.period}</div>
              <div className="timeline-card">
                {logos[job.company] && (
                  <img
                    src={logos[job.company]}
                    alt={job.company}
                    className={`company-logo ${job.company === 'Eötvös Loránd University' ? 'logo-elte' : ''}`}
                  />
                )}
                <h3>{job.role}</h3>
                <div className="timeline-org">{job.company}</div>
                <ul className="timeline-points">
                  {job.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
