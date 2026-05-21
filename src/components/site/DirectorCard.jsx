import { ContactChips } from "@/components/site/ContactChips.jsx";

export function DirectorCard({ director }) {
  return (
    <article className="flex h-full min-h-full flex-col rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="border-b border-border/60 pb-4">
        <h3 className="font-display text-xl font-bold text-[var(--primary)]">{director.name}</h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {director.role}
        </p>
      </div>
      <div className="mt-5">
        <ContactChips person={director} variant="light" />
      </div>
    </article>
  );
}
