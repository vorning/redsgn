import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react"; // Lazy loading og Suspense
import "./styles/components/styles.css"; // Unified styles
import "./styles/components/loading.css";

// Dynamisk import af komponenter
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Sustainability = lazy(() => import("./components/Sustainability"));
const InfoGraphic = lazy(() => import("./components/InfoGraphic"));
const CaseStudies = lazy(() => import("./components/CaseStudies"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const Blog = lazy(() => import("./components/Blog"));
const Co2Calculator = lazy(() => import("./components/Co2Calculator"));
const FAQ = lazy(() => import("./components/FAQ"));

function HomePage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
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
      </Suspense>
    </>
  );
}

function SinglePage({ component: Component }) {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <main className="main-container">
          <Component />
        </main>
        <Footer />
      </Suspense>
    </>
  );
}

function App() {
  return (
    <div className="app">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Hjemmeside */}
            <Route path="/" element={<HomePage />} />

            {/* Undersider */}
            <Route path="/blog" element={<SinglePage component={Blog} />} />
            <Route
              path="/co2-beregner"
              element={<SinglePage component={Co2Calculator} />}
            />
            <Route path="/faq" element={<SinglePage component={FAQ} />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
