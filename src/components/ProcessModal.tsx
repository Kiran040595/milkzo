import React from 'react';
import { X, CheckCircle } from 'lucide-react';


interface ProcessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProcessModal: React.FC<ProcessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const stepsDetail = [
    {
      step: '01',
      title: 'Trusted Indian Farmers',
      desc: 'We partner directly with grassroots dairy farmers across indigenous cattle belts. Farmers receive fair pricing, veterinary care support, and organic cattle feed guidance.',
      highlight: 'Direct procurement with 100% fair trade compensation.',
    },
    {
      step: '02',
      title: 'Milk Procurement within 2 Hours',
      desc: 'Milked traditionally at 4:30 AM and transferred to local bulk milk chilling units within 2 hours to prevent bacterial multiplication and retain natural whey enzymes.',
      highlight: 'Sub-4°C chilling within minutes of milking.',
    },
    {
      step: '03',
      title: '26+ Stringent Quality Tests',
      desc: 'Every single batch undergoes automated testing for SNF (Solids-Not-Fat), milk fat %, antibiotics, aflatoxins, synthetic detergents, water dilution, and heavy metals.',
      highlight: 'Zero tolerance for adulterants or chemical preservatives.',
    },
    {
      step: '04',
      title: 'Hygienic Chilling & Eco Packaging',
      desc: 'Automated, touch-free pasteurization and filling into food-grade, recyclable pouches and earthen matkas in cleanroom conditions.',
      highlight: 'No human touch throughout processing.',
    },
    {
      step: '05',
      title: 'GPS-Tracked Cold-Chain Fleet',
      desc: 'Specially insulated refrigerated vans maintain an unbroken temperature of 2°C - 4°C right up to the local distribution hubs.',
      highlight: 'Strict continuous temperature log monitoring.',
    },
    {
      step: '06',
      title: 'Direct to Your Doorstep by 7 AM',
      desc: 'Our morning delivery partners drop fresh dairy packets silently into your doorstep delivery bag before 7:00 AM every morning.',
      highlight: 'Delivered in time for your morning tea & breakfast.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-[#0A1E3F] text-white">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold">The MilkZo Quality Journey</h2>
            <p className="text-xs text-blue-200">How real goodness travels from our farms to your family</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-slate-700">
          {stepsDetail.map((s) => (
            <div
              key={s.step}
              className="flex gap-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0276FD] text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-xs">
                {s.step}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-[#0A1E3F]">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#0276FD] pt-0.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{s.highlight}</span>
                </div>
              </div>
            </div>
          ))}

          <div className="pt-2 text-center">
            <button
              onClick={onClose}
              className="px-8 py-2.5 bg-[#0276FD] hover:bg-[#0060d6] text-white text-xs sm:text-sm font-bold rounded-full shadow-md transition-all cursor-pointer"
            >
              Got It
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
