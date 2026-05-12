import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Phone, Recycle, Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/why-us", label: "Why Us" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/60">
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-[var(--primary)]">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--lime)]">
            <Recycle className="h-5 w-5 text-[var(--lime-foreground)]" />
          </span>
          Sargas Group
        </Link>

        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-border/70 bg-card px-2 py-1.5 shadow-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-4 py-2 text-sm font-medium text-foreground/80 rounded-full transition hover:text-[var(--primary)]"
              activeProps={{ className: "px-4 py-2 text-sm font-semibold rounded-full bg-[var(--lime)] text-[var(--lime-foreground)]" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+919611969686" className="flex items-center gap-2 text-sm">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--primary)] text-primary-foreground">
              <Phone className="h-4 w-4" />
            </span>
            <span className="font-semibold">+91 96119 69686</span>
          </a>
          <Link to="/contact" className="btn-lime">
            Get a Quote <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button onClick={() => setOpen((v) => !v)} className="lg:hidden grid h-10 w-10 place-items-center rounded-full bg-secondary">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-card">
          <div className="container-x py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl font-medium hover:bg-secondary"
                activeProps={{ className: "px-4 py-3 rounded-xl font-medium bg-[var(--lime)] text-[var(--lime-foreground)]" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-lime mt-3 justify-center">
              Get a Quote <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
