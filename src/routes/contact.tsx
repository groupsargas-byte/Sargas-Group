import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send, User } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({ meta: [{ title: "Contact Sargas Group | Waste Management India" }, { name: "description", content: "Reach Sargas Group — Bengaluru offices, phone, email and enquiry form." }] }),
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact" title="We're ready to assist you." subtitle="Speak to our experts about a tailored waste management programme for your facility, society or commercial complex." />

      <section className="container-x py-20 grid lg:grid-cols-2 gap-10">
        <div className="space-y-5">
          {[
            { icon: User, t: "Jagadish K", s: "CEO · +91 96119 69686" },
            { icon: User, t: "Sachin Raj C", s: "COO · +91 79961 61777" },
            { icon: Mail, t: "Email", s: "contact@sargasgroup.com" },
            { icon: MapPin, t: "Sargas Enviro Pvt. Ltd. (SEPL)", s: "Plot 319-D, Sompura Industrial Area 1st Stage, Nidavanda, Dobbaspete, Bengaluru Rural — 562132" },
            { icon: MapPin, t: "Sargas Waste Management Pvt. Ltd. (SWMPL)", s: "Plot 12-A, Dobbaspete Industrial Area 1st Phase, Yedahalli, Bengaluru Rural — 562111" },
          ].map((c) => (
            <div key={c.t} className="flex gap-4 rounded-3xl border border-border bg-card p-5">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--lime)] shrink-0"><c.icon className="h-5 w-5 text-[var(--lime-foreground)]" /></span>
              <div>
                <div className="font-display font-bold text-[var(--primary)]">{c.t}</div>
                <div className="text-sm text-muted-foreground mt-1">{c.s}</div>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-3xl bg-[var(--deep)] text-white p-8 md:p-10 space-y-4 h-fit"
        >
          <h2 className="font-display text-3xl font-bold">Send us a message</h2>
          <p className="text-white/65 text-sm">We'll get back within one business day.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Your name" className="rounded-full bg-white/10 border border-white/15 px-5 py-3 placeholder:text-white/50 focus:outline-none focus:border-[var(--lime)]" />
            <input required type="email" placeholder="Email" className="rounded-full bg-white/10 border border-white/15 px-5 py-3 placeholder:text-white/50 focus:outline-none focus:border-[var(--lime)]" />
          </div>
          <input placeholder="Phone (optional)" className="w-full rounded-full bg-white/10 border border-white/15 px-5 py-3 placeholder:text-white/50 focus:outline-none focus:border-[var(--lime)]" />
          <input placeholder="Subject" className="w-full rounded-full bg-white/10 border border-white/15 px-5 py-3 placeholder:text-white/50 focus:outline-none focus:border-[var(--lime)]" />
          <textarea required rows={5} placeholder="How can we help?" className="w-full rounded-3xl bg-white/10 border border-white/15 px-5 py-3 placeholder:text-white/50 focus:outline-none focus:border-[var(--lime)]" />
          <button type="submit" className="btn-lime w-full justify-center">
            {sent ? "Message sent — thank you!" : <>Send message <Send className="h-4 w-4" /></>}
          </button>
        </form>
      </section>
    </>
  );
}
