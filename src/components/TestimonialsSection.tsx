import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { testimonials } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#F9FBFC] to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation Controls */}
        <div className="flex items-center justify-between mb-12 sm:mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0276FD] block mb-1">
              Community Love
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#0A1E3F] tracking-tight">
              What Our Customers Say
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-[#0276FD] bg-white hover:bg-blue-50 text-slate-600 hover:text-[#0276FD] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-[#0276FD] bg-white hover:bg-blue-50 text-slate-600 hover:text-[#0276FD] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, idx) => {
            const isHighlighted = idx === currentIndex;
            return (
              <div
                key={t.id}
                className={`bg-white rounded-3xl p-7 sm:p-8 border transition-all duration-300 flex flex-col justify-between relative hover:-translate-y-1 ${
                  isHighlighted
                    ? 'border-blue-300 shadow-[0_12px_32px_rgba(2,118,253,0.12)] ring-1 ring-blue-100'
                    : 'border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-200'
                }`}
              >
                <div>
                  {/* 5 Gold Stars */}
                  <div className="flex items-center gap-1.5 mb-5 text-[#F59E0B]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-2xs"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed italic font-normal">
                    "{t.comment}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-slate-100">
                  <div className="relative">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover border border-blue-100 shadow-xs"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          t.name
                        )}&background=0276FD&color=fff&size=88`;
                      }}
                    />
                    <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center text-white" title="Verified Customer">
                      <CheckCircle className="w-2.5 h-2.5" />
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#0A1E3F]">
                      {t.name}
                    </h4>
                    <p className="text-xs text-slate-400 font-semibold">
                      {t.city} • Verified Buyer
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
