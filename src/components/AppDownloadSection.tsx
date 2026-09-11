import React from 'react';
import { Smartphone, Truck, Percent, ShieldCheck } from 'lucide-react';

export const AppDownloadSection: React.FC = () => {
  const appFeatures = [
    {
      icon: Smartphone,
      title: 'Easy Ordering',
      desc: '1-tap repeat orders',
    },
    {
      icon: Truck,
      title: 'Track Your Delivery',
      desc: 'Real-time morning tracking',
    },
    {
      icon: Percent,
      title: 'Exclusive Offers',
      desc: 'Subscriber discounts & cashbacks',
    },
    {
      icon: ShieldCheck,
      title: 'Freshness Guaranteed',
      desc: 'Zero adulteration warranty',
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-r from-[#e5f1fc] via-[#edf6fe] to-[#e4f1fc] border-y border-blue-100/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading & Store Badges */}
          <div className="lg:col-span-4 space-y-5 text-center lg:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0276FD] block mb-1">
                Download Now
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#0A1E3F] tracking-tight leading-tight">
                Get MilkZo <br className="hidden sm:inline" />
                on the Go
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto lg:mx-0 leading-relaxed font-medium">
              Order your favourite dairy products anytime, anywhere. Experience morning doorstep delivery directly from Indian farms.
            </p>

            {/* App Store & Google Play Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              {/* App Store */}
              <a
                href="#app-store"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-black hover:bg-slate-900 text-white rounded-2xl shadow-lg shadow-black/15 transition-all duration-200 active:scale-95 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.9.04-2.02.6-2.66 1.34-.56.64-1.06 1.71-.93 2.73 1.02.08 2.05-.49 2.67-1.22z" />
                </svg>
                <div className="text-left">
                  <span className="block text-[8px] uppercase tracking-wider text-slate-300 leading-none font-semibold">
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
                className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-black hover:bg-slate-900 text-white rounded-2xl shadow-lg shadow-black/15 transition-all duration-200 active:scale-95 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.99 1.99 0 01-.61-1.42V3.234c0-.54.22-1.054.61-1.42zm11.3 9.07l2.87-2.87-12.7-7.33 9.83 10.2zm0 2.232L5.078 23.316l12.7-7.33-2.87-2.87zm1.118-1.116l3.355 1.938c.954.55.954 1.454 0 2.004l-3.355 1.938-2.073-2.073 2.073-2.073z" />
                </svg>
                <div className="text-left">
                  <span className="block text-[8px] uppercase tracking-wider text-slate-300 leading-none font-semibold">
                    GET IT ON
                  </span>
                  <span className="block text-xs font-bold leading-tight">
                    Google Play
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop-Only QR Code Instant Download Card */}
            <div className="hidden lg:flex items-center gap-3.5 pt-3 p-3.5 bg-white/80 backdrop-blur-md rounded-2xl border border-white/90 shadow-xs max-w-xs">
              <div className="w-14 h-14 bg-white p-1.5 rounded-xl border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs">
                {/* SVG QR Code Pattern */}
                <svg viewBox="0 0 24 24" className="w-full h-full text-slate-800" fill="currentColor">
                  <path d="M2 2h7v7H2V2zm2 2v3h3V4H4zm11-2h7v7h-7V2zm2 2v3h3V4h-3zM2 15h7v7H2v-7zm2 2v3h3v-3H4zm14-2h3v3h-3v-3zm-5-2h2v2h-2v-2zm-2 2h2v2h-2v-2zm4 4h3v3h-3v-3zm-2-2h2v2h-2v-2zm-5-5h2v2H8v-2zm3 0h2v2h-2v-2zm2 2h2v2h-2v-2z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-[#0A1E3F]">Scan with Phone</p>
                <p className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                  Point camera to install MilkZo on iOS or Android instantly
                </p>
              </div>
            </div>
          </div>

          {/* Center Column: Phone Mockup Image from Prototype */}
          <div className="lg:col-span-4 flex items-center justify-center relative">
            <div className="relative w-60 sm:w-68 hover:scale-102 transition-transform duration-500">
              <img
                src="/images/app-phone.jpg"
                alt="MilkZo Mobile App Mockup"
                loading="lazy"
                className="w-full h-auto object-contain rounded-2xl drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Column: Feature Checklist with Glass Cards */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3 w-full max-w-sm">
              {appFeatures.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5 p-3 sm:px-4 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 shadow-xs hover:bg-white hover:shadow-md hover:border-blue-100 transition-all duration-300"
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-50 text-[#0276FD] flex items-center justify-center shrink-0">
                      <IconComponent className="w-4 h-4" strokeWidth={2.2} />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-extrabold text-[#0A1E3F]">
                        {feat.title}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight sm:leading-normal">
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
