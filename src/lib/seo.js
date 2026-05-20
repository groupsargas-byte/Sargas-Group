import { CONTACT_EMAIL } from "@/data/contact.js";

/** Canonical site URL — set VITE_SITE_URL in production deploy. */
export const SITE_URL = import.meta.env.VITE_SITE_URL || "https://sargasgroup.com";

export { CONTACT_EMAIL };

export const SITE_NAME = "Sargas Group";
export const DEFAULT_OG_IMAGE =
  "https://res.cloudinary.com/dajh7qn7v/image/upload/v1779251588/ChatGPT_Image_May_20__2026__09_59_17_AM-removebg-preview_e4kier.png";

export const CONTACT_PHONE = "+919611969686";

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id, data) {
  const existing = document.getElementById(id);
  if (!data) {
    existing?.remove();
    return;
  }
  const script = existing ?? document.createElement("script");
  script.id = id;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  if (!existing) document.head.appendChild(script);
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: "https://res.cloudinary.com/dajh7qn7v/image/upload/v1779251588/ChatGPT_Image_May_20__2026__09_59_17_AM-removebg-preview_e4kier.png",
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE,
  description:
    "Engineering Sustainability — hazardous and non-hazardous waste management, recycling, and environmental advisory across India.",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Plot 319-D, Sompura Industrial Area 1st Stage, Nidavanda",
      addressLocality: "Dobbaspete",
      addressRegion: "Karnataka",
      postalCode: "562132",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Plot 12-A, Dobbaspete Industrial Area 1st Phase, Yedahalli",
      addressLocality: "Bengaluru Rural",
      addressRegion: "Karnataka",
      postalCode: "562111",
      addressCountry: "IN",
    },
  ],
  sameAs: [],
};

/**
 * Apply per-route SEO tags (title, description, canonical, Open Graph, Twitter).
 */
export function setPageSeo({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  includeOrganizationSchema = false,
}) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  document.title = fullTitle;

  upsertMeta("name", "description", description);
  upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");

  upsertLink("canonical", url);

  upsertMeta("property", "og:type", "website");
  upsertMeta("property", "og:site_name", SITE_NAME);
  upsertMeta("property", "og:title", fullTitle);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:url", url);
  upsertMeta("property", "og:image", image);
  upsertMeta("property", "og:locale", "en_IN");

  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", fullTitle);
  upsertMeta("name", "twitter:description", description);
  upsertMeta("name", "twitter:image", image);

  upsertJsonLd(
    "jsonld-organization",
    includeOrganizationSchema ? organizationSchema : null,
  );
}

export const PAGE_SEO = {
  home: {
    title: "Sargas Group — Engineering Sustainability | Waste Management India",
    description:
      "Sargas Group delivers hazardous & non-hazardous waste management, recycling, ETP/STP sludge handling and environmental advisory across India.",
    path: "/",
    includeOrganizationSchema: true,
  },
  about: {
    title: "About Us",
    description:
      "Learn about Sargas Group — mission, vision, values and operating structure across SEPL and SWMPL in Bengaluru Rural, Karnataka.",
    path: "/about",
  },
  services: {
    title: "Waste Management Services",
    description:
      "Hazardous waste, ETP/STP sludge, recycling, industrial & commercial waste, audits and zero-waste advisory — Sargas Group India.",
    path: "/services",
  },
  certifications: {
    title: "Certifications & Authorisations",
    description:
      "KSPCB, NABCB, JAS-ANZ ISO 9001, IQC Global and Mission LiFE — Sargas Group compliance and quality certifications.",
    path: "/certifications",
  },
  contact: {
    title: "Contact Us",
    description:
      "Contact Sargas — Bengaluru Rural offices, +91 96119 69686 & +91 79961 61777, email contact@sargasgroup.com and enquiry form.",
    path: "/contact",
  },
  notFound: {
    title: "Page Not Found",
    description: "The page you are looking for does not exist on the Sargas Group website.",
    path: "/404",
    noindex: true,
  },
};
