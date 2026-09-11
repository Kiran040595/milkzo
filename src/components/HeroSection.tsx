import React from 'react';
import { ArrowRight, Leaf, ShieldCheck, Droplets, Home } from 'lucide-react';

interface HeroSectionProps {
  onOrderClick: () => void;
  onExploreProducts?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOrderClick, onExploreProducts }) => {
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
      {/* Background Panoramic Cow & Pasture Image without any card borders */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-cows.png"
          alt="MilkZo Indian Dairy Farm - Gir Cow & Buffalo in green pasture"
          fetchPriority="high"
          className="w-full h-full object-cover object-right lg:object-[92%_center]"
        />

        {/* Seamless gradient overlay on left for optimal text contrast without covering the cows */}
        <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-[#edf5fe]/95 via-[#edf5fe]/90 sm:via-[#edf5fe]/70 to-[#edf5fe]/30 sm:to-transparent lg:w-[52%] pointer-events-none" />

        {/* Soft bottom edge transition into Products section */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/90 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center min-h-[400px] sm:min-h-[480px] lg:min-h-[520px]">
          {/* Left Hero Content */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-5 sm:space-y-7">
            <div className="inline-block">
              <span className="text-[11px] sm:text-sm font-extrabold uppercase tracking-widest text-[#0276FD] bg-blue-50/80 px-2.5 py-1 rounded-md sm:bg-transparent sm:p-0">
                PURE DAIRY
              </span>
            </div>

            <div className="space-y-1.5 sm:space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-[#0A1E3F] tracking-tight leading-[1.1]">
                Real Goodness.
              </h1>
              <p className="text-xl sm:text-3xl lg:text-[30px] font-bold text-[#0A1E3F] tracking-tight leading-[1.2]">
                Direct from our Farmers <br className="hidden sm:inline" />
                to Your Family.
              </p>
            </div>

            <p className="text-xs sm:text-base text-slate-700 font-medium leading-relaxed max-w-md">
              At MilkZo, we procure fresh, untoned milk directly from trusted
              Indian farmers, maintain uncompromising quality, pack it with care
              and deliver it to your homes.
            </p>

            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOrderClick}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#0276FD] hover:bg-[#0060d6] text-white text-sm sm:text-base font-bold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 hover:translate-x-0.5 active:scale-98 transition-all cursor-pointer"
              >
                Order Fresh Milk
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  if (onExploreProducts) {
                    onExploreProducts();
                  } else {
                    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="hidden sm:inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/90 hover:bg-white text-[#0A1E3F] hover:text-[#0276FD] text-sm font-bold rounded-full border border-slate-200/80 hover:border-blue-300 shadow-sm transition-all cursor-pointer hover:shadow-md"
              >
                Explore Products
              </button>
            </div>

            {/* 4 Feature Badges */}
            <div className="pt-2 sm:pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-2">
              {heroBadges.map((badge, idx) => {
                const IconComponent = badge.icon;
                return (
                  <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left group">
                    <div className="w-11 h-11 rounded-full border-2 border-[#0276FD]/70 bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#0276FD] shadow-xs group-hover:bg-[#0276FD] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-5 h-5" strokeWidth={2.2} />
                    </div>
                    <span className="mt-2 text-xs font-bold text-[#0A1E3F] leading-tight max-w-[95px]">
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Displays the uncropped cows in background + Script Accent Badge + Desktop Live Trust Card */}
          <div className="lg:col-span-7 relative h-52 sm:h-72 lg:h-full min-h-[360px] flex flex-col items-end justify-between pointer-events-none">
            {/* "Good Nutrition For A Brighter Tomorrow" Script Accent */}
            <div className="pt-2 pr-2 sm:pt-4 sm:pr-4 text-right -rotate-6 transform select-none">
              <p className="text-[#0A1E3F] font-bold text-xs sm:text-sm font-serif italic tracking-wide leading-tight drop-shadow-xs">
                Good Nutrition
              </p>
              <p className="text-[#0276FD] font-extrabold text-xs sm:text-sm italic leading-tight drop-shadow-xs">
                For A
              </p>
              <p className="text-[#0A1E3F] font-bold text-xs sm:text-sm font-serif italic tracking-wide leading-tight drop-shadow-xs">
                Brighter Tomorrow
              </p>
            </div>

            {/* Desktop-only floating trust badge positioned gracefully on right */}
            <div className="hidden lg:flex pointer-events-auto items-center gap-3.5 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/80 shadow-lg shadow-blue-900/5 mb-4 mr-2 max-w-sm">
              <div className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </div>
              <div className="text-left">
                <p className="text-xs font-extrabold text-[#0A1E3F]">
                  Cold-Chained & Delivered by 7:00 AM
                </p>
                <p className="text-[11px] text-slate-500 font-medium">
                  Direct from verified Indian farmer partners
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
