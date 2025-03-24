import "../styles/components/hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>
          <span className="highlight">Effektive</span> webløsninger
          <br />
          til små virksomheder
        </h1>
        <p>
          Hos REDSGN skaber vi webløsninger der er brugervenlige, 
          performante og optimerede til din forretning.
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">
            Få et tilbud
          </a>
          <a href="#services" className="btn btn-secondary">
            Vores ydelser
          </a>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat-item">
          <h3>50%</h3>
          <p>forbedret performance</p>
        </div>
        <div className="stat-item">
          <h3>30%</h3>
          <p>hurtigere indlæsning</p>
        </div>
        <div className="stat-item">
          <h3>25%</h3>
          <p>øget konvertering</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;