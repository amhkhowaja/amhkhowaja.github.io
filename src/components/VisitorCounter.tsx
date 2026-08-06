import { useState, useEffect } from 'react';
import { cv } from '../data/cv';
import './VisitorCounter.css';

function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://api.counterapi.dev/v1/amhkhowaja-github-io/visits/up')
      .then(res => res.json())
      .then(data => setCount(data.count))
      .catch(() => setCount(null));
  }, []);

  return (
    <section id="stats">
      <div className="wrap">
        <p className="route-label" data-aos="fade-up">/stats</p>
        <h2 data-aos="fade-up" data-aos-delay="80">At a glance</h2>
        <div className="stats-grid" data-aos="fade-up" data-aos-delay="120">
          <div className="stats-card">
            <div className="stats-number">{count !== null ? count : '...'}</div>
            <p className="stats-label">visitors</p>
          </div>
          <a href="#projects" className="stats-card stats-card-link">
            <div className="stats-number">{cv.projects.length}</div>
            <p className="stats-label">projects</p>
          </a>
          <a href="#experience" className="stats-card stats-card-link">
            <div className="stats-number">4+</div>
            <p className="stats-label">years experience</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default VisitorCounter;
