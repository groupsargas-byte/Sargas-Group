import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import * as images from "@/data/images.js";
import { CONTACT_EMAIL, DIRECTORS, OFFICES, whatsappUrl } from "@/data/contact.js";
import { scrollToTop } from "@/lib/scroll-to-top.js";
import { Reveal } from "@/components/site/Reveal.jsx";
import { LazyImage } from "@/components/site/LazyImage.jsx";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon.jsx";

const exploreLinks = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Certifications", "/certifications"],
  ["Contact", "/contact"],
];

export function Footer() {
  return (
    <footer className="mt-24 bg-[var(--deep)] text-white/85">
      <Reveal className="container-x grid gap-10 py-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-3">
          <Link
            to="/"
            className="inline-flex rounded-lg bg-white px-2 py-1"
            onClick={scrollToTop}
          >
            <LazyImage
              src={images.logoFooter}
              alt="Sargas — Engineering Sustainability"
              className="h-14 w-auto max-w-[min(100%,260px)] object-contain object-left sm:h-16"
              width={260}
              height={64}
            />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            Engineering Sustainability — modern waste collection, hazardous waste handling,
            recycling and environmental advisory across India.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h4 className="mb-4 font-semibold text-white">Explore</h4>
          <ul className="space-y-2 text-sm">
            {exploreLinks.map(([label, href]) => (
              <li key={href}>
                <Link to={href} className="transition hover:text-[var(--lime)]" onClick={scrollToTop}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0 lg:col-span-4">
          <h4 className="mb-4 font-semibold text-white">Reach Us</h4>
          <ul className="space-y-4 text-sm">
            {DIRECTORS.map((d) => (
              <li key={d.id}>
                <p className="font-semibold text-white">{d.name}</p>
                <p className="text-xs text-white/55">{d.role}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <a
                    href={`tel:${d.tel}`}
                    className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/5 px-2.5 py-1 text-xs font-medium transition hover:bg-white/15"
                  >
                    <Phone className="h-3 w-3" aria-hidden />
                    {d.phone}
                  </a>
                  <a
                    href={whatsappUrl(d.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/5 px-2.5 py-1 text-xs font-medium transition hover:bg-white/15"
                  >
                    <WhatsAppIcon className="h-3 w-3" />
                    WhatsApp
                  </a>
                  <a
                    href={`mailto:${d.email}`}
                    className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/5 px-2.5 py-1 text-xs font-medium transition hover:bg-white/15"
                  >
                    <Mail className="h-3 w-3" aria-hidden />
                    Email
                  </a>
                </div>
              </li>
            ))}
            <li className="flex gap-3 pt-1">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--lime)]" aria-hidden />
              <div>
                <span className="block text-xs text-white/55">General email</span>
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

        <div className="min-w-0 lg:col-span-3">
          <h4 className="mb-4 font-semibold text-white">Offices</h4>
          <ul className="space-y-4 text-sm">
            {OFFICES.map((office) => (
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
      </Reveal>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/55 sm:flex-row">
          <p>© {new Date().getFullYear()} Sargas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
