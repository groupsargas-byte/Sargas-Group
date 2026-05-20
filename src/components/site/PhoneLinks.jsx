import { Phone } from "lucide-react";
import { DIRECTORS } from "@/data/contact.js";

/** Side-by-side phone buttons for CTAs (both directors). */
export function PhoneLinks({ className = "" }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {DIRECTORS.map((d) => (
        <a
          key={d.id}
          href={`tel:${d.tel}`}
          className="inline-flex items-center gap-2 rounded-full border border-current/30 px-4 py-2.5 text-sm font-semibold transition hover:scale-[1.02]"
        >
          <Phone className="h-4 w-4" aria-hidden />
          {d.phone}
        </a>
      ))}
    </div>
  );
}
