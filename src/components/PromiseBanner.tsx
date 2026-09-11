import React from 'react';

export const PromiseBanner: React.FC = () => {
  return (
    <section className="py-8 sm:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#dcedfc] via-[#e9f4fd] to-[#d7ecff] shadow-md border border-blue-100/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="p-6 sm:p-12 lg:p-14 lg:col-span-5 z-10 space-y-3 sm:space-y-4">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0276FD] block">
                THE MILKZO PROMISE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0A1E3F] tracking-tight leading-snug">
                From Our Farms <br className="hidden sm:inline" />
                to Your Family
              </h2>
              <p className="text-xs sm:text-base text-slate-600 max-w-md leading-relaxed font-medium">
                Wholesome dairy products, made with care, for a healthier and happier tomorrow. Supporting our hardworking dairy farmers with fair compensation and cattle care.
              </p>
            </div>

            {/* Right Banner Image with High-Res Farmer & Cattle */}
            <div className="lg:col-span-7 h-52 sm:h-80 lg:h-full min-h-[220px] sm:min-h-[300px] relative overflow-hidden">
              <img
                src="/images/promise-farmer.png"
                alt="Indian dairy farmer caring for cow and buffalo on green farm"
                loading="lazy"
                className="w-full h-full object-cover object-[62%_center] lg:object-[60%_center] hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#dcedfc] via-[#dcedfc]/50 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
