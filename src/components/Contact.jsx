import { useState } from "react";
import "../styles/components/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Navn validering
    if (!formData.name.trim()) {
      newErrors.name = "Navn er påkrævet";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Navnet skal være mindst 2 tegn";
    }

    // Email validering
    if (!formData.email.trim()) {
      newErrors.email = "Email er påkrævet";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Indtast venligst en gyldig email";
    }

    // Besked validering
    if (!formData.message.trim()) {
      newErrors.message = "Besked er påkrævet";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Beskeden skal være mindst 10 tegn";
    }

    // Samtykke validering
    if (!formData.consent) {
      newErrors.consent = "Du skal acceptere, at vi kontakter dig";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Opdater formData
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Fjern fejlmeddelelse for dette felt når brugeren begynder at skrive
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Valider formen før indsendelse
    if (validateForm()) {
      setLoading(true);

      // Simuler API kald (i en virkelig app ville du sende data til din backend her)
      setTimeout(() => {
        console.log("Form data submitted:", formData);
        setLoading(false);
        setSubmitted(true);

        // Reset form efter indsendelse
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
          consent: false,
        });

        // Reset submission status efter 5 sekunder
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Kontakt Os</h2>
          <p>Lad os tale om, hvordan vi kan hjælpe din virksomhed</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
              <h3>Ring til os</h3>
              <p>+45 12 34 56 78</p>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
              <h3>Email os</h3>
              <p>info@redesign.dk</p>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3>Besøg os</h3>
              <p>Åboulevarden 122, 8000 Aarhus C</p>
            </div>
          </div>

          <div className="contact-form-container">
            {submitted ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Tak for din henvendelse!</h3>
                <p>Vi vender tilbage til dig hurtigst muligt.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className={`form-group ${errors.name ? "error" : ""}`}>
                  <label htmlFor="name">Navn *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <div className="error-message" id="name-error">
                      {errors.name}
                    </div>
                  )}
                </div>

                <div className={`form-group ${errors.email ? "error" : ""}`}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <div className="error-message" id="email-error">
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="company">Virksomhed</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className={`form-group ${errors.message ? "error" : ""}`}>
                  <label htmlFor="message">Besked *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  ></textarea>
                  {errors.message && (
                    <div className="error-message" id="message-error">
                      {errors.message}
                    </div>
                  )}
                </div>

                <div
                  className={`form-group checkbox ${
                    errors.consent ? "error" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    aria-invalid={errors.consent ? "true" : "false"}
                    aria-describedby={
                      errors.consent ? "consent-error" : undefined
                    }
                  />
                  <label htmlFor="consent">
                    Jeg accepterer, at RE:DESIGN kontakter mig vedrørende min
                    henvendelse *
                  </label>
                  {errors.consent && (
                    <div className="error-message" id="consent-error">
                      {errors.consent}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary ${loading ? "loading" : ""}`}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner"></span>
                      Sender...
                    </>
                  ) : (
                    "Send besked"
                  )}
                </button>

                <div className="form-footer">
                  <p className="required-note">* Påkrævede felter</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
