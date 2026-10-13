'use client';

import { siteContent } from '@/config/content';

export default function CTASection() {
  return (
    <section
      id="location"
      className="relative z-30 bg-[#0F0906] text-[#FFF4E0] py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-[#F6A525]/20"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Sub-badge */}
        <span className="inline-block px-4 py-1.5 bg-[#1A110C] border border-[#F6A525]/30 text-[#F6A525] text-xs font-extrabold tracking-[0.3em] uppercase mb-6">
          FAST FOOD ELEVATED
        </span>

        {/* Large Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#FFF4E0] tracking-tight uppercase max-w-4xl leading-tight font-heading">
          {siteContent.cta.headline}
        </h2>
        <p className="mt-6 text-base sm:text-xl text-[#B8A48C] max-w-2xl font-medium leading-relaxed">
          {siteContent.cta.description}
        </p>

        {/* Primary CTA Button */}
        <div className="mt-10 mb-16">
          <a
            href={siteContent.cta.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-10 py-5 text-base sm:text-lg font-extrabold tracking-widest uppercase shadow-2xl"
          >
            Order Now Direct
          </a>
        </div>

        {/* Info Grid (Delivery, Pickup, Hours, Location) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
          {/* Delivery Info */}
          <div className="p-6 bg-[#1A110C] border border-[#F6A525]/20">
            <div className="w-10 h-10 bg-[#F6A525]/10 border border-[#F6A525] flex items-center justify-center text-[#F6A525] font-bold text-lg mb-4">
              ⚡
            </div>
            <h3 className="text-sm font-extrabold text-[#FFF4E0] uppercase tracking-wider mb-2">
              Express Delivery
            </h3>
            <p className="text-xs text-[#B8A48C] leading-relaxed">
              {siteContent.cta.deliveryInfo}
            </p>
          </div>

          {/* Pickup Info */}
          <div className="p-6 bg-[#1A110C] border border-[#F6A525]/20">
            <div className="w-10 h-10 bg-[#F6A525]/10 border border-[#F6A525] flex items-center justify-center text-[#F6A525] font-bold text-lg mb-4">
              🛍️
            </div>
            <h3 className="text-sm font-extrabold text-[#FFF4E0] uppercase tracking-wider mb-2">
              Hot Pickup
            </h3>
            <p className="text-xs text-[#B8A48C] leading-relaxed">
              {siteContent.cta.pickupInfo}
            </p>
          </div>

          {/* Opening Hours */}
          <div className="p-6 bg-[#1A110C] border border-[#F6A525]/20">
            <div className="w-10 h-10 bg-[#F6A525]/10 border border-[#F6A525] flex items-center justify-center text-[#F6A525] font-bold text-lg mb-4">
              🕒
            </div>
            <h3 className="text-sm font-extrabold text-[#FFF4E0] uppercase tracking-wider mb-2">
              Opening Hours
            </h3>
            <p className="text-xs text-[#B8A48C] leading-relaxed">
              {siteContent.cta.hours}
            </p>
          </div>

          {/* Location */}
          <div className="p-6 bg-[#1A110C] border border-[#F6A525]/20">
            <div className="w-10 h-10 bg-[#F6A525]/10 border border-[#F6A525] flex items-center justify-center text-[#F6A525] font-bold text-lg mb-4">
              📍
            </div>
            <h3 className="text-sm font-extrabold text-[#FFF4E0] uppercase tracking-wider mb-2">
              Our Location
            </h3>
            <p className="text-xs text-[#B8A48C] leading-relaxed">
              {siteContent.cta.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
