import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { InquiryForm } from "@/components/site/InquiryForm";
import { Building2, Award, Users, Boxes } from "lucide-react";
import corporate from "@/assets/cat-corporate.jpg";

export const Route = createFileRoute("/corporate")({
  head: () => ({
    meta: [
      { title: "Corporate Gifting in India — The Yellow Umbrella" },
      { name: "description", content: "Premium corporate gift hampers and branded kits for clients, employees and events. Bulk gifting across India." },
      { property: "og:title", content: "Corporate Gifting — The Yellow Umbrella" },
      { property: "og:description", content: "Branded hampers your clients will actually remember." },
    ],
  }),
  component: Page,
});

const FEATS = [
  { icon: Building2, t: "Branded to your identity", d: "Custom colours, foiling, embossed logos and your tone of voice." },
  { icon: Boxes, t: "Bulk made to order", d: "From 25 to 5,000+ hampers, packed and dispatched on time." },
  { icon: Users, t: "Employee & client kits", d: "Onboarding, milestones, festivals, off-sites — covered." },
  { icon: Award, t: "Premium curation", d: "Sourced from artisanal & luxury brands across India." },
];

function Page() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Corporate Gifting" title="Branded hampers your clients will actually remember." subtitle="Bulk gifting, fully customised, delivered across India." />
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
              <img src={corporate} alt="Corporate gifting hamper" loading="lazy" width={1024} height={1280} className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="font-display text-4xl md:text-5xl text-balance">Gifting that does the talking for your brand.</h2>
            <p className="mt-5 text-lg text-muted-foreground">From investor welcome kits to Diwali hampers for 2,000 employees, we design, source, pack and ship — so your team doesn't have to.</p>
            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {FEATS.map((f) => (
                <div key={f.t} className="rounded-2xl border border-border bg-card p-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow-brand mb-3">
                    <f.icon className="h-5 w-5 text-ink" />
                  </span>
                  <h3 className="font-medium">{f.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-5 lg:px-8 max-w-3xl">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl text-center text-balance">Request a corporate quote</h2>
            <p className="mt-4 text-center text-muted-foreground">Share your brief and we'll come back within 24 hours.</p>
          </Reveal>
          <div className="mt-12 rounded-3xl bg-card p-8 md:p-10 border border-border shadow-soft">
            <InquiryForm defaultCategory="Corporate" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
