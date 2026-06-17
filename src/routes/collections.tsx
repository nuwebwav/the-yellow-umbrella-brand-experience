import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";
import birthday from "@/assets/cat-birthday.jpg";
import corporate from "@/assets/cat-corporate.jpg";
import personalized from "@/assets/cat-personalized.jpg";
import surprise from "@/assets/cat-surprise.jpg";

const COLLECTIONS = [
  { title: "Birthday Magic", image: birthday, copy: "Hampers that turn ordinary days into stories.", price: "From ₹1,499" },
  { title: "Corporate Hampers", image: corporate, copy: "Branded gifting that says thank you, beautifully.", price: "From ₹999/box" },
  { title: "Personalized", image: personalized, copy: "Names, dates, photos — gifts that feel like yours.", price: "From ₹1,799" },
  { title: "Surprise Boxes", image: surprise, copy: "Theatre in a box. Open. Gasp. Repeat.", price: "From ₹2,499" },
  { title: "Wedding Trousseau", image: personalized, copy: "Trousseau packing & guest hampers.", price: "On request" },
  { title: "New Born", image: surprise, copy: "Tiny gifts for the tiniest new arrivals.", price: "From ₹1,999" },
];

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — The Yellow Umbrella" },
      { name: "description", content: "Explore our gifting collections — birthday, corporate, personalized, surprise boxes and weddings." },
      { property: "og:title", content: "Gifting Collections — The Yellow Umbrella" },
      { property: "og:description", content: "Hand-crafted hampers for every emotion." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Our Collections" title="A gift for every feeling." subtitle="Curated themes you can pick as-is, or remix into something one-of-a-kind." />
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-5 lg:px-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {COLLECTIONS.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="group h-full tilt-card">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink">
                  <img src={c.image} alt={c.title} loading="lazy" width={1024} height={1280} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
                  <div className="absolute top-5 right-5 inline-flex rounded-full bg-yellow-brand text-ink text-xs font-medium px-3 py-1.5">{c.price}</div>
                  <div className="absolute inset-x-0 bottom-0 p-7 text-cream">
                    <h3 className="font-display text-3xl">{c.title}</h3>
                    <p className="mt-2 text-cream/75">{c.copy}</p>
                    <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm text-yellow-brand">
                      Request quote <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
