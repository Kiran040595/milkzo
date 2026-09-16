import React from 'react';
import {
  ArrowRight,
  ChevronRight,
  FlaskConical,
  Snowflake,
  Truck,
  Home,
} from 'lucide-react';
import { processSteps } from '../data/mockData';

interface ProcessSectionProps {
  onKnowMoreClick: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onKnowMoreClick }) => {
  // Custom cow/bull SVG for Step 1 matching the prototype
  const CowIcon = () => (
    <svg
      className="w-7 h-7 text-[#0276FD]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 8l2-4 3 2" />
      <path d="M20 8l-2-4-3 2" />
      <path d="M7 6h10c1.5 0 3 1.5 3 3v5c0 3-2.5 5-5 5H9c-2.5 0-5-2-5-5V9c0-1.5 1.5-3 3-3z" />
      <circle cx="9" cy="11" r="1.5" fill="currentColor" />
      <circle cx="15" cy="11" r="1.5" fill="currentColor" />
      <ellipse cx="12" cy="15.5" rx="3" ry="1.8" />
      <path d="M10.5 15.5h.01M13.5 15.5h.01" />
    </svg>
  );

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'cow':
        return <CowIcon />;
      case 'procurement':
        return <Truck className="w-6 h-6 text-[#0276FD]" strokeWidth={2} />;
      case 'testing':
        return <FlaskConical className="w-6 h-6 text-[#0276FD]" strokeWidth={2} />;
      case 'chilling':
        return <Snowflake className="w-6 h-6 text-[#0276FD]" strokeWidth={2} />;
      case 'delivery':
        return <Truck className="w-6 h-6 text-[#0276FD]" strokeWidth={2} />;
      case 'home':
        return <Home className="w-6 h-6 text-[#0276FD]" strokeWidth={2} />;
      default:
        return <Home className="w-6 h-6 text-[#0276FD]" strokeWidth={2} />;
    }
  };

  return (
    <section id="process" className="scroll-mt-20 py-10 sm:py-14 lg:py-16 xl:py-20 bg-[#FAFDFE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-black text-[#0A1E3F] tracking-tight">
              Our Process
            </h2>
            <p className="mt-1 text-xs sm:text-sm lg:text-base text-slate-500 max-w-xl leading-relaxed">
              From healthy farms to happy homes, every step is taken with care.
            </p>
          </div>
          <div>
            <button
              onClick={onKnowMoreClick}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full border border-[#0276FD] text-[#0276FD] hover:bg-[#0276FD] hover:text-white text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer"
            >
              Know More
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 6 Step Sequence: Single unbroken row on desktop */}
        {/* Desktop View (lg) */}
        <div className="hidden lg:flex items-center justify-between gap-1 xl:gap-2">
          {processSteps.map((step, idx) => (
            <React.Fragment key={step.id}>
              {/* Step Item */}
              <div
                onClick={onKnowMoreClick}
                className="flex-1 flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-14 h-14 lg:w-15 lg:h-15 xl:w-18 xl:h-18 rounded-full border-2 border-[#0276FD] bg-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-all duration-300">
                  {getStepIcon(step.iconName)}
                </div>
                <h3 className="mt-3 text-xs lg:text-[13px] xl:text-sm font-bold text-[#0A1E3F] leading-snug max-w-[105px]">
                  {step.title}
                </h3>
              </div>

              {/* Arrow Divider */}
              {idx < processSteps.length - 1 && (
                <div className="text-slate-300 px-0.5 xl:px-1 shrink-0">
                  <ChevronRight className="w-4 h-4 xl:w-5 xl:h-5 text-slate-300" strokeWidth={2} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile & Tablet View (< lg) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:hidden">
          {processSteps.map((step) => (
            <div
              key={step.id}
              onClick={onKnowMoreClick}
              className="flex flex-col items-center text-center group cursor-pointer p-3.5 rounded-2xl bg-white border border-slate-100/90 hover:border-blue-200 hover:bg-blue-50/30 transition-all shadow-2xs"
            >
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#0276FD] bg-white flex items-center justify-center shadow-xs">
                {getStepIcon(step.iconName)}
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#0276FD] text-white text-[10px] font-black rounded-full flex items-center justify-center shadow-xs">
                  0{step.id}
                </span>
              </div>
              <h3 className="mt-2.5 text-xs sm:text-sm font-bold text-[#0A1E3F] leading-tight">
                {step.title}
              </h3>
              <p className="mt-1 text-[11px] text-slate-400 leading-tight">
                {step.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
