import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import type { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.selectedOption.price * item.quantity,
    0
  );
  const deliveryFee = subtotal >= 199 || subtotal === 0 ? 0 : 30;
  const total = subtotal + deliveryFee;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-2xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Drawer Header */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#0276FD]" />
              <h2 className="text-lg font-bold text-[#0A1E3F]">
                Your Dairy Cart ({items.reduce((s, i) => s + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close cart"
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 bg-blue-50 text-[#0276FD] rounded-full flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-700">
                    Your cart is empty
                  </h3>
                  <p className="text-xs text-slate-400 max-w-xs">
                    Explore our pure farm-fresh dairy collection and add nutritious goodness to your doorstep!
                  </p>
                </div>
              </div>
            ) : (
              items.map((item, idx) => (
                <div
                  key={`${item.product.id}-${item.selectedOption.label}`}
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-50/70 border border-slate-100"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-xl object-contain bg-white p-1.5 border border-slate-100 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-[#0A1E3F] truncate">
                      {item.product.name}
                    </h4>
                    <span className="text-xs text-slate-400 block">
                      {item.selectedOption.label}
                    </span>
                    <span className="text-sm font-extrabold text-[#0276FD] mt-0.5 block">
                      ₹{item.selectedOption.price * item.quantity}
                    </span>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center border border-slate-200 bg-white rounded-full px-1 py-0.5 shadow-2xs shrink-0">
                    <button
                      onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                      aria-label="Reduce quantity"
                      className="w-6 h-6 flex items-center justify-center text-slate-500 hover:text-slate-800 rounded-full cursor-pointer"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-6 text-center text-xs font-bold text-[#0A1E3F]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                      aria-label="Increase quantity"
                      className="w-6 h-6 flex items-center justify-center text-slate-500 hover:text-slate-800 rounded-full cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemoveItem(idx)}
                    aria-label="Remove item"
                    className="p-1.5 text-slate-400 hover:text-red-500 transition-colors cursor-pointer shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer & Checkout */}
          {items.length > 0 && (
            <div className="p-5 border-t border-slate-100 bg-slate-50/50 space-y-3">
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-800">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery (Morning 5:30 - 7:00 AM)</span>
                  <span className="font-semibold">
                    {deliveryFee === 0 ? (
                      <span className="text-green-600 font-bold">FREE</span>
                    ) : (
                      `₹${deliveryFee}`
                    )}
                  </span>
                </div>
                {subtotal < 199 && (
                  <p className="text-[11px] text-[#0276FD] bg-blue-50/80 p-2 rounded-lg">
                    Add items worth ₹{199 - subtotal} more for Free Doorstep Delivery!
                  </p>
                )}
                <div className="flex justify-between text-sm font-extrabold text-[#0A1E3F] pt-2 border-t border-slate-200">
                  <span>Total Amount</span>
                  <span>₹{total}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onCheckout();
                }}
                className="w-full py-3.5 px-6 bg-[#0276FD] hover:bg-[#0060d6] text-white text-sm font-bold rounded-full shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                Proceed to Checkout (₹{total})
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
