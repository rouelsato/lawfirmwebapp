import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, Building2, Users, Home, Scale, Globe2, CheckCircle2 } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cebu Lawyers & Attorneys | Elnar Lape Lastimoso & Associates" },
      { name: "description", content: "Trusted Cebu law firm offering corporate, PEZA, family & litigation services. Transparent fees, clear process, inclusive practice. Book a free consultation." },
      { property: "og:title", content: "Cebu Lawyers & Attorneys | Elnar Lape Lastimoso & Associates" },
      { property: "og:description", content: "Trusted Cebu law firm offering corporate, PEZA, family & litigation services. Transparent fees, clear process, inclusive practice." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LegalService",
        name: "Elnar Lape Lastimoso & Associates",
        url: "https://lawfirmcebu.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Cebu Business Park",
          addressLocality: "Cebu City",
          addressCountry: "PH",
        },
        areaServed: "Cebu City",
        priceRange: "$$",
      }),
    }],
  }),
  component: Home_,
});

const practiceAreas = [
  { icon: Building2, title: "Corporate & PEZA", body: "Set up, scale, and stay compliant — from SEC and BIR to PEZA registration." },
  { icon: Globe2, title: "Foreign Investment", body: "Cross-border structuring and incorporation tailored to the Philippine market." },
  { icon: Briefcase, title: "Labor & Employment", body: "DOLE compliance, employment contracts, and resolution of workplace disputes." },
  { icon: Users, title: "Civil & Family Law", body: "Personal matters handled with discretion — annulment, custody, estate, succession." },
  { icon: Home, title: "Real Estate & Property", body: "Due diligence, title transfers, leases, and condominium developments." },
  { icon: Scale, title: "Litigation & Dispute Resolution", body: "Trial-ready advocacy and pragmatic settlement counsel across all Cebu courts." },
];

const testimonials = [
  {
    quote: "Atty. Leo and his team handled our PEZA setup end-to-end — clear timelines, honest costs, zero surprises. The kind of counsel you actually want to recommend.",
    name: "Founder, IT-BPM Company",
    detail: "Cebu IT Park",
  },
  {
    quote: "What struck us first was the courtesy. What kept us was the competence. They explained every step in plain language and stuck to the fee they quoted.",
    name: "Managing Director",
    detail: "Foreign-owned manufacturing",
  },
  {
    quote: "I was nervous about a family matter. They made me feel respected, not judged. That meant as much as the legal outcome.",
    name: "Private client",
    detail: "Cebu City",
  },
];

function Home_() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/60 via-background to-background" aria-hidden />
        <div className="container-prose pt-20 pb-24 md:pt-28 md:pb-32">
          <p className="eyebrow">Cebu City · Est. Practice in the Philippines</p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight text-primary md:text-7xl">
            Trusted legal counsel in the <span className="text-gold italic">heart of Cebu.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            From PEZA incorporations to family matters — Elnar Lape Lastimoso & Associates
            guides Cebuano businesses and families with clarity, courtesy, and care.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Book a Consultation <ArrowRight size={16} />
            </Link>
            <Link
              to="/practice-areas"
              className="inline-flex items-center gap-2 rounded-sm border border-primary/20 px-7 py-4 text-sm font-medium text-primary hover:bg-primary/5"
            >
              See our practice areas
            </Link>
          </div>

          {/* Trust strip */}
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-6 text-xs text-muted-foreground">
            <span>Cebu City</span>
            <span className="text-border">·</span>
            <span>IBP Cebu Chapter</span>
            <span className="text-border">·</span>
            <span>PEZA & SEC accredited counsel</span>
            <span className="text-border">·</span>
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-coral" /> LGBTQ+ friendly practice</span>
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-prose grid gap-12 py-20 md:grid-cols-12 md:py-24">
          <div className="md:col-span-5">
            <p className="eyebrow">About the firm</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight">
              Excellent, transparent, and human.
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed text-foreground/80">
              We are a full-service Cebu law firm built on a simple idea: legal work
              should be excellent, transparent, and human. Our clients come to us for
              substantive expertise across corporate and personal matters — and stay
              because of how we explain, scope, and deliver.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-gold">
              Read our story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="container-prose py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Practice areas</p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight">
              Counsel that meets you where your matter actually lives.
            </h2>
          </div>
          <Link to="/practice-areas" className="text-sm font-medium text-primary hover:text-gold">
            View all areas →
          </Link>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map(({ icon: Icon, title, body }) => (
            <div key={title} className="group bg-card p-8 transition-colors hover:bg-secondary/40">
              <Icon size={22} className="text-gold" />
              <h3 className="mt-5 font-serif text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-prose py-24">
          <p className="eyebrow text-gold">Why clients choose us</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-primary-foreground md:text-5xl">
            Three things you can count on from the first call.
          </h2>
          <div className="mt-14 grid gap-12 md:grid-cols-3">
            {[
              { n: "01", t: "Clear communication", d: "Plain language, written scopes, scheduled updates. You will never wonder where your matter stands." },
              { n: "02", t: "Transparent onboarding", d: "Free intake call. Written scope. Indicative cost before you engage — not after." },
              { n: "03", t: "Deep Cebu roots", d: "Built in Cebu, for Cebu — with the network and reach to handle matters nationally." },
            ].map((b) => (
              <div key={b.n}>
                <span className="font-serif text-3xl text-gold">{b.n}</span>
                <h3 className="mt-3 font-serif text-2xl text-primary-foreground">{b.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-prose py-24">
        <p className="eyebrow">In their words</p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight">
          Trusted by Cebuano founders, families, and foreign investors.
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="flex flex-col border-t-2 border-gold bg-card p-8">
              <blockquote className="flex-1 font-serif text-xl leading-snug text-primary">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <div className="font-medium text-foreground">{t.name}</div>
                <div className="text-muted-foreground">{t.detail}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* PROCESS PREVIEW */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-prose py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="eyebrow">How we work</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight">
                A clear path, before you commit.
              </h2>
              <p className="mt-6 text-foreground/80">
                Every engagement begins the same way — a free conversation, a
                written scope, and a fee you can actually plan around.
              </p>
              <Link to="/process-and-fees" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-gold">
                See full process & indicative fees <ArrowRight size={14} />
              </Link>
            </div>
            <ol className="md:col-span-7 space-y-6">
              {[
                ["Free intake call", "A 20-minute call to understand your matter — within 1 business day."],
                ["Written scope & indicative cost", "A clear scope, timeline, and fee range, in writing, before you decide."],
                ["Engagement & execution", "We do the work, with scheduled check-ins and plain-language updates throughout."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-5 rounded-sm border border-border bg-card p-6">
                  <span className="font-serif text-3xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-serif text-xl">{t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* INCLUSION BAND */}
      <section className="bg-background">
        <div className="container-narrow py-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-coral/30 bg-coral/10 px-4 py-1.5 text-xs font-medium tracking-wide text-coral">
            <CheckCircle2 size={14} /> An openly inclusive practice
          </span>
          <p className="mt-6 font-serif text-3xl leading-snug text-primary md:text-4xl">
            Every client — every background, every identity — is met with the
            same respect and the same competence.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-prose pb-24">
        <div className="rounded-sm bg-primary p-12 text-primary-foreground md:p-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow text-gold">Tell us about your matter</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-primary-foreground md:text-5xl">
                We'll respond within one business day.
              </h2>
            </div>
            <div className="flex md:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-4 text-sm font-medium text-gold-foreground transition-colors hover:bg-gold/90"
              >
                Book a Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
