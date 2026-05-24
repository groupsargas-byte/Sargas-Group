import { Link, useLocation } from "react-router-dom";
import * as images from "@/data/images.js";
import { DIRECTORS, OFFICES } from "@/data/contact.js";
import { scrollToTop } from "@/lib/scroll-to-top.js";
import { Reveal } from "@/components/site/Reveal.jsx";
import { LazyImage } from "@/components/site/LazyImage.jsx";
import { GeneralEnquiries } from "@/components/site/GeneralEnquiries.jsx";
import { FooterPersonBlock } from "@/components/site/FooterPersonBlock.jsx";
import { FooterOfficeBlock } from "@/components/site/FooterOfficeBlock.jsx";
import { FooterSectionTitle } from "@/components/site/FooterSectionTitle.jsx";

const exploreLinks = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Certifications", "/certifications"],
  ["Contact", "/contact"],
];

export function Footer() {
  const { pathname } = useLocation();
  const flushTop = pathname === "/contact";

  return (
    <footer
      className={`bg-[var(--deep)] text-white/85 ${flushTop ? "mt-0" : "mt-24"}`}
    >
      <Reveal className="container-x grid gap-12 py-16 lg:grid-cols-12 lg:gap-10">
        {/* Logo + tagline */}
        <div className="lg:col-span-3">
          <Link
            to="/"
            className="inline-flex rounded-xl bg-white px-3 py-2 shadow-sm"
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
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Engineering Sustainability — modern waste collection, hazardous waste handling,
            recycling and environmental advisory across India.
          </p>
        </div>

        {/* Explore */}
        <div className="lg:col-span-2 lg:border-l lg:border-white/10 lg:pl-8">
          <h4 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
            Explore
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {exploreLinks.map(([label, href]) => (
              <li key={href}>
                <Link
                  to={href}
                  className="text-white/75 transition hover:translate-x-0.5 hover:text-[var(--lime)]"
                  onClick={scrollToTop}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Reach us · General enquiries · Offices */}
        <div className="min-w-0 space-y-6 lg:col-span-7 lg:border-l lg:border-white/10 lg:pl-16">
          <div>
            <FooterSectionTitle>Reach us</FooterSectionTitle>
            <div className="mt-3 grid gap-4 sm:grid-cols-2 sm:gap-5">
              {DIRECTORS.map((d) => (
                <FooterPersonBlock key={d.id} person={d} />
              ))}
            </div>
          </div>

          <div>
            <FooterSectionTitle tone="white">General enquiries</FooterSectionTitle>
            <div className="mt-3">
              <GeneralEnquiries variant="dark" />
            </div>
          </div>

          <div>
            <FooterSectionTitle>Offices</FooterSectionTitle>
            <div className="mt-3 grid gap-4 sm:grid-cols-2 sm:gap-5">
              {OFFICES.map((office) => (
                <FooterOfficeBlock key={office.short} office={office} />
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Sargas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
