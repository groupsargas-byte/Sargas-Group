import * as images from "@/data/images.js";
import { Reveal } from "@/components/site/Reveal.jsx";
import { LazyImage } from "@/components/site/LazyImage.jsx";
import { usePageSeo } from "@/hooks/usePageSeo.js";
import { PAGE_SEO } from "@/lib/seo.js";

const stateCert = {
  title: "Karnataka State Pollution Control Board",
  description:
    "Authorised under Hazardous and Other Waste (Management and Transboundary Movement) Rules 2016.",
  image: images.certKspcb,
  alt: "Karnataka State Pollution Control Board logo",
};

const nationalCert = {
  title: "National Accreditation Board for Certification Bodies",
  description: "NABCB-recognised certification standards across our processes.",
  image: images.certNabcb,
  alt: "National Accreditation Board for Certification Bodies (NABCB) logo",
};

const internationalCerts = [
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

function CertCard({ cert, delay = 0, className = "" }) {
  return (
    <Reveal
      as="li"
      delay={delay}
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm card-lift hover:border-[var(--primary)]/30 ${className}`}
    >
      <div className="flex h-36 items-center justify-center border-b border-border/60 bg-white p-6 md:h-40">
        <LazyImage
          src={cert.image}
          alt={cert.alt}
          width={200}
          height={120}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h2 className="font-display text-lg font-bold leading-snug text-[var(--primary)] md:text-xl">
          {cert.title}
        </h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{cert.description}</p>
      </div>
    </Reveal>
  );
}

export default function CertificationsPage() {
  usePageSeo(PAGE_SEO.certifications);

  return (
    <>
      <section className="container-x border-b border-border/60 py-12 md:py-16">
        <Reveal immediate>
          <span className="eyebrow">Compliance</span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-[var(--primary)] md:text-5xl">
            Certifications &amp; Authorisations
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Sargas Group operates under recognised State, National and International Standards for
            waste handling and quality management.
          </p>
        </Reveal>
      </section>

      <section className="container-x space-y-14 py-16 md:space-y-16 md:py-20">
        {/* International — first, three in one row */}
        <div>
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-[var(--primary)] md:text-3xl">
              International
            </h2>
          </Reveal>
          <ul className="mt-6 grid gap-6 md:grid-cols-3">
            {internationalCerts.map((cert, i) => (
              <CertCard key={cert.title} cert={cert} delay={i * 60} />
            ))}
          </ul>
        </div>

        {/* State + National — second row, equal height */}
        <div className="grid items-stretch gap-8 md:grid-cols-2 md:gap-6">
          <div className="flex flex-col">
            <Reveal delay={40}>
              <h2 className="font-display text-2xl font-bold text-[var(--primary)] md:text-3xl">
                State
              </h2>
            </Reveal>
            <ul className="mt-6 flex flex-1 flex-col">
              <CertCard cert={stateCert} delay={120} />
            </ul>
          </div>
          <div className="flex flex-col">
            <Reveal delay={80}>
              <h2 className="font-display text-2xl font-bold text-[var(--primary)] md:text-3xl">
                National
              </h2>
            </Reveal>
            <ul className="mt-6 flex flex-1 flex-col">
              <CertCard cert={nationalCert} delay={160} />
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
