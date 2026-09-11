import React, { useState, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
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
        <div className="flex items-end justify-between mb-8 sm:mb-14">
          <div>
            <h2 className="text-2xl sm:text-4xl lg:text-[38px] font-black text-[#0A1E3F] tracking-tight">
              What Our Customers Say
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-9 h-9 rounded-full border border-slate-300 hover:border-[#0276FD] bg-white hover:bg-blue-50 text-slate-600 hover:text-[#0276FD] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-9 h-9 rounded-full border border-slate-300 hover:border-[#0276FD] bg-white hover:bg-blue-50 text-slate-600 hover:text-[#0276FD] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Testimonial Cards: snap-scroll on mobile, grid on desktop */}
        <div
          ref={scrollContainerRef}
          className="flex md:grid md:grid-cols-3 gap-5 lg:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar"
        >
          {testimonials.map((t) => {
            return (
              <div
                key={t.id}
                className="min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-center bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* 5 Gold Stars */}
                  <div className="flex items-center gap-1 mb-4 text-[#F59E0B]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed italic font-normal">
                    "{t.comment}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-5 mt-5 border-t border-slate-100">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        t.name
                      )}&background=0276FD&color=fff&size=80`;
                    }}
                  />
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-[#0A1E3F] truncate">
                      {t.name}
                    </h4>
                    <p className="text-xs text-slate-400 font-medium truncate">
                      {t.city}
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
