'use client';

import Image from 'next/image';
import Link from 'next/link';
import { siteContent } from '@/config/content';

export default function Footer() {
  return (
    <footer
      id="location"
      className="relative z-30 bg-[#070403] text-[#FFF4E0] border-t border-[#F6A525]/20 pt-16 pb-12 px-4 sm:px-6 lg:px-8 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 pb-12 border-b border-[#FFF4E0]/10">
        {/* Column 1: Brand Info */}
        <div className="flex flex-col items-start">
          <Link href="#" className="relative h-12 w-56 mb-4 group">
            <Image
              src="/images/logo-dark.svg"
              alt="BITE THEORY Logo"
              fill
              className="object-contain object-left transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          <p className="text-xs text-[#B8A48C] tracking-widest uppercase font-bold max-w-sm leading-relaxed mb-6">
            {siteContent.hero.subheadline} — Fresh, flame-charred fast food engineered for maximum flavor impact.
          </p>
          <a
            href={siteContent.cta.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-6 py-3 text-xs font-black tracking-widest uppercase shadow-lg hover:scale-105 transition-transform"
            style={{ borderRadius: '0px' }}
          >
            Order Now
          </a>
        </div>

        {/* Column 2: Hours & Location */}
        <div className="flex flex-col justify-start space-y-4">
          <h4 className="text-sm font-black text-[#F6A525] uppercase tracking-[0.2em] font-heading">
            STORE & TIMINGS
          </h4>
          <div className="space-y-2 text-xs font-semibold text-[#FFF4E0]">
            <div>
              <span className="text-[#B8A48C] uppercase tracking-wider block mb-0.5">OPENING HOURS:</span>
              <p className="font-bold text-sm text-[#F6A525]">{siteContent.cta.hours}</p>
            </div>
            <div className="pt-2">
              <span className="text-[#B8A48C] uppercase tracking-wider block mb-0.5">LOCATION:</span>
              <p className="font-medium text-xs leading-relaxed max-w-xs">{siteContent.cta.location}</p>
            </div>
          </div>
        </div>

        {/* Column 3: Quick Links & Socials */}
        <div className="flex flex-col justify-start space-y-4">
          <h4 className="text-sm font-black text-[#F6A525] uppercase tracking-[0.2em] font-heading">
            CONNECT WITH US
          </h4>
          <p className="text-xs text-[#B8A48C] font-medium leading-relaxed max-w-xs">
            Follow the theory on social media for secret menu drops, daily flash deals, and backstage kitchen footage.
          </p>
          <div className="flex items-center space-x-6 text-xs font-black uppercase tracking-widest text-[#FFF4E0] pt-2">
            {siteContent.footer.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F6A525] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#F6A525] hover:after:w-full after:transition-all"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#B8A48C] font-medium tracking-wider gap-4">
        <div>{siteContent.footer.copyright}</div>
        <div className="flex items-center space-x-4 text-[11px] uppercase tracking-widest text-[#B8A48C]/70">
          <span>HIGH-ENERGY FAST FOOD LAB</span>
          <span>•</span>
          <span>RAWALPINDI</span>
        </div>
      </div>
    </footer>
  );
}
