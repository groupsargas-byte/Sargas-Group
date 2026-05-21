import { MapPin } from "lucide-react";

const MAP_EMBED = {
  SEPL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.765535371148!2d77.26641750000002!3d13.240025599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1d5e4d6029f8d%3A0xe9c7d67d3ad30539!2sSARGAS%20ENVIRO%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1778862877341!5m2!1sen!2sin",
  SWMPL:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.0374555823173!2d77.2515937!3d13.2229651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1d5004bfca0d5%3A0x59e6173950f4da02!2sSARGAS%20WASTEMANAGEMENT%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1778861973398!5m2!1sen!2sin",
};

export function ContactOfficeCard({ office }) {
  return (
    <article className="flex h-full min-h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm">
      <div className="aspect-video w-full shrink-0 bg-muted sm:aspect-[4/3]">
        <iframe
          title={`Map — ${office.name}`}
          src={MAP_EMBED[office.short]}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex gap-2">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--lime)]/20 text-[var(--primary)]">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
          </span>
          <div className="min-w-0">
            <h3 className="font-display text-sm font-bold leading-snug text-[var(--primary)]">
              {office.short}
            </h3>
            <p className="mt-0.5 text-xs leading-snug text-muted-foreground">{office.name}</p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{office.address}</p>
            <a
              href={office.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex text-xs font-semibold text-[var(--primary)] underline-offset-2 hover:underline"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
