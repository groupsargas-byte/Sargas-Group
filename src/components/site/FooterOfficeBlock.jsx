export function FooterOfficeBlock({ office }) {
  return (
    <article className="min-w-0">
      <p className="font-display text-sm font-bold leading-snug text-white">{office.short}</p>
      <p className="mt-0.5 text-[11px] font-medium text-white/50">{office.name}</p>
      <p className="mt-2.5 text-xs leading-relaxed text-white/65">{office.address}</p>
      <a
        href={office.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex text-[11px] font-semibold text-[var(--lime)] underline-offset-2 transition hover:underline"
      >
        Open in Google Maps
      </a>
    </article>
  );
}
