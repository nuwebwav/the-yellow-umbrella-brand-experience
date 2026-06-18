import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { LogoIcon } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-cream relative overflow-hidden">
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-sun opacity-20 blur-3xl" />
      <div className="container mx-auto px-5 lg:px-8 py-20 relative">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow-brand">
                <LogoIcon className="h-7 w-7 text-ink" />
              </span>
              <span className="font-display text-2xl">The Yellow Ummbrella</span>
            </div>
            <p className="text-cream/70 max-w-md leading-relaxed font-display text-xl italic">
              We don't sell gifts. We craft little moments wrapped in yellow.
            </p>
            <div className="mt-8 space-y-2 text-sm text-cream/70">
              <a href="tel:+919029806342" className="flex items-center gap-3 hover:text-yellow-brand transition-colors">
                <Phone className="h-4 w-4" /> +91 90298 06342
              </a>
              <a href="mailto:hello@theyellowumbrella.in" className="flex items-center gap-3 hover:text-yellow-brand transition-colors">
                <Mail className="h-4 w-4" /> hello@theyellowumbrella.in
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4" /> India
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-yellow-brand mb-5">Explore</h4>
            <ul className="space-y-3 text-sm text-cream/80">
              <li><Link to="/collections" className="hover:text-yellow-brand">Collections</Link></li>
              <li><Link to="/corporate" className="hover:text-yellow-brand">Corporate Gifting</Link></li>
              <li><Link to="/gallery" className="hover:text-yellow-brand">Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-yellow-brand">Journal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-yellow-brand mb-5">Company</h4>
            <ul className="space-y-3 text-sm text-cream/80">
              <li><Link to="/about" className="hover:text-yellow-brand">About</Link></li>
              <li><Link to="/faq" className="hover:text-yellow-brand">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-brand">Contact</Link></li>
              <li>
                <a href="https://instagram.com/yellow_ummbrella" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-yellow-brand">
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} The Yellow Ummbrella. Crafted with care.</p>
          <p>Unique gifts · Custom gifting · Corporate hampers — India</p>
        </div>
      </div>
    </footer>
  );
}
