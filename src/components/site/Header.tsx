import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Umbrella, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "HOME" },
  { to: "/collections", label: "COLLECTIONS" },
  { to: "/corporate", label: "CORPORATE" },
  { to: "/gallery", label: "GALLERY" },
  { to: "/about", label: "ABOUT" },
  { to: "/blog", label: "JOURNAL" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "CONTACT" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-5 lg:px-8 h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-yellow-brand shadow-soft group-hover:rotate-12 transition-transform duration-500">
            <Umbrella className="h-5 w-5 text-ink" />
          </span>
          <span className="font-display text-lg md:text-xl tracking-tight">
            The Yellow <span className="italic">Ummbrella</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm uppercase tracking-wide text-foreground/80 hover:text-foreground transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
              activeProps={{ className: "text-foreground after:w-full" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+919029806342"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            <Phone className="h-4 w-4" />
            +91 90298 06342
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-yellow-brand px-5 py-2.5 text-sm font-medium shadow-soft hover:scale-105 active:scale-95 transition-transform"
          >
            Send Inquiry
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
          <div className="container mx-auto flex flex-col gap-1 px-5 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base uppercase border-b border-border/60 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+919029806342"
              className="mt-3 flex items-center gap-2 py-3 text-base border-b border-border/60"
            >
              <Phone className="h-4 w-4" /> +91 90298 06342
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center rounded-full bg-ink text-yellow-brand px-5 py-3 text-sm font-medium"
            >
              Send Inquiry
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
