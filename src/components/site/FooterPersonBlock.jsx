import { ContactChips } from "@/components/site/ContactChips.jsx";

export function FooterPersonBlock({ person }) {
  return (
    <article className="flex h-full min-h-full flex-col rounded-2xl border border-white/12 bg-gradient-to-b from-white/[0.09] to-white/[0.03] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="border-b border-white/10 pb-4">
        <p className="font-display text-base font-bold text-white">{person.name}</p>
        <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">
          {person.role}
        </p>
      </div>
      <div className="mt-4">
        <ContactChips person={person} variant="dark" />
      </div>
    </article>
  );
}
