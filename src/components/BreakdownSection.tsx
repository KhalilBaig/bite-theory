'use client';

interface LayerCalloutItem {
  framePercent: number; // 0 to 100 percentage range of explosion
  title: string;
  subtitle: string;
  side: 'left' | 'right';
  topPercent: number;
}

const burgerCallouts: LayerCalloutItem[] = [
  {
    framePercent: 20,
    title: 'ARTISANAL BRIOCHE',
    subtitle: 'Toasted in real butter with golden sesame crown.',
    side: 'left',
    topPercent: 22,
  },
  {
    framePercent: 30,
    title: 'HOUSE SECRET SAUCE',
    subtitle: 'The final layer of the theory. Smoky & tangy.',
    side: 'right',
    topPercent: 32,
  },
  {
    framePercent: 40,
    title: 'FRESH CRUNCH',
    subtitle: 'Cut fresh for every order. Zero-wilt greens & pickles.',
    side: 'left',
    topPercent: 44,
  },
  {
    framePercent: 48,
    title: 'MELTED CHEESE',
    subtitle: 'The layer that ties it together. 18-month sharp cheddar.',
    side: 'right',
    topPercent: 54,
  },
  {
    framePercent: 56,
    title: 'SMASHED BEEF',
    subtitle: 'Seared crisp. Juicy inside. 100% Angus smash.',
    side: 'left',
    topPercent: 66,
  },
];

interface BreakdownSectionProps {
  progress: number;
}

export default function BreakdownSection({ progress }: BreakdownSectionProps) {
  // Active when progress is between 12% and 60%
  const isVisible = progress >= 0.12 && progress <= 0.6;
  const currentFramePercent = progress * 100;

  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-300">
      {/* Top Section Header */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center w-full px-4">
        <h2 className="text-xl sm:text-3xl font-extrabold text-[#FFF4E0] tracking-wider uppercase font-heading">
          THE THEORY OF THE BURGER
        </h2>
        <p className="mt-1 text-[11px] sm:text-xs text-[#F6A525] font-bold tracking-[0.25em] uppercase">
          EXPLODED INGREDIENT ARCHITECTURE
        </p>
      </div>

      {/* Layer Callout Cards with Leader Lines */}
      <div className="relative w-full h-full max-w-7xl mx-auto px-4">
        {burgerCallouts.map((callout, idx) => {
          const distance = Math.abs(currentFramePercent - callout.framePercent);
          const active = distance < 14;
          const calloutOpacity = active ? Math.max(0, 1 - distance / 14) : 0;
          const translateY = (1 - calloutOpacity) * (callout.side === 'left' ? -15 : 15);

          if (calloutOpacity <= 0.01) return null;

          return (
            <div
              key={idx}
              className={`absolute max-w-[260px] sm:max-w-xs p-4 bg-[#0F0906]/95 border-l-4 border-[#F6A525] backdrop-blur-md transition-all duration-200 pointer-events-auto shadow-2xl ${
                callout.side === 'left'
                  ? 'left-4 sm:left-12 lg:left-20'
                  : 'right-4 sm:right-12 lg:right-20'
              }`}
              style={{
                top: `${callout.topPercent}%`,
                opacity: calloutOpacity,
                transform: `translateY(${translateY}px)`,
              }}
            >
              {/* Leader Line indicator */}
              <div
                className={`hidden sm:block absolute top-1/2 -translate-y-1/2 w-12 h-[2px] bg-[#F6A525] ${
                  callout.side === 'left' ? '-right-12' : '-left-12'
                }`}
              >
                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F6A525] ${
                    callout.side === 'left' ? 'right-0' : 'left-0'
                  }`}
                />
              </div>

              <div className="text-[10px] font-black text-[#F6A525] uppercase tracking-widest mb-0.5">
                LAYER {String(idx + 1).padStart(2, '0')}
              </div>
              <h3 className="text-sm sm:text-base font-black text-[#FFF4E0] font-heading mb-1">
                {callout.title}
              </h3>
              <p className="text-xs text-[#B8A48C] leading-snug font-medium">
                {callout.subtitle}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
