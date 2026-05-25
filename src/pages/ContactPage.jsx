import { ContactForm } from "@/components/site/ContactForm.jsx";
import { ContactOfficeCard } from "@/components/site/ContactOfficeCard.jsx";
import { DirectorCard } from "@/components/site/DirectorCard.jsx";
import { GeneralEnquiries } from "@/components/site/GeneralEnquiries.jsx";
import * as images from "@/data/images.js";
import { DIRECTORS, OFFICES } from "@/data/contact.js";
import { Reveal } from "@/components/site/Reveal.jsx";
import { LazyImage } from "@/components/site/LazyImage.jsx";
import { usePageSeo } from "@/hooks/usePageSeo.js";
import { PAGE_SEO } from "@/lib/seo.js";

export default function ContactPage() {
  usePageSeo(PAGE_SEO.contact);

  return (
    <div className="flex flex-1 flex-col bg-secondary/40">
      <section className="container-x flex-1 py-8 pb-10 sm:py-12 sm:pb-12 md:py-16 md:pb-16 lg:py-10">
        <div className="w-full lg:ml-auto lg:max-w-6xl">
          {/* Mobile: text + image in one row; desktop: wider text column + image */}
          <div className="flex items-start gap-3 sm:gap-4 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-5">
            <Reveal direction="right" className="min-w-0 flex-1">
              <h1 className="font-display text-[1.65rem] font-bold leading-[1.15] tracking-tight text-[var(--primary)] sm:text-4xl md:text-5xl lg:text-6xl">
                We&apos;re ready to assist you.
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base md:mt-6 md:text-lg">
                Speak to our experts about a tailored waste management programme for your facility,
                society, or commercial complex.
              </p>
            </Reveal>
            <Reveal
              direction="left"
              className="relative shrink-0 translate-x-1 self-center overflow-hidden sm:translate-x-0 lg:justify-self-end lg:translate-x-3 xl:translate-x-5"
            >
              <LazyImage
                src={images.contactHero}
                alt="Sargas recycling and waste management services"
                width={1920}
                height={1280}
                className="aspect-square max-h-[7.5rem] w-auto max-w-[7.5rem] object-contain object-right sm:aspect-[3/2] sm:max-h-[200px] sm:max-w-[min(100%,220px)] md:max-h-[240px] lg:max-h-[280px] lg:max-w-[300px]"
                priority
              />
            </Reveal>
          </div>
        </div>

        <Reveal className="mx-auto mt-12 max-w-6xl text-center md:mt-16 md:text-center">
          <span className="eyebrow">Contact</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-[var(--primary)] md:text-4xl">
            Get in touch
          </h2>
          <p className="mt-3 text-muted-foreground">
            Reach either Managing Director directly, send a general enquiry, visit our offices, or
            message us using the form.
          </p>
        </Reveal>

        <div className="mx-auto mt-10 max-w-6xl space-y-6">
          <Reveal delay={60}>
            <div className="rounded-[2rem] border border-border/80 bg-card p-6 shadow-sm md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--primary)]">
                Managing Directors
              </p>
              <div className="mt-5 grid items-stretch gap-5 sm:grid-cols-2">
                {DIRECTORS.map((d) => (
                  <DirectorCard key={d.id} director={d} />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <GeneralEnquiries variant="light" />
          </Reveal>
        </div>

        <div className="mx-auto mt-14 max-w-6xl grid items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <Reveal className="min-w-0" delay={160}>
            <span className="eyebrow">Locations</span>
            <h2 className="mt-3 font-display text-2xl font-bold text-[var(--primary)] md:text-3xl">
              Our offices
            </h2>
            <p className="mt-3 max-w-lg text-muted-foreground">
              Visit or navigate to either of our Bengaluru Rural facilities.
            </p>
            <div className="mt-8 grid items-stretch gap-4 sm:grid-cols-2">
              {OFFICES.map((office, i) => (
                <Reveal key={office.short} delay={200 + i * 60} className="h-full">
                  <ContactOfficeCard office={office} />
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal direction="left" delay={200} className="lg:sticky lg:top-28">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
