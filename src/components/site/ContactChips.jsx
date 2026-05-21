import { Mail, Phone } from "lucide-react";
import { whatsappUrl } from "@/data/contact.js";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon.jsx";

const chipLight =
  "inline-flex items-center gap-1.5 rounded-full border border-[var(--primary)]/15 bg-[var(--lime)]/10 px-3.5 py-2 text-xs font-semibold text-[var(--primary)] transition hover:border-[var(--primary)]/35 hover:bg-[var(--lime)]/25";

const chipDark =
  "inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/[0.06] px-3.5 py-2 text-xs font-semibold text-white/90 transition hover:border-[var(--lime)]/50 hover:bg-white/12 hover:text-white";

/** Phone, WhatsApp, and email action chips for a director. */
export function ContactChips({ person, variant = "light", showEmail = true }) {
  const chip = variant === "dark" ? chipDark : chipLight;

  return (
    <div className="flex flex-wrap gap-2">
      <a href={`tel:${person.tel}`} className={chip}>
        <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden />
        {person.phone}
      </a>
      <a
        href={whatsappUrl(person.whatsapp)}
        target="_blank"
        rel="noopener noreferrer"
        className={chip}
      >
        <WhatsAppIcon className="h-3.5 w-3.5 shrink-0" />
        WhatsApp
      </a>
      {showEmail ? (
        <a href={`mailto:${person.email}`} className={chip}>
          <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden />
          Email
        </a>
      ) : null}
    </div>
  );
}
