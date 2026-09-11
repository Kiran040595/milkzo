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
      {/* Background Panoramic Cow & Pasture Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Mobile / Tablet Background (< lg): Full bleed with readable overlay */}
        <div className="block lg:hidden absolute inset-0">
          <img
            src="/images/hero-cows.png"
            alt="MilkZo Indian Dairy Farm - Gir Cow & Buffalo in green pasture"
            fetchPriority="high"
            className="w-full h-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#edf5fe]/95 via-[#edf5fe]/85 to-[#edf5fe]/60 pointer-events-none" />
        </div>

        {/* Desktop Background (lg+): Right-anchored photo so cows stay on right and text on left is clean */}
        <div className="hidden lg:block absolute top-0 right-0 w-[58%] xl:w-[62%] h-full">
          <img
            src="/images/hero-cows.png"
            alt="MilkZo Indian Dairy Farm - Gir Cow & Buffalo in green pasture"
            fetchPriority="high"
            className="w-full h-full object-cover object-[72%_center]"
          />
          {/* Smooth left blend into #edf5fe background */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#edf5fe] via-[#edf5fe]/60 to-transparent pointer-events-none" />
        </div>

        {/* Soft bottom edge transition into Products section */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/90 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8 sm:pt-10 sm:pb-12 lg:pt-10 lg:pb-12 xl:pt-14 xl:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center min-h-[420px] sm:min-h-[460px] lg:min-h-[480px] xl:min-h-[520px]">
          {/* Left Hero Content */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-4 sm:space-y-6">
            <div className="inline-block">
              <span className="text-[11px] sm:text-xs lg:text-xs font-extrabold uppercase tracking-widest text-[#0276FD] bg-blue-50/80 px-2.5 py-1 rounded-md">
                PURE DAIRY
              </span>
            </div>

            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[52px] font-black text-[#0A1E3F] tracking-tight leading-[1.1]">
                Real Goodness.
              </h1>
              <p className="text-xl sm:text-2xl lg:text-[24px] xl:text-[28px] font-bold text-[#0A1E3F] tracking-tight leading-[1.2]">
                Direct from our Farmers <br className="hidden sm:inline" />
                to Your Family.
              </p>
            </div>

            <p className="text-xs sm:text-sm lg:text-[14px] xl:text-base text-slate-700 font-medium leading-relaxed max-w-md">
              At MilkZo, we procure fresh, untoned milk directly from trusted
              Indian farmers, maintain uncompromising quality, pack it with care
              and deliver it to your homes.
            </p>

            <div className="pt-1">
              <button
                onClick={onOrderClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 bg-[#0276FD] hover:bg-[#0060d6] text-white text-xs sm:text-sm lg:text-base font-bold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 hover:translate-x-0.5 active:scale-98 transition-all cursor-pointer"
              >
                Order Fresh Milk
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* 4 Feature Badges */}
            <div className="pt-2 sm:pt-4 lg:pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3">
              {heroBadges.map((badge, idx) => {
                const IconComponent = badge.icon;
                return (
                  <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left group">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-11 lg:h-11 xl:w-12 xl:h-12 rounded-full bg-[#D6EBFE] flex items-center justify-center text-[#0276FD] group-hover:bg-[#0276FD] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                    </div>
                    <span className="mt-2 text-[11px] sm:text-xs font-bold text-[#0A1E3F] leading-snug max-w-[95px]">
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Displays Script Accent Badge in sky */}
          <div className="lg:col-span-6 xl:col-span-7 relative h-48 sm:h-64 lg:h-full flex flex-col items-end justify-start pointer-events-none">
            {/* "Good Nutrition For A Brighter Tomorrow" Script Accent */}
            <div className="pt-2 pr-2 sm:pt-4 sm:pr-4 text-right select-none">
              <p className="text-[#0A1E3F] font-bold text-xs sm:text-sm lg:text-base font-serif italic tracking-wide leading-tight drop-shadow-xs">
                Good Nutrition
              </p>
              <p className="text-[#0A1E3F] font-bold text-xs sm:text-sm lg:text-base font-serif italic leading-tight drop-shadow-xs">
                For A
              </p>
              <p className="text-[#0A1E3F] font-bold text-xs sm:text-sm lg:text-base font-serif italic tracking-wide leading-tight drop-shadow-xs">
                Brighter
              </p>
              <p className="text-[#0A1E3F] font-bold text-xs sm:text-sm lg:text-base font-serif italic tracking-wide leading-tight drop-shadow-xs">
                Tomorrow
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
