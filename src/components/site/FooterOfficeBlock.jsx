import { MapPin } from "lucide-react";

export function FooterOfficeBlock({ office }) {
  return (
    <article className="flex h-full min-h-full flex-col rounded-2xl border border-white/12 bg-gradient-to-b from-white/[0.09] to-white/[0.03] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="flex gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--lime)]/20 text-[var(--lime)]">
          <MapPin className="h-4 w-4" aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-display text-sm font-bold leading-snug text-white">
            {office.short}
          </p>
          <p className="mt-0.5 text-xs leading-snug text-white/55">{office.name}</p>
        </div>
      </div>
      <p className="mt-4 flex-1 text-xs leading-relaxed text-white/70">{office.address}</p>
      <a
        href={office.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex w-fit items-center gap-1 rounded-full border border-[var(--lime)]/30 bg-[var(--lime)]/10 px-3 py-1.5 text-xs font-semibold text-[var(--lime)] transition hover:bg-[var(--lime)]/20"
      >
        Open in Google Maps
      </a>
    </article>
  );
}
