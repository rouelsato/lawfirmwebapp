import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="container-prose grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-2xl leading-tight">
            Elnar Lape Lastimoso<br />
            <span className="text-gold">& Associates</span>
          </p>
          <p className="mt-4 max-w-sm text-sm text-primary-foreground/75">
            A full-service Cebu law firm offering corporate, PEZA, family, and
            litigation counsel — built on clarity, courtesy, and care.
          </p>

          <div className="mt-6 inline-flex items-center gap-3 rounded-sm border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-coral" aria-hidden />
            <span className="text-xs font-medium tracking-wide">
              An openly inclusive · LGBTQ+ friendly practice
            </span>
          </div>
        </div>

        <div>
          <p className="eyebrow text-primary-foreground/60">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/about" className="text-primary-foreground/85 hover:text-gold">About the firm</Link></li>
            <li><Link to="/practice-areas" className="text-primary-foreground/85 hover:text-gold">Practice areas</Link></li>
            <li><Link to="/process-and-fees" className="text-primary-foreground/85 hover:text-gold">Process & fees</Link></li>
            <li><Link to="/contact" className="text-primary-foreground/85 hover:text-gold">Book a consultation</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-primary-foreground/60">Visit us</p>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/85">
            <li className="flex gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-gold" /> Cebu Business Park, Cebu City, Philippines</li>
            <li className="flex gap-3"><Phone size={16} className="mt-0.5 shrink-0 text-gold" /> +63 (32) 000 0000</li>
            <li className="flex gap-3"><Mail size={16} className="mt-0.5 shrink-0 text-gold" /> hello@lawfirmcebu.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-prose flex flex-col justify-between gap-3 py-6 text-xs text-primary-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} Elnar Lape Lastimoso & Associates. All rights reserved.</p>
          <p>IBP Cebu Chapter · Data Privacy Act (RA 10173) compliant</p>
        </div>
      </div>
    </footer>
  );
}
