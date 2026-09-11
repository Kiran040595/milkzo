import React from 'react';

export const PromiseBanner: React.FC = () => {
  return (
    <section className="py-6 sm:py-10 lg:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#8ec7fb] via-[#a8d7fc] to-[#78befa] shadow-md border border-blue-200/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="p-6 sm:p-8 lg:p-10 xl:p-12 lg:col-span-5 z-10 space-y-2 sm:space-y-3">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#004bb5] block">
                THE MILKZO PROMISE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] font-black text-[#0A1E3F] tracking-tight leading-snug">
                From Our Farms <br className="hidden sm:inline" />
                to Your Family
              </h2>
              <p className="text-xs sm:text-sm lg:text-[14px] xl:text-base text-slate-800 max-w-md leading-relaxed font-medium">
                Wholesome dairy products, made with care, for a healthier and happier tomorrow.
              </p>
            </div>

            {/* Right Banner Image with High-Res Farmer & Cattle (Uncropped) */}
            <div className="lg:col-span-7 h-52 sm:h-72 lg:h-[290px] xl:h-[320px] relative overflow-hidden">
              <img
                src="/images/promise-farmer.png"
                alt="Indian dairy farmer caring for cow and buffalo on green farm"
                loading="lazy"
                className="w-full h-full object-cover object-right sm:object-[right_center] hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#8ec7fb] via-[#8ec7fb]/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
