'use client';

import SequenceSection from './SequenceSection';

export default function RollsSection() {
  return (
    <SequenceSection name="rolls" count={120} heightVh={500} bgColor="#07080b">
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 sm:p-12 z-20">
        <div className="text-center mt-12 sm:mt-16">
          <span className="inline-block px-4 py-1.5 bg-[#1A110C]/90 border border-[#F6A525]/30 text-[#F6A525] text-xs font-black tracking-[0.3em] uppercase backdrop-blur-md mb-2">
            SIGNATURE ROLLS & WRAPS
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#FFF4E0] tracking-tight uppercase font-heading">
            THE ROLL THEORY
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[#B8A48C] font-extrabold tracking-[0.2em] uppercase">
            FLAME-CHARRED WRAPS FILLED WITH SIZZLING FLAVOR
          </p>
        </div>
      </div>
    </SequenceSection>
  );
}
