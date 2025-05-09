import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // Importer react-scroll Link
import "../styles/components/navbar.css";
import logo from "/src/assets/logo.png";

function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [helpMenuOpen, setHelpMenuOpen] = useState(false);
  const location = useLocation();

  // Hjælpefunktion til at afgøre om vi er på forsiden
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      // Tving en reflow for at sikre at transitionen virker
      requestAnimationFrame(() => {
        setScrolled(isScrolled);
      });
    };

    // Udfør en indledende check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Luk hjælpemenuen når der klikkes udenfor
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (helpMenuOpen && !event.target.closest(".help-dropdown-container")) {
        setHelpMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [helpMenuOpen]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${
        darkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="RE:DESIGN" width="140" />
          </Link>
        </div>

        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              {isHomePage ? (
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={200}
                  onClick={() => setMenuOpen(false)}
                >
                  Om os
                </ScrollLink>
              ) : (
                <Link to="/#about" onClick={() => setMenuOpen(false)}>
                  Om os
                </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <ScrollLink
                  to="services"
                  smooth={true}
                  duration={200}
                  onClick={() => setMenuOpen(false)}
                >
                  Ydelser
                </ScrollLink>
              ) : (
                <Link to="/#services" onClick={() => setMenuOpen(false)}>
                  Ydelser
                </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <ScrollLink
                  to="cases"
                  smooth={true}
                  duration={200}
                  onClick={() => setMenuOpen(false)}
                >
                  Cases
                </ScrollLink>
              ) : (
                <Link to="/#cases" onClick={() => setMenuOpen(false)}>
                  Cases
                </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={200}
                  onClick={() => setMenuOpen(false)}
                >
                  Kontakt
                </ScrollLink>
              ) : (
                <Link to="/#contact" onClick={() => setMenuOpen(false)}>
                  Kontakt
                </Link>
              )}
            </li>
            <li className="help-dropdown-container">
              <button
                className="help-dropdown-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setHelpMenuOpen(!helpMenuOpen);
                }}
                aria-expanded={helpMenuOpen}
              >
                Hjælp
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`dropdown-arrow ${helpMenuOpen ? "open" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {helpMenuOpen && (
                <div className="help-dropdown-menu">
                  <Link
                    to="/blog"
                    onClick={() => {
                      setHelpMenuOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Blog
                  </Link>
                  <Link
                    to="/co2-beregner"
                    onClick={() => {
                      setHelpMenuOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    CO2 Beregner
                  </Link>
                  <Link
                    to="/faq"
                    onClick={() => {
                      setHelpMenuOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    FAQ
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>

        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Luk menu" : "Åbn menu"}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
