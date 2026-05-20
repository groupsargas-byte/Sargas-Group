import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Recycle,
  ShieldCheck,
  Truck,
  Leaf,
  Clock,
  Wallet,
  FileBarChart,
  Factory,
  ClipboardCheck,
} from "lucide-react";
import * as images from "@/data/images.js";
import { Reveal, RevealStagger } from "@/components/site/Reveal.jsx";
import { PhoneLinks } from "@/components/site/PhoneLinks.jsx";
import { LazyImage } from "@/components/site/LazyImage.jsx";
import { usePageSeo } from "@/hooks/usePageSeo.js";
import { PAGE_SEO } from "@/lib/seo.js";

/** Four service lines on home — full detail lives on `/services`. */
const serviceTypes = [
  {
    title: "Specialized & Hazardous Waste Solutions",
    summary:
      "Hazardous waste and ETP sludge programs with strict safety and regulatory adherence — including authorization under Hazardous and Other Waste (Management and Transboundary Movement) Rules 2016.",
    image: images.serviceHazardous,
    icon: ShieldCheck,
    to: "/services",
  },
  {
    title: "Recycling & Resource Recovery",
    summary:
      "Advanced recycling, wet / bio waste processing and STP sludge removal to maximize recovery and reduce landfill dependency.",
    examples:
      "E.g. Bailing of corrugated boxes, cardboard carton boxes, packing waste, paper waste, glass, glass items, metal, metal waste, wood waste, plastic chips.",
    image: images.serviceRecycling,
    icon: Recycle,
    to: "/services",
  },
  {
    title: "Industrial & Commercial Waste Management",
    summary:
      "Industrial and corporate waste streams — CPCB-compliant disposal, waste characterization, tailored collections and recycling programs for offices and retail.",
    image: images.serviceCommercial,
    icon: Factory,
    to: "/services",
  },
  {
    title: "Compliance, Audit & Sustainability Advisory",
    summary:
      "Waste audits and digital reporting, environmental compliance consultancy, and zero-waste strategy — from assessment to stakeholder engagement and progress tracking.",
    image: images.serviceAdvisory,
    icon: ClipboardCheck,
    to: "/services",
  },
];

const approach = [
  { n: "01", t: "Assessment", d: "Waste stream identification and analysis." },
  { n: "02", t: "Segregation & Collection", d: "Safe and efficient handling systems." },
  { n: "03", t: "Transportation", d: "Compliant and secure movement of waste." },
  { n: "04", t: "Processing & Recovery", d: "Recycling and resource optimization." },
  { n: "05", t: "Disposal", d: "Environmentally safe treatment methods." },
  { n: "06", t: "Reporting", d: "Transparent compliance documentation." },
];

const why = [
  {
    icon: Leaf,
    t: "Complete Solution",
    d: "End-to-end management for hazardous and non-hazardous streams.",
  },
  {
    icon: ShieldCheck,
    t: "Compliance",
    d: "Strong regulatory compliance and certified processes.",
  },
  {
    icon: FileBarChart,
    t: "Reporting",
    d: "Transparent reporting and accountability for every pickup.",
  },
  { icon: Clock, t: "Fast Pickup", d: "24/7 service with guaranteed response times." },
  { icon: Wallet, t: "Affordability", d: "Competitive pricing with flexible payment plans." },
  { icon: Truck, t: "Modern Fleet", d: "Specialized vehicles for every category of waste." },
];

export default function HomePage() {
  usePageSeo(PAGE_SEO.home);

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--deep)]">
        <LazyImage
          src={images.hero}
          alt="Sargas Group recycling facility — waste management operations in India"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          width={1920}
          height={1080}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--deep)] via-[var(--deep)]/85 to-transparent" />
        <div className="hero-stagger container-x relative py-4 lg:py-16 text-white">
          <span className="eyebrow !bg-[var(--lime)]/20 !text-[var(--lime)]">
            Engineering Sustainability
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.02] max-w-4xl">
            Cleaner planet, <span className="text-[var(--lime)]">smarter</span> waste management.
          </h1>
          <p className="mt-6 max-w-xl text-white/75 text-lg">
            Sargas Group delivers modern collection, Hazardous Waste Handling, Advanced Recycling
            and Environmental Advisory — built for industry, communities and the future.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/services" className="btn-lime">
              Our Services <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-outline-lime">
              Talk to an expert
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            {[
              ["10+", "Years of expertise"],
              ["2", "Specialized entities"],
              ["500+", "Tons processed monthly"],
              ["24/7", "Response coverage"],
            ].map(([n, l]) => (
              <div key={l} className="border-l-2 border-[var(--lime)] pl-4">
                <div className="text-3xl font-display font-bold text-white">{n}</div>
                <div className="text-xs uppercase tracking-wider text-white/60 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="left" className="relative">
            <LazyImage
              src={images.about}
              alt="Sargas Group waste management and recycling facility"
              width={1400}
              height={1000}
              className="rounded-3xl w-full aspect-[6/5] object-contain"
            />
            <div className="animate-float absolute -bottom-6 -right-6 hidden md:flex bg-[var(--lime)] text-[var(--lime-foreground)] rounded-2xl p-6 shadow-xl max-w-[220px]">
              <div>
                <div className="text-3xl font-display font-bold">100%</div>
                <div className="text-xs font-semibold uppercase tracking-wider mt-1">
                  Compliance & traceability
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="right">
            <span className="eyebrow">About Sargas</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[var(--primary)]">
              A unified ecosystem for waste — from source to recovery.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              We specialize in modern waste collection, government-compliant disposal, advanced
              recycling and environmental consultancy. Our two specialized entities deliver domain
              expertise across every category of waste.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border p-5 bg-card">
                <div className="text-sm font-semibold text-[var(--primary)]">SEPL</div>
                <div className="text-xs text-muted-foreground mt-1">Sargas Enviro Pvt. Ltd.</div>
                <p className="text-sm mt-3">
                  Hazardous Industrial Waste & Alternative Fuel and Raw Material (AFR) solutions.
                </p>
              </div>
              <div className="rounded-2xl border border-border p-5 bg-card">
                <div className="text-sm font-semibold text-[var(--primary)]">SWMPL</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Sargas Waste Management Pvt. Ltd.
                </div>
                <p className="text-sm mt-3">
                  Handles Industrial, Municipal, Residential, Commercial and Non-hazardous waste at scale.
                </p>
              </div>
            </div>
            <Link to="/about" className="btn-lime mt-8">
              Learn more <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/50 py-24">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <span className="eyebrow">What we do</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[var(--primary)] max-w-3xl">
                Our Services
              </h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
                Four integrated lines of work — explore each on our services page.
              </p>
            </div>
            <Link to="/services" className="btn-lime shrink-0">
              All services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {serviceTypes.map((s, i) => (
              <Reveal key={s.title} delay={i * 80} className="h-full">
              <Link
                to={s.to}
                className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm hover:border-[var(--primary)]/25"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <LazyImage
                    src={s.image}
                    alt={s.title}
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--lime)]">
                    <s.icon className="h-5 w-5 text-[var(--lime-foreground)]" />
                  </span>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[var(--primary)]">
                    Our Services
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold leading-snug text-[var(--primary)] md:text-xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.summary}
                  </p>
                  {s.examples ? (
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground/90">
                      {s.examples}
                    </p>
                  ) : null}
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary)] group-hover:underline">
                    View on services page
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Our approach</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[var(--primary)]">
            Six steps from waste to value.
          </h2>
        </Reveal>
        <RevealStagger className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={70}>
          {approach.map((a) => (
            <div
              key={a.n}
              className="card-lift relative rounded-3xl border border-border bg-card p-7 grain-bg"
            >
              <div className="text-5xl font-display font-bold text-[var(--lime)]">{a.n}</div>
              <h3 className="mt-3 font-display text-xl font-bold text-[var(--primary)]">{a.t}</h3>
              <p className="text-sm text-muted-foreground mt-2">{a.d}</p>
            </div>
          ))}
        </RevealStagger>
      </section>

      <section className="bg-[var(--deep)] text-white py-24">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <Reveal>
              <span className="eyebrow !bg-white/10 !text-[var(--lime)]">Why Sargas</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">
                Built for industry. Trusted for compliance.
              </h2>
            </Reveal>
            <Reveal direction="right" delay={100}>
            <p className="text-white/70 text-lg">
              From municipal collection to hazardous waste TSDF disposal, we combine certified
              processes, transparent reporting and a 24/7 operations team.
            </p>
            </Reveal>
          </div>

          <RevealStagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={75}>
            {why.map((w) => (
              <div
                key={w.t}
                className="card-lift rounded-3xl bg-white/[0.04] border border-white/10 p-7 hover:bg-white/[0.07]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--lime)]">
                  <w.icon className="h-5 w-5 text-[var(--lime-foreground)]" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">{w.t}</h3>
                <p className="text-sm text-white/65 mt-2">{w.d}</p>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="container-x py-24">
        <Reveal>
        <div className="rounded-[2rem] bg-[var(--lime)] p-10 md:p-16 text-[var(--lime-foreground)] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold max-w-2xl">
              Ready to make your operations zero-waste?
            </h2>
            <p className="mt-3 text-[var(--lime-foreground)]/80 max-w-xl">
              Talk to our experts about a tailored waste management programme for your facility.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--deep)] text-white px-6 py-3 font-semibold hover:scale-[1.02] transition"
            >
              Get a Quote <ArrowUpRight className="h-4 w-4" />
            </Link>
            <PhoneLinks />
          </div>
        </div>
        </Reveal>
      </section>
    </>
  );
}
