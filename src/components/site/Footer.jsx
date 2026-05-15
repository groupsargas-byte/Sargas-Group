import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import * as images from "@/data/images.js";

const CONTACT_EMAIL = "contact@sargasgroup.com";

const exploreLinks = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Certifications", "/certifications"],
  ["Contact", "/contact"],
];

const phones = [
  { label: "CEO — Jagadish K", number: "+91 96119 69686", href: "tel:+919611969686" },
  { label: "COO — Sachin Raj C", number: "+91 79961 61777", href: "tel:+917996161777" },
];

const offices = [
  {
    short: "SEPL",
    name: "Sargas Enviro Pvt. Ltd.",
    address:
      "Plot 319-D, Sompura Industrial Area 1st Stage, Nidavanda, Dobbaspete, Bengaluru Rural — 562132",
    mapUrl: "https://maps.app.goo.gl/ZFHfJQQpKkCdyZYPA",
  },
  {
    short: "SWMPL",
    name: "Sargas Waste Management Pvt. Ltd.",
    address:
      "Plot 12-A, Dobbaspete Industrial Area 1st Phase, Yedahalli, Bengaluru Rural — 562111",
    mapUrl: "https://maps.app.goo.gl/nEwMuzKCNLjyerLZ7",
  },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-[var(--deep)] text-white/85">
      <div className="container-x py-16 grid gap-10 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link
            to="/"
            className="inline-flex rounded-lg bg-white"
          >
            <img
              src={images.logo}
              alt="Sargas Group — Engineering Sustainability"
              className="h-12 w-auto max-w-[min(100%,280px)] object-contain object-left sm:h-14"
              width={280}
              height={52}
              decoding="async"
            />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            Engineering Sustainability — modern waste collection, hazardous waste handling,
            recycling and environmental advisory across India.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">Explore</h4>
          <ul className="space-y-2 text-sm">
            {exploreLinks.map(([label, href]) => (
              <li key={href}>
                <Link to={href} className="transition hover:text-[var(--lime)]">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">Reach Us</h4>
          <ul className="space-y-3 text-sm">
            {phones.map((p) => (
              <li key={p.href} className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--lime)]" aria-hidden />
                <div>
                  <span className="block text-xs text-white/55">{p.label}</span>
                  <a href={p.href} className="font-medium transition hover:text-white">
                    {p.number}
                  </a>
                </div>
              </li>
            ))}
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--lime)]" aria-hidden />
              <div>
                <span className="block text-xs text-white/55">Email</span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-medium transition hover:text-white"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">Offices</h4>
          <ul className="space-y-4 text-sm">
            {offices.map((office) => (
              <li key={office.short} className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--lime)]" aria-hidden />
                <div>
                  <p className="font-semibold text-white">
                    {office.short} · {office.name}
                  </p>
                  <p className="mt-1 leading-relaxed text-white/70">{office.address}</p>
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex text-xs font-semibold text-[var(--lime)] underline-offset-2 hover:underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/55 sm:flex-row">
          <p>© {new Date().getFullYear()} Sargas Group. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
}
