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
    <section id="process" className="py-20 sm:py-24 bg-[#FAFDFE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-18 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0276FD] block mb-1">
              Traceability & Quality
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#0A1E3F] tracking-tight">
              Our Process
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-xl leading-relaxed">
              From healthy farms to happy homes, every step is taken with care.
            </p>
          </div>
          <div>
            <button
              onClick={onKnowMoreClick}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-[#0276FD] text-[#0276FD] hover:bg-[#0276FD] hover:text-white text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer group shadow-2xs hover:shadow-md hover:shadow-blue-500/20 active:scale-97"
            >
              Know More
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 6 Step Sequence: Single unbroken row on desktop */}
        {/* Desktop View (lg) */}
        <div className="hidden lg:flex items-center justify-between gap-3">
          {processSteps.map((step, idx) => (
            <React.Fragment key={step.id}>
              {/* Step Item */}
              <div
                onClick={onKnowMoreClick}
                className="flex-1 flex flex-col items-center text-center group cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="relative w-20 h-20 rounded-full border-2 border-[#0276FD]/60 bg-gradient-to-b from-white to-blue-50/40 flex items-center justify-center shadow-xs group-hover:shadow-lg group-hover:shadow-blue-500/20 group-hover:border-[#0276FD] group-hover:scale-108 transition-all duration-300">
                  {getStepIcon(step.iconName)}
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#0276FD] text-white text-[10px] font-black rounded-full flex items-center justify-center shadow-xs">
                    0{step.id}
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-extrabold text-[#0A1E3F] group-hover:text-[#0276FD] transition-colors leading-tight">
                  {step.title}
                </h3>
                <p className="mt-1 text-[11px] text-slate-400 max-w-[120px] leading-tight font-medium">
                  {step.subtitle}
                </p>
              </div>

              {/* Arrow Divider */}
              {idx < processSteps.length - 1 && (
                <div className="text-blue-300 px-1 shrink-0">
                  <ChevronRight className="w-5 h-5 opacity-80" strokeWidth={2.5} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile & Tablet View (< lg) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:hidden">
          {processSteps.map((step) => (
            <div
              key={step.id}
              onClick={onKnowMoreClick}
              className="flex flex-col items-center text-center group cursor-pointer p-3 rounded-2xl hover:bg-blue-50/40 transition-colors"
            >
              <div className="relative w-16 h-16 rounded-full border-2 border-[#0276FD]/60 bg-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-all">
                {getStepIcon(step.iconName)}
                <span className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-[#0276FD] text-white text-[9px] font-black rounded-full flex items-center justify-center shadow-xs">
                  0{step.id}
                </span>
              </div>
              <h3 className="mt-3 text-xs sm:text-sm font-extrabold text-[#0A1E3F]">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
