import React, { useState, useEffect } from 'react';
import { X, CheckCircle, MapPin, Clock, Phone, User, Sparkles, Gift } from 'lucide-react';
import type { CartItem } from '../types';
import type { TrialOrderData } from './TrailsPackSection';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onOrderSuccess: () => void;
  trialOrder?: TrialOrderData | null;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onOrderSuccess,
  trialOrder,
}) => {
  if (!isOpen) return null;

  return (
    <OrderModalContent
      onClose={onClose}
      cartItems={cartItems}
      onOrderSuccess={onOrderSuccess}
      trialOrder={trialOrder}
    />
  );
};

const OrderModalContent: React.FC<{
  onClose: () => void;
  cartItems: CartItem[];
  onOrderSuccess: () => void;
  trialOrder?: TrialOrderData | null;
}> = ({ onClose, cartItems, onOrderSuccess, trialOrder }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: 'Bengaluru',
    pincode: '',
    plan: 'daily', // 'daily', 'alternate', 'onetime'
    slot: 'early', // 'early' (5:30 - 7:00 AM) or 'morning' (7:00 - 8:30 AM)
    payment: 'cod', // 'cod' or 'upi'
  });

  const [submitted, setSubmitted] = useState(false);
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = 'MZ-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setSubmitted(true);
    onOrderSuccess();
  };

  const totalAmount = trialOrder
    ? trialOrder.price
    : cartItems.length > 0
    ? cartItems.reduce((s, i) => s + i.selectedOption.price * i.quantity, 0)
    : 76; // Default to 2 packets of milk if opened directly via Order Now

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-t-[28px] sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[92vh] sm:max-h-[90vh] flex flex-col">
        {/* Header with mobile pill and desktop close */}
        <div className="p-4 sm:p-6 border-b border-slate-100 bg-[#0A1E3F] text-white">
          <div className="sm:hidden w-12 h-1.5 bg-white/30 rounded-full mx-auto mb-3" />
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base sm:text-xl font-extrabold">
                {submitted
                  ? 'Order Confirmed!'
                  : trialOrder
                  ? `${trialOrder.planDays}-Day Trial Subscription`
                  : 'Doorstep Fresh Delivery'}
              </h2>
              <p className="text-[11px] sm:text-xs text-blue-200">
                {submitted
                  ? 'Your morning freshness is scheduled!'
                  : trialOrder
                  ? `Delivering ${trialOrder.quantityPerDay} daily starting from ${trialOrder.startDate}`
                  : '100% pure dairy from Indian farmers delivered by 7 AM'}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-block text-[10px] font-mono text-blue-200 bg-white/10 px-1.5 py-0.5 rounded border border-white/20">
                ESC
              </span>
              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {submitted ? (
          /* Confirmation View */
          <div className="p-6 sm:p-8 text-center space-y-5 overflow-y-auto">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-black text-[#0A1E3F]">
                Thank You, {formData.name || 'Friend'}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                Your order <strong className="text-slate-800">#{orderId}</strong> has been received. Our farm team will bottle and pack fresh milk tonight for morning delivery.
              </p>
            </div>

            {/* Delivery Card */}
            <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-100 text-left space-y-2 text-xs">
              {trialOrder && (
                <div className="flex justify-between text-slate-700 pb-2 border-b border-blue-200/50 font-bold">
                  <span className="text-[#0276FD]">Subscription:</span>
                  <span className="text-[#0A1E3F]">
                    {trialOrder.planDays}-Day Trial ({trialOrder.milkTypeName})
                  </span>
                </div>
              )}
              <div className="flex justify-between text-slate-700">
                <span className="font-semibold text-slate-500">Delivery Starting:</span>
                <span className="font-bold text-[#0A1E3F]">
                  {trialOrder ? trialOrder.startDate : 'Tomorrow'} (5:30 AM - 7:00 AM)
                </span>
              </div>
              {trialOrder?.bonusItem && (
                <div className="flex justify-between text-slate-700 font-bold text-pink-600">
                  <span>Bonus Gift:</span>
                  <span>{trialOrder.bonusItem}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-700">
                <span className="font-semibold text-slate-500">Schedule:</span>
                <span className="font-bold capitalize text-[#0276FD]">
                  {trialOrder ? `${trialOrder.planDays} Consecutive Mornings` : `${formData.plan} Morning Delivery`}
                </span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span className="font-semibold text-slate-500">Payment:</span>
                <span className="font-bold uppercase text-slate-800">{formData.payment}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3.5 bg-[#0276FD] hover:bg-[#0060d6] text-white text-sm font-bold rounded-full shadow-md cursor-pointer transition-all"
            >
              Done & Return to Homepage
            </button>
          </div>
        ) : (
          /* Order Form View */
          <form onSubmit={handleSubmit} className="overflow-y-auto p-4 sm:p-6 space-y-4 text-xs">
            {/* Trial Pack Details Pill if active */}
            {trialOrder && (
              <div className="p-3.5 bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl border border-blue-200/80 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase text-[#0276FD] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>{trialOrder.planDays}-Day Trial Pack</span>
                  </span>
                  <span className="text-xs font-black text-[#0A1E3F]">
                    ₹{trialOrder.price}{' '}
                    <span className="text-[10px] text-slate-400 line-through">
                      ₹{trialOrder.originalPrice}
                    </span>
                  </span>
                </div>
                <div className="text-xs text-slate-700 font-semibold">
                  {trialOrder.milkTypeName} • {trialOrder.quantityPerDay} / day
                </div>
                <div className="text-[11px] text-slate-500 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#0276FD]" />
                  <span>
                    Delivering daily from <strong>{trialOrder.startDate}</strong> to{' '}
                    <strong>{trialOrder.endDate}</strong>
                  </span>
                </div>
                {trialOrder.bonusItem && (
                  <div className="text-[11px] font-bold text-pink-600 flex items-center gap-1 pt-0.5">
                    <Gift className="w-3 h-3" />
                    <span>Includes: {trialOrder.bonusItem}</span>
                  </div>
                )}
              </div>
            )}
            {/* Delivery Frequency Selection */}
            <div>
              <label className="font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                Delivery Schedule
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'daily', label: 'Daily Fresh' },
                  { id: 'alternate', label: 'Alternate Days' },
                  { id: 'onetime', label: 'One-Time' },
                ].map((plan) => (
                  <button
                    type="button"
                    key={plan.id}
                    onClick={() => setFormData({ ...formData, plan: plan.id })}
                    className={`min-h-[40px] py-2 px-2 rounded-xl font-bold border text-center transition-all cursor-pointer ${
                      formData.plan === plan.id
                        ? 'border-[#0276FD] bg-blue-50 text-[#0276FD]'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {plan.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Morning Slot Selection */}
            <div>
              <label className="font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                Preferred Morning Window
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, slot: 'early' })}
                  className={`flex items-center gap-2 p-2.5 rounded-xl border font-medium transition-all cursor-pointer min-h-[44px] ${
                    formData.slot === 'early'
                      ? 'border-[#0276FD] bg-blue-50 text-[#0276FD]'
                      : 'border-slate-200 text-slate-600'
                  }`}
                >
                  <Clock className="w-4 h-4 text-[#0276FD] shrink-0" />
                  <span className="text-left">5:30 AM - 7:00 AM (Recommended)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, slot: 'morning' })}
                  className={`flex items-center gap-2 p-2.5 rounded-xl border font-medium transition-all cursor-pointer min-h-[44px] ${
                    formData.slot === 'morning'
                      ? 'border-[#0276FD] bg-blue-50 text-[#0276FD]'
                      : 'border-slate-200 text-slate-600'
                  }`}
                >
                  <Clock className="w-4 h-4 text-[#0276FD] shrink-0" />
                  <span className="text-left">7:00 AM - 8:30 AM</span>
                </button>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 pt-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Your Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-base sm:text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0276FD]"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Mobile Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-base sm:text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0276FD]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Delivery Address (House / Flat / Street)</label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Flat 402, Green Meadows Apartment, MG Road"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 text-base sm:text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0276FD]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">City</label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2.5 text-base sm:text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0276FD] bg-white"
                  >
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Visakhapatnam">Visakhapatnam</option>
                    <option value="Mumbai">Mumbai</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Pin Code</label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    placeholder="560001"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full px-3 py-2.5 text-base sm:text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0276FD]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="pt-1">
              <label className="font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                Payment Method
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, payment: 'cod' })}
                  className={`p-2.5 rounded-xl border text-center font-bold transition-all cursor-pointer ${
                    formData.payment === 'cod'
                      ? 'border-[#0276FD] bg-blue-50 text-[#0276FD]'
                      : 'border-slate-200 text-slate-600'
                  }`}
                >
                  Cash on Delivery
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, payment: 'upi' })}
                  className={`p-2.5 rounded-xl border text-center font-bold transition-all cursor-pointer ${
                    formData.payment === 'upi'
                      ? 'border-[#0276FD] bg-blue-50 text-[#0276FD]'
                      : 'border-slate-200 text-slate-600'
                  }`}
                >
                  UPI / QR on Delivery
                </button>
              </div>
            </div>

            {/* Order Total & Submit */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-slate-400 block text-[11px]">Total Payable</span>
                <span className="text-lg font-black text-[#0A1E3F]">₹{totalAmount}</span>
              </div>
              <button
                type="submit"
                className="py-3 px-7 bg-[#0276FD] hover:bg-[#0060d6] text-white font-bold rounded-full shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
              >
                Confirm Fresh Order
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
