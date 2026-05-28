import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Our Cebu Attorneys | Elnar Lape Lastimoso & Associates" },
      { name: "description", content: "Meet the Cebu lawyers behind ELLA & Associates — led by Atty. Leo Elnar. Approachable, competent, and openly inclusive legal counsel in Cebu City." },
      { property: "og:title", content: "About Our Cebu Attorneys | ELLA & Associates" },
      { property: "og:description", content: "Meet the Cebu lawyers behind ELLA & Associates. Approachable, competent, and openly inclusive legal counsel in Cebu City." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { t: "Clarity", d: "Plain-language counsel, written scopes, and indicative fees — every time." },
  { t: "Courtesy", d: "Every client treated with respect, from the first call to the final filing." },
  { t: "Competence", d: "Substantive expertise across corporate, PEZA, family, and litigation matters." },
  { t: "Inclusion", d: "An openly LGBTQ+ friendly firm. Equal care, regardless of background or identity." },
];

function AboutPage() {
  return (
    <SiteShell>
      <section className="container-prose pt-20 pb-12 md:pt-28">
        <p className="eyebrow">About the firm</p>
        <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-primary md:text-6xl">
          A Cebuano firm, built for Cebuano business <span className="italic text-gold">and Cebuano families.</span>
        </h1>
      </section>

      {/* Story */}
      <section className="container-prose grid gap-12 border-t border-border py-20 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="eyebrow">Our story</p>
        </div>
        <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-foreground/80">
          <p>
            Elnar Lape Lastimoso & Associates was founded on a simple conviction:
            that legal representation in Cebu should be substantive, transparent,
            and human — not transactional.
          </p>
          <p>
            We grew up in this city. We know its founders, its families, and its
            courts. We built the kind of firm we ourselves would want to call —
            one that returns messages, explains its work, and never leaves a
            client wondering what comes next.
          </p>
          <p>
            Today we counsel everything from foreign-owned PEZA companies in IT
            Park to private clients navigating personal matters with discretion.
            The work changes; the standard does not.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-prose py-24">
          <p className="eyebrow">Our values</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight">
            Four commitments we make to every client.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
            {values.map((v) => (
              <div key={v.t} className="bg-card p-10">
                <h3 className="font-serif text-2xl text-primary">{v.t}</h3>
                <p className="mt-3 text-foreground/75">{v.d}</p>
              </div>
            ))}
          </div>

          {/* Inclusion paragraph — given dedicated space */}
          <div className="mt-12 rounded-sm border-l-4 border-coral bg-card p-10">
            <p className="eyebrow text-coral">A statement of practice</p>
            <p className="mt-4 font-serif text-2xl leading-snug text-primary md:text-3xl">
              “We believe good legal representation begins with being seen and heard.
              Our doors — and our counsel — are open to every Cebuano, including
              members of the LGBTQ+ community. You will not have to explain
              yourself here. You will be helped.”
            </p>
          </div>
        </div>
      </section>

      {/* People */}
      <section className="container-prose py-24">
        <p className="eyebrow">Our people</p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight">Led by Atty. Leo Elnar.</h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <article className="md:col-span-2 flex flex-col gap-6 rounded-sm border border-border bg-card p-10 md:flex-row">
            <div className="h-32 w-32 shrink-0 rounded-sm bg-gradient-to-br from-primary to-primary/70 ring-1 ring-gold/40" aria-hidden />
            <div>
              <h3 className="font-serif text-3xl text-primary">Atty. Leo Elnar</h3>
              <p className="mt-1 text-sm text-gold">Managing Partner · Corporate, PEZA, Foreign Investment</p>
              <p className="mt-4 text-foreground/80">
                Atty. Leo leads the firm's corporate and PEZA practice and is the
                relationship counsel for many of its longest-standing clients.
                Known for clear scoping, fair fees, and a steady hand in
                complex cross-border setups.
              </p>
            </div>
          </article>

          <article className="rounded-sm border border-border bg-card p-8">
            <div className="h-20 w-20 rounded-sm bg-secondary ring-1 ring-border" aria-hidden />
            <h3 className="mt-5 font-serif text-xl text-primary">The Associates</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A growing bench across labor, family, real estate, and litigation —
              all trained in the firm's clarity-first approach.
            </p>
          </article>
        </div>
      </section>

      {/* Community */}
      <section className="border-t border-border">
        <div className="container-prose py-20">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="eyebrow">Community & Cebu</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight">Rooted in the city we serve.</h2>
            </div>
            <div className="md:col-span-7 text-foreground/80">
              <p>
                Members of the Integrated Bar of the Philippines, Cebu Chapter.
                Active participants in legal education, civic dialogue, and
                pro-bono work for Cebuano communities that need counsel most.
              </p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-gold">
                Meet the team — book a free intake call <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
