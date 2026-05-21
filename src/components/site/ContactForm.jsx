import { useState } from "react";
import { Send } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "9cafaf0d-3542-4aba-8b20-3be897d4281d";

const inputClass =
  "w-full rounded-xl bg-white/[0.08] border border-white/12 px-4 py-2.5 text-sm text-white placeholder:text-white/40 transition focus:border-[var(--lime)] focus:bg-white/[0.1] focus:outline-none focus:ring-2 focus:ring-[var(--lime)]/25";

const textareaClass =
  "w-full min-h-[7rem] resize-y rounded-xl bg-white/[0.08] border border-white/12 px-4 py-2.5 text-sm text-white placeholder:text-white/40 transition focus:border-[var(--lime)] focus:bg-white/[0.1] focus:outline-none focus:ring-2 focus:ring-[var(--lime)]/25";

function Field({ label, children }) {
  return (
    <label className="block space-y-1.5">
      <span className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/45">
        {label}
      </span>
      {children}
    </label>
  );
}

export function ContactForm() {
  const [result, setResult] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setResult("Sending…");

    const formData = new FormData(event.target);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New enquiry — Sargas Group website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully. We'll get back to you soon.");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong. Please try again or call us directly.");
      }
    } catch {
      setResult("Network error. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full overflow-hidden rounded-3xl border border-[var(--primary)]/15 bg-[var(--deep)] text-white shadow-lg ring-1 ring-white/5"
    >
      <div className="relative border-b border-white/10 px-6 py-5 text-center">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[var(--lime)] to-transparent" />
        <h2 className="font-display text-xl font-bold tracking-tight md:text-2xl">
          Send us a message
        </h2>
        <p className="mt-1.5 text-xs text-white/55">We&apos;ll get back within one business day.</p>
      </div>

      <div className="space-y-4 p-6">
        <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Name">
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className={inputClass}
              disabled={submitting}
            />
          </Field>
          <Field label="Email">
            <input
              type="email"
              name="email"
              required
              placeholder="you@company.com"
              className={inputClass}
              disabled={submitting}
            />
          </Field>
        </div>

        <Field label="Phone">
          <input
            type="tel"
            name="phone"
            required
            placeholder="+91 …"
            className={inputClass}
            disabled={submitting}
          />
        </Field>

        <Field label="Subject">
          <input
            type="text"
            name="subject"
            placeholder="How can we help?"
            className={inputClass}
            disabled={submitting}
          />
        </Field>

        <Field label="Message">
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Tell us about your facility or waste programme…"
            className={textareaClass}
            disabled={submitting}
          />
        </Field>

        <button
          type="submit"
          disabled={submitting}
          className="btn-lime mt-1 w-full justify-center py-3 text-sm font-semibold disabled:pointer-events-none disabled:opacity-60"
        >
          {submitting ? (
            "Sending…"
          ) : (
            <>
              Send message <Send className="h-4 w-4" />
            </>
          )}
        </button>

        {result ? (
          <p
            role="status"
            className={`rounded-xl px-3 py-2.5 text-center text-xs leading-relaxed ${
              result.includes("successfully")
                ? "border border-[var(--lime)]/30 bg-[var(--lime)]/10 text-[var(--lime)]"
                : "border border-red-400/20 bg-red-500/10 text-red-200"
            }`}
          >
            {result}
          </p>
        ) : null}
      </div>
    </form>
  );
}
