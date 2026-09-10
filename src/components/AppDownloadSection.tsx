import React from 'react';
import { Smartphone, Truck, Percent, ShieldCheck } from 'lucide-react';

export const AppDownloadSection: React.FC = () => {
  const appFeatures = [
    {
      icon: Smartphone,
      title: 'Easy Ordering',
    },
    {
      icon: Truck,
      title: 'Track Your Delivery',
    },
    {
      icon: Percent,
      title: 'Exclusive Offers',
    },
    {
      icon: ShieldCheck,
      title: 'Freshness Guaranteed',
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 bg-[#EDF6FE] border-y border-blue-100/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading & Store Badges */}
          <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1E3F] tracking-tight">
              Get MilkZo on the Go
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto lg:mx-0">
              Order your favourite dairy products anytime, anywhere.
            </p>

            {/* App Store & Google Play Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              {/* App Store */}
              <a
                href="#app-store"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-black hover:bg-slate-900 text-white rounded-xl shadow-md transition-all active:scale-95"
              >
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.9.04-2.02.6-2.66 1.34-.56.64-1.06 1.71-.93 2.73 1.02.08 2.05-.49 2.67-1.22z" />
                </svg>
                <div className="text-left">
                  <span className="block text-[8px] uppercase tracking-wider text-slate-300 leading-none">
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
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-black hover:bg-slate-900 text-white rounded-xl shadow-md transition-all active:scale-95"
              >
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.99 1.99 0 01-.61-1.42V3.234c0-.54.22-1.054.61-1.42zm11.3 9.07l2.87-2.87-12.7-7.33 9.83 10.2zm0 2.232L5.078 23.316l12.7-7.33-2.87-2.87zm1.118-1.116l3.355 1.938c.954.55.954 1.454 0 2.004l-3.355 1.938-2.073-2.073 2.073-2.073z" />
                </svg>
                <div className="text-left">
                  <span className="block text-[8px] uppercase tracking-wider text-slate-300 leading-none">
                    GET IT ON
                  </span>
                  <span className="block text-xs font-bold leading-tight">
                    Google Play
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Center Column: Phone Mockup Image from Prototype */}
          <div className="lg:col-span-4 flex items-center justify-center relative">
            <div className="relative w-56 sm:w-64">
              <img
                src="/images/app-phone.jpg"
                alt="MilkZo Mobile App Mockup"
                loading="lazy"
                className="w-full h-auto object-contain rounded-2xl drop-shadow-xl"
              />
            </div>
          </div>

          {/* Right Column: Feature Checklist matching Prototype */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="space-y-4 max-w-xs">
              {appFeatures.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="text-slate-700">
                      <IconComponent className="w-4 h-4" strokeWidth={2} />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {feat.title}
                    </span>
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
