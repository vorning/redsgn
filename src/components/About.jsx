import "../styles/components/about.css";
import omosImage from "/src/assets/omos.jpg";


function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>Om RE:DESIGN</h2>
          <p>Et webbureau med fokus på effektiv digital kommunikation</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Vores Mission</h3>
            <p>
              Vi er et webbureau, der specialiserer sig i at skabe digitale
              løsninger til små selvstændige virksomheder. Vores mål er at
              hjælpe virksomheder med at kommunikere klart og effektivt gennem
              veldesignede websites.
            </p>

            <h3>Vores Tilgang</h3>
            <p>
              Vi tror på, at godt webdesign handler om at skabe brugervenlige og
              effektive digitale løsninger. Ved at kombinere minimalistiske
              principper, effektiv kodning og gennemtænkt UX-design, skaber vi
              websites der er både funktionelle og visuelle.
            </p>

            <h3>Vores Værdier</h3>
            <ul>
              <li>
                <strong>Brugercentreret Design:</strong> Vi prioriterer
                brugerens oplevelse i alt, hvad vi laver.
              </li>
              <li>
                <strong>Kvalitet:</strong> Vi går aldrig på kompromis med
                kvaliteten af vores produkter.
              </li>
              <li>
                <strong>Transparens:</strong> Vi er ærlige omkring vores metoder
                og resultater.
              </li>
              <li>
                <strong>Innovation:</strong> Vi søger konstant nye måder at
                forbedre vores praksis på.
              </li>
            </ul>
          </div>

          <div className="about-image">
            <img
              src={omosImage}
              alt="RE:DESIGN teamet arbejder på webdesign projekter"
              className="about-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
