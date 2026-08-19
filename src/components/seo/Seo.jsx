import { useEffect } from "react";
import favicon from "../../assets/skillSphere-favicon.svg";
import socialImage from "../../assets/hero-learning-poster.jpg";
import { BRAND_NAME, LANDING_SITE_URL } from "../../constants/site";

const PAGE_TITLE = "SkillSphere | Live Learning With Mentors";
const PAGE_DESCRIPTION =
  "Learn practical skills through live mentor sessions, tutor-led courses, community support, and the SkillCoin learning economy on SkillSphere.";

const upsertMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
};

const upsertLink = (rel, href, attributes = {}) => {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
};

const Seo = () => {
  useEffect(() => {
    const canonicalUrl = `${LANDING_SITE_URL}/`;
    const absoluteSocialImage = new URL(socialImage, window.location.origin).href;
    const absoluteFavicon = new URL(favicon, window.location.origin).href;

    document.title = PAGE_TITLE;
    document.documentElement.lang = "en";

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: PAGE_DESCRIPTION,
    });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    });
    upsertMeta('meta[name="theme-color"]', {
      name: "theme-color",
      content: "#05090d",
    });
    upsertMeta('meta[name="author"]', {
      name: "author",
      content: BRAND_NAME,
    });

    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: BRAND_NAME });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: PAGE_TITLE });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: PAGE_DESCRIPTION });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: absoluteSocialImage });
    upsertMeta('meta[property="og:image:alt"]', {
      property: "og:image:alt",
      content: "SkillSphere live learning and mentor collaboration experience",
    });

    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: PAGE_TITLE });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: PAGE_DESCRIPTION });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: absoluteSocialImage });

    upsertLink("canonical", canonicalUrl);
    upsertLink("icon", absoluteFavicon, { type: "image/svg+xml" });
    upsertLink("shortcut icon", absoluteFavicon, { type: "image/svg+xml" });
    upsertLink("manifest", "/site.webmanifest");

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${canonicalUrl}#website`,
          name: BRAND_NAME,
          url: canonicalUrl,
          description: PAGE_DESCRIPTION,
          inLanguage: "en",
        },
        {
          "@type": "WebApplication",
          "@id": `${canonicalUrl}#application`,
          name: BRAND_NAME,
          url: canonicalUrl,
          applicationCategory: "EducationalApplication",
          operatingSystem: "Web",
          description: PAGE_DESCRIPTION,
          isAccessibleForFree: true,
        },
      ],
    };

    let script = document.head.querySelector('script[data-skillsphere-seo="structured-data"]');
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.skillsphereSeo = "structured-data";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, []);

  return null;
};

export default Seo;
