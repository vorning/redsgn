import { useState, useEffect } from "react";
import "../styles/components/co2calculator.css";

function Co2Calculator() {
  const [formData, setFormData] = useState({
    pageviews: 1000,
    pageSize: 2.5,
    serverType: "standard",
    optimizationLevel: 0,
  });

  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  // Beregn CO2-udledning baseret på inputdata
  const calculateCO2 = () => {
    // Konstanter til beregninger
    const kWhPerGB = 0.81; // Energi per GB data overført
    const kgCO2PerKWh = {
      standard: 0.475, // Standard hosting
      green: 0.1, // Grøn hosting (lavere CO2 per kWh)
      optimized: 0.3, // Optimeret hosting
    };

    // Beregn månedlig dataoverførsel i GB
    const dataTransferGB = (formData.pageSize * formData.pageviews) / 1000;

    // Beregn energiforbrug i kWh
    const energyUsage = dataTransferGB * kWhPerGB;

    // Beregn CO2-udledning i kg
    const co2Emission = energyUsage * kgCO2PerKWh[formData.serverType];

    // Beregn optimeret resultat
    const optimizationFactor = 1 - formData.optimizationLevel / 100;
    const optimizedPageSize = formData.pageSize * optimizationFactor;
    const optimizedDataTransferGB =
      (optimizedPageSize * formData.pageviews) / 1000;
    const optimizedEnergyUsage = optimizedDataTransferGB * kWhPerGB;
    const optimizedCO2Emission =
      optimizedEnergyUsage * kgCO2PerKWh[formData.serverType];

    // Besparelse
    const co2Savings = co2Emission - optimizedCO2Emission;
    const percentageSaved = (co2Savings / co2Emission) * 100;

    // Svarende til
    const treesNeeded = (co2Emission * 12) / 25; // Et træ absorberer ca. 25 kg CO2 per år
    const optimizedTreesNeeded = (optimizedCO2Emission * 12) / 25;
    const treesSaved = treesNeeded - optimizedTreesNeeded;

    setResults({
      currentCO2: co2Emission.toFixed(2),
      optimizedCO2: optimizedCO2Emission.toFixed(2),
      co2Savings: co2Savings.toFixed(2),
      percentageSaved: percentageSaved.toFixed(0),
      treesNeeded: Math.ceil(treesNeeded),
      optimizedTreesNeeded: Math.ceil(optimizedTreesNeeded),
      treesSaved: Math.ceil(treesSaved),
      yearlyEmission: (co2Emission * 12).toFixed(2),
      yearlyOptimizedEmission: (optimizedCO2Emission * 12).toFixed(2),
      yearlyEmissionSaved: (co2Savings * 12).toFixed(2),
    });

    setShowResults(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]:
        name === "optimizationLevel"
          ? parseInt(value)
          : name === "pageviews" || name === "pageSize"
          ? parseFloat(value)
          : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateCO2();
  };

  useEffect(() => {
    // Når optimering-slideren ændres, opdater resultaterne
    if (showResults) {
      calculateCO2();
    }
  }, [formData.optimizationLevel]);

  return (
    <section className="calculator-section">
      <div className="container">
        <div className="section-header">
          <h1>CO2 Beregner</h1>
          <p>
            Beregn din hjemmesides CO2-udledning og se, hvordan optimering kan
            reducere dit digitale klimaaftryk
          </p>
        </div>

        <div className="calculator-container">
          <div className="calculator-intro">
            <h2>Hvorfor beregne dit digitale klimaaftryk?</h2>
            <p>
              Det digitale klimaaftryk fra websites er ofte overset, men faktisk
              har internettet et betydeligt energiforbrug. Hver gang en bruger
              besøger din hjemmeside, kræver det energi til dataoverførsel,
              serverprocessering og enhedsstrøm. Ved at optimere din hjemmeside
              kan du reducere dette energiforbrug markant.
            </p>
            <p>
              Brug vores CO2-beregner til at estimere din hjemmesides
              klimapåvirkning og se, hvor stor en forskel optimering kan gøre.
              Det er godt for både miljøet og dine brugere, da optimerede sider
              også indlæser hurtigere.
            </p>
          </div>

          <div className="calculator-form-container">
            <div className="form-section">
              <form onSubmit={handleSubmit} className="calculator-form">
                <div className="form-group">
                  <label htmlFor="pageviews">Månedlige sidevisninger</label>
                  <input
                    type="number"
                    id="pageviews"
                    name="pageviews"
                    min="100"
                    max="1000000"
                    step="100"
                    value={formData.pageviews}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="pageSize">
                    Gennemsnitlig sidestørrelse (MB)
                  </label>
                  <input
                    type="number"
                    id="pageSize"
                    name="pageSize"
                    min="0.1"
                    max="10"
                    step="0.1"
                    value={formData.pageSize}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="serverType">Hosting type</label>
                  <select
                    id="serverType"
                    name="serverType"
                    value={formData.serverType}
                    onChange={handleInputChange}
                  >
                    <option value="standard">Standard hosting</option>
                    <option value="optimized">Optimeret hosting</option>
                    <option value="green">Grøn hosting</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary">
                  Beregn CO2-udledning
                </button>
              </form>
            </div>

            {showResults && (
              <div className="results-section">
                <h3>Din hjemmesides klimaaftryk</h3>

                <div className="optimization-slider">
                  <label htmlFor="optimizationLevel">
                    Optimeringsniveau: {formData.optimizationLevel}%
                  </label>
                  <input
                    type="range"
                    id="optimizationLevel"
                    name="optimizationLevel"
                    min="0"
                    max="75"
                    step="5"
                    value={formData.optimizationLevel}
                    onChange={handleInputChange}
                    className="slider"
                  />
                </div>

                <div className="results-container">
                  <div className="result-comparison">
                    <div className="result-card current">
                      <h4>Nuværende</h4>
                      <div className="result-value">
                        {results.currentCO2} kg CO2
                      </div>
                      <p>per måned</p>
                      <div className="yearly-value">
                        {results.yearlyEmission} kg CO2 per år
                      </div>
                      <div className="trees-needed">
                        <div className="tree-icon">🌳</div>
                        <p>
                          {results.treesNeeded} træer skal plantes for at
                          absorbere dette CO2 på et år
                        </p>
                      </div>
                    </div>

                    <div className="result-card optimized">
                      <h4>Optimeret</h4>
                      <div className="result-value">
                        {results.optimizedCO2} kg CO2
                      </div>
                      <p>per måned</p>
                      <div className="yearly-value">
                        {results.yearlyOptimizedEmission} kg CO2 per år
                      </div>
                      <div className="trees-needed">
                        <div className="tree-icon">🌳</div>
                        <p>
                          {results.optimizedTreesNeeded} træer skal plantes for
                          at absorbere dette CO2 på et år
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="savings-card">
                    <div className="savings-header">
                      Din potentielle besparelse
                    </div>
                    <div className="savings-content">
                      <div className="savings-value">
                        <span className="value">
                          {results.percentageSaved}%
                        </span>
                        <span className="label">CO2 reduktion</span>
                      </div>
                      <div className="savings-details">
                        <p>
                          Du kan spare{" "}
                          <strong>
                            {results.yearlyEmissionSaved} kg CO2 per år
                          </strong>{" "}
                          ved at optimere din hjemmeside.
                        </p>
                        <p>
                          Dette svarer til at plante{" "}
                          <strong>{results.treesSaved} træer</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cta-container">
                  <h4>Vil du reducere din hjemmesides CO2-udledning?</h4>
                  <p>
                    Vi kan hjælpe dig med at optimere din hjemmeside, reducere
                    indlæsningstider og forbedre brugernes oplevelse.
                  </p>
                  <a href="#contact" className="btn btn-primary">
                    Kontakt os for et gratis website performance-tjek
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="calculator-info">
            <h3>Hvad betyder beregningen?</h3>
            <p>
              Resultaterne er estimater baseret på den angivne sidestørrelse,
              antal sidevisninger og servertype. Den faktiske CO2-udledning kan
              variere afhængigt af flere faktorer som brugeradfærd, serverens
              energieffektivitet og strømkilder.
            </p>
            <h3>Sådan reducerer du din hjemmesides CO2-udledning</h3>
            <ul className="eco-tips">
              <li>
                <strong>Optimer billeder</strong> - Komprimer og tilpas billeder
                for at reducere filstørrelsen uden at gå på kompromis med
                kvaliteten.
              </li>
              <li>
                <strong>Minimer HTTP-anmodninger</strong> - Kombiner JavaScript-
                og CSS-filer for at reducere antallet af serveranmodninger.
              </li>
              <li>
                <strong>Implementer effektiv caching</strong> - Brug
                browsercaching for at reducere gentagne dataoverførsler.
              </li>
              <li>
                <strong>Vælg grøn hosting</strong> - Skift til en
                hostingudbyder, der bruger vedvarende energi.
              </li>
              <li>
                <strong>Reducer unødvendigt indhold</strong> - Fjern tunge
                elementer, som ikke bidrager væsentligt til brugeroplevelsen.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Co2Calculator;
