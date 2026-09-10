import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
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
    <section className="py-16 sm:py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation Controls */}
        <div className="flex items-center justify-between mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1E3F] tracking-tight">
            What Our Customers Say
          </h2>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-9 h-9 rounded-full border border-slate-300 hover:border-[#0276FD] bg-white hover:bg-blue-50 text-slate-600 hover:text-[#0276FD] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-9 h-9 rounded-full border border-slate-300 hover:border-[#0276FD] bg-white hover:bg-blue-50 text-slate-600 hover:text-[#0276FD] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
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
                className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                  isHighlighted
                    ? 'border-blue-300 shadow-lg ring-2 ring-blue-100'
                    : 'border-slate-100 shadow-xs hover:shadow-md hover:border-slate-200'
                }`}
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
                  <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed italic">
                    "{t.comment}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 pt-6 mt-4 border-t border-slate-50">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-blue-100 shadow-xs"
                    onError={(e) => {
                      // Fallback SVG avatar if local crop has issues
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        t.name
                      )}&background=0276FD&color=fff&size=80`;
                    }}
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#0A1E3F]">
                      {t.name}
                    </h4>
                    <p className="text-xs text-slate-400 font-medium">
                      {t.city}
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
