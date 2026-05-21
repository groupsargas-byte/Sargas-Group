import { Mail } from "lucide-react";
import { CONTACT_EMAIL } from "@/data/contact.js";

/** General enquiries row — footer (dark) or contact page (light). */
export function GeneralEnquiries({ variant = "light" }) {
  const isDark = variant === "dark";

  return (
    <div
      className={
        isDark
          ? "flex flex-col gap-4 rounded-2xl border border-[var(--lime)]/25 bg-[var(--lime)]/[0.07] p-5 md:flex-row md:items-center md:justify-between md:p-6"
          : "flex flex-col items-center gap-4 rounded-2xl border border-[var(--primary)]/10 bg-gradient-to-br from-[var(--lime)]/15 via-card to-card p-6 text-center shadow-sm md:flex-row md:items-center md:justify-between md:p-8 md:text-left"
      }
    >
      <div className="flex items-center gap-3">
        <span
          className={
            isDark
              ? "grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--lime)]/20 text-[var(--lime)]"
              : "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--primary)] text-primary-foreground"
          }
        >
          <Mail className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <h3
            className={
              isDark
                ? "font-display text-base font-bold text-white"
                : "font-display text-xl font-bold text-[var(--primary)]"
            }
          >
            General Enquiries
          </h3>
          <p className={`mt-0.5 text-xs ${isDark ? "text-white/55" : "text-muted-foreground"}`}>
            For all other questions and proposals
          </p>
        </div>
      </div>
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className={
          isDark
            ? "inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-[var(--lime)]/50 hover:bg-white/15"
            : "btn-lime shrink-0 text-sm"
        }
      >
        <Mail className="h-4 w-4" aria-hidden />
        {CONTACT_EMAIL}
      </a>
    </div>
  );
}
