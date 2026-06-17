import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { InquiryForm } from "@/components/site/InquiryForm";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Yellow Umbrella" },
      { name: "description", content: "Send an inquiry, WhatsApp us or call. We'll help you craft the perfect gift." },
      { property: "og:title", content: "Contact — The Yellow Umbrella" },
      { property: "og:description", content: "Tell us about the moment. We'll wrap it up." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Get in touch" title="Tell us about the moment." subtitle="Drop a note, WhatsApp, or call — whatever's easiest for you." />
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-5 lg:px-8 grid lg:grid-cols-5 gap-12">
          <Reveal className="lg:col-span-2">
            <h2 className="font-display text-3xl">Reach out</h2>
            <p className="mt-3 text-muted-foreground">We respond within 24 hours, Mon–Sat.</p>
            <div className="mt-8 space-y-4">
              <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl bg-card border border-border p-5 hover:shadow-soft transition-shadow">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-medium">WhatsApp</div>
                  <div className="text-sm text-muted-foreground">Quickest response</div>
                </div>
              </a>
              <a href="tel:+910000000000" className="flex items-center gap-4 rounded-2xl bg-card border border-border p-5 hover:shadow-soft transition-shadow">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-yellow-brand">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-medium">+91 00000 00000</div>
                  <div className="text-sm text-muted-foreground">Mon–Sat · 10am–7pm</div>
                </div>
              </a>
              <a href="mailto:hello@theyellowumbrella.in" className="flex items-center gap-4 rounded-2xl bg-card border border-border p-5 hover:shadow-soft transition-shadow">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-yellow-brand text-ink">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-medium">hello@theyellowumbrella.in</div>
                  <div className="text-sm text-muted-foreground">For inquiries & orders</div>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl bg-card border border-border p-5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-muted text-foreground">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-medium">Studio</div>
                  <div className="text-sm text-muted-foreground">India · Delivering nationwide</div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-3" delay={150}>
            <div className="rounded-3xl bg-card p-8 md:p-10 border border-border shadow-soft">
              <h3 className="font-display text-2xl mb-1">Send an inquiry</h3>
              <p className="text-sm text-muted-foreground mb-6">We'll be in touch within 24 hours.</p>
              <InquiryForm />
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
