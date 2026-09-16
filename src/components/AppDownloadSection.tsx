import React from 'react';
import { Smartphone, Truck, Percent, ShieldCheck } from 'lucide-react';

export const AppDownloadSection: React.FC = () => {
  const appFeatures = [
    {
      icon: Smartphone,
      title: 'Easy Daily Subscriptions',
      desc: 'Pause, edit, or modify deliveries in one tap',
    },
    {
      icon: Truck,
      title: 'Live Doorstep Tracking',
      desc: 'Real-time GPS alerts when delivery leaves the hub',
    },
    {
      icon: Percent,
      title: 'Exclusive Member Perks',
      desc: 'Save up to 15% with flexible monthly milk plans',
    },
    {
      icon: ShieldCheck,
      title: 'Guaranteed 4°C Freshness',
      desc: 'Tamper-evident cold seal on every delivery',
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#E5F1FC] via-[#edf5fd] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">
          {/* Left Column: Heading & Store Badges */}
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-blue-200/80 shadow-2xs">
              <span className="text-amber-500 font-bold text-xs">★ 4.8</span>
              <span className="text-[11px] font-bold text-[#0A1E3F]">
                Rated on App Store & Play Store
              </span>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-black text-[#0A1E3F] tracking-tight leading-tight">
                Get MilkZo <br className="hidden sm:inline" />
                on the Go
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto lg:mx-0 leading-relaxed font-medium">
              Manage your morning milk schedule, track delivery live, and pause anytime when you go on vacation.
            </p>

            {/* App Store & Google Play Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              {/* App Store */}
              <a
                href="#app-store"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#0A1E3F] hover:bg-[#0276FD] text-white rounded-2xl shadow-md transition-all duration-200 active:scale-95 group"
              >
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.9.04-2.02.6-2.66 1.34-.56.64-1.06 1.71-.93 2.73 1.02.08 2.05-.49 2.67-1.22z" />
                </svg>
                <div className="text-left">
                  <span className="block text-[8px] uppercase tracking-wider text-blue-200 leading-none font-semibold">
                    Download on the
                  </span>
                  <span className="block text-xs font-bold leading-tight">
                    App Store
                  </span>
                </div>
              </a>

              {/* Google Play */}
              <a
                href="#google-play"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#0A1E3F] hover:bg-[#0276FD] text-white rounded-2xl shadow-md transition-all duration-200 active:scale-95 group"
              >
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.99 1.99 0 01-.61-1.42V3.234c0-.54.22-1.054.61-1.42zm11.3 9.07l2.87-2.87-12.7-7.33 9.83 10.2zm0 2.232L5.078 23.316l12.7-7.33-2.87-2.87zm1.118-1.116l3.355 1.938c.954.55.954 1.454 0 2.004l-3.355 1.938-2.073-2.073 2.073-2.073z" />
                </svg>
                <div className="text-left">
                  <span className="block text-[8px] uppercase tracking-wider text-blue-200 leading-none font-semibold">
                    GET IT ON
                  </span>
                  <span className="block text-xs font-bold leading-tight">
                    Google Play
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Center Column: Phone Mockup Image */}
          <div className="lg:col-span-4 flex items-center justify-center relative">
            <div className="relative w-52 sm:w-60 lg:w-68">
              {/* Ambient blue glow behind phone */}
              <div className="absolute inset-0 bg-[#0276FD]/20 rounded-full filter blur-2xl scale-95 pointer-events-none" />
              <img
                src="/images/app-phone.png"
                alt="MilkZo Mobile App Mockup"
                loading="lazy"
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-103 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Feature List */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <div className="flex flex-col gap-3.5 sm:gap-4 w-full max-w-sm">
              {appFeatures.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/70 backdrop-blur-xs border border-blue-100/80 shadow-2xs hover:bg-white hover:shadow-xs transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/60 text-[#0276FD] flex items-center justify-center shrink-0 mt-0.5">
                      <IconComponent className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-[#0A1E3F] leading-tight">
                        {feat.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
