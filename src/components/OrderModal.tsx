import React, { useState } from 'react';
import { X, CheckCircle, MapPin, Clock, Phone, User } from 'lucide-react';
import type { CartItem } from '../types';


interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onOrderSuccess: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onOrderSuccess,
}) => {
  if (!isOpen) return null;

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = 'MZ-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setSubmitted(true);
    onOrderSuccess();
  };

  const totalAmount = cartItems.length > 0
    ? cartItems.reduce((s, i) => s + i.selectedOption.price * i.quantity, 0)
    : 76; // Default to 2 packets of milk if opened directly via Order Now

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-[#0A1E3F] text-white">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold">
              {submitted ? 'Order Confirmed!' : 'Doorstep Fresh Delivery'}
            </h2>
            <p className="text-xs text-blue-200">
              {submitted
                ? 'Your morning freshness is scheduled!'
                : '100% pure dairy from Indian farmers delivered by 7 AM'}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          /* Confirmation View */
          <div className="p-8 text-center space-y-5 overflow-y-auto">
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
              <div className="flex justify-between text-slate-700">
                <span className="font-semibold text-slate-500">Delivery Slot:</span>
                <span className="font-bold text-[#0A1E3F]">
                  {formData.slot === 'early' ? 'Tomorrow 5:30 AM - 7:00 AM' : 'Tomorrow 7:00 AM - 8:30 AM'}
                </span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span className="font-semibold text-slate-500">Frequency:</span>
                <span className="font-bold capitalize text-[#0276FD]">{formData.plan} Morning Delivery</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span className="font-semibold text-slate-500">Payment:</span>
                <span className="font-bold uppercase text-slate-800">{formData.payment}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 bg-[#0276FD] hover:bg-[#0060d6] text-white text-sm font-bold rounded-full shadow-md cursor-pointer transition-all"
            >
              Done & Return to Homepage
            </button>
          </div>
        ) : (
          /* Order Form View */
          <form onSubmit={handleSubmit} className="overflow-y-auto p-5 sm:p-6 space-y-4 text-xs">
            {/* Delivery Frequency Selection */}
            <div>
              <label className="font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                Delivery Schedule
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'daily', label: 'Daily Fresh' },
                  { id: 'alternate', label: 'Alternate Days' },
                  { id: 'onetime', label: 'One-Time Order' },
                ].map((plan) => (
                  <button
                    type="button"
                    key={plan.id}
                    onClick={() => setFormData({ ...formData, plan: plan.id })}
                    className={`py-2 px-2.5 rounded-xl font-bold border text-center transition-all cursor-pointer ${
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
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, slot: 'early' })}
                  className={`flex items-center gap-2 p-2.5 rounded-xl border font-medium transition-all cursor-pointer ${
                    formData.slot === 'early'
                      ? 'border-[#0276FD] bg-blue-50 text-[#0276FD]'
                      : 'border-slate-200 text-slate-600'
                  }`}
                >
                  <Clock className="w-4 h-4 text-[#0276FD]" />
                  <span>5:30 AM - 7:00 AM (Recommended)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, slot: 'morning' })}
                  className={`flex items-center gap-2 p-2.5 rounded-xl border font-medium transition-all cursor-pointer ${
                    formData.slot === 'morning'
                      ? 'border-[#0276FD] bg-blue-50 text-[#0276FD]'
                      : 'border-slate-200 text-slate-600'
                  }`}
                >
                  <Clock className="w-4 h-4 text-[#0276FD]" />
                  <span>7:00 AM - 8:30 AM</span>
                </button>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 pt-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Your Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0276FD]"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Mobile Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0276FD]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Delivery Address (House / Flat / Street)</label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    placeholder="Flat 402, Green Meadows Apartment, MG Road"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0276FD]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">City</label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0276FD] bg-white"
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
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0276FD]"
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
