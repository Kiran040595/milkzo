import React from 'react';
import { Users, Trees, Star, Clock, ShieldCheck } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '15,000+',
      label: 'Happy Families',
      sublabel: 'Delivered daily across cities',
    },
    {
      icon: Trees,
      value: '50+',
      label: 'Certified Farms',
      sublabel: 'Direct grassroots sourcing',
    },
    {
      icon: Clock,
      value: '< 2 Hours',
      label: 'Farm Chilling',
      sublabel: 'Locked-in natural nutrition',
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Untoned Purity',
      sublabel: 'Zero preservatives',
    },
    {
      icon: Star,
      value: '4.9 / 5',
      label: 'Customer Rating',
      sublabel: 'Over 2,500+ authentic reviews',
    },
  ];

  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 lg:-mt-10 mb-6 sm:mb-8">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-[0_12px_40px_rgba(2,118,253,0.08)] border border-blue-100/80 p-4 sm:p-6 lg:py-5 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-3.5 ${
                  idx !== 0 ? 'pt-3 sm:pt-0 sm:pl-4 lg:pl-6' : ''
                } ${idx === 4 ? 'col-span-2 md:col-span-1 pt-3 sm:pt-0' : ''}`}
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/60 border border-blue-200/50 flex items-center justify-center text-[#0276FD] shrink-0 shadow-2xs">
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-baseline gap-1">
                    <span className="text-base sm:text-lg lg:text-xl font-black text-[#0A1E3F] tracking-tight">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-slate-800 leading-none truncate">
                    {stat.label}
                  </p>
                  <p className="text-[10px] text-slate-400 font-medium leading-tight truncate mt-0.5 hidden sm:block">
                    {stat.sublabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
