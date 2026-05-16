import { useEffect } from "react";
import * as images from "@/data/images.js";
import { Reveal } from "@/components/site/Reveal.jsx";

const certifications = [
  {
    title: "Karnataka State Pollution Control Board",
    description:
      "Authorised under Hazardous and Other Waste (Management and Transboundary Movement) Rules 2016.",
    image: images.certKspcb,
    alt: "Karnataka State Pollution Control Board logo",
  },
  {
    title: "National Accreditation Board for Certification Bodies",
    description: "NABCB-recognised certification standards across our processes.",
    image: images.certNabcb,
    alt: "National Accreditation Board for Certification Bodies (NABCB) logo",
  },
  {
    title: "JAS-ANZ — ISO 9001:2015",
    description:
      "Joint Accreditation System of Australia and New Zealand certified quality management.",
    image: images.certJasAnz,
    alt: "JAS-ANZ ISO certification logo",
  },
  {
    title: "Integrated Quality Certification Global",
    description: "IQC Global certified operational and quality systems.",
    image: images.certIqc,
    alt: "Integrated Quality Certification Global (IQC) logo",
  },
  {
    title: "Lifestyle for Environment (LiFE)",
    description:
      "Aligned with India's LiFE mission for sustainable consumption and circular practices.",
    image: images.certLife,
    alt: "Mission LiFE — Lifestyle for Environment logo",
  },
];

export default function CertificationsPage() {
  useEffect(() => {
    document.title = "Certifications & Authorisations | Sargas Group";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "KSPCB, NABCB, JAS-ANZ, IQC Global and Lifestyle for Environment certifications and authorisations.",
      );
    }
  }, []);

  return (
    <>
      <section className="container-x border-b border-border/60 py-12 md:py-16">
        <Reveal immediate>
        <span className="eyebrow">Compliance</span>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-[var(--primary)] md:text-5xl">
          Certifications &amp; Authorisations
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Sargas Group operates under recognised national and international standards for waste
          handling and quality management.
        </p>
        </Reveal>
      </section>

      <section className="container-x py-16 md:py-20">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <Reveal
              as="li"
              key={cert.title}
              delay={index * 80}
              className={`group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm card-lift hover:border-[var(--primary)]/30 ${
                index === 4 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""
              }`}
            >
              <div className="flex h-36 items-center justify-center border-b border-border/60 bg-white p-6 md:h-40">
                <img
                  src={cert.image}
                  alt={cert.alt}
                  loading="lazy"
                  width={200}
                  height={120}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <h2 className="font-display text-lg font-bold leading-snug text-[var(--primary)] md:text-xl">
                  {cert.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
