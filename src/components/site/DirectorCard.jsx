import { Mail, Phone } from "lucide-react";
import { chipBtnClass, whatsappUrl } from "@/data/contact.js";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon.jsx";

export function DirectorCard({ director }) {
  return (
    <article className="flex flex-col rounded-3xl border border-border bg-card p-5 shadow-sm card-lift">
      <h3 className="font-display text-lg font-bold text-[var(--primary)]">{director.name}</h3>
      <p className="mt-0.5 text-sm text-muted-foreground">{director.role}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <a href={`tel:${director.tel}`} className={chipBtnClass}>
          <Phone className="h-3.5 w-3.5" aria-hidden />
          {director.phone}
        </a>
        <a
          href={whatsappUrl(director.whatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          className={chipBtnClass}
        >
          <WhatsAppIcon className="h-3.5 w-3.5" />
          WhatsApp
        </a>
        <a href={`mailto:${director.email}`} className={chipBtnClass}>
          <Mail className="h-3.5 w-3.5" aria-hidden />
          {director.email}
        </a>
      </div>
    </article>
  );
}
