'use client';

import { siteContent } from '@/config/content';

interface ReassemblyOverlayProps {
  progress: number;
}

export default function ReassemblyOverlay({ progress }: ReassemblyOverlayProps) {
  // Active when progress is between 82% and 100%
  const isVisible = progress >= 0.82;

  if (!isVisible) return null;

  const opacity = Math.min(1, (progress - 0.82) * 6);

  return (
    <div
      className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between items-center px-4 py-16 sm:py-20 transition-opacity duration-300"
      style={{ opacity }}
    >
      <div className="mt-12 sm:mt-16 text-center">
        <span className="inline-block px-4 py-1.5 bg-[#1A110C]/90 border border-[#F6A525]/30 text-[#F6A525] text-xs font-black tracking-[0.3em] uppercase backdrop-blur-md">
          REASSEMBLED TO PERFECTION
        </span>
      </div>

      <div className="flex flex-col items-center text-center my-auto max-w-4xl pointer-events-auto">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#FFF4E0] tracking-tight uppercase font-heading drop-shadow-2xl mb-4">
          THE THEORY ASSEMBLED
        </h2>
        <p className="text-sm sm:text-lg text-[#B8A48C] font-semibold tracking-wider uppercase mb-8 max-w-xl">
          Every layer engineered for maximum flavor impact. Fresh. Fast. Fired up.
        </p>

        <a
          href={siteContent.cta.orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary px-8 py-4 text-xs sm:text-sm font-black tracking-[0.2em] uppercase shadow-2xl hover:scale-105 transition-transform"
        >
          ORDER THIS BURGER NOW
        </a>
      </div>
    </div>
  );
}
