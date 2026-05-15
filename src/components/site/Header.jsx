import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { ArrowUpRight, Phone, Menu, X } from "lucide-react";
import * as images from "@/data/images.js";
import { scrollToTop } from "@/lib/scroll-to-top.js";

const nav = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About", end: false },
  { to: "/services", label: "Services", end: false },
  { to: "/certifications", label: "Certifications", end: false },
  { to: "/contact", label: "Contact", end: false },
];

function navClass(isActive) {
  return isActive
    ? "px-4 py-2 text-sm font-semibold rounded-full bg-[var(--lime)] text-[var(--lime-foreground)]"
    : "px-4 py-2 text-sm font-medium text-foreground/80 rounded-full transition hover:text-[var(--primary)]";
}

function mobileNavClass(isActive) {
  return isActive
    ? "block rounded-2xl bg-[var(--lime)] px-5 py-4 font-display text-2xl font-bold text-[var(--lime-foreground)] transition-colors"
    : "block rounded-2xl px-5 py-4 font-display text-2xl font-bold text-[var(--primary)] transition-colors hover:bg-secondary";
}

function MobileMenu({ open, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !open) return null;

  return createPortal(
    <>
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="fixed inset-0 z-[200] bg-[var(--deep)]/60 backdrop-blur-sm animate-in fade-in duration-200"
      />

      <nav
        id="mobile-nav"
        className="fixed inset-0 z-[201] flex w-full max-w-full flex-col bg-background animate-in slide-in-from-right duration-300 ease-out"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <div className="container-x flex shrink-0 items-center justify-end pt-6 pb-2">
          <button
            type="button"
            onClick={onClose}
            className="grid h-11 w-11 place-items-center rounded-full bg-secondary transition-colors hover:bg-[var(--lime)]"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="container-x flex flex-1 flex-col justify-center py-6">
          <ul className="flex flex-col gap-2">
            {nav.map((n, i) => (
              <li
                key={n.to}
                className="animate-in fade-in slide-in-from-right duration-300 fill-mode-both"
                style={{ animationDelay: `${80 + i * 50}ms` }}
              >
                <NavLink
                  to={n.to}
                  end={n.end}
                  onClick={() => {
                    onClose();
                    scrollToTop();
                  }}
                  className={({ isActive }) => mobileNavClass(isActive)}
                >
                  {n.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="container-x shrink-0 space-y-4 border-t border-border/60 py-8 animate-in fade-in slide-in-from-bottom duration-300 fill-mode-both"
          style={{ animationDelay: "320ms" }}
        >
          <a
            href="tel:+919611969686"
            className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 transition-colors hover:border-[var(--primary)]/30"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--primary)] text-primary-foreground">
              <Phone className="h-5 w-5" />
            </span>
            <div>
              <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Call us
              </span>
              <span className="font-display text-lg font-bold text-[var(--primary)]">
                +91 96119 69686
              </span>
            </div>
          </a>
          <NavLink
            to="/contact"
            onClick={() => {
              onClose();
              scrollToTop();
            }}
            className="btn-lime w-full justify-center py-4 text-base"
          >
            Get a Quote <ArrowUpRight className="h-5 w-5" />
          </NavLink>
        </div>
      </nav>
    </>,
    document.body,
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/60">
        <div className="container-x flex h-24 items-center justify-between gap-4">
          <NavLink
            to="/"
            className="flex shrink-0 items-center py-1"
            onClick={() => {
              closeMenu();
              scrollToTop();
            }}
          >
            <img
              src={images.logo}
              alt="Sargas Group — Engineering Sustainability"
              className="h-12 w-auto sm:h-14 md:h-16 max-h-16 object-contain object-left"
              width={320}
              height={58}
              decoding="async"
            />
          </NavLink>

          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-border/70 bg-card px-2 py-1.5 shadow-sm">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                onClick={scrollToTop}
                className={({ isActive }) => navClass(isActive)}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+919611969686" className="flex items-center gap-2 text-sm">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--primary)] text-primary-foreground">
                <Phone className="h-4 w-4" />
              </span>
              <span className="font-semibold">+91 96119 69686</span>
            </a>
            <NavLink to="/contact" className="btn-lime" onClick={scrollToTop}>
              Get a Quote <ArrowUpRight className="h-4 w-4" />
            </NavLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-11 w-11 place-items-center rounded-full bg-secondary text-foreground transition-colors hover:bg-[var(--lime)]"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <MobileMenu open={open} onClose={closeMenu} />
    </>
  );
}
