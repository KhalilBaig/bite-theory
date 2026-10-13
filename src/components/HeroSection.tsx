'use client';

import { siteContent } from '@/config/content';

interface HeroSectionProps {
  progress: number;
}

export default function HeroSection({ progress }: HeroSectionProps) {
  // Fade out smoothly between 0% and 12% scroll progress
  const opacity = Math.max(0, 1 - progress * 8);
  const translateY = progress * -80;

  if (opacity <= 0.01) return null;

  return (
    <div
      className="absolute inset-0 pointer-events-none flex flex-col justify-between items-center px-4 py-16 sm:py-20 z-20 transition-opacity duration-150"
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      {/* Top Header Tagline */}
      <div className="mt-12 sm:mt-16 text-center">
        <span className="inline-block px-4 py-1 bg-[#1A110C]/80 border border-[#F6A525]/30 text-[#F6A525] text-xs font-extrabold tracking-[0.3em] uppercase backdrop-blur-md">
          {siteContent.hero.subheadline}
        </span>
      </div>

      {/* Main Hero Headline - Ultra bold typography framing the floating burger */}
      <div className="flex flex-col items-center text-center my-auto max-w-6xl">
        <h1 className="text-[clamp(44px,9.5vw,140px)] font-black tracking-tight text-[#FFF4E0] leading-[0.85] font-heading drop-shadow-2xl">
          BITE <span className="text-[#F6A525]">THEORY</span>
        </h1>
        <p className="mt-3 text-base sm:text-2xl font-extrabold tracking-[0.2em] text-[#FFF4E0] uppercase opacity-95">
          {siteContent.hero.tagline}
        </p>

        {/* Primary Action Button */}
        <div className="mt-6 pointer-events-auto">
          <a
            href={siteContent.cta.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 text-xs sm:text-sm font-black tracking-[0.2em] uppercase shadow-2xl hover:scale-105 transition-transform"
          >
            {siteContent.hero.ctaText}
          </a>
        </div>
      </div>

      {/* Bottom Scroll Hint Indicator */}
      <div className="mb-2 flex flex-col items-center animate-bounce">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#B8A48C] font-extrabold mb-1">
          {siteContent.hero.scrollHint}
        </span>
        <svg
          className="w-5 h-5 text-[#F6A525]"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}
