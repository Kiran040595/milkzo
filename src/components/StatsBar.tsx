import React, { useState, useRef } from 'react';
import {
  Users,
  Trees,
  Star,
  Clock,
  ShieldCheck,
  Leaf,
  Droplets,
  Home,
  Info,
  Sparkles,
  CheckCircle2,
  X,
  ChevronRight,
} from 'lucide-react';

export const StatsBar: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  const [pinnedBadge, setPinnedBadge] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveredContainer, setIsHoveredContainer] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const stats = [
    {
      icon: Users,
      value: '15,000+',
      label: 'Happy Families',
      sublabel: 'Delivered daily across cities',
      accentColor: 'text-[#0276FD]',
      bgGlow: 'group-hover/stat:bg-blue-50',
    },
    {
      icon: Trees,
      value: '50+',
      label: 'Certified Farms',
      sublabel: 'Direct grassroots sourcing',
      accentColor: 'text-emerald-600',
      bgGlow: 'group-hover/stat:bg-emerald-50',
    },
    {
      icon: Clock,
      value: '< 2 Hours',
      label: 'Farm Chilling',
      sublabel: 'Locked-in natural nutrition',
      accentColor: 'text-sky-600',
      bgGlow: 'group-hover/stat:bg-sky-50',
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Untoned Purity',
      sublabel: 'Zero preservatives',
      accentColor: 'text-indigo-600',
      bgGlow: 'group-hover/stat:bg-indigo-50',
    },
    {
      icon: Star,
      value: '4.9 / 5',
      label: 'Customer Rating',
      sublabel: 'Over 2,500+ authentic reviews',
      accentColor: 'text-amber-500',
      bgGlow: 'group-hover/stat:bg-amber-50',
    },
  ];

  const featureBadges = [
    {
      icon: Leaf,
      label: '100% Pure & Natural',
      tagline: 'Direct Farm Sourcing',
      heroMetric: '0.00%',
      metricLabel: 'Adulteration Index',
      description:
        'Single-origin, unadulterated milk directly from healthy cows & buffaloes. Zero water dilution and no synthetic additives.',
      colorScheme: 'text-emerald-600 bg-emerald-50 border-emerald-200/80',
      activeBorder: 'border-emerald-400 bg-emerald-50/70 shadow-[0_8px_25px_rgba(16,185,129,0.22)]',
      glowRing: 'ring-2 ring-emerald-400/30',
      themeColor: '#059669',
      proofPoints: [
        'No synthetic hormones or antibiotics',
        'Raw, wholesome, untouched single-source milk',
        'Lab-verified 24 quality safety checks',
      ],
      chips: ['Zero Adulteration', 'Raw Untoned', 'Lab Verified'],
    },
    {
      icon: ShieldCheck,
      label: 'Rich in Nutrition',
      tagline: 'Naturally Wholesome',
      heroMetric: '99.4%',
      metricLabel: 'Nutrient Bio-Retention',
      description:
        'Naturally packed with bio-available calcium, high-grade protein, vitamins A & D, and essential healthy fats.',
      colorScheme: 'text-[#0276FD] bg-blue-50 border-blue-200/80',
      activeBorder: 'border-blue-400 bg-blue-50/70 shadow-[0_8px_25px_rgba(2,118,253,0.22)]',
      glowRing: 'ring-2 ring-blue-400/30',
      themeColor: '#0276FD',
      proofPoints: [
        'Preserved vitamins A, D, and B-complex',
        'Naturally high calcium for bone density',
        'Natural cream layer with zero fat skimming',
      ],
      chips: ['High Calcium', 'Natural Cream', 'Vitamin Rich'],
    },
    {
      icon: Droplets,
      label: 'No Added Preservatives',
      tagline: 'Zero Chemicals',
      heroMetric: '< 4°C',
      metricLabel: 'Cold-Chain Delivery',
      description:
        'Untouched by chemicals, milk powder, or preservatives. Chilled below 4°C within 2 hours of milking to lock in natural purity.',
      colorScheme: 'text-sky-600 bg-sky-50 border-sky-200/80',
      activeBorder: 'border-sky-400 bg-sky-50/70 shadow-[0_8px_25px_rgba(14,165,233,0.22)]',
      glowRing: 'ring-2 ring-sky-400/30',
      themeColor: '#0284c7',
      proofPoints: [
        'Village Bulk Milk Cooler (BMC) chilled in < 2 hrs',
        'Strict insulated temperature-controlled transport',
        'Zero chemical stabilizers or milk reconstitutes',
      ],
      chips: ['< 2h BMC Chilled', 'No Milk Powder', 'Zero Stabilizers'],
    },
    {
      icon: Home,
      label: 'From Trusted Farms',
      tagline: 'Ethical Dairy Care',
      heroMetric: '100%',
      metricLabel: 'Direct Farmer Fair-Pay',
      description:
        'Sourced directly from verified local Indian dairy farmers with regular veterinary checks and green pasture grazing.',
      colorScheme: 'text-amber-600 bg-amber-50 border-amber-200/80',
      activeBorder: 'border-amber-400 bg-amber-50/70 shadow-[0_8px_25px_rgba(245,158,11,0.22)]',
      glowRing: 'ring-2 ring-amber-400/30',
      themeColor: '#d97706',
      proofPoints: [
        'Cruelty-free, open-pasture cattle rearing',
        '100% direct fair pricing to rural farmers',
        'Bi-weekly certified veterinarian checkups',
      ],
      chips: ['Fair Farmer Pay', 'Pasture Grazed', 'Vet Audited'],
    },
  ];

  const activeFeature = pinnedBadge !== null ? featureBadges[pinnedBadge] : null;

  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 lg:mt-10 mb-8 sm:mb-12">
      {/* Background Soft Ambient Aura */}
      <div className="absolute inset-x-8 -top-4 -bottom-4 bg-gradient-to-r from-blue-400/10 via-cyan-400/10 to-emerald-400/10 blur-2xl rounded-3xl pointer-events-none -z-10" />

      {/* Main Glassmorphic Card Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHoveredContainer(true)}
        onMouseLeave={() => {
          setIsHoveredContainer(false);
          setActiveTooltip(null);
        }}
        className="relative overflow-visible bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-[0_16px_48px_rgba(2,118,253,0.09)] border border-blue-100/90 p-4 sm:p-6 lg:py-6 lg:px-8 transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(2,118,253,0.13)]"
      >
        {/* Dynamic Interactive Cursor Radial Spotlight */}
        {isHoveredContainer && (
          <div
            className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none transition-opacity duration-300 opacity-100 z-0"
            style={{
              background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, rgba(2, 118, 253, 0.06), transparent 70%)`,
            }}
          />
        )}

        {/* Delicate Top Rainbow Sheen Line */}
        <div className="absolute top-0 inset-x-6 sm:inset-x-10 h-[2px] bg-gradient-to-r from-transparent via-[#0276FD]/50 to-transparent rounded-full" />

        {/* Top: 5 Core Metric Counters with Hover Animations */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`group/stat flex items-center gap-3.5 transition-all duration-200 cursor-default ${
                  idx !== 0 ? 'pt-3 sm:pt-0 sm:pl-4 lg:pl-6' : ''
                } ${idx === 4 ? 'col-span-2 md:col-span-1 pt-3 sm:pt-0' : ''}`}
              >
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/60 border border-blue-200/50 flex items-center justify-center text-[#0276FD] shrink-0 shadow-2xs transition-all duration-300 group-hover/stat:scale-110 group-hover/stat:-rotate-3 group-hover/stat:shadow-md ${stat.bgGlow}`}
                >
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover/stat:scale-110" strokeWidth={2.2} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-baseline gap-1">
                    <span className="text-base sm:text-lg lg:text-xl font-black text-[#0A1E3F] tracking-tight group-hover/stat:text-[#0276FD] transition-colors">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-slate-800 leading-none truncate group-hover/stat:text-slate-900">
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

        {/* Bottom Section Divider with Interactive "Purity Standard" Pill */}
        <div className="relative z-10 mt-6 pt-5 sm:mt-7 sm:pt-6 border-t border-slate-100">
          {/* Subtle Guidance Header */}
          <div className="flex items-center justify-between mb-3.5 px-0.5">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#0A1E3F]">
                MilkZo Purity Standards
              </span>
            </div>

            <span className="text-[11px] text-slate-400 font-medium hidden sm:inline-flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#0276FD] animate-pulse" />
              Hover or click to inspect lab standards
            </span>
          </div>

          {/* 4 Interactive Feature Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {featureBadges.map((badge, idx) => {
              const BadgeIcon = badge.icon;
              const isPinned = pinnedBadge === idx;
              const isHovered = activeTooltip === idx;

              // Tooltip alignment per column
              const tooltipAlignClass =
                idx === 0
                  ? 'left-0 sm:left-1/2 sm:-translate-x-1/2'
                  : idx === featureBadges.length - 1
                  ? 'right-0 left-auto sm:left-1/2 sm:right-auto sm:-translate-x-1/2'
                  : 'left-1/2 -translate-x-1/2';

              const arrowAlignClass =
                idx === 0
                  ? 'left-8 sm:left-1/2 -translate-x-1/2'
                  : idx === featureBadges.length - 1
                  ? 'right-8 left-auto sm:left-1/2 sm:right-auto -translate-x-1/2'
                  : 'left-1/2 -translate-x-1/2';

              return (
                <div
                  key={idx}
                  className="relative group"
                  onMouseEnter={() => setActiveTooltip(idx)}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  {/* Badge Button / Card with Micro-Interactions */}
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTooltip(null);
                      setPinnedBadge(isPinned ? null : idx);
                    }}
                    className={`w-full text-left flex items-center gap-3 p-3 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isPinned
                        ? badge.activeBorder
                        : `bg-slate-50/80 border-slate-200/70 hover:-translate-y-1 hover:shadow-lg ${badge.glowRing}`
                    } active:scale-98`}
                  >
                    {/* Animated Icon Container */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                        badge.colorScheme
                      } transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                        isPinned ? 'scale-105 shadow-xs' : ''
                      }`}
                    >
                      <BadgeIcon className="w-5 h-5 transition-transform duration-300" strokeWidth={2.3} />
                    </div>

                    {/* Text Details */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <p className="text-xs sm:text-[13px] font-bold text-[#0A1E3F] leading-snug truncate group-hover:text-[#0276FD] transition-colors">
                          {badge.label}
                        </p>
                      </div>
                      <p className="text-[10px] text-slate-400 font-medium truncate leading-tight mt-0.5">
                        {badge.tagline}
                      </p>
                    </div>

                    {/* Interactive Indicator / Pinned State Icon */}
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                        isPinned
                          ? 'bg-[#0276FD] text-white shadow-xs'
                          : 'bg-white/80 text-slate-400 group-hover:text-[#0276FD] group-hover:bg-blue-50'
                      }`}
                    >
                      {isPinned ? (
                        <ChevronRight className="w-3.5 h-3.5 rotate-90 transition-transform" />
                      ) : (
                        <Info className="w-3.5 h-3.5" strokeWidth={2} />
                      )}
                    </div>
                  </button>

                  {/* Deluxe Hover Tooltip (shows only when no badge is pinned/open) */}
                  {pinnedBadge === null && (
                    <div
                      className={`absolute bottom-full ${tooltipAlignClass} mb-3 w-72 sm:w-80 p-4 bg-[#0A1E3F]/98 backdrop-blur-xl text-white rounded-2xl shadow-2xl shadow-blue-950/40 border border-blue-400/30 z-50 pointer-events-none transition-all duration-250 ease-out group-hover:opacity-100 group-hover:visible group-hover:-translate-y-1.5 ${
                        isHovered
                          ? 'opacity-100 visible -translate-y-1.5'
                          : 'opacity-0 invisible translate-y-1'
                      }`}
                    >
                      {/* Tooltip Header */}
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-7 h-7 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: `${badge.themeColor}33` }}
                          >
                            <BadgeIcon
                              className="w-4 h-4"
                              style={{ color: badge.themeColor === '#d97706' ? '#fbbf24' : '#60a5fa' }}
                              strokeWidth={2.4}
                            />
                          </span>
                          <span className="font-extrabold text-xs text-white tracking-tight">
                            {badge.label}
                          </span>
                        </div>
                        <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                          Verified Standard
                        </span>
                      </div>

                      {/* Tooltip Description */}
                      <p className="text-[11px] leading-relaxed text-slate-200 font-normal mb-2.5">
                        {badge.description}
                      </p>

                      {/* Proof Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {badge.chips.map((chip, chipIdx) => (
                          <span
                            key={chipIdx}
                            className="text-[9px] font-semibold px-2 py-0.5 rounded-md bg-white/10 text-blue-200 border border-white/5"
                          >
                            ✓ {chip}
                          </span>
                        ))}
                      </div>

                      {/* Bottom Footer Callout */}
                      <div className="pt-1.5 flex items-center justify-between text-[10px] text-blue-300 font-medium">
                        <span>{badge.metricLabel}</span>
                        <span className="font-black text-white">{badge.heroMetric}</span>
                      </div>

                      {/* Tooltip Pointer Arrow */}
                      <div
                        className={`absolute top-full ${arrowAlignClass} border-4 border-transparent border-t-[#0A1E3F]`}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Interactive Expandable Purity Deep-Dive Drawer (When a badge is clicked/pinned) */}
          {activeFeature && (
            <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0A1E3F] text-white border border-blue-400/30 shadow-xl animate-in fade-in slide-in-from-top-3 duration-300 relative overflow-hidden">
              {/* Background Glow */}
              <div
                className="absolute -right-12 -top-12 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ backgroundColor: activeFeature.themeColor }}
              />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2.5">
                    <span className="p-1.5 rounded-xl bg-white/10 border border-white/15">
                      <activeFeature.icon className="w-5 h-5 text-blue-400" strokeWidth={2.4} />
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base font-extrabold text-white tracking-tight flex items-center gap-2">
                        {activeFeature.label}
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/30 text-blue-300 border border-blue-400/30">
                          {activeFeature.tagline}
                        </span>
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed max-w-2xl mt-0.5">
                        {activeFeature.description}
                      </p>
                    </div>
                  </div>

                  {/* 3 Proof Bullet Points with Checkmarks */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1.5">
                    {activeFeature.proofPoints.map((point, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="text-[11px] leading-tight font-medium">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Hero Metric & Close Button */}
                <div className="flex md:flex-col items-center justify-between md:items-end gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-white/10">
                  <div className="text-left md:text-right">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-blue-300">
                      {activeFeature.metricLabel}
                    </p>
                    <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {activeFeature.heroMetric}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setPinnedBadge(null)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
