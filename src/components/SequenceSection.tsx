'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface SequenceSectionProps {
  name: 'burger' | 'pizza' | 'rolls';
  count?: number; // default 120
  heightVh?: number; // default 500
  bgColor?: string;
  debug?: boolean;
  onProgressChange?: (progress: number, frame: number) => void;
  children?: React.ReactNode;
}

export default function SequenceSection({
  name,
  count = 120,
  heightVh = 500,
  bgColor = '#0F0906',
  debug = false,
  onProgressChange,
  children,
}: SequenceSectionProps) {
  const trackRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const framesRef = useRef<(HTMLImageElement | null)[]>([]);

  const [loadedCount, setLoadedCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(1);
  const lastDrawnFrameRef = useRef(-1);

  const pad = (n: number) => String(n).padStart(4, '0');
  const getUrl = useCallback((i: number) => `/frames/${name}/${pad(i)}.webp`, [name]);

  const draw = useCallback(
    (idx: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const img = framesRef.current[idx - 1];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const cw = canvas.width;
      const ch = canvas.height;
      if (cw === 0 || ch === 0) return;

      const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
      const s = Math.max(cw / (img.naturalWidth * dpr), ch / (img.naturalHeight * dpr));
      const w = img.naturalWidth * dpr * s;
      const h = img.naturalHeight * dpr * s;

      ctx.save();
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, cw, ch);
      ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
      ctx.restore();

      lastDrawnFrameRef.current = idx;
    },
    [bgColor]
  );

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
    canvas.width = Math.round(canvas.clientWidth * dpr);
    canvas.height = Math.round(canvas.clientHeight * dpr);
    lastDrawnFrameRef.current = -1;
    if (currentFrame > 0) {
      draw(currentFrame);
    }
  }, [currentFrame, draw]);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const r = track.getBoundingClientRect();
    const windowH = typeof window !== 'undefined' ? window.innerHeight || 1 : 1;
    const scrollableH = r.height - windowH;

    const p = scrollableH > 0 ? Math.min(1, Math.max(0, -r.top / scrollableH)) : 0;
    const f = count > 0 ? Math.round(p * (count - 1)) + 1 : 1;

    track.style.setProperty('--p', String(p));
    setProgress(p);
    setCurrentFrame(f);

    if (onProgressChange) {
      onProgressChange(p, f);
    }

    if (f !== lastDrawnFrameRef.current) {
      draw(f);
    }
  }, [count, draw, onProgressChange]);

  // Load all frames
  useEffect(() => {
    let cancelled = false;
    framesRef.current = new Array(count).fill(null);
    setLoadedCount(0);
    lastDrawnFrameRef.current = -1;

    let loaded = 0;
    for (let i = 1; i <= count; i++) {
      const img = new Image();
      const url = getUrl(i);
      img.onload = () => {
        if (cancelled) return;
        framesRef.current[i - 1] = img;
        loaded++;
        setLoadedCount(loaded);
        update();
      };
      img.onerror = (e) => {
        console.error(`[SequenceSection] 404/Error loading image: ${url}`, e);
      };
      img.src = url;
    }

    return () => {
      cancelled = true;
    };
  }, [name, count, getUrl, update]);

  // Attach window scroll & resize listeners
  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.addEventListener('resize', resize);
    window.addEventListener('scroll', update, { passive: true });

    resize();
    update();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', update);
    };
  }, [resize, update]);

  return (
    <section
      ref={trackRef}
      style={{ height: `${heightVh}vh`, position: 'relative' }}
    >
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
        <canvas
          ref={canvasRef}
          style={{ width: '100%', height: '100%', display: 'block' }}
        />

        {debug && (
          <div
            style={{
              position: 'fixed',
              left: '12px',
              top: '12px',
              background: 'rgba(0,0,0,.85)',
              color: '#F6A525',
              padding: '10px 14px',
              font: '14px/1.5 ui-monospace, Consolas, monospace',
              zIndex: 999,
              borderRadius: '6px',
              whiteSpace: 'pre',
              border: '1px solid #F6A525',
              pointerEvents: 'none',
            }}
          >
            {`sequence : ${name}\n` +
              `loaded   : ${loadedCount} / ${count}\n` +
              `progress : ${progress.toFixed(3)}\n` +
              `frame    : ${currentFrame} / ${count}`}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
