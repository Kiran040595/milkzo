import React from 'react';
import { Leaf, ShieldCheck, Droplets, Home, ArrowRight, Truck } from 'lucide-react';

interface WhyChooseSectionProps {
  onOrderClick: () => void;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ onOrderClick }) => {
  const points = [
    {
      icon: Leaf,
      title: '100% Pure & Natural',
      desc: 'No toned milk. No compromises.',
    },
    {
      icon: ShieldCheck,
      title: 'Rich in Nutrition',
      desc: 'Goodness for your family.',
    },
    {
      icon: Droplets,
      title: 'No Added Preservatives',
      desc: 'Just pure dairy.',
    },
    {
      icon: Home,
      title: 'From Trusted Indian Farms',
      desc: 'Supporting our farmers.',
    },
  ];

  return (
    <section id="about" className="scroll-mt-20 py-10 sm:py-14 lg:py-16 xl:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
          {/* Left Column: Features */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-black text-[#0A1E3F] tracking-tight leading-tight">
                Why Choose MilkZo?
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-5 pt-1 sm:pt-2">
              {points.map((pt, idx) => {
                const IconComponent = pt.icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5 sm:gap-4 group">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#E5F1FC] flex items-center justify-center text-[#0276FD] shrink-0 group-hover:bg-[#0276FD] group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <div className="pt-0.5">
                      <h3 className="text-sm sm:text-base font-bold text-[#0A1E3F] tracking-tight">
                        {pt.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Middle Column: Pure Milk Splash Art */}
          <div className="lg:col-span-3 flex items-center justify-center py-2 sm:py-4">
            <div className="relative w-full max-w-[200px] sm:max-w-[240px] aspect-square flex items-center justify-center">
              <img
                src="/images/milk-splash.jpg"
                alt="Pure Dairy Happier Families Milk Splash"
                loading="lazy"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Premium High-Definition Navy Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] rounded-3xl bg-gradient-to-br from-[#0B2147] via-[#081B3B] to-[#051329] p-6 sm:p-8 text-white overflow-hidden shadow-2xl border border-blue-900/40 hover:shadow-blue-900/20 transition-all duration-300">
              {/* Radial ambient glow in corner */}
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

              {/* Floating Leaf Accent */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-7 animate-bounce [animation-duration:3s]">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-[#48BB78] drop-shadow-md rotate-12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
                </svg>
              </div>

              <div className="relative z-10 space-y-4">
                <h3 className="text-xl sm:text-[28px] font-black leading-tight tracking-tight">
                  Freshness
                  <br />
                  Delivered Daily
                </h3>
                <p className="text-xs sm:text-sm text-blue-200/80 max-w-[200px] leading-relaxed">
                  Nutritious dairy, now just a click away.
                </p>

                <div className="pt-2">
                  <button
                    onClick={onOrderClick}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0A1E3F] hover:bg-blue-50 text-xs sm:text-sm font-black rounded-full shadow-lg shadow-black/10 transition-all cursor-pointer group hover:scale-102 active:scale-98 min-h-[44px]"
                  >
                    Order Now
                    <ArrowRight className="w-3.5 h-3.5 text-[#0276FD] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Line-art Illustration: Delivery Truck & House */}
                <div className="pt-6 sm:pt-8 flex items-end justify-between opacity-85">
                  <div className="border border-blue-400/30 rounded-xl p-2.5 flex items-center gap-2.5 bg-white/5 backdrop-blur-2xs">
                    <Truck className="w-6 h-6 sm:w-7 sm:h-7 text-blue-300" strokeWidth={1.5} />
                    <span className="text-[10px] text-blue-200 font-bold uppercase tracking-wider">
                      Express Cold Chain
                    </span>
                  </div>

                  <div className="text-blue-300/90 pr-2">
                    <Home className="w-8 h-8 sm:w-9 sm:h-9" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
