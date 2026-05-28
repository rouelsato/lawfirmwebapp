import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/process-and-fees")({
  head: () => ({
    meta: [
      { title: "Process & Fees | Elnar Lape Lastimoso & Associates" },
      { name: "description", content: "How we work — free intake call, written scope, indicative cost, and scheduled updates. Transparent legal fees from a trusted Cebu law firm." },
      { property: "og:title", content: "Process & Fees | ELLA & Associates" },
      { property: "og:description", content: "How we work — free intake call, written scope, indicative cost. Transparent legal fees from a Cebu law firm." },
      { property: "og:url", content: "/process-and-fees" },
    ],
    links: [{ rel: "canonical", href: "/process-and-fees" }],
  }),
  component: ProcessPage,
});

const steps = [
  { step: "1. Intake call", what: "A 20-minute call to understand your matter.", timing: "Within 1 business day", cost: "Free" },
  { step: "2. Written scope", what: "A clear scope, timeline, and indicative cost in writing.", timing: "2–3 business days", cost: "Free" },
  { step: "3. Engagement", what: "You review and sign; we begin work.", timing: "At your pace", cost: "Per scope" },
  { step: "4. Ongoing updates", what: "Scheduled check-ins and plain-language progress notes.", timing: "Throughout", cost: "Included" },
];

const fees = [
  { engagement: "PEZA company formation", scope: "Entity setup, SEC/BIR/PEZA registration", range: "Scoped at intake" },
  { engagement: "Foreign-owned incorporation", scope: "Domestic / Branch / ROHQ", range: "Scoped at intake" },
  { engagement: "Corporate retainer", scope: "Monthly fixed-fee general counsel", range: "Tiered monthly fee" },
  { engagement: "Civil case intake", scope: "Initial filing & representation", range: "Scoped after assessment" },
  { engagement: "Real estate transfer", scope: "Due diligence to title transfer", range: "Per transaction" },
  { engagement: "Estate planning", scope: "Will, trust, succession structure", range: "Fixed-fee package" },
];

function ProcessPage() {
  return (
    <SiteShell>
      <section className="container-prose pt-20 pb-12 md:pt-28">
        <p className="eyebrow">Process & fees</p>
        <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-primary md:text-6xl">
          You'll know the path <span className="italic text-gold">before you walk it.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          We won't ask you to commit to anything until you have a written scope,
          a timeline, and an indicative cost. That's not a perk — it's the standard.
        </p>
      </section>

      {/* Onboarding table */}
      <section className="container-prose py-12">
        <div className="overflow-hidden rounded-sm border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary/60">
              <tr>
                <th className="px-6 py-4 font-medium">Step</th>
                <th className="px-6 py-4 font-medium">What happens</th>
                <th className="px-6 py-4 font-medium">Timing</th>
                <th className="px-6 py-4 font-medium">Cost</th>
              </tr>
            </thead>
            <tbody>
              {steps.map((s) => (
                <tr key={s.step} className="border-t border-border bg-card">
                  <td className="px-6 py-5 font-serif text-base text-primary">{s.step}</td>
                  <td className="px-6 py-5 text-foreground/80">{s.what}</td>
                  <td className="px-6 py-5 text-muted-foreground">{s.timing}</td>
                  <td className="px-6 py-5"><span className="rounded-full bg-sage/20 px-3 py-1 text-xs font-medium text-sage-foreground">{s.cost}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Indicative ranges */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-prose py-20">
          <p className="eyebrow">Indicative cost ranges</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight">
            We share ranges, not riddles.
          </h2>
          <p className="mt-4 max-w-2xl text-foreground/75">
            Every matter is different — but you should know roughly what you're
            signing up for before the first meeting. Specific quotes are issued
            in writing after intake.
          </p>

          <div className="mt-10 overflow-hidden rounded-sm border border-border bg-card">
            <table className="w-full text-left text-sm">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 font-medium">Engagement</th>
                  <th className="px-6 py-4 font-medium">Typical scope</th>
                  <th className="px-6 py-4 font-medium">Fee structure</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((f) => (
                  <tr key={f.engagement} className="border-t border-border">
                    <td className="px-6 py-5 font-serif text-base text-primary">{f.engagement}</td>
                    <td className="px-6 py-5 text-foreground/80">{f.scope}</td>
                    <td className="px-6 py-5 text-muted-foreground">{f.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container-prose py-20 text-center">
        <h2 className="mx-auto max-w-2xl font-serif text-4xl leading-tight">
          Ready for a written scope?
        </h2>
        <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-4 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          Start with a free intake call <ArrowRight size={16} />
        </Link>
      </section>
    </SiteShell>
  );
}
