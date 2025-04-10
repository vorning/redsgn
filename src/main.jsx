import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/components/styles.css";
import "./styles/utilities/animations.css";
import "./styles/components/loading.css";

// Preload kritiske komponenter
const preloadComponents = () => {
  // Preload Hero component (above the fold)
  import("./components/Hero.jsx");

  // Preload andre vigtige komponenter
  import("./components/Navbar.jsx");
  import("./components/Footer.jsx");

  // Preload basic styles
  const link = document.createElement("link");
  link.rel = "preload";
  link.href =
    "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap";
  link.as = "style";
  document.head.appendChild(link);
};

// Start preloading af komponenter
preloadComponents();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
