import { useState } from "react";
import "./globals.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Sustainability from "./components/Sustainability.jsx";
import InfoGraphic from "./components/InfoGraphic.jsx";
import CaseStudies from "./components/CaseStudies.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className={`main-container ${darkMode ? "dark" : "light"}`}>
        <Hero />
        <About />
        <Services />
        <Sustainability />
        <InfoGraphic />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
