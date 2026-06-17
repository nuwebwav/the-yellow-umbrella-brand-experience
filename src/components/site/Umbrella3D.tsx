import { useEffect, useRef } from "react";

/**
 * Lightweight pseudo-3D umbrella scene built with CSS transforms + parallax.
 * No webgl — keeps it fast and mobile-friendly.
 */
export function Umbrella3D() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
      el.style.setProperty("--rx", `${(-y * 8).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${(x * 12).toFixed(2)}deg`);
    };
    const onLeave = () => {
      el.style.setProperty("--rx", `0deg`);
      el.style.setProperty("--ry", `0deg`);
    };
    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-square w-full max-w-[640px] mx-auto"
      style={{ perspective: "1200px" }}
    >
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{ transform: "rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))", transformStyle: "preserve-3d" }}
      >
        {/* Soft sun glow */}
        <div className="absolute inset-0 bg-gradient-sun blur-3xl opacity-60" />

        {/* Slow rotating ring */}
        <div className="absolute inset-6 rounded-full border border-yellow-brand/30 animate-spin-slow" />
        <div className="absolute inset-16 rounded-full border border-yellow-brand/20 animate-spin-slow" style={{ animationDuration: "60s", animationDirection: "reverse" }} />

        {/* Umbrella SVG */}
        <div className="absolute inset-0 flex items-center justify-center animate-umbrella" style={{ transform: "translateZ(60px)" }}>
          <svg viewBox="0 0 400 400" className="w-[78%] drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)]">
            <defs>
              <radialGradient id="dome" cx="50%" cy="35%" r="65%">
                <stop offset="0%" stopColor="oklch(0.96 0.16 95)" />
                <stop offset="60%" stopColor="oklch(0.85 0.19 90)" />
                <stop offset="100%" stopColor="oklch(0.7 0.18 80)" />
              </radialGradient>
              <linearGradient id="rib" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.2 0 0)" />
                <stop offset="100%" stopColor="oklch(0.1 0 0)" />
              </linearGradient>
            </defs>
            {/* dome */}
            <path d="M40 200 Q200 20 360 200 Q310 180 280 200 Q240 175 220 200 Q200 175 180 200 Q160 175 120 200 Q90 180 40 200 Z" fill="url(#dome)" />
            {/* ribs */}
            {[...Array(7)].map((_, i) => {
              const x = 40 + (i * (320 / 6));
              return <line key={i} x1="200" y1="60" x2={x} y2="200" stroke="oklch(0.15 0 0 / 0.35)" strokeWidth="1.2" />;
            })}
            {/* shaft */}
            <line x1="200" y1="60" x2="200" y2="340" stroke="url(#rib)" strokeWidth="6" strokeLinecap="round" />
            {/* handle */}
            <path d="M200 340 Q200 380 240 380 Q260 380 260 360" stroke="url(#rib)" strokeWidth="8" fill="none" strokeLinecap="round" />
            {/* tip */}
            <circle cx="200" cy="58" r="6" fill="oklch(0.15 0 0)" />
          </svg>
        </div>

        {/* Floating gift boxes */}
        <FloatingBox className="left-[6%] top-[18%] animate-float-slow" rotate="-12deg" depth={120} />
        <FloatingBox className="right-[8%] top-[22%] animate-float-slow [animation-delay:1.2s]" rotate="14deg" depth={140} />
        <FloatingBox className="left-[14%] bottom-[14%] animate-float-slow [animation-delay:.6s]" rotate="6deg" depth={90} />
        <FloatingBox className="right-[12%] bottom-[18%] animate-float-slow [animation-delay:1.8s]" rotate="-8deg" depth={110} small />

        {/* Confetti dots */}
        {[...Array(14)].map((_, i) => (
          <span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-yellow-brand/70 animate-float-slow"
            style={{
              left: `${(i * 73) % 100}%`,
              top: `${(i * 41) % 100}%`,
              animationDelay: `${i * 0.3}s`,
              transform: `translateZ(${30 + i * 4}px)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function FloatingBox({
  className = "",
  rotate = "0deg",
  depth = 80,
  small = false,
}: {
  className?: string;
  rotate?: string;
  depth?: number;
  small?: boolean;
}) {
  const size = small ? 56 : 78;
  return (
    <div
      className={`absolute ${className}`}
      style={{ transform: `translateZ(${depth}px) rotate(${rotate})`, width: size, height: size }}
    >
      <div className="relative h-full w-full rounded-md bg-ink shadow-elegant overflow-hidden">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-2 bg-yellow-brand" />
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-2 bg-yellow-brand" />
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-3 w-6 rounded-full bg-yellow-brand" />
      </div>
    </div>
  );
}
