import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Yellow Umbrella" },
      { name: "description", content: "The story behind The Yellow Umbrella — a gifting studio crafting emotion-led hampers from India." },
      { property: "og:title", content: "About — The Yellow Umbrella" },
      { property: "og:description", content: "A little yellow shelter for big emotions." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Story"
        title="A little yellow shelter for big emotions."
        subtitle="We're a tiny studio with a big heart, building gifts that feel less like products and more like memories."
      />
      <section className="py-24 md:py-32 bg-cream">
        <div className="container mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Why yellow</p>
            <h2 className="font-display text-4xl md:text-5xl text-balance">Because joy deserves a colour.</h2>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={150}>
            <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
              <p>The Yellow Umbrella began on a rainy evening, with a single hand-tied gift and a thank-you that wouldn't fit into words.</p>
              <p>What started as a hobby grew into a tiny studio of designers, stylists and writers — all obsessed with one thing: making someone smile the second they lift the lid.</p>
              <p>Today we craft hundreds of bespoke hampers a month for individuals, weddings and brands. No two boxes are the same. Every one carries a story.</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="py-24 bg-ink text-cream">
        <div className="container mx-auto px-5 lg:px-8 grid md:grid-cols-3 gap-10">
          {[
            { t: "Hand-crafted", d: "Every ribbon tied, every note written — by hand." },
            { t: "Emotion-led", d: "We design for the feeling, not the SKU." },
            { t: "Made in India", d: "Delivered across India, with love." },
          ].map((v, i) => (
            <Reveal key={v.t} delay={i * 120}>
              <h3 className="font-display text-3xl text-yellow-brand">{v.t}</h3>
              <p className="mt-3 text-cream/70">{v.d}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
