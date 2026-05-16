import { useEffect } from "react";
import { Mail, MapPin, Phone, User } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm.jsx";
import * as images from "@/data/images.js";
import { Reveal, RevealStagger } from "@/components/site/Reveal.jsx";

const CONTACT_EMAIL = "contact@sargasgroup.com";

const contacts = [
  {
    icon: User,
    title: "Jagadish K",
    subtitle: "CEO",
    href: "tel:+919611969686",
    linkLabel: "+91 96119 69686",
  },
  {
    icon: User,
    title: "Sachin Raj C",
    subtitle: "COO",
    href: "tel:+917996161777",
    linkLabel: "+91 79961 61777",
  },
  {
    icon: Mail,
    title: "Email",
    subtitle: "General enquiries",
    href: `mailto:${CONTACT_EMAIL}`,
    linkLabel: CONTACT_EMAIL,
  },
];

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact Sargas Group | Waste Management India";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Reach Sargas Group — Bengaluru offices, phone, email and enquiry form.",
      );
    }
  }, []);

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
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+919611969686" className="btn-lime">
                <Phone className="h-4 w-4" />
                +91 96119 69686
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/25 px-6 py-3 text-sm font-semibold text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white"
              >
                <Mail className="h-4 w-4" />
                {CONTACT_EMAIL}
              </a>
            </div>
          </Reveal>
          <Reveal direction="left" className="relative overflow-hidden rounded-3xl">
            <img
              src={images.contactHero}
              alt="Recycling and waste management"
              width={1920}
              height={1280}
              className="aspect-[4/3] w-full object-contain"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30 py-16 md:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-14">
          <Reveal className="space-y-5">
            <h2 className="font-display text-2xl font-bold text-[var(--primary)] md:text-3xl">
              Get in touch
            </h2>
            {contacts.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i * 80}
                className="flex gap-4 rounded-3xl border border-border bg-card p-5 shadow-sm card-lift"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--lime)]">
                  <c.icon className="h-5 w-5 text-[var(--lime-foreground)]" />
                </span>
                <div>
                  <div className="font-display font-bold text-[var(--primary)]">{c.title}</div>
                  <p className="mt-0.5 text-sm text-muted-foreground">{c.subtitle}</p>
                  <a
                    href={c.href}
                    className="mt-2 inline-block text-sm font-semibold text-[var(--primary)] underline-offset-2 hover:underline"
                  >
                    {c.linkLabel}
                  </a>
                </div>
              </Reveal>
            ))}
          </Reveal>

          <Reveal direction="left" delay={120}>
          <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className=" pt-10 container-x pb-20 md:pb-28 ">
        <h2 className="font-display text-2xl font-bold text-[var(--primary)] md:text-3xl">
          Our offices
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Visit or navigate to either of our Bengaluru Rural facilities.
        </p>
        <RevealStagger className="mt-10 grid gap-8 lg:grid-cols-2" stagger={120}>
          <article className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm card-lift">
            <div className="aspect-video w-full bg-muted">
              <iframe
                title="Map — Sargas Enviro Pvt. Ltd. (SEPL)"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.765535371148!2d77.26641750000002!3d13.240025599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1d5e4d6029f8d%3A0xe9c7d67d3ad30539!2sSARGAS%20ENVIRO%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1778862877341!5m2!1sen!2sin"
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
                    Sargas Enviro Pvt. Ltd. (SEPL)
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Plot 319-D, Sompura Industrial Area 1st Stage, Nidavanda, Dobbaspete, Bengaluru
                    Rural — 562132
                  </p>
                  <a
                    href="https://maps.app.goo.gl/ZFHfJQQpKkCdyZYPA"
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

          <article className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm card-lift">
            <div className="aspect-video w-full bg-muted">
              <iframe
                title="Map — Sargas Waste Management Pvt. Ltd. (SWMPL)"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.0374555823173!2d77.2515937!3d13.2229651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1d5004bfca0d5%3A0x59e6173950f4da02!2sSARGAS%20WASTEMANAGEMENT%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1778861973398!5m2!1sen!2sin"
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
                    Sargas Waste Management Pvt. Ltd. (SWMPL)
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Plot 12-A, Dobbaspete Industrial Area 1st Phase, Yedahalli, Bengaluru Rural —
                    562111
                  </p>
                  <a
                    href="https://maps.app.goo.gl/nEwMuzKCNLjyerLZ7"
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
        </RevealStagger>
      </section>
    </>
  );
}
