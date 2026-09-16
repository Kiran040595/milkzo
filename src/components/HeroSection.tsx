import React from 'react';
import { ArrowRight, Leaf, ShieldCheck, Droplets, Home } from 'lucide-react';

interface HeroSectionProps {
  onOrderClick: () => void;
  onExploreProducts?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOrderClick }) => {
  const heroBadges = [
    {
      icon: Leaf,
      label: '100% Pure & Natural',
    },
    {
      icon: ShieldCheck,
      label: 'Rich in Nutrition',
    },
    {
      icon: Droplets,
      label: 'No Added Preservatives',
    },
    {
      icon: Home,
      label: 'From Trusted Farms',
    },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#edf5fe]"
    >
      {/* Desktop Background (lg+): Right-anchored photo so cows stay on right and text on left is clean */}
      <div className="hidden lg:block absolute top-0 right-0 w-[58%] xl:w-[62%] h-full z-0 pointer-events-none">
        <img
          src="/images/hero-cows.png"
          alt="MilkZo Indian Dairy Farm - Gir Cow & Buffalo in green pasture"
          fetchPriority="high"
          className="w-full h-full object-cover object-[72%_center]"
        />
        {/* Smooth left blend into #edf5fe background */}
        <div className="absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-[#edf5fe] via-[#edf5fe]/60 to-transparent pointer-events-none" />
        {/* Bottom soft edge */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/90 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 sm:pt-10 sm:pb-12 lg:pt-10 lg:pb-12 xl:pt-14 xl:pb-16">
        {/* Desktop Layout (lg and up) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 sm:gap-8 items-center min-h-[480px] xl:min-h-[520px]">
          {/* Left Hero Content */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-5 sm:space-y-6">
            <div className="inline-block">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0276FD] bg-blue-50/90 px-3 py-1 rounded-full border border-blue-100">
                PURE DAIRY
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl lg:text-[44px] xl:text-[54px] font-black text-[#0A1E3F] tracking-tight leading-[1.08]">
                Real Goodness.
              </h1>
              <p className="text-2xl lg:text-[26px] xl:text-[30px] font-bold text-[#0A1E3F] tracking-tight leading-[1.2]">
                Direct from our Farmers to Your Family.
              </p>
            </div>

            <p className="text-sm lg:text-[15px] xl:text-base text-slate-700 font-medium leading-relaxed max-w-md">
              At MilkZo, we procure fresh, untoned milk directly from trusted
              Indian farmers, maintain uncompromising quality, pack it with care
              and deliver it to your homes.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-4">
              <button
                onClick={onOrderClick}
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#0276FD] hover:bg-[#0060d6] text-white text-sm lg:text-base font-bold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 active:scale-98 transition-all cursor-pointer overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Order Fresh Milk
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
              </button>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-xs border border-blue-100 text-xs font-bold text-slate-700 shadow-2xs">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Next Delivery: Tomorrow by 7:00 AM</span>
              </div>
            </div>

            {/* 4 Feature Badges */}
            <div className="pt-4 grid grid-cols-4 gap-3">
              {heroBadges.map((badge, idx) => {
                const IconComponent = badge.icon;
                return (
                  <div key={idx} className="flex flex-col items-start text-left group cursor-default">
                    <div className="w-11 h-11 xl:w-12 xl:h-12 rounded-2xl bg-white/90 backdrop-blur-xs border border-blue-100/90 shadow-2xs flex items-center justify-center text-[#0276FD] group-hover:bg-[#0276FD] group-hover:text-white group-hover:scale-105 group-hover:shadow-md group-hover:shadow-blue-500/20 transition-all duration-300">
                      <IconComponent className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <span className="mt-2 text-xs font-bold text-[#0A1E3F] leading-snug max-w-[95px] group-hover:text-[#0276FD] transition-colors">
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Displays Script Accent Badge in sky */}
          <div className="lg:col-span-6 xl:col-span-7 relative h-full flex flex-col items-end justify-start pointer-events-none">
            {/* "Good Nutrition For A Brighter Tomorrow" Script Accent Badge */}
            <div className="pt-6 pr-6 select-none">
              <div className="inline-block bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg shadow-blue-900/5 border border-white/90 -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0276FD]">Farm Pure Promise</span>
                </div>
                <p className="text-[#0A1E3F] font-bold text-sm lg:text-[15px] font-serif italic tracking-wide leading-tight">
                  Good Nutrition
                </p>
                <p className="text-[#0276FD] font-black text-xs lg:text-sm italic leading-tight">
                  For A Brighter Tomorrow
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Layout (< lg) */}
        <div className="lg:hidden flex flex-col space-y-6">
          {/* Top text content */}
          <div className="space-y-3.5">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0276FD] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 inline-block">
              PURE DAIRY
            </span>

            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl font-black text-[#0A1E3F] tracking-tight leading-tight">
                Real Goodness.
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[#0A1E3F] tracking-tight leading-snug">
                Direct from our Farmers to Your Family.
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
              At MilkZo, we procure fresh, untoned milk directly from trusted
              Indian farmers, maintain uncompromising quality, pack it with care
              and deliver it to your homes.
            </p>

            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOrderClick}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#0276FD] hover:bg-[#0060d6] text-white text-sm font-bold rounded-full shadow-md shadow-blue-500/25 active:scale-98 transition-all cursor-pointer overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Order Fresh Milk
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
              </button>

              <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-blue-100 text-[11px] font-bold text-slate-700 shadow-2xs">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Next Delivery: Tomorrow 7:00 AM</span>
              </div>
            </div>
          </div>

          {/* Panoramic Cattle Pasture Scene on Mobile: Both cows + meadow fully visible */}
          <div className="relative rounded-2xl overflow-hidden shadow-md border border-blue-100/80 bg-gradient-to-b from-[#dcedfc] to-[#e4f1fc]">
            <div className="relative aspect-[16/9] sm:aspect-[2/1] w-full overflow-hidden">
              <img
                src="/images/hero-cows.png"
                alt="MilkZo Indian Dairy Farm - Gir Cow & Buffalo in green pasture"
                fetchPriority="high"
                className="w-full h-full object-cover object-[75%_center] sm:object-right"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#dcedfc]/40 via-transparent to-transparent pointer-events-none" />

              {/* Script Accent in Sky */}
              <div className="absolute top-2.5 right-3 text-right -rotate-6 select-none bg-white/80 backdrop-blur-xs px-2.5 py-1 rounded-xl shadow-xs border border-white/70">
                <p className="text-[#0A1E3F] font-bold text-[10px] sm:text-xs font-serif italic tracking-wide leading-tight">
                  Good Nutrition
                </p>
                <p className="text-[#0276FD] font-extrabold text-[10px] sm:text-xs italic leading-tight">
                  For A
                </p>
                <p className="text-[#0A1E3F] font-bold text-[10px] sm:text-xs font-serif italic tracking-wide leading-tight">
                  Brighter Tomorrow
                </p>
              </div>
            </div>
          </div>

          {/* 4 Feature Badges Grid on Mobile (2x2) */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            {heroBadges.map((badge, idx) => {
              const IconComponent = badge.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/90 backdrop-blur-xs border border-blue-100/70 shadow-2xs"
                >
                  <div className="w-9 h-9 rounded-full bg-blue-50 text-[#0276FD] flex items-center justify-center shrink-0">
                    <IconComponent className="w-4 h-4" strokeWidth={2.2} />
                  </div>
                  <span className="text-xs font-bold text-[#0A1E3F] leading-snug">
                    {badge.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
