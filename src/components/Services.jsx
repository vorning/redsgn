import "../styles/components/services.css";

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Vores Ydelser</h2>
          <p>Effektive digitale løsninger til din virksomhed</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3>Webdesign</h3>
            <p>
              Vi designer responsive websites med fokus på brugeroplevelse og
              optimal ydeevne.
            </p>
            <a href="#contact" className="service-link">
              Læs mere
            </a>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <h3>Performance Optimering</h3>
            <p>
              Vi optimerer eksisterende websites for at forbedre
              indlæsningstider og brugeroplevelse.
            </p>
            <a href="#contact" className="service-link">
              Læs mere
            </a>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
            </div>
            <h3>Hosting</h3>
            <p>
              Vi tilbyder effektive hosting-løsninger med fokus på optimal drift
              og performance.
            </p>
            <a href="#contact" className="service-link">
              Læs mere
            </a>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h3>Digital Strategi</h3>
            <p>
              Vi hjælper dig med at udvikle en digital strategi, der
              understøtter din forretnings mål.
            </p>
            <a href="#contact" className="service-link">
              Læs mere
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
