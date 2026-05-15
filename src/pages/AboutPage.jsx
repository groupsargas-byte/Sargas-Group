import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Phone, Target, Eye, Sparkles } from "lucide-react";
import * as images from "@/data/images.js";

const values = [
  ["Integrity", "Transparent and ethical operations"],
  ["Sustainability", "Environment-first approach in all processes"],
  ["Innovation", "Continuous improvement through modern technologies"],
  ["Accountability", "Strict compliance and responsible execution"],
  ["Customer Focus", "Reliable, responsive, and tailored solutions"],
];

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Sargas Group | Engineering Sustainability";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Learn about Sargas Group — our mission, vision, values and operating structure across SEPL and SWMPL.",
      );
    }
  }, []);

  return (
    <>
      <section className="container-x py-16 md:py-14">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <img
              src={images.about}
              alt="Sargas Group waste and environmental operations"
              loading="eager"
              width={1400}
              height={1000}
              className="aspect-[2/1] w-full object-contain"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow">About</span>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-[var(--primary)] md:text-5xl">
              About Our Company
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We specialize in modern waste collection services, government compliant disposal
              methods, advanced recycling and resource recovery, and comprehensive environmental
              consultancy services.
            </p>
            <p className="mt-4 text-base font-medium leading-relaxed text-[var(--primary)] italic">
              &quot;Our commitment is to create a cleaner, healthier and safer planet.&quot;
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-6 md:grid-cols-2 lg:mt-10">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--lime)]">
              <Target className="h-6 w-6 text-[var(--lime-foreground)]" aria-hidden />
            </div>
            <h2 className="mt-5 font-display text-2xl font-bold text-[var(--primary)]">
              Our Mission
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              To provide innovative and sustainable waste management solutions that protect the
              environment while supporting community health and wellbeing.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--lime)]">
              <Eye className="h-6 w-6 text-[var(--lime-foreground)]" aria-hidden />
            </div>
            <h2 className="mt-5 font-display text-2xl font-bold text-[var(--primary)]">
              Our Vision
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              To be the leading waste management company in India, recognized for excellence in
              environmental stewardship and customer service.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-5xl rounded-3xl border border-border bg-secondary/40 p-8 text-center md:p-10 lg:mt-20">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <h2 className="font-display text-2xl font-bold text-[var(--primary)] md:text-3xl">
              Our Values
            </h2>
          </div>
          <ul className="mx-auto mt-8 grid w-full max-w-4xl grid-cols-1 justify-items-stretch gap-4 sm:grid-cols-2">
            {values.map(([title, desc], index) => (
              <li
                key={title}
                className={`rounded-2xl border border-border/80 bg-white px-5 py-4 text-center text-sm leading-relaxed text-muted-foreground shadow-sm ${
                  index === 4 ? "sm:col-span-2 sm:w-full sm:max-w-lg sm:justify-self-center" : ""
                }`}
              >
                <span className="font-semibold text-[var(--primary)]">{title}</span>
                <span className="text-muted-foreground/80"> — </span>
                {desc}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 py-16 md:py-24">
        <div className="container-x">
          <h2 className="font-display text-3xl font-bold text-[var(--primary)] md:text-4xl">
            Our Operating Structure
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            SARGAS operates through two specialized entities to ensure domain expertise, regulatory
            compliance, and operational efficiency:
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="group flex flex-col rounded-3xl border-2 border-[var(--primary)]/20 bg-white p-8 shadow-sm transition-colors duration-200 md:p-10 hover:border-[var(--primary)] hover:bg-[var(--primary)]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)] transition-colors group-hover:text-white/90">
                Hazardous &amp; industrial
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold text-[var(--primary)] transition-colors group-hover:text-white md:text-3xl">
                SARGAS Enviro Pvt. Ltd. (SEPL)
              </h3>
              <p className="mt-2 text-sm font-medium text-muted-foreground transition-colors group-hover:text-white/85">
                Technical · Regulated · AFR
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground transition-colors group-hover:text-white/90">
                Focused on hazardous industrial waste management and Alternative Fuel &amp; Raw
                Material (AFR) solutions, requiring specialized handling, technical processing, and
                strict regulatory compliance.
              </p>
            </div>

            <div className="group flex flex-col rounded-3xl border-2 border-[var(--primary)]/20 bg-white p-8 shadow-sm transition-colors duration-200 md:p-10 hover:border-[var(--primary)] hover:bg-[var(--primary)]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)] transition-colors group-hover:text-white/90">
                Municipal &amp; commercial scale
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold text-[var(--primary)] transition-colors group-hover:text-white md:text-3xl">
                SARGAS Waste Management Pvt. Ltd. (SWMPL)
              </h3>
              <p className="mt-2 text-sm font-medium text-muted-foreground transition-colors group-hover:text-white/85">
                Collection · Recycling · Non-hazardous
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground transition-colors group-hover:text-white/90">
                Handles municipal, residential, commercial, and non-hazardous waste, providing
                large-scale collection, recycling, and processing services.
              </p>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-muted-foreground md:text-lg">
            Together, these entities form a unified ecosystem delivering comprehensive waste
            management solutions — one partnership for compliance, recovery and responsible
            disposal.
          </p>
        </div>
      </section>

      <section className="container-x pb-20 md:pb-28">
        <div className="rounded-[2rem] bg-[var(--lime)] p-10 text-[var(--lime-foreground)] md:flex md:flex-row md:items-center md:justify-between md:gap-8 md:p-16">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">
              Ready for a tailored waste programme?
            </h2>
            <p className="mt-3 max-w-xl text-[var(--lime-foreground)]/85">
              Get a quote or speak with our team about hazardous, recycling, commercial or advisory
              services.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 md:mt-0 md:shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--deep)] px-6 py-3 font-semibold text-white transition hover:scale-[1.02]"
            >
              Get a Quote <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+919611969686"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--lime-foreground)]/35 px-6 py-3 font-semibold"
            >
              <Phone className="h-4 w-4" aria-hidden />
              +91 96119 69686
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
