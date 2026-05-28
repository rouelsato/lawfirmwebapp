import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/practice-areas")({
  head: () => ({
    meta: [
      { title: "Cebu Legal Services & Practice Areas | Law Firm in Cebu" },
      { name: "description", content: "From PEZA company formation to family & civil law, our Cebu attorneys deliver clear scopes, indicative costs, and seasoned counsel across every practice area." },
      { property: "og:title", content: "Cebu Legal Services & Practice Areas | Law Firm in Cebu" },
      { property: "og:description", content: "From PEZA company formation to family & civil law, our Cebu attorneys deliver clear scopes, indicative costs, and seasoned counsel." },
      { property: "og:url", content: "/practice-areas" },
    ],
    links: [{ rel: "canonical", href: "/practice-areas" }],
  }),
  component: PracticeAreasPage,
});

const generalAreas = [
  {
    title: "Labor & Employment",
    for: "Employers, founders, and HR teams across Cebu.",
    does: ["DOLE compliance audits", "Employment contracts & handbooks", "Termination & disciplinary advice", "NLRC representation"],
    timeline: "Advisory: 1–3 weeks · Disputes: 3–9 months",
    cost: "Scoped after intake",
  },
  {
    title: "Civil & Family Law",
    for: "Private clients facing personal legal matters.",
    does: ["Annulment & nullity", "Custody & support", "Estate & succession", "Adoption"],
    timeline: "Case-dependent",
    cost: "Indicative range provided at intake",
  },
  {
    title: "Real Estate & Property",
    for: "Buyers, sellers, developers, and condo corporations.",
    does: ["Due diligence", "Title transfers & registration", "Lease drafting & review", "Condominium development"],
    timeline: "Typical transfer: 6–12 weeks",
    cost: "₱-range scoped per transaction",
  },
  {
    title: "Litigation & Dispute Resolution",
    for: "Anyone facing — or anticipating — a dispute.",
    does: ["Trial advocacy", "Pre-litigation strategy", "Mediation & arbitration", "Settlement negotiation"],
    timeline: "Case-dependent",
    cost: "Hourly or fixed-scope engagements",
  },
  {
    title: "Estate & Succession",
    for: "Families planning ahead or settling an estate.",
    does: ["Wills & estate planning", "Extra-judicial settlement", "Estate tax filings", "Trust structures"],
    timeline: "Planning: 2–6 weeks",
    cost: "Fixed-fee planning available",
  },
];

function PracticeAreasPage() {
  return (
    <SiteShell>
      <section className="container-prose pt-20 pb-12 md:pt-28">
        <p className="eyebrow">Practice areas</p>
        <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-primary md:text-6xl">
          Legal services for Cebuano <span className="italic text-gold">business and families.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Each engagement starts the same way — a free intake call, a written
          scope, and an indicative cost. Then the work begins.
        </p>
      </section>

      {/* FEATURED — Corporate & PEZA */}
      <section className="border-t border-border bg-primary text-primary-foreground">
        <div className="container-prose py-24">
          <p className="eyebrow text-gold">Featured practice</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-primary-foreground md:text-5xl">
            Corporate & Business Law
          </h2>
          <p className="mt-6 max-w-3xl text-primary-foreground/80">
            Cebu's growth as an IT-BPM, manufacturing, and tourism hub has made
            it a natural home for foreign-owned and PEZA-registered enterprises.
            We are the long-term counsel for many of them — from incorporation
            to ongoing governance.
          </p>

          {/* PEZA sub-section */}
          <div className="mt-12 rounded-sm border border-primary-foreground/15 bg-primary-foreground/[0.04] p-10">
            <p className="eyebrow text-gold">Sub-practice</p>
            <h3 className="mt-3 font-serif text-3xl text-primary-foreground">PEZA Company Formation</h3>
            <p className="mt-3 max-w-2xl text-primary-foreground/80">
              End-to-end registration for IT-BPM, export, and manufacturing
              enterprises — from entity selection through post-registration
              compliance.
            </p>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <p className="eyebrow text-primary-foreground/60">What we handle</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {["Entity selection (Domestic, ROHQ, Branch)", "SEC incorporation", "BIR registration", "PEZA application & filings", "Post-registration compliance"].map((x) => (
                    <li key={x} className="flex gap-3"><Check size={16} className="mt-0.5 shrink-0 text-gold" />{x}</li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-6 self-start">
                <div className="rounded-sm bg-primary-foreground/5 p-5">
                  <p className="text-xs uppercase tracking-wider text-primary-foreground/55">Typical timeline</p>
                  <p className="mt-2 font-serif text-2xl text-gold">6–12 weeks</p>
                </div>
                <div className="rounded-sm bg-primary-foreground/5 p-5">
                  <p className="text-xs uppercase tracking-wider text-primary-foreground/55">Indicative cost</p>
                  <p className="mt-2 font-serif text-2xl text-gold">Scoped at intake</p>
                </div>
              </div>
            </div>
          </div>

          {/* Other corporate */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Foreign investment & incorporation", "Cross-border structuring, ROHQ and Branch setups, ownership compliance."],
              ["Corporate governance", "Board advisory, shareholder agreements, M&A and restructuring."],
              ["Ongoing retainer", "Fixed-fee monthly counsel for growing companies that need consistent support."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-sm border border-primary-foreground/15 p-6">
                <h4 className="font-serif text-xl text-primary-foreground">{t}</h4>
                <p className="mt-2 text-sm text-primary-foreground/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GENERAL */}
      <section className="container-prose py-24">
        <p className="eyebrow">General legal services</p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight">
          Personal counsel, with the same standard.
        </h2>

        <div className="mt-12 space-y-6">
          {generalAreas.map((a) => (
            <article key={a.title} className="grid gap-8 rounded-sm border border-border bg-card p-8 md:grid-cols-12 md:p-10">
              <div className="md:col-span-4">
                <h3 className="font-serif text-2xl text-primary">{a.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{a.for}</p>
              </div>
              <div className="md:col-span-5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">What we do</p>
                <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                  {a.does.map((d) => (
                    <li key={d} className="flex gap-2"><Check size={15} className="mt-0.5 shrink-0 text-gold" />{d}</li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-3 space-y-4 border-t border-border pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-8">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Timeline</p>
                  <p className="mt-1 text-sm font-medium text-foreground">{a.timeline}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Indicative cost</p>
                  <p className="mt-1 text-sm font-medium text-foreground">{a.cost}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Wayfinder */}
      <section className="border-t border-border bg-secondary/40">
        <div className="container-narrow py-20 text-center">
          <p className="eyebrow">Not sure where you fit?</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight">
            Tell us about your situation.
          </h2>
          <p className="mt-4 text-foreground/75">
            We'll point you to the right practice area — even if it isn't ours.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-4 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Start with a free intake call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
