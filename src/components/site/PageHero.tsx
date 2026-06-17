export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div className="absolute inset-0 bg-gradient-spotlight opacity-60" />
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-yellow-brand/30 blur-3xl" />
      <div className="container mx-auto px-5 lg:px-8 py-24 md:py-32 relative">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.3em] text-yellow-brand mb-4">{eyebrow}</p>
        )}
        <h1 className="font-display text-5xl md:text-7xl text-balance max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-6 max-w-2xl text-lg text-cream/70 text-balance">{subtitle}</p>}
      </div>
    </section>
  );
}
