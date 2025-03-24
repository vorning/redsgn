import { useState, useEffect, useRef } from 'react'
import '../styles/components/sustainability.css'

function Sustainability() {
  const [activeTab, setActiveTab] = useState('what')
  const sectionRef = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])
  
  return (
    <section id="sustainability" className="sustainability" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2>Effektiv Webdesign</h2>
          <p>Hvordan vi optimerer websites for bedre ydeevne</p>
        </div>
        
        <div className="sustainability-tabs">
          <button 
            className={`tab-btn ${activeTab === 'what' ? 'active' : ''}`}
            onClick={() => setActiveTab('what')}
          >
            <span className="tab-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 16v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            Hvad er vores tilgang?
          </button>
          <button 
            className={`tab-btn ${activeTab === 'why' ? 'active' : ''}`}
            onClick={() => setActiveTab('why')}
          >
            <span className="tab-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 17l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Hvorfor vælge os?
          </button>
          <button 
            className={`tab-btn ${activeTab === 'how' ? 'active' : ''}`}
            onClick={() => setActiveTab('how')}
          >
            <span className="tab-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 18V18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.09 9.00001C9.3251 8.33167 9.78915 7.76811 10.4 7.40914C11.0108 7.05016 11.7289 6.91895 12.4272 7.03872C13.1255 7.15849 13.7588 7.52153 14.2151 8.06353C14.6713 8.60554 14.9211 9.29153 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Vores proces
          </button>
        </div>
        
        <div className="tab-content">
          {activeTab === 'what' && (
            <div className="tab-panel">
              <div className="tab-header">
                <h3>Hvad er effektiv webdesign?</h3>
                <div className="tab-decoration"></div>
              </div>
              
              <div className="panel-content">
                <div className="text-content">
                  <p className="lead-text">
                    Effektiv webdesign handler om at skabe websites med 
                    optimal ydeevne, minimal ressourceanvendelse og 
                    brugervenlig navigation.
                  </p>
                  
                  <div className="principles-grid">
                    <div className="principle-card">
                      <div className="principle-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polygon points="18 2 22 6 12 16 8 16 8 12 18 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h4>Optimeret Kode</h4>
                      <p>Ren og effektiv kodning der reducerer filstørrelser og forbedrer ydeevnen</p>
                    </div>
                    
                    <div className="principle-card">
                      <div className="principle-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h4>Optimerede Billeder</h4>
                      <p>Komprimering og korrekt formatering af billeder for at reducere dataoverførsel</p>
                    </div>
                    
                    <div className="principle-card">
                      <div className="principle-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h4>Effektiv Caching</h4>
                      <p>Strategisk brug af caching for at minimere serverforespørgsler</p>
                    </div>
                    
                    <div className="principle-card">
                      <div className="principle-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h4>Brugercentreret Design</h4>
                      <p>Design der fokuserer på brugernes behov, hvilket reducerer unødvendig navigation</p>
                    </div>
                  </div>
                </div>
                
                <div className="visual-content">
                  <div className="infographic">
                    <div className="infographic-title">Digital Ressourceforbrug</div>
                    
                    <div className="energy-facts">
                      <div className="energy-fact">
                        <h4>Standard Website</h4>
                        <p>Typisk højere ressourceforbrug og langsommere indlæsningstider</p>
                      </div>
                      
                      <div className="energy-fact">
                        <h4>Optimeret Website</h4>
                        <p>Reducerer dataoverførsel og forbedrer brugeroplevelsen</p>
                      </div>
                      
                      <div className="energy-fact">
                        <h4>Effektivt Website</h4>
                        <p>Minimerer unødvendig dataoverførsel og forbedrer performance</p>
                      </div>
                    </div>
                    
                    <div className="key-stat">
                      <p>Internettet forbruger betydelige energiressourcer. Vores mål er at reducere dette forbrug gennem effektiv webdesign.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'why' && (
            <div className="tab-panel">
              <div className="tab-header">
                <h3>Fordele ved effektiv webdesign</h3>
                <div className="tab-decoration"></div>
              </div>
              
              <div className="panel-content">
                <div className="benefits-grid">
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15.09 10.001A3 3 0 1 0 8.910 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.09 14A3 3 0 1 1 15.27 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4>Ressourceoptimering</h4>
                    <p>Vi reducerer CO2-udledning ved at minimere dataoverførsel og energiforbrug i vores webløsninger.</p>
                    <ul className="benefit-list">
                      <li>Reduceret dataoverførsel</li>
                      <li>Minimeret energiforbrug</li>
                      <li>Effektiv ressourceanvendelse</li>
                    </ul>
                  </div>
                  
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15.09 10.001A3 3 0 1 0 8.910 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.09 14A3 3 0 1 1 15.27 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4>Økonomiske fordele</h4>
                    <p>Reducerede omkostninger til hosting, serverinfrastruktur og båndbredde, samt potentielt højere konverteringsrater.</p>
                    <ul className="benefit-list">
                      <li>Lavere hostingomkostninger</li>
                      <li>Færre serverkrav</li>
                      <li>Øget salg og konverteringer</li>
                    </ul>
                  </div>
                  
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12h-6l-2 3h-4l-2-3H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4>Brugeroplevelse</h4>
                    <p>Hurtigere indlæsningstider og optimeret mobiloplevelse fører til højere kundetilfredshed og engagement.</p>
                    <ul className="benefit-list">
                      <li>Hurtigere sideindlæsning</li>
                      <li>Bedre mobiloplevelse</li>
                      <li>Lavere bounce rate</li>
                    </ul>
                  </div>
                  
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 5h6a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13 14H7.5a2.5 2.5 0 0 1 0-5H13h0v-4h0L9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4>SEO fordele</h4>
                    <p>Google og andre søgemaskiner belønner hurtige, brugervenlige og mobile-friendly websites med bedre placeringer.</p>
                    <ul className="benefit-list">
                      <li>Bedre rangering i søgeresultater</li>
                      <li>Forbedrede Core Web Vitals</li>
                      <li>Højere organisk trafik</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'how' && (
            <div className="tab-panel">
              <div className="tab-header">
                <h3>Vores tilgang til effektiv webdesign</h3>
                <div className="tab-decoration"></div>
              </div>
              
              <div className="process-container">
                <div className="process-timeline">
                  <div className="process-step">
                    <div className="step-content">
                      <span className="step-number">1</span>
                      <div className="step-details">
                        <h4>Analyse</h4>
                        <p>Vi starter med en grundig analyse af dit nuværende website (hvis det findes) eller din virksomheds behov for at identificere områder til forbedring.</p>
                        <div className="step-features">
                          <div className="feature">Website audit</div>
                          <div className="feature">Performance måling</div>
                          <div className="feature">Funktionsanalyse</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-content">
                      <span className="step-number">2</span>
                      <div className="step-details">
                        <h4>Design</h4>
                        <p>Vi skaber et design der både opfylder dine æstetiske krav og er optimeret for bedste mulige ydeevne, med fokus på hurtige indlæsningstider.</p>
                        <div className="step-features">
                          <div className="feature">Minimalistisk UI</div>
                          <div className="feature">Optimerede billeder</div>
                          <div className="feature">Gennemtænkt farvepalette</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-content">
                      <span className="step-number">3</span>
                      <div className="step-details">
                        <h4>Udvikling</h4>
                        <p>Vi bygger dit website med ren, effektiv kode og optimerede visuelle elementer. Vi anvender moderne teknologier som React, som giver bedre performance.</p>
                        <div className="step-features">
                          <div className="feature">Effektiv kodning</div>
                          <div className="feature">Serverside rendering</div>
                          <div className="feature">Code splitting</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-content">
                      <span className="step-number">4</span>
                      <div className="step-details">
                        <h4>Test & Optimering</h4>
                        <p>Vi validerer websitet med værktøjer som Google Lighthouse for at sikre optimal ydeevne og brugeroplevelse.</p>
                        <div className="step-features">
                          <div className="feature">Performance testing</div>
                          <div className="feature">Brugertest</div>
                          <div className="feature">Kontinuerlig optimering</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="process-cta">
                  <a href="#contact" className="btn btn-primary">Kontakt os</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Sustainability