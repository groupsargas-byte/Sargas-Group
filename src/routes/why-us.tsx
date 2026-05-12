import { createFileRoute } from "@tanstack/react-router";
import { Leaf, ShieldCheck, FileBarChart, Clock, Wallet, Truck } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/why-us")({
  component: Why,
  head: () => ({ meta: [{ title: "Why Choose Sargas Group | Compliance, Reporting, 24/7" }, { name: "description", content: "Complete solutions, regulatory compliance, transparent reporting, fast pickup and competitive pricing." }] }),
});

const why = [
  { icon: Leaf, t: "Complete Solution", d: "End-to-end integrated waste management for hazardous and non-hazardous streams." },
  { icon: ShieldCheck, t: "Regulatory Compliance", d: "Authorisations under Hazardous & Other Waste Rules 2016 and CPCB-compliant processes." },
  { icon: FileBarChart, t: "Transparent Reporting", d: "Manifest documentation and digital dashboards for every pickup and disposal." },
  { icon: Clock, t: "Fast Pickup", d: "24/7 operations with guaranteed response times across our service area." },
  { icon: Wallet, t: "Affordability", d: "Competitive pricing with flexible payment plans and revenue-share recycling models." },
  { icon: Truck, t: "Modern Fleet", d: "Specialized vehicles and equipment for every category of waste stream." },
];

function Why() {
  return (
    <>
      <PageHero eyebrow="Why Us" title="Built for industry. Trusted for compliance." subtitle="What makes Sargas Group the partner of choice for waste management across India." />
      <section className="container-x py-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {why.map((w) => (
          <div key={w.t} className="rounded-3xl border border-border bg-card p-7 hover:-translate-y-1 transition">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--lime)]"><w.icon className="h-5 w-5 text-[var(--lime-foreground)]" /></span>
            <h3 className="mt-5 font-display text-xl font-bold text-[var(--primary)]">{w.t}</h3>
            <p className="text-sm text-muted-foreground mt-2">{w.d}</p>
          </div>
        ))}
      </section>

      <section className="container-x pb-24">
        <div className="rounded-[2rem] bg-[var(--lime)] text-[var(--lime-foreground)] p-10 md:p-14">
          <div className="grid md:grid-cols-3 gap-8">
            {[["10+","Years of expertise"],["500+","Tons processed monthly"],["24/7","Response coverage"]].map(([n,l])=>(
              <div key={l}>
                <div className="text-5xl font-display font-bold">{n}</div>
                <div className="text-sm uppercase tracking-wider mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
