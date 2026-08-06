import { useState, useEffect } from 'react';
import { cv } from '../data/cv';
import './VisitorCounter.css';

function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://api.countapi.xyz/hit/amhkhowaja-github-io/visits')
      .then(res => res.json())
      .then(data => setCount(data.value))
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
          <div className="stats-card">
            <div className="stats-number">{cv.projects.length}</div>
            <p className="stats-label">projects</p>
          </div>
          <div className="stats-card">
            <div className="stats-number">4+</div>
            <p className="stats-label">years exp</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisitorCounter;
