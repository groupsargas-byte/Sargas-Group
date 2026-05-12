import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Recycle, ShieldCheck, Truck, Leaf, Factory, ClipboardCheck, CheckCircle2, Clock, Wallet, FileBarChart, Phone } from "lucide-react";
import hero from "@/assets/hero-recycling.jpg";
import about from "@/assets/about-facility.jpg";
import sHaz from "@/assets/service-hazardous.jpg";
import sRec from "@/assets/service-recycling.jpg";
import sCom from "@/assets/service-commercial.jpg";
import sAdv from "@/assets/service-advisory.jpg";

export const Route = createFileRoute("/")({ component: Home });

const services = [
  { icon: ShieldCheck, title: "Hazardous Waste Management", desc: "TSDF-authorized handling of hazardous materials with strict regulatory compliance.", img: sHaz, to: "/services" },
  { icon: Recycle, title: "Recycling & Resource Recovery", desc: "Multi-stream recycling that maximizes recovery and reduces landfill dependency.", img: sRec, to: "/services" },
  { icon: Factory, title: "Industrial & Commercial Waste", desc: "Compliant handling for offices, retail and large industrial waste streams.", img: sCom, to: "/services" },
  { icon: ClipboardCheck, title: "Compliance & Advisory", desc: "Audits, reporting dashboards and zero-waste strategy consulting.", img: sAdv, to: "/services" },
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
  { icon: Leaf, t: "Complete Solution", d: "End-to-end management for hazardous and non-hazardous streams." },
  { icon: ShieldCheck, t: "Compliance", d: "Strong regulatory compliance and certified processes." },
  { icon: FileBarChart, t: "Reporting", d: "Transparent reporting and accountability for every pickup." },
  { icon: Clock, t: "Fast Pickup", d: "24/7 service with guaranteed response times." },
  { icon: Wallet, t: "Affordability", d: "Competitive pricing with flexible payment plans." },
  { icon: Truck, t: "Modern Fleet", d: "Specialized vehicles for every category of waste." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--deep)]">
        <img src={hero} alt="Sargas Group recycling facility" className="absolute inset-0 h-full w-full object-cover opacity-40" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--deep)] via-[var(--deep)]/85 to-transparent" />
        <div className="container-x relative py-24 lg:py-36 text-white">
          <span className="eyebrow !bg-[var(--lime)]/20 !text-[var(--lime)]">Engineering Sustainability</span>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.02] max-w-4xl">
            Cleaner planet, <span className="text-[var(--lime)]">smarter</span> waste management.
          </h1>
          <p className="mt-6 max-w-xl text-white/75 text-lg">
            Sargas Group delivers modern collection, hazardous waste handling, advanced recycling and environmental advisory — built for industry, communities and the future.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/services" className="btn-lime">Our Services <ArrowUpRight className="h-4 w-4" /></Link>
            <Link to="/contact" className="btn-outline-lime">Talk to an expert</Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            {[["10+","Years of expertise"],["2","Specialized entities"],["500+","Tons processed monthly"],["24/7","Response coverage"]].map(([n,l])=>(
              <div key={l} className="border-l-2 border-[var(--lime)] pl-4">
                <div className="text-3xl font-display font-bold text-white">{n}</div>
                <div className="text-xs uppercase tracking-wider text-white/60 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="container-x py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={about} alt="Modern Sargas waste facility" loading="lazy" width={1400} height={1000} className="rounded-3xl w-full aspect-[5/4] object-cover" />
            <div className="absolute -bottom-6 -right-6 hidden md:flex bg-[var(--lime)] text-[var(--lime-foreground)] rounded-2xl p-6 shadow-xl max-w-[220px]">
              <div>
                <div className="text-3xl font-display font-bold">100%</div>
                <div className="text-xs font-semibold uppercase tracking-wider mt-1">Compliance & traceability</div>
              </div>
            </div>
          </div>
          <div>
            <span className="eyebrow">About Sargas</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--primary)]">A unified ecosystem for waste — from source to recovery.</h2>
            <p className="mt-5 text-muted-foreground text-lg">
              We specialize in modern waste collection, government-compliant disposal, advanced recycling and environmental consultancy. Our two specialized entities deliver domain expertise across every category of waste.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border p-5 bg-card">
                <div className="text-sm font-semibold text-[var(--primary)]">SEPL</div>
                <div className="text-xs text-muted-foreground mt-1">Sargas Enviro Pvt. Ltd.</div>
                <p className="text-sm mt-3">Hazardous industrial waste & Alternative Fuel and Raw Material (AFR) solutions.</p>
              </div>
              <div className="rounded-2xl border border-border p-5 bg-card">
                <div className="text-sm font-semibold text-[var(--primary)]">SWMPL</div>
                <div className="text-xs text-muted-foreground mt-1">Sargas Waste Management Pvt. Ltd.</div>
                <p className="text-sm mt-3">Municipal, residential, commercial and non-hazardous waste at scale.</p>
              </div>
            </div>
            <Link to="/about" className="btn-lime mt-8">Learn more <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-secondary/50 py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <span className="eyebrow">What we do</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[var(--primary)] max-w-2xl">Comprehensive waste solutions, built around compliance.</h2>
            </div>
            <Link to="/services" className="btn-lime">All services <ArrowUpRight className="h-4 w-4" /></Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link to={s.to} key={s.title} className="group rounded-3xl bg-card border border-border overflow-hidden hover:-translate-y-1 transition">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--lime)]"><s.icon className="h-5 w-5 text-[var(--lime-foreground)]" /></span>
                  <h3 className="mt-4 font-display text-lg font-bold text-[var(--primary)]">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
                  <div className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--primary)] group-hover:text-[var(--lime-foreground)]">
                    Read more <ArrowUpRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="container-x py-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Our approach</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[var(--primary)]">Six steps from waste to value.</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {approach.map((a) => (
            <div key={a.n} className="relative rounded-3xl border border-border bg-card p-7 grain-bg">
              <div className="text-5xl font-display font-bold text-[var(--lime)]">{a.n}</div>
              <h3 className="mt-3 font-display text-xl font-bold text-[var(--primary)]">{a.t}</h3>
              <p className="text-sm text-muted-foreground mt-2">{a.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-[var(--deep)] text-white py-24">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <span className="eyebrow !bg-white/10 !text-[var(--lime)]">Why Sargas</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">Built for industry. Trusted for compliance.</h2>
            </div>
            <p className="text-white/70 text-lg">
              From municipal collection to hazardous waste TSDF disposal, we combine certified processes, transparent reporting and a 24/7 operations team.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {why.map((w) => (
              <div key={w.t} className="rounded-3xl bg-white/[0.04] border border-white/10 p-7 hover:bg-white/[0.07] transition">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--lime)]"><w.icon className="h-5 w-5 text-[var(--lime-foreground)]" /></span>
                <h3 className="mt-5 font-display text-xl font-bold">{w.t}</h3>
                <p className="text-sm text-white/65 mt-2">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-24">
        <div className="rounded-[2rem] bg-[var(--lime)] p-10 md:p-16 text-[var(--lime-foreground)] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold max-w-2xl">Ready to make your operations zero-waste?</h2>
            <p className="mt-3 text-[var(--lime-foreground)]/80 max-w-xl">
              Talk to our experts about a tailored waste management programme for your facility.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--deep)] text-white px-6 py-3 font-semibold hover:scale-[1.02] transition">
              Get a Quote <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a href="tel:+919611969686" className="inline-flex items-center gap-2 rounded-full border border-[var(--lime-foreground)]/30 px-6 py-3 font-semibold">
              <Phone className="h-4 w-4" /> +91 96119 69686
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
