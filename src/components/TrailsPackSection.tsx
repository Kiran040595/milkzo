import React, { useState } from 'react';
import {
  KeyRound,
  Lock,
  Sparkles,
  Calendar,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Gift,
  ArrowRight,
  RotateCcw,
  Milk,
  Sun,
  Truck,
} from 'lucide-react';

export interface TrialOrderData {
  planDays: 5 | 7;
  milkType: string;
  milkTypeName: string;
  quantityPerDay: string;
  startDate: string;
  endDate: string;
  price: number;
  originalPrice: number;
  bonusItem?: string;
}

interface TrailsPackSectionProps {
  onBookTrial: (data: TrialOrderData) => void;
}

export const TrailsPackSection: React.FC<TrailsPackSectionProps> = ({ onBookTrial }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);

  // Trial configuration state
  const [selectedDays, setSelectedDays] = useState<5 | 7>(7);
  const [selectedMilk, setSelectedMilk] = useState<'cow' | 'buffalo' | 'a2'>('cow');
  const [selectedQty, setSelectedQty] = useState<'500ml' | '1L'>('500ml');

  // Compute default start date (Tomorrow)
  const getTomorrowDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  const getDayAfterTomorrowDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    return d.toISOString().split('T')[0];
  };

  const [startDate, setStartDate] = useState<string>(getTomorrowDate());

  // Format date helper
  const formatDateDisplay = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('en-IN', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  // Compute end date based on selectedDays
  const getEndDate = (start: string, days: number) => {
    if (!start) return '';
    const date = new Date(start + 'T00:00:00');
    date.setDate(date.getDate() + (days - 1));
    return date.toISOString().split('T')[0];
  };

  const endDate = getEndDate(startDate, selectedDays);

  // Pricing matrix
  const pricing = {
    cow: {
      name: 'Farm Fresh Cow Milk',
      '500ml': { 5: { price: 179, original: 210 }, 7: { price: 239, original: 294 } },
      '1L': { 5: { price: 339, original: 390 }, 7: { price: 459, original: 540 } },
    },
    buffalo: {
      name: 'Pure Thick Buffalo Milk',
      '500ml': { 5: { price: 199, original: 235 }, 7: { price: 269, original: 329 } },
      '1L': { 5: { price: 379, original: 440 }, 7: { price: 519, original: 610 } },
    },
    a2: {
      name: 'Indigenous A2 Gir Cow Milk',
      '500ml': { 5: { price: 249, original: 290 }, 7: { price: 339, original: 405 } },
      '1L': { 5: { price: 479, original: 560 }, 7: { price: 649, original: 770 } },
    },
  };

  const currentPricing = pricing[selectedMilk][selectedQty][selectedDays];
  const savings = currentPricing.original - currentPricing.price;

  // Handle unlock action with smooth animation
  const handleUnlockClick = () => {
    setIsUnlocking(true);
    setTimeout(() => {
      setIsUnlocking(false);
      setIsUnlocked(true);
    }, 550);
  };

  const handleBookNow = () => {
    onBookTrial({
      planDays: selectedDays,
      milkType: selectedMilk,
      milkTypeName: pricing[selectedMilk].name,
      quantityPerDay: selectedQty === '500ml' ? '500 ml Pouch' : '1 Litre Pouch',
      startDate,
      endDate,
      price: currentPricing.price,
      originalPrice: currentPricing.original,
      bonusItem: selectedDays === 7 ? 'Complimentary 100g Fresh Paneer' : undefined,
    });
  };

  return (
    <section
      id="trails-pack"
      className="relative py-14 sm:py-20 bg-gradient-to-b from-white via-blue-50/40 to-white overflow-hidden scroll-mt-16"
    >
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-[#0276FD] text-xs font-black uppercase tracking-wider mb-3.5 border border-blue-200/60 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
            <span>Exclusive Welcome Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1E3F] tracking-tight leading-tight">
            MilkZo <span className="text-[#0276FD]">Trails Pack</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium">
            Test the pure, untoned taste of raw morning milk before making a long-term commitment.
            Delivered straight to your doorstep before 7:00 AM.
          </p>
        </div>

        {/* Dynamic Card Container: Locked or Unlocked */}
        {!isUnlocked ? (
          /* ========================================================================= */
          /* LOCKED STATE: Large Unlock Button with Key                                */
          /* ========================================================================= */
          <div className="relative max-w-3xl mx-auto bg-gradient-to-br from-[#0A1E3F] via-[#0d2752] to-[#07152B] rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-blue-500/20 overflow-hidden text-center">
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#0276FD]/25 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

            {/* Lock Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-blue-200 text-xs font-semibold mb-6">
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>Special Introductory Trial Offers Locked</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Ready to Experience Farm Fresh Purity?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto mb-8 font-normal leading-relaxed">
              Unlock our discounted 5-day & 7-day introductory trial subscriptions. Choose your milk
              variety and select the date you wish to begin receiving sunrise deliveries.
            </p>

            {/* LARGE UNLOCK BUTTON WITH KEY */}
            <div className="flex flex-col items-center justify-center gap-3">
              <button
                onClick={handleUnlockClick}
                disabled={isUnlocking}
                aria-label="Unlock Trails Pack Offers"
                className={`group relative inline-flex items-center justify-center gap-3.5 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-base sm:text-lg rounded-2xl shadow-[0_10px_35px_rgba(245,158,11,0.35)] hover:shadow-[0_15px_45px_rgba(245,158,11,0.5)] active:scale-97 transition-all duration-300 cursor-pointer border-2 border-white/60 ${
                  isUnlocking ? 'scale-95 animate-pulse' : 'hover:scale-102'
                }`}
              >
                {/* Key Graphic with rotation animation */}
                <div className="w-10 h-10 rounded-xl bg-slate-950/10 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <KeyRound className="w-6 h-6 text-slate-900 group-hover:scale-110 transition-transform" />
                </div>

                <div className="text-left">
                  <span className="block leading-tight text-slate-950 font-black tracking-tight">
                    {isUnlocking ? 'Unlocking Offers...' : 'Unlock Trial Pack'}
                  </span>
                  <span className="block text-[11px] font-bold text-slate-800 opacity-90 leading-tight">
                    Tap with key to reveal 5 & 7-day deals
                  </span>
                </div>

                <Sparkles className="w-5 h-5 text-slate-900 ml-1 animate-spin duration-3000 hidden sm:inline-block" />
              </button>

              <span className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero deposit • No commitment required • 100% farm pure</span>
              </span>
            </div>

            {/* Locked feature preview tags */}
            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300">
              <div className="flex items-center justify-center gap-1.5">
                <Sun className="w-4 h-4 text-amber-400" />
                <span>Delivered by 7 AM</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <Milk className="w-4 h-4 text-blue-300" />
                <span>Untoned & Raw</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>Choose Start Date</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <Gift className="w-4 h-4 text-pink-400" />
                <span>Paneer Sample in 7-Day</span>
              </div>
            </div>
          </div>
        ) : (
          /* ========================================================================= */
          /* UNLOCKED STATE: 5 & 7 Days Offers + Date Starting From Selector          */
          /* ========================================================================= */
          <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
            {/* Unlocked Banner Header */}
            <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 text-white rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-amber-300 fill-amber-300" />
                </div>
                <div>
                  <h4 className="font-extrabold text-base sm:text-lg leading-snug">
                    Trial Pack Offers Unlocked!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-100 font-medium">
                    Select your trial duration, milk preference, and pick your delivery starting date.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsUnlocked(false)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white/90 bg-white/10 hover:bg-white/20 px-3.5 py-1.5 rounded-full transition-colors cursor-pointer shrink-0"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Re-lock view</span>
              </button>
            </div>

            {/* Trial Duration Cards (5 Days vs 7 Days) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 5-DAY STARTER TRIAL */}
              <div
                onClick={() => setSelectedDays(5)}
                className={`relative rounded-3xl p-6 sm:p-7 border-2 transition-all duration-200 cursor-pointer ${
                  selectedDays === 5
                    ? 'border-[#0276FD] bg-blue-50/40 shadow-xl shadow-blue-500/10 scale-[1.01]'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                }`}
              >
                {selectedDays === 5 && (
                  <div className="absolute -top-3.5 right-6 px-3.5 py-0.5 bg-[#0276FD] text-white text-[11px] font-black uppercase tracking-wider rounded-full shadow-xs flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Selected Plan</span>
                  </div>
                )}

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    Quick Taste
                  </span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Save ₹{pricing[selectedMilk][selectedQty][5].original - pricing[selectedMilk][selectedQty][5].price}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#0A1E3F]">5-Day Starter Trial</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-5">
                  Great for tasting morning freshness and testing doorstep delivery schedule.
                </p>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl sm:text-4xl font-black text-[#0A1E3F]">
                    ₹{pricing[selectedMilk][selectedQty][5].price}
                  </span>
                  <span className="text-sm font-bold text-slate-400 line-through">
                    ₹{pricing[selectedMilk][selectedQty][5].original}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    ({selectedQty}/day for 5 mornings)
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>5 consecutive morning deliveries before 7:00 AM</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>100% untoned, raw, and laboratory-tested milk</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Free morning cold-chain delivery included</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-400">
                    <span className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center text-[10px]">
                      —
                    </span>
                    <span className="line-through">No free paneer sample</span>
                  </li>
                </ul>
              </div>

              {/* 7-DAY FULL WEEK TRIAL (MOST POPULAR) */}
              <div
                onClick={() => setSelectedDays(7)}
                className={`relative rounded-3xl p-6 sm:p-7 border-2 transition-all duration-200 cursor-pointer ${
                  selectedDays === 7
                    ? 'border-[#0276FD] bg-blue-50/40 shadow-xl shadow-blue-500/10 scale-[1.01]'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                }`}
              >
                {/* Popular Pill */}
                <div className="absolute -top-3.5 left-6 px-3.5 py-0.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[11px] font-black uppercase tracking-wider rounded-full shadow-xs flex items-center gap-1">
                  <Sparkles className="w-3 h-3 fill-current" />
                  <span>⭐ Most Popular & Best Value</span>
                </div>

                {selectedDays === 7 && (
                  <div className="absolute -top-3.5 right-6 px-3.5 py-0.5 bg-[#0276FD] text-white text-[11px] font-black uppercase tracking-wider rounded-full shadow-xs flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Selected Plan</span>
                  </div>
                )}

                <div className="flex items-center justify-between mb-4 mt-2">
                  <span className="text-xs font-black uppercase tracking-wider text-[#0276FD] bg-blue-100/70 px-3 py-1 rounded-full">
                    Complete Week
                  </span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Save ₹{pricing[selectedMilk][selectedQty][7].original - pricing[selectedMilk][selectedQty][7].price}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#0A1E3F]">7-Day Full Week Trial</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-5">
                  Experience full digestive and wellness benefits with a complete week of farm milk.
                </p>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl sm:text-4xl font-black text-[#0A1E3F]">
                    ₹{pricing[selectedMilk][selectedQty][7].price}
                  </span>
                  <span className="text-sm font-bold text-slate-400 line-through">
                    ₹{pricing[selectedMilk][selectedQty][7].original}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    ({selectedQty}/day for 7 mornings)
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>7 consecutive morning deliveries before 7:00 AM</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>100% untoned, raw, and laboratory-tested milk</span>
                  </li>
                  <li className="flex items-center gap-2 font-bold text-[#0276FD]">
                    <Gift className="w-4 h-4 text-pink-500 shrink-0" />
                    <span>Includes FREE 100g Fresh Paneer sample on Day 4!</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Priority early slot delivery included</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Customization Card: Milk Type, Daily Volume & START DATE PICKER */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h4 className="text-lg font-black text-[#0A1E3F] border-b border-slate-100 pb-3 flex items-center gap-2">
                <Milk className="w-5 h-5 text-[#0276FD]" />
                <span>Customize Your Trial Preferences</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 1. Milk Type Selection */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                    Select Milk Variant
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedMilk('cow')}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        selectedMilk === 'cow'
                          ? 'border-[#0276FD] bg-blue-50 text-[#0276FD] font-bold shadow-xs'
                          : 'border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span className="block text-xs font-extrabold leading-tight">Cow Milk</span>
                      <span className="block text-[10px] text-slate-500 leading-tight mt-0.5">Untoned 6.5%</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedMilk('buffalo')}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        selectedMilk === 'buffalo'
                          ? 'border-[#0276FD] bg-blue-50 text-[#0276FD] font-bold shadow-xs'
                          : 'border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span className="block text-xs font-extrabold leading-tight">Buffalo Milk</span>
                      <span className="block text-[10px] text-slate-500 leading-tight mt-0.5">Rich & Thick</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedMilk('a2')}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        selectedMilk === 'a2'
                          ? 'border-[#0276FD] bg-blue-50 text-[#0276FD] font-bold shadow-xs'
                          : 'border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span className="block text-xs font-extrabold leading-tight">A2 Desi Cow</span>
                      <span className="block text-[10px] text-slate-500 leading-tight mt-0.5">Gir Vedic</span>
                    </button>
                  </div>
                </div>

                {/* 2. Daily Quantity Selection */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                    Daily Morning Quantity
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedQty('500ml')}
                      className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                        selectedQty === '500ml'
                          ? 'border-[#0276FD] bg-blue-50 text-[#0276FD] font-bold shadow-xs'
                          : 'border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span className="block text-xs font-black">500 ml / Day</span>
                      <span className="block text-[10px] text-slate-500">1 standard packet</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedQty('1L')}
                      className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                        selectedQty === '1L'
                          ? 'border-[#0276FD] bg-blue-50 text-[#0276FD] font-bold shadow-xs'
                          : 'border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span className="block text-xs font-black">1 Litre / Day</span>
                      <span className="block text-[10px] text-slate-500">Family pack</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* ================================================================= */}
              {/* 3. DATE SELECTION ("choose the date starting from")               */}
              {/* ================================================================= */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <label
                    htmlFor="trail-start-date"
                    className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5"
                  >
                    <Calendar className="w-4 h-4 text-[#0276FD]" />
                    <span>Choose Starting Date</span>
                  </label>
                  <span className="text-[11px] font-semibold text-slate-500">
                    Next available dawn delivery starts from tomorrow
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                  {/* Quick Pick Date Pills */}
                  <div className="sm:col-span-6 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setStartDate(getTomorrowDate())}
                      className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer text-center ${
                        startDate === getTomorrowDate()
                          ? 'border-[#0276FD] bg-blue-50 text-[#0276FD] shadow-2xs'
                          : 'border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      Tomorrow
                    </button>
                    <button
                      type="button"
                      onClick={() => setStartDate(getDayAfterTomorrowDate())}
                      className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer text-center ${
                        startDate === getDayAfterTomorrowDate()
                          ? 'border-[#0276FD] bg-blue-50 text-[#0276FD] shadow-2xs'
                          : 'border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      Day After Tomorrow
                    </button>
                  </div>

                  {/* Native Date Input for exact picker */}
                  <div className="sm:col-span-6">
                    <div className="relative">
                      <input
                        id="trail-start-date"
                        type="date"
                        min={getTomorrowDate()}
                        value={startDate}
                        onChange={(e) => {
                          if (e.target.value) setStartDate(e.target.value);
                        }}
                        className="w-full px-4 py-2 text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0276FD] cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Date Span Calculation Summary */}
                <div className="mt-3.5 p-3.5 bg-blue-50/60 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <Clock className="w-4 h-4 text-[#0276FD] shrink-0" />
                    <span>
                      Delivery Schedule:{' '}
                      <strong className="text-[#0A1E3F]">
                        {formatDateDisplay(startDate)}
                      </strong>{' '}
                      to{' '}
                      <strong className="text-[#0A1E3F]">
                        {formatDateDisplay(endDate)}
                      </strong>{' '}
                      ({selectedDays} mornings)
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-blue-700 bg-white px-2.5 py-0.5 rounded-full border border-blue-200 shadow-2xs">
                    7:00 AM Dawn Delivery
                  </span>
                </div>
              </div>

              {/* Order Confirmation Strip */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-[#0A1E3F]">
                      ₹{currentPricing.price}
                    </span>
                    <span className="text-sm font-bold text-slate-400 line-through">
                      ₹{currentPricing.original}
                    </span>
                    <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Save ₹{savings}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    Includes all {selectedDays} mornings • Free doorstep delivery
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleBookNow}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#0276FD] hover:bg-[#0060d6] text-white text-sm font-bold rounded-full shadow-lg shadow-blue-500/25 active:scale-97 transition-all cursor-pointer"
                >
                  <span>Book {selectedDays}-Day Trial Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Reassurance Footer Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-center sm:text-left">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-2xs">
                <Truck className="w-5 h-5 text-[#0276FD] shrink-0" />
                <div>
                  <h5 className="text-xs font-bold text-slate-800">Delivered by 7:00 AM</h5>
                  <p className="text-[11px] text-slate-500">Chilled doorstep morning delivery</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                <div>
                  <h5 className="text-xs font-bold text-slate-800">Zero Contract / Lock-in</h5>
                  <p className="text-[11px] text-slate-500">Trial ends automatically, no auto-renew</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-2xs">
                <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
                <div>
                  <h5 className="text-xs font-bold text-slate-800">100% Raw & Untoned</h5>
                  <p className="text-[11px] text-slate-500">Tested across 26+ adulteration checks</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
