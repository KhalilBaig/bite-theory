'use client';

interface CraftSectionProps {
  progress: number;
}

export default function CraftSection({ progress }: CraftSectionProps) {
  // Active when progress is between 60% and 82%
  const isVisible = progress >= 0.6 && progress <= 0.82;

  if (!isVisible) return null;

  // Calculate opacity ramp in and out
  const fadeIn = Math.min(1, (progress - 0.6) * 10);
  const fadeOut = Math.min(1, (0.82 - progress) * 10);
  const opacity = Math.min(fadeIn, fadeOut);

  return (
    <div
      className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-6 sm:p-12 transition-opacity duration-300"
      style={{ opacity }}
    >
      {/* Top Header Tagline */}
      <div className="text-center mt-12 sm:mt-16">
        <span className="inline-block px-4 py-1.5 bg-[#1A110C]/90 border border-[#F6A525]/30 text-[#F6A525] text-xs font-black tracking-[0.3em] uppercase backdrop-blur-md">
          UNCOMPROMISING FAST FOOD CRAFT
        </span>
      </div>

      {/* 3 Craft Highlights Overlaid over the Floating Exploded Food */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 my-auto pointer-events-auto">
        {/* Concept 1 */}
        <div className="p-6 bg-[#0F0906]/90 border-t-4 border-[#F6A525] backdrop-blur-md shadow-2xl transition-transform hover:-translate-y-1">
          <div className="text-3xl font-black text-[#F6A525] font-heading mb-2">
            01
          </div>
          <h3 className="text-lg sm:text-xl font-black text-[#FFF4E0] font-heading mb-2 uppercase">
            Fresh Ingredients
          </h3>
          <p className="text-xs text-[#B8A48C] leading-relaxed">
            Sourced fresh every morning from local partner farms. Never frozen.
          </p>
        </div>

        {/* Concept 2 */}
        <div className="p-6 bg-[#0F0906]/90 border-t-4 border-[#F6A525] backdrop-blur-md shadow-2xl transition-transform hover:-translate-y-1">
          <div className="text-3xl font-black text-[#F6A525] font-heading mb-2">
            02
          </div>
          <h3 className="text-lg sm:text-xl font-black text-[#FFF4E0] font-heading mb-2 uppercase">
            Made To Order
          </h3>
          <p className="text-xs text-[#B8A48C] leading-relaxed">
            Hot, fast, and fired up the exact moment your order hits our kitchen.
          </p>
        </div>

        {/* Concept 3 */}
        <div className="p-6 bg-[#0F0906]/90 border-t-4 border-[#F6A525] backdrop-blur-md shadow-2xl transition-transform hover:-translate-y-1">
          <div className="text-3xl font-black text-[#F6A525] font-heading mb-2">
            03
          </div>
          <h3 className="text-lg sm:text-xl font-black text-[#FFF4E0] font-heading mb-2 uppercase">
            House Sauces
          </h3>
          <p className="text-xs text-[#B8A48C] leading-relaxed">
            Signature recipes whipped from scratch daily using slow-simmered spices.
          </p>
        </div>
      </div>
    </div>
  );
}
