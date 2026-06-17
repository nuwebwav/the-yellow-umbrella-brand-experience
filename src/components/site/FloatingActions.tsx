import { MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/910000000000?text=Hi%20Yellow%20Umbrella%2C%20I'd%20like%20to%20enquire%20about%20a%20gift."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-110 transition-transform"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <MessageCircle className="h-6 w-6 relative" />
      </a>
      <a
        href="tel:+910000000000"
        aria-label="Call us"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-ink text-yellow-brand shadow-elegant hover:scale-110 transition-transform"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
