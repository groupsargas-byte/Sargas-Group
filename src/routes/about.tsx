import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import about from "@/assets/about-facility.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({ meta: [{ title: "About Sargas Group | Engineering Sustainability" }, { name: "description", content: "Learn about Sargas Group — our mission, vision, values and operating structure across SEPL and SWMPL." }] }),
});

const values = [
  ["Integrity", "Transparent and ethical operations"],
  ["Sustainability", "Environment-first approach in all processes"],
  ["Innovation", "Continuous improvement through modern technologies"],
  ["Accountability", "Strict compliance and responsible execution"],
  ["Customer Focus", "Reliable, responsive, and tailored solutions"],
];

function About() {
  return (
    <>
      <PageHero eyebrow="About" title="Engineering sustainability — for industry and the planet." subtitle="Modern waste collection, government-compliant disposal, advanced recycling and environmental consultancy services." />

      <section className="container-x py-20 grid lg:grid-cols-2 gap-12 items-center">
        <img src={about} alt="Sargas facility" loading="lazy" width={1400} height={1000} className="rounded-3xl w-full aspect-[5/4] object-cover" />
        <div>
          <span className="eyebrow">Our Company</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--primary)]">Creating a cleaner, healthier and safer planet.</h2>
          <p className="mt-5 text-muted-foreground text-lg">
            We specialize in modern waste collection services, government-compliant disposal methods, advanced recycling and resource recovery, and comprehensive environmental consultancy services.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-secondary p-5">
              <div className="text-sm font-bold text-[var(--primary)] uppercase tracking-wider">Mission</div>
              <p className="text-sm mt-2">Innovative and sustainable waste management solutions that protect the environment while supporting community wellbeing.</p>
            </div>
            <div className="rounded-2xl bg-secondary p-5">
              <div className="text-sm font-bold text-[var(--primary)] uppercase tracking-wider">Vision</div>
              <p className="text-sm mt-2">To be India's leading waste management company, recognized for environmental stewardship and customer service.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="container-x">
          <span className="eyebrow">Our Values</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--primary)] max-w-2xl">Principles that guide every collection, audit and report.</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(([t, d]) => (
              <div key={t} className="rounded-3xl bg-card border border-border p-6">
                <CheckCircle2 className="h-6 w-6 text-[var(--lime)]" />
                <h3 className="mt-4 font-display text-xl font-bold text-[var(--primary)]">{t}</h3>
                <p className="text-sm text-muted-foreground mt-2">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <span className="eyebrow">Operating Structure</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--primary)] max-w-3xl">Two specialized entities. One unified ecosystem.</h2>
        <p className="mt-4 text-muted-foreground max-w-3xl">SARGAS operates through two specialized entities to ensure domain expertise, regulatory compliance and operational efficiency.</p>
        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-[var(--deep)] text-white p-8">
            <div className="text-[var(--lime)] text-sm font-semibold uppercase tracking-wider">SEPL</div>
            <h3 className="font-display text-2xl font-bold mt-2">Sargas Enviro Pvt. Ltd.</h3>
            <p className="mt-4 text-white/70">Focused on hazardous industrial waste management and Alternative Fuel & Raw Material (AFR) solutions, requiring specialized handling, technical processing and strict regulatory compliance.</p>
          </div>
          <div className="rounded-3xl bg-[var(--lime)] text-[var(--lime-foreground)] p-8">
            <div className="text-sm font-semibold uppercase tracking-wider">SWMPL</div>
            <h3 className="font-display text-2xl font-bold mt-2">Sargas Waste Management Pvt. Ltd.</h3>
            <p className="mt-4 text-[var(--lime-foreground)]/80">Handles municipal, residential, commercial and non-hazardous waste, providing large-scale collection, recycling and processing services.</p>
          </div>
        </div>
        <Link to="/services" className="btn-lime mt-10">Explore our services <ArrowUpRight className="h-4 w-4" /></Link>
      </section>
    </>
  );
}
