import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import favicon from "./assets/skillSphere-favicon.svg";
import "./index.css";
import App from "./App.jsx";

// Replace any legacy Vite/previous-project favicon before React mounts.
document.head
  .querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]')
  .forEach((link) => link.remove());

const faviconLink = document.createElement("link");
faviconLink.rel = "icon";
faviconLink.type = "image/svg+xml";
faviconLink.href = favicon;
document.head.appendChild(faviconLink);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
