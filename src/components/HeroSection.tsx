import React from 'react';
import { ArrowRight, Leaf, ShieldCheck, Droplets, Home } from 'lucide-react';

interface HeroSectionProps {
  onOrderClick: () => void;
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
      className="relative overflow-hidden pt-8 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#eaf4fe] via-[#f4f9ff] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-6 z-10 space-y-6 sm:space-y-7">
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0276FD]">
                PURE DAIRY
              </span>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-[#0A1E3F] tracking-tight leading-[1.08]">
                Real Goodness.
              </h1>
              <p className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#0A1E3F] tracking-tight leading-[1.2]">
                Direct from our Farmers <br className="hidden sm:inline" />
                to Your Family.
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              At MilkZo, we procure fresh, untoned milk directly from trusted
              Indian farmers, maintain uncompromising quality, pack it with care
              and deliver it to your homes.
            </p>

            <div>
              <button
                onClick={onOrderClick}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#0276FD] hover:bg-[#0060d6] text-white text-sm sm:text-base font-bold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 hover:translate-x-0.5 active:scale-98 transition-all cursor-pointer"
              >
                Order Fresh Milk
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* 4 Feature Badges in horizontal alignment */}
            <div className="pt-4 sm:pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2">
              {heroBadges.map((badge, idx) => {
                const IconComponent = badge.icon;
                return (
                  <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left group">
                    <div className="w-11 h-11 rounded-full border-2 border-[#0276FD]/60 bg-white flex items-center justify-center text-[#0276FD] shadow-xs group-hover:bg-[#0276FD] group-hover:text-white transition-colors duration-300">
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

          {/* Right Hero Visuals */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Main Hero Farm Image */}
            <div className="relative w-full max-w-lg lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border border-white/80">
              <img
                src="/images/hero-cows.png"
                alt="Healthy cows and buffaloes grazing on lush green Indian dairy farm"
                fetchPriority="high"
                className="w-full h-[340px] sm:h-[420px] lg:h-[460px] object-cover object-[80%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />

              {/* "Good Nutrition For A Brighter Tomorrow" Script Badge matching prototype */}
              <div className="absolute top-5 right-5 sm:top-7 sm:right-7 select-none pointer-events-none">
                <div className="text-right -rotate-6 transform">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
