/** Shared contact details — used across header, footer, and contact page. */

export const CONTACT_EMAIL = "contact@sargasgroup.com";

export const DIRECTORS = [
  {
    id: "jagadish",
    name: "Jagadish N",
    role: "Managing Director",
    phone: "+91 96119 69686",
    tel: "+919611969686",
    whatsapp: "919611969686",
    email: "jagadish@sargasgroup.com",
  },
  {
    id: "sachin",
    name: "Sachin Raj C",
    role: "Managing Director",
    phone: "+91 79961 61777",
    tel: "+917996161777",
    whatsapp: "917996161777",
    email: "sachinraj@sargasgroup.com",
  },
];

export const OFFICES = [
  {
    short: "SEPL",
    name: "Sargas Enviro Pvt. Ltd.",
    address:
      "Plot 319-D, Sompura Industrial Area 1st Stage, Nidavanda, Dobbaspete, Bengaluru Rural — 562132, Karnataka, India",
    mapUrl: "https://maps.app.goo.gl/ZFHfJQQpKkCdyZYPA",
  },
  {
    short: "SWMPL",
    name: "Sargas Waste Management Pvt. Ltd.",
    address:
      "Plot 12-A, Dobbaspete Industrial Area 1st Phase, Yedahalli, Bengaluru Rural — 562111, Karnataka, India",
    mapUrl: "https://maps.app.goo.gl/nEwMuzKCNLjyerLZ7",
  },
];

export function whatsappUrl(number) {
  return `https://wa.me/${number}`;
}

/** Small pill button for phone / WhatsApp / email links. */
export const chipBtnClass =
  "inline-flex items-center gap-1.5 rounded-full border border-[var(--primary)]/20 bg-white px-3 py-1.5 text-xs font-semibold text-[var(--primary)] shadow-sm transition hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white";

export const chipBtnClassOnDark =
  "inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white hover:text-[var(--deep)]";
