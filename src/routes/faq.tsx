import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  { q: "How do I place an order?", a: "Send an inquiry through our contact form, WhatsApp or email. We'll share concepts, pricing and a timeline within 24 hours." },
  { q: "Do you ship across India?", a: "Yes, we deliver PAN India through trusted courier partners. International shipping is available on request." },
  { q: "What's the minimum order for corporate gifting?", a: "We start at 25 hampers for corporate orders. We can scale up to thousands with the right lead time." },
  { q: "How much lead time do you need?", a: "Standard gifts: 5–7 days. Personalized: 7–10 days. Bulk corporate: 2–4 weeks depending on volume and customisation." },
  { q: "Can I customize colours, notes and branding?", a: "Absolutely. Customisation is the heart of what we do — colours, ribbons, foil, notes, packaging, the works." },
  { q: "What's your pricing range?", a: "Our hampers start at ₹999 and go up based on contents, packaging and personalisation." },
  { q: "Do you take last-minute orders?", a: "We try our best — reach out on WhatsApp and we'll see what's possible." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — The Yellow Umbrella" },
      { name: "description", content: "Everything you wanted to know about ordering, customisation, shipping and corporate gifting with The Yellow Umbrella." },
      { property: "og:title", content: "FAQ — The Yellow Umbrella" },
      { property: "og:description", content: "Answers to the most-asked questions about our gifting." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero eyebrow="FAQ" title="Things people ask, beautifully answered." />
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-5 lg:px-8 max-w-3xl">
          <Reveal>
            <Accordion type="single" collapsible className="space-y-4">
              {FAQS.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-border bg-card px-6">
                  <AccordionTrigger className="text-left font-display text-xl py-5 hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
