import { Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm.jsx";
import { ContactOfficeCard } from "@/components/site/ContactOfficeCard.jsx";
import { DirectorCard } from "@/components/site/DirectorCard.jsx";
import { GeneralEnquiries } from "@/components/site/GeneralEnquiries.jsx";
import * as images from "@/data/images.js";
import {
  CONTACT_EMAIL,
  DIRECTORS,
  OFFICES,
  chipBtnClass,
  whatsappUrl,
} from "@/data/contact.js";
import { Reveal } from "@/components/site/Reveal.jsx";
import { LazyImage } from "@/components/site/LazyImage.jsx";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon.jsx";
import { usePageSeo } from "@/hooks/usePageSeo.js";
import { PAGE_SEO } from "@/lib/seo.js";

export default function ContactPage() {
  usePageSeo(PAGE_SEO.contact);

  return (
    <div className="flex flex-1 flex-col">
      <section className="container-x bg-background py-12 md:py-16 lg:py-10">
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

      <section className="flex-1 border-t border-border bg-secondary/40 py-16 pb-12 md:py-24 md:pb-16">
        <div className="container-x">
          <Reveal className="mx-auto max-w-5xl text-center md:text-left">
            <span className="eyebrow">Contact</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-[var(--primary)] md:text-4xl">
              Get in touch
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Reach either Managing Director directly, send a general enquiry, visit our offices, or
              message us using the form.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 max-w-5xl space-y-6">
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

          <div className="mt-14 grid items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
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
        </div>
      </section>
    </div>
  );
}
