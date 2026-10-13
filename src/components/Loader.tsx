'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Simulate initial preload progress up to 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(onComplete, 600);
          }, 200);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0F0906] transition-opacity duration-700 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center max-w-xs sm:max-w-md w-full px-6">
        {/* Brand Logo */}
        <div className="relative w-64 sm:w-80 h-20 mb-8 animate-pulse">
          <Image
            src="/images/logo-dark.svg"
            alt="BITE THEORY Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Loading Progress Bar */}
        <div className="w-full h-1 bg-[#1A110C] overflow-hidden relative mb-4">
          <div
            className="h-full bg-[#F6A525] transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Counter & Status */}
        <div className="w-full flex justify-between items-center text-xs tracking-widest font-mono text-[#B8A48C]">
          <span className="uppercase">DECONSTRUCTING FLAVOR</span>
          <span className="text-[#F6A525] font-bold text-sm">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
