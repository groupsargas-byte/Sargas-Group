import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm.jsx";
import { DirectorCard } from "@/components/site/DirectorCard.jsx";
import * as images from "@/data/images.js";
import {
  CONTACT_EMAIL,
  DIRECTORS,
  OFFICES,
  chipBtnClass,
  whatsappUrl,
} from "@/data/contact.js";
import { Reveal, RevealStagger } from "@/components/site/Reveal.jsx";
import { LazyImage } from "@/components/site/LazyImage.jsx";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon.jsx";
import { usePageSeo } from "@/hooks/usePageSeo.js";
import { PAGE_SEO } from "@/lib/seo.js";

export default function ContactPage() {
  usePageSeo(PAGE_SEO.contact);

  return (
    <>
      <section className="container-x py-12 md:py-16 lg:py-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal direction="right">
            <span className="eyebrow">Contact</span>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-[var(--primary)] md:text-5xl lg:text-6xl">
              We&apos;re ready to assist you.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Speak to our experts about a tailored waste management programme for your facility,
              society, or commercial complex.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex flex-wrap gap-2">
                {DIRECTORS.map((d) => (
                  <a key={`tel-${d.id}`} href={`tel:${d.tel}`} className={chipBtnClass}>
                    <Phone className="h-3.5 w-3.5" aria-hidden />
                    {d.phone}
                  </a>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {DIRECTORS.map((d) => (
                  <a
                    key={`wa-${d.id}`}
                    href={whatsappUrl(d.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={chipBtnClass}
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5" />
                    {d.phone}
                  </a>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <a href={`mailto:${CONTACT_EMAIL}`} className={chipBtnClass}>
                  <Mail className="h-3.5 w-3.5" aria-hidden />
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal direction="left" className="relative overflow-hidden rounded-3xl">
            <LazyImage
              src={images.contactHero}
              alt="Sargas recycling and waste management services"
              width={1920}
              height={1280}
              className="aspect-[4/3] w-full object-contain"
              priority
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30 py-16 md:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-[var(--primary)] md:text-3xl">
              Get in touch
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {DIRECTORS.map((d, i) => (
                <Reveal key={d.id} delay={i * 80}>
                  <DirectorCard director={d} />
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal direction="left" delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="container-x pb-20 pt-10 md:pb-28">
        <h2 className="font-display text-2xl font-bold text-[var(--primary)] md:text-3xl">
          Our offices
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Visit or navigate to either of our Bengaluru Rural facilities.
        </p>
        <RevealStagger className="mt-10 grid gap-8 lg:grid-cols-2" stagger={120}>
          {OFFICES.map((office) => (
            <article
              key={office.short}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm card-lift"
            >
              <div className="aspect-video w-full bg-muted">
                <iframe
                  title={`Map — ${office.name}`}
                  src={
                    office.short === "SEPL"
                      ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.765535371148!2d77.26641750000002!3d13.240025599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1d5e4d6029f8d%3A0xe9c7d67d3ad30539!2sSARGAS%20ENVIRO%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1778862877341!5m2!1sen!2sin"
                      : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.0374555823173!2d77.2515937!3d13.2229651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1d5004bfca0d5%3A0x59e6173950f4da02!2sSARGAS%20WASTEMANAGEMENT%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1778861973398!5m2!1sen!2sin"
                  }
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-[var(--primary)]" aria-hidden />
                  <div>
                    <h3 className="font-display font-bold text-[var(--primary)]">
                      {office.name} ({office.short})
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {office.address}
                    </p>
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex text-sm font-semibold text-[var(--primary)] underline-offset-2 hover:underline"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </RevealStagger>
      </section>
    </>
  );
}
