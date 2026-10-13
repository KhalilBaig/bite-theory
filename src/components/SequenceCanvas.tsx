'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SequenceCanvasProps {
  sequence: 'burger' | 'pizza' | 'rolls';
  frameCount: number; // 120
  onFrameUpdate?: (progress: number, frameIndex: number) => void;
  bgColor?: string;
  className?: string;
  debug?: boolean;
  children?: React.ReactNode;
}

export default function SequenceCanvas({
  sequence,
  frameCount = 120,
  onFrameUpdate,
  bgColor = '#07080b',
  className = '',
  debug = false,
  children,
}: SequenceCanvasProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isFullyPreloaded, setIsFullyPreloaded] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [currentFrameIndex, setCurrentFrameIndex] = useState<number>(1);

  const animFrameIdRef = useRef<number | null>(null);
  const lastDrawnFrameRef = useRef<number>(-1);

  // Helper to build frame path e.g. /frames/burger/0001.webp
  const getFramePath = useCallback(
    (index: number) => {
      const paddedIndex = String(index).padStart(4, '0');
      return `/frames/${sequence}/${paddedIndex}.webp`;
    },
    [sequence]
  );

  // Draw current frame on canvas with 'cover' fitting and devicePixelRatio scaling
  const drawFrame = useCallback(
    (frameIdx: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const images = imagesRef.current;
      if (!images || images.length === 0) return;

      // Ensure index is within range [1, frameCount]
      const validIndex = Math.max(1, Math.min(frameCount, frameIdx));
      let img = images[validIndex - 1];

      // Fallback to nearest loaded image if current requested frame is not ready
      if (!img || !img.complete || img.naturalWidth === 0) {
        for (let offset = 1; offset < frameCount; offset++) {
          const prev = validIndex - offset;
          if (prev >= 1 && images[prev - 1]?.complete && images[prev - 1]?.naturalWidth > 0) {
            img = images[prev - 1];
            break;
          }
          const next = validIndex + offset;
          if (next <= frameCount && images[next - 1]?.complete && images[next - 1]?.naturalWidth > 0) {
            img = images[next - 1];
            break;
          }
        }
      }

      const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      if (width === 0 || height === 0) return;

      if (canvas.width !== Math.floor(width * dpr) || canvas.height !== Math.floor(height * dpr)) {
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
      }

      ctx.save();
      ctx.scale(dpr, dpr);

      // Clear canvas with section background color
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);

      if (img && img.complete && img.naturalWidth > 0) {
        const imgRatio = img.naturalWidth / img.naturalHeight;
        const canvasRatio = width / height;

        let drawW = width;
        let drawH = height;
        let offsetX = 0;
        let offsetY = 0;

        // Cover fit behavior
        if (imgRatio > canvasRatio) {
          drawW = height * imgRatio;
          offsetX = (width - drawW) / 2;
        } else {
          drawH = width / imgRatio;
          offsetY = (height - drawH) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
      }

      ctx.restore();
      lastDrawnFrameRef.current = validIndex;
    },
    [bgColor, frameCount]
  );

  // Preload all frames for this section
  useEffect(() => {
    let isCancelled = false;
    imagesRef.current = [];
    setLoadedCount(0);
    setIsFullyPreloaded(false);

    let count = 0;
    const newImages: HTMLImageElement[] = [];

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const src = getFramePath(i);

      img.onload = () => {
        if (isCancelled) return;
        count++;
        setLoadedCount(count);
        if (count >= frameCount) {
          setIsFullyPreloaded(true);
        }
        if (i === 1 || lastDrawnFrameRef.current === i) {
          drawFrame(lastDrawnFrameRef.current > 0 ? lastDrawnFrameRef.current : 1);
        }
      };

      img.onerror = (e) => {
        console.error(`[SequenceCanvas] 404/Error loading image: ${src}`, e);
      };

      img.src = src;
      newImages.push(img);
    }

    imagesRef.current = newImages;

    // Initial draw frame 1
    drawFrame(1);

    return () => {
      isCancelled = true;
    };
  }, [sequence, frameCount, getFramePath, drawFrame]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      drawFrame(currentFrameIndex);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame, currentFrameIndex]);

  // Sync GSAP ScrollTrigger to calculate scroll progress and update frame in requestAnimationFrame
  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion =
      typeof window !== 'undefined'
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false;

    if (prefersReducedMotion) {
      drawFrame(1);
      return;
    }

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.1,
      onUpdate: (self) => {
        const prog = self.progress;
        setScrollProgress(prog);

        // Calculate target frame index: Math.round(scrollProgress * (count - 1)) + 1
        const targetFrame = Math.round(prog * (frameCount - 1)) + 1;
        const validFrame = Math.max(1, Math.min(frameCount, targetFrame));

        setCurrentFrameIndex(validFrame);

        if (onFrameUpdate) {
          onFrameUpdate(prog, validFrame);
        }

        // Draw in requestAnimationFrame only when frame index changes
        if (validFrame !== lastDrawnFrameRef.current) {
          if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
          animFrameIdRef.current = requestAnimationFrame(() => {
            drawFrame(validFrame);
          });
        }
      },
    });

    return () => {
      st.kill();
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [frameCount, drawFrame, onFrameUpdate]);

  const loadingPercentage = Math.round((loadedCount / frameCount) * 100);

  return (
    <section
      ref={sectionRef}
      className={`relative h-[400vh] bg-[#07080b] ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Sticky 100vh Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Canvas Element */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover block touch-none select-none"
          aria-label={`${sequence} sequence animation canvas`}
        />

        {/* Section Preloader Overlay if not fully preloaded */}
        {!isFullyPreloaded && (
          <div className="absolute inset-0 bg-[#07080b]/90 backdrop-blur-sm flex flex-col items-center justify-center z-30 pointer-events-none transition-opacity duration-300">
            <div className="text-[#F6A525] font-extrabold text-xs tracking-[0.25em] uppercase mb-2">
              PRELOADING {sequence.toUpperCase()} FRAMES ({loadingPercentage}%)
            </div>
            <div className="w-48 h-1 bg-[#1A110C] overflow-hidden">
              <div
                className="h-full bg-[#F6A525] transition-all duration-75"
                style={{ width: `${loadingPercentage}%` }}
              />
            </div>
          </div>
        )}

        {/* Debug Overlay */}
        {debug && (
          <div className="absolute top-4 right-4 z-50 px-3 py-2 bg-[#000000]/90 border border-[#F6A525] text-[#F6A525] text-xs font-mono font-bold rounded shadow-xl pointer-events-none flex flex-col gap-0.5">
            <div>SEQUENCE: {sequence.toUpperCase()}</div>
            <div>PROGRESS: {(scrollProgress * 100).toFixed(1)}%</div>
            <div>FRAME: {currentFrameIndex} / {frameCount}</div>
            <div>LOADED: {loadedCount} / {frameCount}</div>
          </div>
        )}

        {/* Section Children Overlays (Text / Callouts) */}
        {children}
      </div>
    </section>
  );
}
