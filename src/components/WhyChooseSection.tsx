import React from 'react';
import { Leaf, ShieldCheck, Droplets, Home } from 'lucide-react';

interface WhyChooseSectionProps {
  onOrderClick: () => void;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ onOrderClick }) => {
  const points = [
    {
      icon: Leaf,
      title: '100% Pure & Natural',
      desc: 'No toned milk. No compromises.',
    },
    {
      icon: ShieldCheck,
      title: 'Rich in Nutrition',
      desc: 'Goodness for your family.',
    },
    {
      icon: Droplets,
      title: 'No Added Preservatives',
      desc: 'Just pure dairy.',
    },
    {
      icon: Home,
      title: 'From Trusted Indian Farms',
      desc: 'Supporting our farmers.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Features */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1E3F] tracking-tight">
              Why Choose MilkZo?
            </h2>

            <div className="space-y-5 pt-2">
              {points.map((pt, idx) => {
                const IconComponent = pt.icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5 group">
                    <div className="w-10 h-10 rounded-full border-2 border-[#0276FD]/60 bg-blue-50/40 flex items-center justify-center text-[#0276FD] shrink-0 group-hover:bg-[#0276FD] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-4 h-4" strokeWidth={2.2} />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-[15px] font-bold text-[#0A1E3F] tracking-tight">
                        {pt.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Middle Column: Pure Milk Splash Art */}
          <div className="lg:col-span-4 flex items-center justify-center py-4">
            <div className="relative w-full max-w-[260px] aspect-square flex items-center justify-center">
              <img
                src="/images/milk-splash.jpg"
                alt="Pure Dairy Happier Families Milk Splash"
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Column: Freshness Delivered Daily Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] rounded-3xl overflow-hidden shadow-xl group">
              <img
                src="/images/freshness-card.jpg"
                alt="Freshness Delivered Daily - Nutritious dairy, now just a click away"
                loading="lazy"
                className="w-full h-auto object-contain rounded-3xl"
              />
              {/* Interactive Click Target for Order Now */}
              <button
                onClick={onOrderClick}
                aria-label="Order fresh milk now"
                className="absolute top-[48%] left-[10%] w-[45%] h-[15%] opacity-0 cursor-pointer rounded-full"
              />
              <div
                onClick={onOrderClick}
                className="absolute inset-0 bg-blue-500/0 hover:bg-blue-500/5 transition-colors cursor-pointer rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
