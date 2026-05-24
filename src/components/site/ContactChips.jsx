import { Mail, Phone } from "lucide-react";
import { whatsappUrl } from "@/data/contact.js";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon.jsx";

const chipLight =
  "inline-flex items-center gap-1.5 rounded-full border border-[var(--primary)]/15 bg-[var(--lime)]/10 px-3.5 py-2 text-xs font-semibold text-[var(--primary)] transition hover:border-[var(--primary)]/35 hover:bg-[var(--lime)]/25";

const chipDark =
  "inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/[0.06] px-3.5 py-2 text-xs font-semibold text-white/90 transition hover:border-[var(--lime)]/50 hover:bg-white/12 hover:text-white";

const chipLightCompact =
  "inline-flex items-center gap-1 rounded-full border border-[var(--primary)]/15 bg-[var(--lime)]/10 px-2.5 py-1 text-[11px] font-semibold text-[var(--primary)] transition hover:border-[var(--primary)]/35 hover:bg-[var(--lime)]/25";

const chipDarkCompact =
  "inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/[0.06] px-2.5 py-1 text-[11px] font-semibold text-white/90 transition hover:border-[var(--lime)]/50 hover:bg-white/12 hover:text-white";

/** Phone, WhatsApp, and email action chips for a director. */
export function ContactChips({ person, variant = "light", showEmail = true, compact = false }) {
  const chip =
    variant === "dark"
      ? compact
        ? chipDarkCompact
        : chipDark
      : compact
        ? chipLightCompact
        : chipLight;
  const iconClass = compact ? "h-3 w-3 shrink-0" : "h-3.5 w-3.5 shrink-0";

  return (
    <div className={`flex flex-wrap ${compact ? "gap-1.5" : "gap-2"}`}>
      <a href={`tel:${person.tel}`} className={chip}>
        <Phone className={iconClass} aria-hidden />
        {person.phone}
      </a>
      <a
        href={whatsappUrl(person.whatsapp)}
        target="_blank"
        rel="noopener noreferrer"
        className={chip}
      >
        <WhatsAppIcon className={iconClass} />
        WhatsApp
      </a>
      {showEmail ? (
        <a href={`mailto:${person.email}`} className={chip}>
          <Mail className={iconClass} aria-hidden />
          Email
        </a>
      ) : null}
    </div>
  );
}
