import { CONTACT_EMAIL } from "@/data/contact.js";

/** Canonical site URL — set VITE_SITE_URL in production deploy. */
export const SITE_URL = import.meta.env.VITE_SITE_URL || "https://sargasgroup.com";

export { CONTACT_EMAIL };

export const SITE_NAME = "Sargas Group";
export const SITE_TAGLINE = "Engineering Sustainability";
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
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: DEFAULT_OG_IMAGE,
  image: DEFAULT_OG_IMAGE,
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
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  knowsAbout: [
    "Hazardous waste management",
    "Industrial waste recycling",
    "ETP and STP sludge disposal",
    "Environmental consultancy",
  ],
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Waste management, recycling and environmental advisory services in Karnataka and across India.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-IN",
};

function webPageSchema({ title, description, url }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
  };
}

function breadcrumbSchema(path, title) {
  const items = [{ name: "Home", path: "/" }];
  if (path !== "/") items.push({ name: title, path });
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

/**
 * Apply per-route SEO tags (title, description, canonical, Open Graph, Twitter, JSON-LD).
 */
export function setPageSeo({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  includeOrganizationSchema = false,
  keywords,
}) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  document.documentElement.lang = "en-IN";
  document.title = fullTitle;

  upsertMeta("name", "description", description);
  upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large");
  if (keywords) upsertMeta("name", "keywords", keywords);

  upsertLink("canonical", url);

  upsertMeta("property", "og:type", "website");
  upsertMeta("property", "og:site_name", SITE_NAME);
  upsertMeta("property", "og:title", fullTitle);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:url", url);
  upsertMeta("property", "og:image", image);
  upsertMeta("property", "og:image:alt", `${SITE_NAME} — ${SITE_TAGLINE}`);
  upsertMeta("property", "og:locale", "en_IN");

  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", fullTitle);
  upsertMeta("name", "twitter:description", description);
  upsertMeta("name", "twitter:image", image);

  upsertJsonLd(
    "jsonld-organization",
    includeOrganizationSchema ? organizationSchema : null,
  );
  upsertJsonLd("jsonld-website", includeOrganizationSchema ? websiteSchema : null);
  upsertJsonLd(
    "jsonld-webpage",
    noindex ? null : webPageSchema({ title: fullTitle, description, url }),
  );
  upsertJsonLd(
    "jsonld-breadcrumb",
    noindex || path === "/" ? null : breadcrumbSchema(path, title),
  );
}

export const PAGE_SEO = {
  home: {
    title: "Sargas Group — Engineering Sustainability | Waste Management India",
    description:
      "Sargas Group (SEPL & SWMPL) — KSPCB-authorised hazardous & non-hazardous waste management, recycling, ETP/STP sludge handling and environmental advisory in Bengaluru Rural & across India.",
    path: "/",
    keywords:
      "Sargas Group, waste management India, hazardous waste Bengaluru, recycling Karnataka, environmental consultancy",
    includeOrganizationSchema: true,
  },
  about: {
    title: "About Us",
    description:
      "About Sargas Group — mission, vision and operations at SEPL (Sargas Enviro) and SWMPL (Sargas Waste Management) in Bengaluru Rural, Karnataka.",
    path: "/about",
    keywords: "about Sargas, SEPL, SWMPL, waste management company Karnataka",
  },
  services: {
    title: "Waste Management Services",
    description:
      "Hazardous waste disposal, ETP/STP sludge, industrial & commercial waste, recycling, audits and zero-waste programmes — Sargas Group, Karnataka & India.",
    path: "/services",
    keywords:
      "hazardous waste services, ETP sludge disposal, industrial waste collection, recycling services India",
  },
  certifications: {
    title: "Certifications & Authorisations",
    description:
      "Sargas Group certifications — KSPCB authorisations, NABCB, JAS-ANZ ISO 9001, IQC Global and Mission LiFE compliance.",
    path: "/certifications",
    keywords: "KSPCB authorisation, ISO 9001 waste management, NABCB certification Sargas",
  },
  contact: {
    title: "Contact Us",
    description:
      "Contact Sargas Group — Dobbaspete & Bengaluru Rural offices, +91 96119 69686, +91 79961 61777, contact@sargasgroup.com and online enquiry form.",
    path: "/contact",
    keywords: "contact Sargas Group, waste management enquiry Bengaluru Rural",
  },
  notFound: {
    title: "Page Not Found",
    description: "The page you are looking for does not exist on the Sargas Group website.",
    path: "/404",
    noindex: true,
  },
};
