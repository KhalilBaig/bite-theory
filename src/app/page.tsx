'use client';

import { useState, useCallback } from 'react';
import SmoothScroll from '@/components/SmoothScroll';
import Loader from '@/components/Loader';
import Nav from '@/components/Nav';
import SequenceSection from '@/components/SequenceSection';
import HeroSection from '@/components/HeroSection';
import BreakdownSection from '@/components/BreakdownSection';
import CraftSection from '@/components/CraftSection';
import ReassemblyOverlay from '@/components/ReassemblyOverlay';
import PizzaSection from '@/components/PizzaSection';
import RollsSection from '@/components/RollsSection';
import MenuSection from '@/components/MenuSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [burgerProgress, setBurgerProgress] = useState(0);

  const handleBurgerProgressChange = useCallback((progress: number) => {
    setBurgerProgress(progress);
  }, []);

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Loader onComplete={handleLoaderComplete} />}

      <SmoothScroll>
        <Nav />

        <main className="relative w-full bg-[#0F0906] min-h-screen">
          {/* SECTION 1: PIZZA CINEMATIC SEQUENCE (500vh Sticky Track) */}
          <div id="pizza">
            <PizzaSection />
          </div>

          {/* SECTION 2: BURGER CINEMATIC SEQUENCE (500vh Sticky Track) */}
          <div id="theory">
            <SequenceSection
              name="burger"
              count={120}
              heightVh={500}
              bgColor="#07080b"
              onProgressChange={handleBurgerProgressChange}
            >
              <HeroSection progress={burgerProgress} />
              <BreakdownSection progress={burgerProgress} />
              <CraftSection progress={burgerProgress} />
              <ReassemblyOverlay progress={burgerProgress} />
            </SequenceSection>
          </div>

          {/* SECTION 3: ROLLS CINEMATIC SEQUENCE (500vh Sticky Track) */}
          <div id="rolls">
            <RollsSection />
          </div>

          {/* SECTION 4: MENU (LIGHT PALETTE SECTION) */}
          <MenuSection />

          {/* SECTION 5: FINAL REASSEMBLY CTA & LOCATION */}
          <CTASection />
        </main>

        <Footer />
      </SmoothScroll>
    </>
  );
}
