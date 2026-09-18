import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Sparkles, ShieldAlert, ShieldCheck, Droplets, Clock, Flame, ChevronLeft, ChevronRight } from 'lucide-react';

export const MilkComparisonSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const pos = Math.max(5, Math.min(95, (x / rect.width) * 100));
      setSliderPosition(pos);
    },
    []
  );

  const handleMouseDown = () => setIsDragging(true);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length > 0) handleMove(e.touches[0].clientX);
    };
    const onEnd = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onEnd);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onEnd);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onEnd);
    };
  }, [isDragging, handleMove]);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white via-[#f4f9ff] to-white relative overflow-hidden">
      {/* Background ambient elements */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0276FD]" />
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0276FD]">
              Interactive Purity Comparison
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1E3F] tracking-tight leading-tight">
            See What Goes Into Your Cup
          </h2>
          <p className="mt-2 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-medium">
            Drag the interactive slider below to uncover the stark contrast between factory-processed supermarket milk and 100% farm-fresh MilkZo.
          </p>

          {/* Quick Preset Buttons */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setSliderPosition(20)}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                sliderPosition < 35
                  ? 'bg-rose-900 text-rose-200 shadow-xs ring-2 ring-rose-400/40'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Reveal Supermarket
            </button>
            <button
              onClick={() => setSliderPosition(50)}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                sliderPosition >= 35 && sliderPosition <= 65
                  ? 'bg-[#0276FD] text-white shadow-xs ring-2 ring-blue-400/40'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              50 / 50 Split
            </button>
            <button
              onClick={() => setSliderPosition(80)}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                sliderPosition > 65
                  ? 'bg-emerald-600 text-white shadow-xs ring-2 ring-emerald-400/40'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Reveal MilkZo Purity
            </button>
          </div>
        </div>

        {/* Interactive Split Comparison Card */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          className="relative w-full max-w-5xl mx-auto h-[490px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white select-none cursor-ew-resize bg-slate-900"
        >
          {/* ================= RIGHT BASE LAYER: REGULAR SUPERMARKET MILK ================= */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-900 text-white p-6 sm:p-10 flex flex-col justify-between">
            {/* Top Badge: Supermarket (Right-Aligned) */}
            <div className="flex items-start justify-end">
              <div className="bg-rose-950/60 backdrop-blur-md rounded-2xl p-3 sm:px-4 sm:py-2.5 shadow-lg border border-rose-500/30 text-right">
                <div className="flex items-center justify-end gap-1.5">
                  <span className="text-xs sm:text-sm font-black text-rose-300">
                    Standard Supermarket Milk
                  </span>
                  <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                </div>
                <p className="text-[10px] text-rose-400 font-bold uppercase tracking-wider mt-0.5">
                  Factory Toned & Re-processed
                </p>
              </div>
            </div>

            {/* Supermarket Issues Grid (Right-Aligned) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-md ml-auto text-right sm:text-left">
              <div className="bg-rose-950/30 backdrop-blur-xs rounded-2xl p-3.5 border border-rose-500/20">
                <div className="flex items-center sm:justify-start justify-end gap-2 text-rose-300 font-bold text-xs sm:text-sm mb-1">
                  <Flame className="w-4 h-4 shrink-0" />
                  <span>Chemically Toned</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-tight">
                  Stripped of natural fats and padded with milk solids and skimmed powder.
                </p>
              </div>

              <div className="bg-rose-950/30 backdrop-blur-xs rounded-2xl p-3.5 border border-rose-500/20">
                <div className="flex items-center sm:justify-start justify-end gap-2 text-rose-300 font-bold text-xs sm:text-sm mb-1">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>36–48 Hours In Transit</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-tight">
                  Long transport without localized cold chain degrades fragile natural nutrients.
                </p>
              </div>

              <div className="bg-rose-950/30 backdrop-blur-xs rounded-2xl p-3.5 border border-rose-500/20">
                <div className="flex items-center sm:justify-start justify-end gap-2 text-rose-300 font-bold text-xs sm:text-sm mb-1">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>Mixed Sourcing</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-tight">
                  Pooled from thousands of unverified cattle with risk of oxytocin and hormone residues.
                </p>
              </div>

              <div className="bg-rose-950/30 backdrop-blur-xs rounded-2xl p-3.5 border border-rose-500/20">
                <div className="flex items-center sm:justify-start justify-end gap-2 text-rose-300 font-bold text-xs sm:text-sm mb-1">
                  <Droplets className="w-4 h-4 shrink-0" />
                  <span>Watery Consistency</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-tight">
                  Zero natural malai layer when boiled. Lacks full-bodied rural flavor.
                </p>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="text-right">
              <span className="text-xs text-rose-300/80 font-medium">
                Multiple middleman aggregators & warehouse storage
              </span>
            </div>
          </div>

          {/* ================= LEFT CLIPPED LAYER: MILKZO 100% FARM FRESH ================= */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#0276FD] via-[#0957c3] to-[#0A1E3F] text-white p-6 sm:p-10 flex flex-col justify-between overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            {/* Top Badge: MilkZo (Left-Aligned) */}
            <div className="flex items-start justify-start">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:px-4 sm:py-2.5 shadow-lg border border-white/70">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs sm:text-sm font-black text-[#0A1E3F]">
                    MilkZo Farm Fresh
                  </span>
                </div>
                <p className="text-[10px] text-emerald-700 font-bold uppercase tracking-wider mt-0.5">
                  100% Raw, Untoned & Pure
                </p>
              </div>
            </div>

            {/* MilkZo Features Grid (Left-Aligned) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-md">
              <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-3.5 border border-white/15">
                <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs sm:text-sm mb-1">
                  <Droplets className="w-4 h-4 shrink-0" />
                  <span>Thick Natural Malai</span>
                </div>
                <p className="text-[11px] text-blue-100/90 leading-tight">
                  Untoned & unstripped. Retains rich natural 6.5% cream layer and bioactive vitamins.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-3.5 border border-white/15">
                <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs sm:text-sm mb-1">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>Chilled in &lt; 2 Hours</span>
                </div>
                <p className="text-[11px] text-blue-100/90 leading-tight">
                  Rapid 4°C chilling at the grassroots farm stops bacterial proliferation instantly.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-3.5 border border-white/15">
                <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs sm:text-sm mb-1">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>26+ Lab Tests Passed</span>
                </div>
                <p className="text-[11px] text-blue-100/90 leading-tight">
                  Zero urea, zero starch, zero detergent, and zero synthetic hormones.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-3.5 border border-white/15">
                <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs sm:text-sm mb-1">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Doorstep by 7:00 AM</span>
                </div>
                <p className="text-[11px] text-blue-100/90 leading-tight">
                  Milked at dawn, packed in insulated vans, and delivered fresh daily.
                </p>
              </div>
            </div>

            {/* Bottom Accent */}
            <div>
              <span className="text-xs text-blue-200/90 font-medium">
                Pure Indian Cattle • Direct Grassroots Impact
              </span>
            </div>
          </div>

          {/* ================= SLIDER DIVIDER LINE & DRAG HANDLE ================= */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_15px_rgba(255,255,255,0.8)] z-30"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Center Circular Drag Pill */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#0A1E3F] shadow-2xl border-2 border-blue-500 flex items-center justify-center cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
              <div className="flex items-center text-[#0276FD]">
                <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 -mr-1" strokeWidth={3} />
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 -ml-1" strokeWidth={3} />
              </div>
            </div>

            {/* Tooltip on handle */}
            <div className="absolute -bottom-10 -translate-x-1/2 left-1/2 bg-[#0A1E3F] text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow-md hidden sm:block">
              DRAG ME
            </div>
          </div>
        </div>

        {/* Bottom Purity Metric Stats Comparison */}
        <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-3 sm:p-4 border border-blue-100 shadow-xs">
            <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
              Natural Milk Fat
            </span>
            <div className="mt-1 flex items-baseline justify-center gap-1.5">
              <span className="text-base sm:text-xl font-black text-emerald-600">6.5%</span>
              <span className="text-xs text-slate-400">vs</span>
              <span className="text-xs sm:text-sm font-bold text-rose-500 line-through">3.0%</span>
            </div>
            <span className="block text-[10px] text-slate-500 mt-0.5">High natural malai</span>
          </div>

          <div className="bg-white rounded-2xl p-3 sm:p-4 border border-blue-100 shadow-xs">
            <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
              Farm Chilling Speed
            </span>
            <div className="mt-1 flex items-baseline justify-center gap-1.5">
              <span className="text-base sm:text-xl font-black text-emerald-600">&lt; 2 Hrs</span>
              <span className="text-xs text-slate-400">vs</span>
              <span className="text-xs sm:text-sm font-bold text-rose-500">36+ Hrs</span>
            </div>
            <span className="block text-[10px] text-slate-500 mt-0.5">Locks live bio-enzymes</span>
          </div>

          <div className="bg-white rounded-2xl p-3 sm:p-4 border border-blue-100 shadow-xs">
            <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
              Lab Tests Passed
            </span>
            <div className="mt-1 flex items-baseline justify-center gap-1.5">
              <span className="text-base sm:text-xl font-black text-emerald-600">26 Checks</span>
              <span className="text-xs text-slate-400">vs</span>
              <span className="text-xs sm:text-sm font-bold text-rose-500">Basic</span>
            </div>
            <span className="block text-[10px] text-slate-500 mt-0.5">Zero chemical adulterants</span>
          </div>
        </div>
      </div>
    </section>
  );
};
