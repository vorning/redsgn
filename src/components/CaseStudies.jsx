import { useState } from "react";
import "../styles/components/casestudies.css";

// Importer billederne - justér stierne efter din mappestruktur
import gardButikImage from "/src/assets/test1.jpg";
import handvaerkerImage from "/src/assets/test2.jpg";
import tojbutikImage from "/src/assets/test3.jpg";

function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      title: "Økologisk Gårdbutik",
      description:
        "Komplet website-optimering der forbedrede brugeroplevelsen og hjemmesidens ydeevne markant.",
      metrics: {
        beforeSize: "3.2 MB",
        afterSize: "0.8 MB",
        beforeSpeed: "5.2s",
        afterSpeed: "1.8s",
        performanceImprovement: "65% hurtigere",
      },
      image: gardButikImage,
    },
    {
      title: "Lokal Håndværker",
      description:
        "Udvikling af nyt, responsivt website med fokus på brugervenlig navigation og klart kommunikationsdesign.",
      metrics: {
        beforeSize: "N/A",
        afterSize: "0.6 MB",
        beforeSpeed: "N/A",
        afterSpeed: "1.5s",
        performanceImprovement: "Betydelig hastighedsoptimering",
      },
      image: handvaerkerImage,
    },
    {
      title: "Tøjbutik Online",
      description:
        "Digital transformation med fokus på at forbedre kundens digitale oplevelse og hjemmesidens funktionalitet.",
      metrics: {
        beforeSize: "4.5 MB",
        afterSize: "1.1 MB",
        beforeSpeed: "8.3s",
        afterSpeed: "2.1s",
        performanceImprovement: "75% hurtigere indlæsning",
      },
      image: tojbutikImage,
    },
  ];

  return (
    <section id="cases" className="case-studies">
      <div className="container">
        <div className="section-header">
          <h2>Case Studies</h2>
          <p>
            Se hvordan vi har hjulpet små virksomheder med effektive
            webløsninger
          </p>
        </div>

        <div className="cases-tabs">
          {cases.map((caseItem, index) => (
            <button
              key={index}
              className={`case-tab ${activeCase === index ? "active" : ""}`}
              onClick={() => setActiveCase(index)}
            >
              {caseItem.title}
            </button>
          ))}
        </div>

        <div className="case-content">
          <div className="case-image">
            <div className="responsive-image-container aspect-16-9">
              <img
                src={cases[activeCase].image}
                alt={`Case studie for ${cases[activeCase].title}`}
                className="case-img"
              />
            </div>
          </div>

          <div className="case-details">
            <h3>{cases[activeCase].title}</h3>
            <p>{cases[activeCase].description}</p>

            <div className="case-metrics">
              <div className="metric">
                <span className="metric-label">Før størrelse:</span>
                <span className="metric-value">
                  {cases[activeCase].metrics.beforeSize}
                </span>
              </div>
              <div className="metric">
                <span className="metric-label">Efter størrelse:</span>
                <span className="metric-value">
                  {cases[activeCase].metrics.afterSize}
                </span>
              </div>
              <div className="metric">
                <span className="metric-label">Før indlæsningstid:</span>
                <span className="metric-value">
                  {cases[activeCase].metrics.beforeSpeed}
                </span>
              </div>
              <div className="metric">
                <span className="metric-label">Efter indlæsningstid:</span>
                <span className="metric-value">
                  {cases[activeCase].metrics.afterSpeed}
                </span>
              </div>
              <div className="metric highlight">
                <span className="metric-label">Ydelsesforbedring:</span>
                <span className="metric-value">
                  {cases[activeCase].metrics.performanceImprovement}
                </span>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary">
              Kontakt os
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
