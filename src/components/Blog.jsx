import { useState } from "react";
import "../styles/components/blog.css";

function Blog() {
  const [activeCategory, setActiveCategory] = useState("alle");

  const categories = [
    { id: "alle", name: "Alle indlæg" },
    { id: "webdesign", name: "Webdesign" },
    { id: "optimering", name: "Optimering" },
    { id: "digital-strategi", name: "Digital strategi" },
    { id: "teknologi", name: "Teknologi" },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "5 grunde til at optimere dit website for performance",
      excerpt:
        "En langsom hjemmeside kan koste dig kunder. Lær hvordan optimering kan forbedre brugeroplevelsen og konverteringsraten.",
      date: "12. april 2023",
      author: "Marie Jensen",
      category: "optimering",
      image: "performance-optimering",
    },
    {
      id: 2,
      title: "Sådan skaber du et brugervenligt website",
      excerpt:
        "God brugeroplevelse er afgørende for at holde besøgende på dit site. Vi gennemgår de vigtigste principper for brugervenligt webdesign.",
      date: "28. februar 2023",
      author: "Anders Nielsen",
      category: "webdesign",
      image: "brugervenligt-webdesign",
    },
    {
      id: 3,
      title: "Fremtidens webdesign-trends",
      excerpt:
        "Hvilke trends vil dominere webdesign i de kommende år? Vi kigger nærmere på, hvad du bør holde øje med.",
      date: "15. januar 2023",
      author: "Sofie Petersen",
      category: "webdesign",
      image: "webdesign-trends",
    },
    {
      id: 4,
      title: "Digital strategi for små virksomheder",
      excerpt:
        "En stærk digital strategi kan hjælpe selv små virksomheder med at markere sig online. Få vores bedste råd her.",
      date: "5. december 2022",
      author: "Lars Madsen",
      category: "digital-strategi",
      image: "digital-strategi",
    },
    {
      id: 5,
      title: "Hvordan påvirker AI fremtidens webdesign?",
      excerpt:
        "Kunstig intelligens revolutionerer mange brancher - også webdesign. Vi undersøger, hvordan AI kan påvirke den måde, vi designer websites på.",
      date: "10. november 2022",
      author: "Mette Christiansen",
      category: "teknologi",
      image: "ai-webdesign",
    },
    {
      id: 6,
      title: "Optimering af billeder for hurtigere indlæsning",
      excerpt:
        "Billeder er ofte den største årsag til langsomme websites. Lær hvordan du kan optimere dine billeder uden at gå på kompromis med kvaliteten.",
      date: "20. oktober 2022",
      author: "Peter Hansen",
      category: "optimering",
      image: "billede-optimering",
    },
  ];

  // Filtrer indlæg baseret på den aktive kategori
  const filteredPosts =
    activeCategory === "alle"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <section className="blog-section">
      <div className="container">
        <div className="section-header">
          <h1>Blog</h1>
          <p>Nyttig viden om webdesign, optimering og digital strategi</p>
        </div>

        <div className="blog-categories">
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

        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <div className="blog-card" key={post.id}>
              <div className="blog-image">
                <div className="image-placeholder">
                  <p>{post.title}</p>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-category">
                    {categories.find((c) => c.id === post.category)?.name}
                  </span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-footer">
                  <span className="blog-author">Af {post.author}</span>
                  <a href={`/blog/${post.id}`} className="read-more">
                    Læs mere
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="blog-newsletter">
          <div className="newsletter-content">
            <h3>Modtag nyheder og tips direkte i din indbakke</h3>
            <p>
              Tilmeld dig vores nyhedsbrev og få de seneste artikler, tips og
              tricks til at forbedre din online tilstedeværelse.
            </p>
            <form className="newsletter-form">
              <input type="email" placeholder="Din email-adresse" required />
              <button type="submit" className="btn btn-primary">
                Tilmeld
              </button>
            </form>
            <p className="newsletter-policy">
              Ved at tilmelde dig accepterer du vores{" "}
              <a href="#privacy">privatlivspolitik</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
