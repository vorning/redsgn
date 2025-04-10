import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/components/styles.css"; // Unified styles
import "./styles/components/loading.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Sustainability from "./components/Sustainability";
import InfoGraphic from "./components/InfoGraphic";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Co2Calculator from "./components/Co2Calculator";
import FAQ from "./components/FAQ";

// Hjemmeside (hovedside) komponent
function HomePage({ darkMode, setDarkMode }) {
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="main-container">
        <Hero />
        <About />
        <Services />
        <Sustainability />
        <InfoGraphic />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

// Enkeltsideskomponent til visning af Blog, CO2 Beregner og FAQ
function SinglePage({ component: Component, darkMode, setDarkMode }) {
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="main-container">
        <Component />
      </main>
      <Footer />
    </>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Håndterer dark mode på body element for at sikre konsistent styling
  useEffect(() => {
    // Tjek først localStorage for brugerens foretrukne tema
    const savedDarkMode = localStorage.getItem("darkMode");

    // Hvis der er en gemt præference, brug den
    if (savedDarkMode !== null) {
      const isInDarkMode = savedDarkMode === "true";
      setDarkMode(isInDarkMode);
      applyDarkMode(isInDarkMode);
    } else {
      // Ellers check for OS-niveau præference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);
      applyDarkMode(prefersDark);
    }

    // Lyt til ændringer i OS-niveau præference
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const handleDarkModeChange = (e) => {
      // Kun opdater hvis der ikke er en bruger-specifik præference
      const userPreference = localStorage.getItem("darkMode");
      if (userPreference === null) {
        setDarkMode(e.matches);
        applyDarkMode(e.matches);
      }
    };

    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);

    // Cleanup
    return () => {
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, []);

  // Når darkMode ændres (som følge af brugerhandling), opdater DOM og localStorage
  useEffect(() => {
    applyDarkMode(darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  // Helper-funktion til at anvende dark mode på DOM
  const applyDarkMode = (isDark) => {
    if (isDark) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");

      // I dark mode er primærfarven hvid og baggrunden blå
      document.documentElement.style.setProperty("--primary", "#f5f5f5"); // Hvid i dark mode
      document.documentElement.style.setProperty("--background", "#36454f"); // Blå i dark mode
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");

      // I light mode er primærfarven blå og baggrunden hvid
      document.documentElement.style.setProperty("--primary", "#36454f"); // Blå i light mode
      document.documentElement.style.setProperty("--background", "#f5f5f5"); // Hvid i light mode
    }
  };

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Router>
        <Routes>
          {/* Hjemmeside */}
          <Route
            path="/"
            element={<HomePage darkMode={darkMode} setDarkMode={setDarkMode} />}
          />

          {/* Undersider */}
          <Route
            path="/blog"
            element={
              <SinglePage
                component={Blog}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />
          <Route
            path="/co2-beregner"
            element={
              <SinglePage
                component={Co2Calculator}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />
          <Route
            path="/faq"
            element={
              <SinglePage
                component={FAQ}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
