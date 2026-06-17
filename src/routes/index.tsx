import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Gift, Heart, Truck, Star, Instagram } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Umbrella3D } from "@/components/site/Umbrella3D";
import { Reveal } from "@/components/site/Reveal";
import { InquiryForm } from "@/components/site/InquiryForm";
import birthday from "@/assets/cat-birthday.jpg";
import corporate from "@/assets/cat-corporate.jpg";
import personalized from "@/assets/cat-personalized.jpg";
import surprise from "@/assets/cat-surprise.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Yellow Umbrella — We Don't Sell Gifts, We Create Emotions" },
      { name: "description", content: "Premium, personalized & corporate gift hampers crafted in India. Birthday, surprise boxes, weddings, brand kits." },
      { property: "og:title", content: "The Yellow Umbrella — Premium Gifting in India" },
      { property: "og:description", content: "We don't sell gifts. We craft emotions, wrapped in yellow." },
    ],
  }),
  component: HomePage,
});

const COLLECTIONS = [
  { slug: "birthday", title: "Birthday Magic", image: birthday, copy: "Hampers that turn ordinary days into stories." },
  { slug: "corporate", title: "Corporate Hampers", image: corporate, copy: "Branded gifting that says thank you, beautifully." },
  { slug: "personalized", title: "Personalized", image: personalized, copy: "Names, dates, photos — gifts that feel like yours." },
  { slug: "surprise", title: "Surprise Boxes", image: surprise, copy: "Theatre in a box. Open. Gasp. Repeat." },
];

const STEPS = [
  { n: "01", t: "Choose a Concept", d: "Pick a collection or share your idea — we listen first." },
  { n: "02", t: "Customize", d: "We design, you approve. Colours, names, notes, all yours." },
  { n: "03", t: "We Create & Deliver", d: "Hand-crafted, hand-packed and delivered across India." },
];

const TESTIMONIALS = [
  { name: "Riya M.", role: "Bride", quote: "I cried opening it. Every little detail was thought of. Pure magic." },
  { name: "Karan S.", role: "Marketing Lead, Fintech", quote: "Our clients still talk about the hampers. Premium, on-brand, on-time." },
  { name: "Aanya P.", role: "Mom of two", quote: "My son's birthday surprise box was the best money I've spent this year." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-cream min-h-[100svh] flex items-center">
        <div className="absolute inset-0 bg-gradient-spotlight" />
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-yellow-brand/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-yellow-brand/10 blur-3xl" />

        <div className="container mx-auto px-5 lg:px-8 py-24 md:py-0 grid lg:grid-cols-2 gap-12 items-center relative">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-yellow-brand">
                <Sparkles className="h-3.5 w-3.5" /> Premium Gifting · India
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance">
                We don't sell gifts.<br />
                <span className="italic text-yellow-brand">We create emotions.</span>
              </h1>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-7 max-w-xl text-lg text-cream/70 text-balance">
                Hand-crafted hampers, surprise boxes and corporate kits — designed to make
                someone's heart skip the moment they open the lid.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/collections"
                  className="group inline-flex items-center gap-2 rounded-full bg-yellow-brand text-ink px-7 py-4 font-medium shadow-elegant hover:scale-105 active:scale-95 transition-transform"
                >
                  Explore Gifts
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-7 py-4 font-medium hover:bg-cream/5 transition-colors"
                >
                  Send Inquiry
                </Link>
              </div>
            </Reveal>
            <Reveal delay={560}>
              <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 text-sm text-cream/60">
                <Stat n="500+" l="Happy stories" />
                <Stat n="50+" l="Brand partners" />
                <Stat n="PAN India" l="Delivery" />
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <Umbrella3D />
          </div>
        </div>

        {/* Marquee tagline */}
        <div className="absolute bottom-0 inset-x-0 border-t border-cream/10 bg-ink/60 backdrop-blur py-4 overflow-hidden">
          <div className="marquee gap-12 whitespace-nowrap font-display italic text-2xl md:text-3xl text-cream/40">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex items-center gap-12 pr-12">
                {["Birthdays", "Weddings", "Corporate", "Surprises", "Personalized", "Hampers", "Bespoke"].map((w) => (
                  <span key={w} className="flex items-center gap-12">
                    {w} <span className="text-yellow-brand">✻</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section id="collections" className="py-24 md:py-32 bg-cream">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Our Collections</p>
              <h2 className="font-display text-4xl md:text-6xl max-w-2xl text-balance">A gift for every <span className="italic">feeling</span>.</h2>
            </Reveal>
            <Reveal delay={150}>
              <Link to="/collections" className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
                View all collections <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COLLECTIONS.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
                <Link to="/collections" className="group block tilt-card">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink shadow-soft">
                    <img
                      src={c.image}
                      alt={c.title}
                      width={1024}
                      height={1280}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                      <h3 className="font-display text-2xl">{c.title}</h3>
                      <p className="mt-1 text-sm text-cream/70 line-clamp-2">{c.copy}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-yellow-brand">
                        Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 md:py-32 bg-ink text-cream relative overflow-hidden">
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-gradient-sun opacity-20 blur-3xl" />
        <div className="container mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12 items-center relative">
          <Reveal className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-yellow-brand mb-4">Our Story</p>
            <h2 className="font-display text-4xl md:text-6xl text-balance">A little yellow shelter for big emotions.</h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={150}>
            <p className="text-lg text-cream/75 leading-relaxed">
              The Yellow Umbrella began with a simple thought — a gift should never feel like a transaction.
              It should feel like a hug from a distance, a celebration in a box, a memory you can hold.
            </p>
            <p className="mt-5 text-lg text-cream/75 leading-relaxed">
              From hand-tied ribbons to handwritten notes, every detail is dreamt up by us
              and made with care, in India.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-yellow-brand hover:gap-3 transition-all">
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-5 lg:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3 text-center">How It Works</p>
            <h2 className="font-display text-4xl md:text-6xl text-center text-balance max-w-3xl mx-auto">From a spark of an idea to a knock on their door.</h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="group relative h-full rounded-3xl border border-border bg-card p-8 hover:shadow-elegant transition-all hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-display text-5xl text-muted-foreground/40 group-hover:text-yellow-brand transition-colors">{s.n}</span>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-brand">
                      {i === 0 && <Sparkles className="h-5 w-5 text-ink" />}
                      {i === 1 && <Gift className="h-5 w-5 text-ink" />}
                      {i === 2 && <Truck className="h-5 w-5 text-ink" />}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl">{s.t}</h3>
                  <p className="mt-2 text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="flex justify-between items-end mb-12 gap-6 flex-wrap">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Recent Setups</p>
              <h2 className="font-display text-4xl md:text-6xl text-balance">Real moments, <span className="italic">really opened</span>.</h2>
            </Reveal>
            <Reveal delay={150}>
              <Link to="/gallery" className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
                See full gallery <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[birthday, corporate, personalized, surprise, surprise, birthday, personalized, corporate].map((src, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className={`relative overflow-hidden rounded-2xl group ${i % 5 === 0 ? "row-span-2 aspect-[3/5]" : "aspect-square"}`}>
                  <img src={src} alt="" loading="lazy" width={800} height={800} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-5 lg:px-8 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">@yellow_ummbrella</p>
            <h2 className="font-display text-4xl md:text-6xl text-balance max-w-3xl mx-auto">Catch the daily dose of yellow on Instagram.</h2>
          </Reveal>
          <Reveal delay={120}>
            <a href="https://instagram.com/yellow_ummbrella" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink text-yellow-brand px-6 py-3 hover:scale-105 transition-transform">
              <Instagram className="h-4 w-4" /> Follow us
            </a>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-6 gap-3">
            {[birthday, corporate, personalized, surprise, birthday, corporate].map((src, i) => (
              <a key={i} href="https://instagram.com/yellow_ummbrella" target="_blank" rel="noreferrer" className="relative aspect-square overflow-hidden rounded-xl group">
                <img src={src} alt="Instagram post" loading="lazy" width={400} height={400} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors flex items-center justify-center">
                  <Instagram className="h-6 w-6 text-cream opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-ink text-cream">
        <div className="container mx-auto px-5 lg:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-yellow-brand mb-3 text-center">Kind Words</p>
            <h2 className="font-display text-4xl md:text-6xl text-center text-balance max-w-3xl mx-auto">Loved by people who love giving.</h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <figure className="h-full rounded-3xl border border-cream/10 bg-cream/[0.03] p-8 hover:bg-cream/[0.06] transition-colors">
                  <div className="flex gap-1 text-yellow-brand">
                    {[...Array(5)].map((_, k) => <Star key={k} className="h-4 w-4 fill-yellow-brand" />)}
                  </div>
                  <blockquote className="mt-6 font-display text-xl italic text-cream/90 leading-snug">"{t.quote}"</blockquote>
                  <figcaption className="mt-6 text-sm text-cream/60">— {t.name}, <span className="text-cream/40">{t.role}</span></figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY */}
      <section id="inquiry" className="py-24 md:py-32 bg-cream">
        <div className="container mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Send Inquiry</p>
            <h2 className="font-display text-4xl md:text-6xl text-balance">Tell us about the moment. <span className="italic">We'll wrap it up.</span></h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Share a few details and our gifting team will get back within 24 hours.
              Or just <a className="underline underline-offset-4 hover:text-foreground" href="https://wa.me/910000000000" target="_blank" rel="noreferrer">WhatsApp us</a>.
            </p>
            <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
              <Heart className="h-4 w-4 text-yellow-deep" /> Crafted with love · India
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="rounded-3xl bg-card p-8 md:p-10 border border-border shadow-soft">
              <InquiryForm />
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-2xl text-cream">{n}</div>
      <div className="text-xs uppercase tracking-[0.2em]">{l}</div>
    </div>
  );
}
