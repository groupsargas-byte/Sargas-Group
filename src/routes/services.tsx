import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import sHaz from "@/assets/service-hazardous.jpg";
import sRec from "@/assets/service-recycling.jpg";
import sCom from "@/assets/service-commercial.jpg";
import sAdv from "@/assets/service-advisory.jpg";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({ meta: [{ title: "Services — Hazardous, Recycling & Advisory | Sargas Group" }, { name: "description", content: "Hazardous waste, ETP/STP sludge, recycling, industrial & commercial waste, audits and zero-waste advisory." }] }),
});

const groups = [
  {
    img: sHaz,
    eyebrow: "Specialized & Hazardous",
    items: [
      { t: "Hazardous Waste Management", d: "Specialized handling of hazardous materials with strict adherence to safety and environmental regulations.", b: ["TSDF-authorized disposal", "Trained technical personnel", "Safety-first protocols", "Complete manifest documentation"] },
      { t: "ETP Sludge Management", d: "Specialized handling and disposal of effluent treatment plant sludge with full regulatory compliance.", b: ["Authorized disposal methods", "Environmental compliance adherence", "Safe transport systems", "Manifest documentation"] },
    ],
  },
  {
    img: sRec,
    eyebrow: "Recycling & Recovery",
    items: [
      { t: "Recycling & Material Recovery", d: "Advanced multi-stream recycling systems to maximize material recovery and reduce landfill dependency.", b: ["Multi-material segregation", "Resource recovery optimization", "Revenue-sharing models", "Sustainability reporting"] },
      { t: "Wet Waste / Bio Waste", d: "Organic waste processing through composting and sustainable treatment methods.", b: ["On-site composting systems", "Biogas generation options", "Organic manure production", "Odor control technologies"] },
      { t: "STP Sludge Removal", d: "Professional removal and disposal of sewage treatment plant sludge.", b: ["Vacuum tanker services", "Dewatering options", "Certified disposal facilities", "Maintenance contracts"] },
    ],
  },
  {
    img: sCom,
    eyebrow: "Industrial & Commercial",
    items: [
      { t: "Industrial Waste Handling", d: "Safe and compliant management of industrial waste streams, hazardous and non-hazardous.", b: ["CPCB-compliant disposal", "Waste characterization", "Specialized handling equipment", "Emergency response capability"] },
      { t: "Corporate & Commercial Waste", d: "Customized waste management for offices, retail spaces and commercial complexes.", b: ["Tailored collection schedules", "Confidential document destruction", "Recycling integration programs", "Monthly compliance reporting"] },
    ],
  },
  {
    img: sAdv,
    eyebrow: "Compliance & Advisory",
    items: [
      { t: "Waste Audit & Reporting", d: "Data-driven waste analysis and reporting for operational optimization and compliance tracking.", b: ["Detailed waste assessment", "Cost optimization insights", "Compliance monitoring", "Digital reporting dashboards"] },
      { t: "Environmental Compliance Consultancy", d: "Expert advisory on environmental regulations and statutory compliance.", b: ["Regulatory updates and guidance", "Permit assistance", "Training programs", "Audit support"] },
      { t: "Zero-Waste Strategy Planning", d: "Strategic consulting to help organizations transition toward zero-waste operations.", b: ["Waste reduction planning", "Circular economy implementation", "Stakeholder engagement", "Progress tracking systems"] },
    ],
  },
];

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Comprehensive waste solutions, built around compliance." subtitle="From hazardous TSDF disposal to recycling, audits and zero-waste advisory — one partner across the whole waste lifecycle." />

      {groups.map((g, gi) => (
        <section key={g.eyebrow} className={gi % 2 === 0 ? "container-x py-20" : "bg-secondary/50 py-20"}>
          <div className={gi % 2 === 0 ? "" : "container-x"}>
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:sticky lg:top-28 self-start">
                <img src={g.img} alt={g.eyebrow} loading="lazy" width={1200} height={900} className="rounded-3xl w-full aspect-[4/3] object-cover" />
                <span className="eyebrow mt-6">{g.eyebrow}</span>
              </div>
              <div className="lg:col-span-2 space-y-6">
                {g.items.map((it) => (
                  <div key={it.t} className="rounded-3xl border border-border bg-card p-7">
                    <h3 className="font-display text-2xl font-bold text-[var(--primary)]">{it.t}</h3>
                    <p className="text-muted-foreground mt-2">{it.d}</p>
                    <ul className="mt-5 grid sm:grid-cols-2 gap-2">
                      {it.b.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 mt-0.5 text-[var(--lime)] shrink-0" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="container-x pb-24">
        <div className="rounded-[2rem] bg-[var(--deep)] text-white p-10 md:p-14 flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
          <h2 className="text-3xl md:text-4xl font-bold max-w-2xl">Need a custom waste programme for your facility?</h2>
          <Link to="/contact" className="btn-lime">Request a proposal <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}
