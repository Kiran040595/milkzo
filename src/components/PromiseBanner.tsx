import React from 'react';

export const PromiseBanner: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#dcedfc] via-[#e9f4fd] to-[#d7ecff] shadow-md border border-blue-100/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="p-8 sm:p-12 lg:p-16 lg:col-span-6 z-10 space-y-4">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0276FD] block">
                THE MILKZO PROMISE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-black text-[#0A1E3F] tracking-tight leading-snug">
                From Our Farms <br className="hidden sm:inline" />
                to Your Family
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed font-medium">
                Wholesome dairy products, made with care, for a healthier and happier tomorrow. Supporting rural farmers with fair livelihood and regenerative practices.
              </p>
            </div>

            {/* Right Banner Image */}
            <div className="lg:col-span-6 h-60 sm:h-72 lg:h-full min-h-[260px] relative overflow-hidden">
              <img
                src="/images/promise-farmer.jpg"
                alt="Indian dairy farmer with cows in lush green farm"
                loading="lazy"
                className="w-full h-full object-cover object-center lg:object-right hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#dcedfc] via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
