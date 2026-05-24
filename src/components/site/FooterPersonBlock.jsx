export function FooterPersonBlock({ person }) {
  return (
    <article className="min-w-0">
      <p className="text-sm font-semibold text-white">{person.name}</p>
      <a
        href={`tel:${person.tel}`}
        className="mt-1 block text-sm text-white/70 transition hover:text-[var(--lime)]"
      >
        {person.phone}
      </a>
    </article>
  );
}
