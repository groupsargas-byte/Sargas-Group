import { createFileRoute } from "@tanstack/react-router";
import { Award } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/certifications")({
  component: Certs,
  head: () => ({ meta: [{ title: "Certifications & Authorisations | Sargas Group" }, { name: "description", content: "KSPCB, NABCB, JAS-ANZ, IQC Global and Lifestyle for Environment certifications and authorisations." }] }),
});

const certs = [
  { t: "Karnataka State Pollution Control Board", d: "Authorised under Hazardous & Other Waste (Management and Transboundary Movement) Rules 2016." },
  { t: "National Accreditation Board for Certification Bodies", d: "NABCB-recognised certification standards across our processes." },
  { t: "JAS-ANZ — ISO 9001:2015", d: "Joint Accreditation System of Australia and New Zealand certified quality management." },
  { t: "Integrated Quality Certification Global", d: "IQC Global certified operational and quality systems." },
  { t: "Lifestyle for Environment (LiFE)", d: "Aligned with India's LiFE mission for sustainable consumption and circular practices." },
];

function Certs() {
  return (
    <>
      <PageHero eyebrow="Certifications" title="Accreditations, certifications and authorisations." subtitle="Sargas Group operates under recognised national and international standards for waste handling and quality management." />
      <section className="container-x py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((c) => (
          <div key={c.t} className="rounded-3xl border border-border bg-card p-7">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--lime)]">
              <Award className="h-6 w-6 text-[var(--lime-foreground)]" />
            </span>
            <h3 className="mt-5 font-display text-lg font-bold text-[var(--primary)]">{c.t}</h3>
            <p className="text-sm text-muted-foreground mt-2">{c.d}</p>
          </div>
        ))}
      </section>
    </>
  );
}
