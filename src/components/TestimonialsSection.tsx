import React, { useState, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { testimonials } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    const nextIdx = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIdx);
    scrollToCard(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIdx);
    scrollToCard(nextIdx);
  };

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const cards = scrollContainerRef.current.children;
      if (cards[index]) {
        (cards[index] as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      }
    }
  };

  return (
    <section className="py-14 sm:py-24 bg-gradient-to-b from-[#F9FBFC] to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation Controls */}
        <div className="flex items-end justify-between mb-8 sm:mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0276FD] block mb-1">
              Community Love
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-black text-[#0A1E3F] tracking-tight">
              What Our Customers Say
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-[#0276FD] bg-white hover:bg-blue-50 text-slate-600 hover:text-[#0276FD] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-[#0276FD] bg-white hover:bg-blue-50 text-slate-600 hover:text-[#0276FD] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Testimonial Cards: snap-scroll on mobile, grid on desktop */}
        <div
          ref={scrollContainerRef}
          className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar"
        >
          {testimonials.map((t, idx) => {
            const isHighlighted = idx === currentIndex;
            return (
              <div
                key={t.id}
                className={`min-w-[85vw] sm:min-w-[340px] md:min-w-0 snap-center bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border transition-all duration-300 flex flex-col justify-between relative hover:-translate-y-1 ${
                  isHighlighted
                    ? 'border-blue-300 shadow-[0_8px_24px_rgba(2,118,253,0.12)] ring-1 ring-blue-100'
                    : 'border-slate-100 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-200'
                }`}
              >
                <div>
                  {/* 5 Gold Stars */}
                  <div className="flex items-center gap-1.5 mb-4 sm:mb-5 text-[#F59E0B]">
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
                <div className="flex items-center gap-3.5 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-100">
                  <div className="relative shrink-0">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-blue-100 shadow-xs"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          t.name
                        )}&background=0276FD&color=fff&size=88`;
                      }}
                    />
                    <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center text-white" title="Verified Customer">
                      <CheckCircle className="w-2 sm:w-2.5 h-2 sm:h-2.5" />
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-extrabold text-[#0A1E3F] truncate">
                      {t.name}
                    </h4>
                    <p className="text-xs text-slate-400 font-semibold truncate">
                      {t.city} • Verified Buyer
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                scrollToCard(idx);
              }}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === idx ? 'w-6 bg-[#0276FD]' : 'w-2 bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
