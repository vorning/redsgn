import { useState } from "react";
import "../styles/components/faq.css";

function FAQ() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const categories = [
    { id: "general", name: "Generelt" },
    { id: "services", name: "Ydelser" },
    { id: "prices", name: "Priser" },
    { id: "process", name: "Proces" },
    { id: "technical", name: "Teknisk" },
  ];

  const faqs = [
    {
      id: "q1",
      category: "general",
      question: "Hvad er RE:DESIGN?",
      answer:
        "RE:DESIGN er et webbureau, der specialiserer sig i at skabe effektive og bæredygtige digitale løsninger til små selvstændige virksomheder. Vores fokus er at hjælpe virksomheder med at kommunikere klart og effektivt gennem veldesignede websites, der både er brugervenlige, hurtige og ressourceoptimerede.",
    },
    {
      id: "q2",
      category: "general",
      question: "Hvorfor fokuserer I på effektiv webdesign?",
      answer:
        "Effektiv webdesign handler om at skabe websites, der yder optimalt på alle parametre: hastighed, brugeroplevelse, konverteringsrate og ressourceforbrug. Ved at optimere disse aspekter opnår vi ikke kun bedre resultater for vores kunder, men reducerer også det digitale miljøaftryk. Hurtige websites giver bedre brugeroplevelser, højere konverteringsrater, bedre SEO-placeringer og et reduceret energiforbrug.",
    },
    {
      id: "q3",
      category: "services",
      question: "Hvilke ydelser tilbyder I?",
      answer:
        "Vi tilbyder en række ydelser inden for digital kommunikation, herunder webdesign og udvikling, performance-optimering af eksisterende websites, hosting-løsninger med fokus på hastighed og ydeevne, samt digital strategi-rådgivning. Alle vores ydelser har fokus på at skabe effektive og ressourceoptimerede digitale løsninger.",
    },
    {
      id: "q4",
      category: "services",
      question: "Laver I også webshops?",
      answer:
        "Ja, vi designer og udvikler også webshops. Vi specialiserer os i at skabe brugervenlige og hurtige e-handelsløsninger, der er optimeret til konvertering. Vi arbejder primært med WooCommerce og Shopify, afhængigt af kundens behov og præferencer.",
    },
    {
      id: "q5",
      category: "services",
      question: "Kan I hjælpe med at optimere min eksisterende hjemmeside?",
      answer:
        "Absolut! Optimering af eksisterende websites er en af vores kerneydelser. Vi udfører grundige performance-analyser og implementerer forbedringer, der kan reducere indlæsningstider, forbedre brugeroplevelsen og øge konverteringsrater. Typisk opnår vores kunder hastighedsforbedringer på 50% eller mere.",
    },
    {
      id: "q6",
      category: "prices",
      question: "Hvad koster det at få lavet en hjemmeside?",
      answer:
        "Prisen på en hjemmeside afhænger af projektets omfang, kompleksitet og dine specifikke behov. For en simpel præsentationshjemmeside starter priserne typisk fra 15.000 kr., mens mere omfattende løsninger som webshops eller specialudviklede platforme koster mere. Vi giver altid et detaljeret tilbud baseret på dine konkrete ønsker og behov.",
    },
    {
      id: "q7",
      category: "prices",
      question: "Hvor meget koster hosting?",
      answer:
        "Vores hosting-pakker starter fra 199 kr. pr. måned for mindre websites. Dette inkluderer sikkerhedskopiering, SSL-certifikat, løbende vedligeholdelse og sikkerhedsopdateringer. Vi tilbyder også skræddersyede hosting-løsninger til større projekter med særlige krav til ydeevne eller sikkerhed.",
    },
    {
      id: "q8",
      category: "process",
      question: "Hvordan foregår processen når I laver en hjemmeside?",
      answer:
        "Vores proces består typisk af følgende trin: 1) Indledende møde og behovsanalyse, 2) Udarbejdelse af design-koncept, 3) Feedback og justeringer, 4) Udvikling og implementering, 5) Test og kvalitetssikring, 6) Lancering, 7) Efterfølgende support og optimering. Gennem hele processen prioriterer vi klar kommunikation og samarbejde med kunden.",
    },
    {
      id: "q9",
      category: "process",
      question: "Hvor lang tid tager det at få lavet en hjemmeside?",
      answer:
        "Tidsrammen varierer afhængigt af projektets kompleksitet. En simpel præsentationshjemmeside kan typisk være færdig på 3-4 uger, mens mere omfattende projekter som webshops eller specialudviklede løsninger kan tage 8-12 uger eller længere. Vi aftaler altid en konkret tidsplan ved projektets start.",
    },
    {
      id: "q10",
      category: "technical",
      question: "Hvilke CMS-systemer arbejder I med?",
      answer:
        "Vi arbejder primært med WordPress, da det kombinerer fleksibilitet, brugervenlighed og gode muligheder for optimering. For e-handelsløsninger bruger vi typisk WooCommerce eller Shopify. Vi kan dog også udvikle løsninger med andre CMS-systemer eller helt skræddersyede løsninger, afhængigt af dine behov.",
    },
    {
      id: "q11",
      category: "technical",
      question: "Er jeres websites mobilvenlige?",
      answer:
        "Absolut! Alle vores websites er fuldt responsive og optimeret til alle skærmstørrelser - fra små mobiltelefoner til store desktop-skærme. Vi følger 'mobile-first' designprincipper, hvilket betyder, at vi starter med at designe til mobile enheder og derefter tilpasser til større skærme.",
    },
    {
      id: "q12",
      category: "technical",
      question: "Hvordan sikrer I, at min hjemmeside er SEO-optimeret?",
      answer:
        "SEO er en integreret del af vores udviklingspraksis. Vi implementerer teknisk SEO i alle websites, herunder korrekt semantisk HTML-struktur, optimeret ladetid, meta-tags, schema markup og mobilvenligt design. Derudover rådgiver vi om on-page SEO og indholdsoptimering, så din hjemmeside har de bedste forudsætninger for at rangere godt i søgeresultaterne.",
    },
  ];

  // Filtrér spørgsmål baseret på den aktive kategori
  const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

  const toggleQuestion = (id) => {
    setExpandedQuestions({
      ...expandedQuestions,
      [id]: !expandedQuestions[id],
    });
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header">
          <h1>Ofte stillede spørgsmål</h1>
          <p>
            Find svar på de mest almindelige spørgsmål om vores services og
            arbejdsmetoder
          </p>
        </div>

        <div className="faq-search-container">
          <div className="faq-categories">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${
                  activeCategory === category.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="faq-search">
            <input
              type="text"
              placeholder="Søg efter spørgsmål..."
              aria-label="Søg efter spørgsmål"
            />
            <button className="search-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>

        <div className="faq-questions">
          {filteredFaqs.map((faq) => (
            <div
              className={`faq-item ${
                expandedQuestions[faq.id] ? "expanded" : ""
              }`}
              key={faq.id}
            >
              <button
                className="faq-question"
                onClick={() => toggleQuestion(faq.id)}
                aria-expanded={expandedQuestions[faq.id] ? "true" : "false"}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {expandedQuestions[faq.id] ? "−" : "+"}
                </span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-contact">
          <div className="contact-card">
            <h3>Fandt du ikke svar på dit spørgsmål?</h3>
            <p>
              Vi er altid klar til at hjælpe. Kontakt os direkte, så vender vi
              tilbage hurtigst muligt.
            </p>
            <div className="contact-options">
              <a href="mailto:info@redesign.dk" className="contact-option">
                <div className="option-icon">
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
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="option-content">
                  <div className="option-label">Email</div>
                  <div className="option-value">info@redesign.dk</div>
                </div>
              </a>

              <a href="tel:+4512345678" className="contact-option">
                <div className="option-icon">
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="option-content">
                  <div className="option-label">Telefon</div>
                  <div className="option-value">+45 12 34 56 78</div>
                </div>
              </a>
            </div>

            <a href="#contact" className="btn btn-primary">
              Kontakt os
            </a>
          </div>
        </div>

        <div className="faq-resources">
          <h3>Nyttige ressourcer</h3>
          <div className="resources-grid">
            <a href="/blog" className="resource-card">
              <div className="resource-icon">
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
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h4>Blog</h4>
              <p>
                Læs vores artikler om webdesign, optimering og digital strategi
              </p>
            </a>

            <a href="/co2-beregner" className="resource-card">
              <div className="resource-icon">
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
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h4>CO2 Beregner</h4>
              <p>
                Beregn din hjemmesides CO2-udledning og se, hvordan optimering
                kan hjælpe
              </p>
            </a>

            <a href="/" className="resource-card">
              <div className="resource-icon">
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
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <h4>Cases</h4>
              <p>
                Se eksempler på vores arbejde og hvordan vi har hjulpet andre
                virksomheder
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
