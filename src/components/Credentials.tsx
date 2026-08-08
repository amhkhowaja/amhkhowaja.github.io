import './Credentials.css';

const credentials = [
  { label: 'Google Hashcode', value: '1st ELTE · 20th Hungary', span: 'wide' },
  { label: 'Ericsson Innovation Day', value: 'IoTA Digital Assistant MVP', span: 'wide' },
  { label: 'CodeX Hackathon', value: 'Audience Award', span: 'normal' },
  { label: 'Microservices', value: '10+', span: 'normal' },
  { label: 'Students Taught', value: '100+', span: 'normal' },
  { label: 'Experience', value: '4+ Years', span: 'normal' },
];

function Credentials() {
  return (
    <section id="credentials">
      <div className="wrap">
        <p className="route-label" data-aos="fade-up">/credentials</p>
        <h2 data-aos="fade-up" data-aos-delay="80">Credentials &amp; metrics</h2>

        <div className="cred-grid" data-aos="fade-up" data-aos-delay="120">
          {credentials.map((c, i) => (
            <div key={i} className={`cred-card ${c.span === 'wide' ? 'cred-wide' : ''}`}>
              <span className="cred-value">{c.value}</span>
              <span className="cred-label">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Credentials;
