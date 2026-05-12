import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone, Recycle } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-[var(--deep)] text-white/85">
      <div className="container-x py-16 grid gap-10 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-white">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--lime)]">
              <Recycle className="h-5 w-5 text-[var(--lime-foreground)]" />
            </span>
            Sargas Group
          </Link>
          <p className="mt-4 text-sm text-white/65 leading-relaxed">
            Engineering Sustainability — modern waste collection, hazardous waste handling, recycling and environmental advisory across India.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            {[["About","/about"],["Services","/services"],["Why Us","/why-us"],["Certifications","/certifications"],["Contact","/contact"]].map(([l,h]) => (
              <li key={h}><Link to={h} className="hover:text-[var(--lime)] transition">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-[var(--lime)]" /> +91 96119 69686</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-[var(--lime)]" /> +91 79961 61777</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-[var(--lime)]" /> contact@sargasgroup.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Offices</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-[var(--lime)] shrink-0" />
              <span><b className="text-white">SEPL</b> · Plot 319-D, Sompura Industrial Area 1st Stage, Nidavanda, Dobbaspete, Bengaluru Rural — 562132</span>
            </li>
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-[var(--lime)] shrink-0" />
              <span><b className="text-white">SWMPL</b> · Plot 12-A, Dobbaspete Industrial Area 1st Phase, Yedahalli, Bengaluru Rural — 562111</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/55">
          <p>© {new Date().getFullYear()} Sargas Group. All rights reserved.</p>
          <Link to="/contact" className="inline-flex items-center gap-1 text-white hover:text-[var(--lime)]">
            Start a project <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
