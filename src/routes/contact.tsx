import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { MapPin, Mail, Phone, Clock, ShieldCheck, CheckCircle2, Loader2 } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { sendContactEmail } from "@/lib/api/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Consultation | Cebu Attorneys — ELLA & Associates" },
      { name: "description", content: "Talk to a Cebu lawyer. Free 20-minute intake, written scope, and indicative costs before you engage. Reply within 1 business day." },
      { property: "og:title", content: "Book a Consultation | ELLA & Associates" },
      { property: "og:description", content: "Free 20-minute intake, written scope, and indicative costs before you engage. Reply within 1 business day." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const matters = [
  "Corporate & PEZA setup",
  "Foreign investment / incorporation",
  "Labor & employment",
  "Civil or family matter",
  "Real estate / property",
  "Litigation or dispute",
  "Estate & succession",
  "Not sure yet",
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <SiteShell>
      <section className="container-prose pt-20 pb-10 md:pt-28">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-primary md:text-6xl">
          Let's start with a <span className="italic text-gold">conversation.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          No commitment. No jargon. We'll explain what's possible, what it
          takes, and what it costs — before you engage us.
        </p>
        <p className="mt-4 max-w-2xl text-sm text-coral">
          Every client is welcomed with the same care — regardless of background, identity, or who they love.
        </p>
      </section>

      <section className="container-prose grid gap-12 py-12 md:grid-cols-12">
        {/* Form */}
        <div className="md:col-span-7">
          <div className="rounded-sm border border-border bg-card p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-start gap-4 py-6">
                <CheckCircle2 size={36} className="text-sage" />
                <h2 className="font-serif text-3xl text-primary">Message received.</h2>
                <p className="text-foreground/80">
                  You'll receive a confirmation by email shortly, and a personal
                  reply from a member of our team within one business day.
                </p>
              </div>
            ) : (
              <form
                ref={formRef}
                className="space-y-5"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setError(null);
                  setIsLoading(true);

                  try {
                    const formData = new FormData(formRef.current!);
                    
                    // Send email via server function
                    const result = await sendContactEmail({
                      data: {
                        name: formData.get("name") as string,
                        email: formData.get("email") as string,
                        phone: (formData.get("phone") as string) || undefined,
                        matter: formData.get("matter") as string,
                        message: formData.get("message") as string,
                        website: formData.get("website") as string,
                      },
                    });

                    if (result.success) {
                      setSubmitted(true);
                    } else {
                      setError("Failed to send message. Please try again.");
                    }
                  } catch (err) {
                    console.error("Error sending message:", err);
                    setError("Failed to send message. Please try again.");
                  } finally {
                    setIsLoading(false);
                  }
                }}
              >
                <h2 className="font-serif text-2xl text-primary">Tell us about your matter</h2>

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Full name" required>
                    <input required type="text" name="name" className="field" />
                  </Field>
                  <Field label="Email" required>
                    <input required type="email" name="email" className="field" />
                  </Field>
                </div>

                <Field label="Phone (optional)">
                  <input type="tel" name="phone" className="field" />
                </Field>

                <Field label="What's your matter about?" required>
                  <select required name="matter" defaultValue="" className="field">
                    <option value="" disabled>Select an area…</option>
                    {matters.map((m) => <option key={m}>{m}</option>)}
                  </select>
                </Field>

                <Field label="Brief description" required>
                  <textarea required name="message" rows={5} className="field" placeholder="A sentence or two is enough — we'll go deeper on the call." />
                </Field>

                {/* Honeypot */}
                <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />

                {error && (
                  <div className="rounded-sm bg-red-50 border border-red-200 p-4 text-sm text-red-700">
                    {error}
                  </div>
                )}

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck size={14} className="text-sage" />
                  Anything you share is confidential.
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-sm bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading && <Loader2 size={16} className="animate-spin" />}
                  {isLoading ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </div>

          <style>{`
            .field {
              width: 100%;
              border-radius: 0.25rem;
              border: 1px solid var(--color-border);
              background: var(--color-background);
              padding: 0.75rem 1rem;
              font-size: 0.9rem;
              color: var(--color-foreground);
              outline: none;
              transition: border-color .15s, box-shadow .15s;
            }
            .field:focus {
              border-color: var(--color-gold);
              box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-gold) 25%, transparent);
            }
          `}</style>
        </div>

        {/* Side info */}
        <aside className="md:col-span-5 space-y-8">
          <div className="rounded-sm border border-border bg-card p-8">
            <p className="eyebrow">Direct</p>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-gold" /> Cebu Business Park, Cebu City, Philippines</li>
              <li className="flex gap-3"><Phone size={18} className="mt-0.5 shrink-0 text-gold" /> +63 905 405 2952</li>
              <li className="flex gap-3"><Mail size={18} className="mt-0.5 shrink-0 text-gold" /> rouel.sato94@gmail.com</li>
              <li className="flex gap-3"><Clock size={18} className="mt-0.5 shrink-0 text-gold" /> Mon – Fri · 8:30 AM – 5:30 PM (PHT)</li>
            </ul>
          </div>

          <div className="rounded-sm bg-primary p-8 text-primary-foreground">
            <p className="eyebrow text-gold">What happens next</p>
            <ol className="mt-5 space-y-4 text-sm text-primary-foreground/85">
              <li className="flex gap-3"><span className="font-serif text-xl text-gold">1.</span> You'll get an immediate confirmation by email.</li>
              <li className="flex gap-3"><span className="font-serif text-xl text-gold">2.</span> A team member replies personally within 1 business day.</li>
              <li className="flex gap-3"><span className="font-serif text-xl text-gold">3.</span> We schedule a free 20-minute intake call.</li>
              <li className="flex gap-3"><span className="font-serif text-xl text-gold">4.</span> You receive a written scope and indicative cost.</li>
            </ol>
          </div>
        </aside>
      </section>
    </SiteShell>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}{required && <span className="text-coral"> *</span>}
      </span>
      {children}
    </label>
  );
}
