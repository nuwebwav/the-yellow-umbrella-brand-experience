import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import birthday from "@/assets/cat-birthday.jpg";
import corporate from "@/assets/cat-corporate.jpg";
import personalized from "@/assets/cat-personalized.jpg";
import surprise from "@/assets/cat-surprise.jpg";

const IMAGES = [birthday, corporate, personalized, surprise, surprise, birthday, personalized, corporate, birthday, surprise, personalized, corporate];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — The Yellow Umbrella" },
      { name: "description", content: "A peek inside our recent gift setups, hampers and brand kits." },
      { property: "og:title", content: "Gallery — The Yellow Umbrella" },
      { property: "og:description", content: "Real moments, really opened." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Gallery" title="Real moments, really opened." subtitle="A scrapbook of our favourite setups, hampers and surprises." />
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
            {IMAGES.map((src, i) => (
              <Reveal key={i} delay={(i % 6) * 60}>
                <div className="mb-4 break-inside-avoid overflow-hidden rounded-2xl group">
                  <img
                    src={src}
                    alt="Yellow Umbrella gift setup"
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/5]"}`}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
