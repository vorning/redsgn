import { useState } from "react";
import "../styles/components/footer.css";

function Footer() {
  const [hideBadge, setHideBadge] = useState(false);
  const [badgeClosed, setBadgeClosed] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleCloseBadge = (e) => {
    e.stopPropagation();
    setBadgeClosed(true);
    // Efter animationen (600ms) fjernes badge'en
    setTimeout(() => {
      setHideBadge(true);
    }, 600);
  };

  const handleOpenBadge = () => {
    setHideBadge(false);
    setBadgeClosed(false);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">RE:DESIGN</div>
            <p className="footer-tagline">Webdesign til små virksomheder</p>
            <div className="footer-social">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Sider</h3>
              <ul>
                <li>
                  <a href="#home">Forside</a>
                </li>
                <li>
                  <a href="#about">Om os</a>
                </li>
                <li>
                  <a href="#services">Ydelser</a>
                </li>
                <li>
                  <a href="#cases">Cases</a>
                </li>
                <li>
                  <a href="#contact">Kontakt</a>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3>Ydelser</h3>
              <ul>
                <li>
                  <a href="#services">Webdesign</a>
                </li>
                <li>
                  <a href="#services">Performance Optimering</a>
                </li>
                <li>
                  <a href="#services">Hosting</a>
                </li>
                <li>
                  <a href="#services">Digital Strategi</a>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3>Ressourcer</h3>
              <ul>
                <li>
                  <a href="blog">Blog</a>
                </li>
                <li>
                  <a href="co2-beregner">CO2 Beregner</a>
                </li>
                <li>
                  <a href="faq">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} RE:DESIGN. Alle rettigheder forbeholdes.
          </p>
          <div className="footer-legal">
            <a href="#privacy">Privatlivspolitik</a>
            <a href="#terms">Vilkår og betingelser</a>
            <a href="#cookies">Cookies</a>
          </div>
        </div>

        {/* Badge med lukke-animation */}
        {!hideBadge && (
          <div className="sustainability-badge">
            <div className={`badge-content ${badgeClosed ? "hidden" : ""}`}>
              <span className="close-badge" onClick={handleCloseBadge}>
                ✕
              </span>
              <span className="badge-icon">🌳</span>
              <span className="badge-text">
                Vi planter et træ for hver hjemmeside optimeret!
              </span>
            </div>
          </div>
        )}

        {hideBadge && (
          <div className="reopen-arrow" onClick={handleOpenBadge}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
