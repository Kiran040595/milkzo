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

            <div className="space-y-3 sm:space-y-3.5 pt-1 sm:pt-2">
              {points.map((pt, idx) => {
                const IconComponent = pt.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 sm:gap-4 p-3 sm:p-3.5 rounded-2xl border border-transparent hover:border-blue-100 hover:bg-blue-50/40 transition-all duration-300 group cursor-default"
                  >
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#E5F1FC] flex items-center justify-center text-[#0276FD] shrink-0 group-hover:bg-[#0276FD] group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-2xs">
                      <IconComponent className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <div className="pt-0.5">
                      <h3 className="text-sm sm:text-base font-bold text-[#0A1E3F] tracking-tight group-hover:text-[#0276FD] transition-colors">
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
              <div className="absolute inset-0 bg-blue-100/40 rounded-full filter blur-xl scale-90" />
              <img
                src="/images/milk-splash.jpg"
                alt="Pure Dairy Happier Families Milk Splash"
                loading="lazy"
                className="relative z-10 w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Premium High-Definition Navy Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[350px] rounded-3xl bg-gradient-to-br from-[#0B2147] via-[#081B3B] to-[#041024] p-6 sm:p-8 text-white overflow-hidden shadow-2xl border border-blue-900/50 hover:shadow-blue-900/30 transition-all duration-300">
              {/* Radial ambient glow in corner */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#0276FD]/25 rounded-full blur-2xl pointer-events-none" />

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
                {/* Live Dispatch Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-bold text-emerald-400 backdrop-blur-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Next Run: Tomorrow 5:30 AM</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-[28px] font-black leading-tight tracking-tight text-white">
                    Freshness
                    <br />
                    Delivered Daily
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-200/80 mt-2 leading-relaxed">
                    Order before 11:00 PM tonight for guaranteed doorstep delivery by 7:00 AM tomorrow.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOrderClick}
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-blue-50 text-[#0A1E3F] text-xs sm:text-sm font-black rounded-full shadow-lg shadow-black/20 transition-all cursor-pointer group hover:scale-102 active:scale-98 min-h-[44px]"
                  >
                    Order Now
                    <ArrowRight className="w-3.5 h-3.5 text-[#0276FD] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Line-art Illustration: Delivery Truck & House */}
                <div className="pt-5 sm:pt-6 flex items-center justify-between border-t border-white/10">
                  <div className="border border-blue-400/30 rounded-xl px-3 py-2 flex items-center gap-2.5 bg-white/5 backdrop-blur-2xs">
                    <Truck className="w-5 h-5 text-blue-300" strokeWidth={1.5} />
                    <div className="text-left">
                      <span className="block text-[9px] text-blue-300 font-bold uppercase tracking-wider">
                        Insulated Van
                      </span>
                      <span className="block text-[11px] text-white font-black">
                        4°C Cold Chain
                      </span>
                    </div>
                  </div>

                  <div className="text-blue-300/80 pr-1 flex flex-col items-center">
                    <Home className="w-7 h-7" strokeWidth={1.5} />
                    <span className="text-[9px] text-blue-300/70 font-semibold mt-0.5">Doorstep</span>
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
