import { useState } from "react";
import { Send } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "9cafaf0d-3542-4aba-8b20-3be897d4281d";

const inputClass =
  "w-full rounded-full bg-white/10 border border-white/15 px-5 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-[var(--lime)] focus:ring-1 focus:ring-[var(--lime)]";

const textareaClass =
  "w-full rounded-3xl bg-white/10 border border-white/15 px-5 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-[var(--lime)] focus:ring-1 focus:ring-[var(--lime)]";

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
    <form onSubmit={onSubmit} className="rounded-3xl bg-[var(--deep)] text-white p-8 md:p-10 space-y-4 h-fit">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <h2 className="font-display text-3xl font-bold">Send us a message</h2>
      <p className="text-white/65 text-sm">We'll get back within one business day.</p>

      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          required
          placeholder="Your name"
          className={inputClass}
          disabled={submitting}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className={inputClass}
          disabled={submitting}
        />
      </div>

      <input
        type="tel"
        name="phone"
        required
        placeholder="Phone"
        className={inputClass}
        disabled={submitting}
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className={inputClass}
        disabled={submitting}
      />
      <textarea
        name="message"
        required
        rows={5}
        placeholder="How can we help?"
        className={textareaClass}
        disabled={submitting}
      />

      <button
        type="submit"
        disabled={submitting}
        className="btn-lime w-full justify-center disabled:opacity-60 disabled:pointer-events-none"
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
          className={`text-sm text-center ${
            result.includes("successfully") ? "text-[var(--lime)]" : "text-red-300"
          }`}
        >
          {result}
        </p>
      ) : null}
    </form>
  );
}
