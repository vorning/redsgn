import { useEffect, useRef } from "react";
import "../styles/components/infographic.css";

function InfoGraphic() {
  const graphicRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          graphicRef.current.classList.add("animate");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (graphicRef.current) {
      observer.observe(graphicRef.current);
    }

    return () => {
      if (graphicRef.current) {
        observer.unobserve(graphicRef.current);
      }
    };
  }, []);

  return (
    <section id="infographic" className="infographic-section">
      <div className="container">
        <div className="section-header">
          <h2>
            Digital Ressourceforbrug
          </h2>
          <p>
            Digitale teknologier har en betydelig global energibelastning
          </p>
        </div>

        <div className="infographic-container" ref={graphicRef}>
          <div className="infographic-grid">
            <div className="infographic-card globe">
              <div className="icon-container">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12H22"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Globalt Internet</h3>
              <p className="stat">416.2 TWh</p>
              <p>Årligt energiforbrug</p>
            </div>

            <div className="infographic-card devices">
              <div className="icon-container">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="3"
                    width="20"
                    height="14"
                    rx="2"
                    ry="2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="8"
                    y1="21"
                    x2="16"
                    y2="21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="12"
                    y1="17"
                    x2="12"
                    y2="21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Digitale Enheder</h3>
              <p className="stat">4.2 mia.</p>
              <p>Internetbrugere globalt</p>
            </div>

            <div className="infographic-card cloud">
              <div className="icon-container">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 10H19C20.6569 10 22 11.3431 22 13C22 14.6569 20.6569 16 19 16H18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 10C17.5 7.5 15.5 6 13 6C9.5 6 8 9 8 9C8 9 7 9 6 10C4.5 11.5 5 14 5 14H6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 14C6 15.6569 7.34315 17 9 17H18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Datacentre</h3>
              <p className="stat">200 TWh</p>
              <p>Årligt energiforbrug</p>
            </div>
          </div>

          <div className="comparison-container">
            <h3>
              Performance: Standard vs. Optimeret
            </h3>

            <div className="comparison-wrapper">
              <div className="comparison-item">
                <div className="comparison-header">
                  <div className="icon-wrapper traditional">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="2"
                        y="3"
                        width="20"
                        height="14"
                        rx="2"
                        ry="2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="8"
                        y1="21"
                        x2="16"
                        y2="21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="12"
                        y1="17"
                        x2="12"
                        y2="21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="comparison-title">
                    <h4>Standard Website</h4>
                    <span className="size">2.5 MB</span>
                  </div>
                </div>

                <div className="data-metrics">
                  <div className="metric">
                    <div className="metric-label">
                      Ressourceforbrug
                    </div>
                    <div className="metric-value">211</div>
                  </div>
                  <div className="metric">
                    <div className="metric-label">Pageviews</div>
                    <div className="metric-value">10,000/måned</div>
                  </div>
                  <div className="metric">
                    <div className="metric-label">Indlæsningstid</div>
                    <div className="metric-value">5.2 sekunder</div>
                  </div>
                </div>

                <div className="data-visualization">
                  <div className="data-bar">
                    <div className="bar-fill traditional"></div>
                    <span className="bar-label">
                      Standard performance
                    </span>
                  </div>
                </div>
              </div>

              <div className="vs-badge">VS</div>

              <div className="comparison-item sustainable">
                <div className="comparison-header">
                  <div className="icon-wrapper sustainable">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="comparison-title">
                    <h4>Optimeret Website</h4>
                    <span className="size">0.8 MB</span>
                  </div>
                </div>

                <div className="data-metrics sustainable">
                  <div className="metric">
                    <div className="metric-label">
                      Ressourceforbrug
                    </div>
                    <div className="metric-value">68</div>
                  </div>
                  <div className="metric">
                    <div className="metric-label">Pageviews</div>
                    <div className="metric-value">10,000/måned</div>
                  </div>
                  <div className="metric">
                    <div className="metric-label">Indlæsningstid</div>
                    <div className="metric-value">1.8 sekunder</div>
                  </div>
                </div>

                <div className="data-visualization">
                  <div className="data-bar">
                    <div className="bar-fill sustainable"></div>
                    <span className="bar-label">
                      Optimeret performance
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fun-facts">
            <div className="fact-card">
              <div className="fact-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.663 17h4.674M12 3v1m0 16v1m-8-9h1m14 0h1m-2.947 7.053l-.707-.707M5.947 5.947l-.707-.707m11.513 0l.707-.707M6.653 17.053l-.707.707"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 16a4 4 0 100-8 4 4 0 000 8z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4>Vidste du at...</h4>
              <p>
                Dataoverførsel har en energimæssig omkostning som at opvarme vand
              </p>
            </div>

            <div className="fact-card">
              <div className="fact-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12h-4l-3 9L9 3l-3 9H2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4>Vidste du at...</h4>
              <p>
                Digitale teknologier forbruger betydelige energiressourcer globalt
              </p>
            </div>

            <div className="fact-card">
              <div className="fact-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 17h.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4>Vidste du at...</h4>
              <p>
                En reduktion på 0.5 sekunder i indlæsningstid kan øge konverteringsraten med op til 10%
              </p>
            </div>
          </div>

          <div className="infographic-cta">
            <a href="#contact" className="btn btn-primary">
              Få et gratis website performance-tjek
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoGraphic;