import './Education.css';

function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <p className="route-label" data-aos="fade-up">/education</p>
        <h2 data-aos="fade-up" data-aos-delay="80">Education</h2>
        <div className="education-card" data-aos="fade-up" data-aos-delay="120">
          <img src="/logos/elte.png" alt="ELTE" className="education-logo" />
          <div>
            <h3>B.Sc. in Computer Science</h3>
            <div className="education-org">Eötvös Loránd University (ELTE), Budapest</div>
            <div className="education-period">2020 – 2023</div>
            <p className="education-thesis">Thesis: "Adaptive, Context-Aware AI Conversational Agent for IoT Service Portal"</p>
            <a href="/thesis" className="education-link">View Thesis →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
