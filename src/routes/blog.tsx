import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";
import birthday from "@/assets/cat-birthday.jpg";
import corporate from "@/assets/cat-corporate.jpg";
import personalized from "@/assets/cat-personalized.jpg";
import surprise from "@/assets/cat-surprise.jpg";

const POSTS = [
  { title: "10 Unique Gift Ideas for a Best Friend's Birthday", excerpt: "Beyond the usual cake and candles — gifts that feel intensely personal.", image: birthday, date: "May 2026", read: "5 min" },
  { title: "Corporate Gifting Trends in India for 2026", excerpt: "What India's top brands are sending to clients this year.", image: corporate, date: "Apr 2026", read: "7 min" },
  { title: "How to Personalize a Gift Without Making it Cheesy", excerpt: "The fine line between thoughtful and tacky.", image: personalized, date: "Mar 2026", read: "4 min" },
  { title: "The Art of the Surprise Box", excerpt: "Why anticipation is the most underrated ingredient in gifting.", image: surprise, date: "Feb 2026", read: "6 min" },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Gifting Ideas & Stories | The Yellow Umbrella" },
      { name: "description", content: "Gifting inspiration, ideas and stories from The Yellow Umbrella's studio." },
      { property: "og:title", content: "The Yellow Umbrella Journal" },
      { property: "og:description", content: "Gifting ideas, trends and emotional stories." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Journal" title="Stories, ideas and a little gifting wisdom." subtitle="Reading time, well spent." />
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-5 lg:px-8 grid gap-10 md:grid-cols-2">
          {POSTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-6">
                  <img src={p.image} alt={p.title} loading="lazy" width={1024} height={640} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <span>{p.date}</span><span>·</span><span>{p.read} read</span>
                </div>
                <h2 className="mt-3 font-display text-3xl text-balance group-hover:text-yellow-deep transition-colors">{p.title}</h2>
                <p className="mt-2 text-muted-foreground">{p.excerpt}</p>
                <Link to="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
                  Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
