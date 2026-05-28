import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/about", label: "About" },
  { to: "/practice-areas", label: "Practice Areas" },
  { to: "/process-and-fees", label: "Process & Fees" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container-prose flex h-20 items-center justify-between">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary text-primary-foreground font-serif text-lg leading-none">
            E<span className="text-gold">·</span>L
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-serif text-base text-primary">Elnar Lape Lastimoso</span>
            <span className="eyebrow text-[0.65rem]">& Associates · Cebu</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary font-medium" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book a Consultation
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-primary md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container-prose flex flex-col py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-3 text-base text-foreground/85"
                activeProps={{ className: "text-primary font-medium" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Book a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
