'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteContent } from '@/config/content';

export default function Nav() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (currentScrollY / maxScroll) * 100 : 0;
      setScrollProgress(progress);

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Top Thin Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#F6A525] via-[#FFC107] to-[#F6A525] transition-all duration-75 ease-out shadow-[0_0_10px_#F6A525]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-[#0F0906]/85 backdrop-blur-xl border-b border-[#F6A525]/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-gradient-to-b from-[#0F0906]/90 via-[#0F0906]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="#" className="relative flex items-center h-10 w-44 sm:w-52 group">
            <Image
              src="/images/logo-dark.svg"
              alt="BITE THEORY"
              fill
              priority
              className="object-contain object-left transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-black uppercase tracking-[0.2em] text-[#FFF4E0]">
            <a
              href="#pizza"
              className="hover:text-[#F6A525] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#F6A525] hover:after:w-full after:transition-all"
            >
              Pizza
            </a>
            <a
              href="#theory"
              className="hover:text-[#F6A525] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#F6A525] hover:after:w-full after:transition-all"
            >
              Burgers
            </a>
            <a
              href="#rolls"
              className="hover:text-[#F6A525] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#F6A525] hover:after:w-full after:transition-all"
            >
              Rolls & Wraps
            </a>
            <a
              href="#menu"
              className="hover:text-[#F6A525] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#F6A525] hover:after:w-full after:transition-all"
            >
              Menu
            </a>
            <a
              href="#location"
              className="hover:text-[#F6A525] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#F6A525] hover:after:w-full after:transition-all"
            >
              Location
            </a>
          </nav>

          {/* Action Buttons Container */}
          <div className="flex items-center space-x-4">
            <a
              href={siteContent.cta.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-5 py-2.5 text-xs sm:text-sm font-black tracking-widest uppercase shadow-lg hover:shadow-[#F6A525]/30 hover:scale-105 transition-all"
              style={{ borderRadius: '0px' }}
            >
              Order Now
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#FFF4E0] hover:text-[#F6A525] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.293 5.293a1 1 0 011.414 1.414L13.414 12l6.293 6.293a1 1 0 01-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 12 4.293 5.707a1 1 0 011.414-1.414L12 10.586l6.293-6.293z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0F0906]/95 backdrop-blur-2xl border-b border-[#F6A525]/20 px-6 py-6 transition-all">
            <nav className="flex flex-col space-y-4 text-sm font-black uppercase tracking-[0.2em] text-[#FFF4E0]">
              <a
                href="#pizza"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#F6A525] py-1 border-b border-[#FFF4E0]/10"
              >
                Pizza
              </a>
              <a
                href="#theory"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#F6A525] py-1 border-b border-[#FFF4E0]/10"
              >
                Burgers
              </a>
              <a
                href="#rolls"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#F6A525] py-1 border-b border-[#FFF4E0]/10"
              >
                Rolls & Wraps
              </a>
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#F6A525] py-1 border-b border-[#FFF4E0]/10"
              >
                Menu
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#F6A525] py-1"
              >
                Location
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
