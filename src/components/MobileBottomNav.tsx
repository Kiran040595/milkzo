import React from 'react';
import { Home, Grid, KeyRound, ShoppingBag, Zap, ChevronRight } from 'lucide-react';

interface MobileBottomNavProps {
  cartCount: number;
  cartTotal: number;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenCart: () => void;
  onOpenOrder: () => void;
  onOpenSearch: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  cartCount,
  cartTotal,
  activeSection,
  onNavigate,
  onOpenCart,
  onOpenOrder,
  onOpenSearch: _onOpenSearch,
}) => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 pointer-events-none">
      <div className="max-w-md mx-auto pointer-events-auto">
        {/* Floating Quick Cart Summary Pill (when items in cart) */}
        {cartCount > 0 && (
          <div className="px-3 pb-2 animate-in slide-in-from-bottom-3 duration-200">
            <button
              onClick={onOpenCart}
              className="w-full bg-[#0A1E3F] text-white p-3 rounded-2xl shadow-xl flex items-center justify-between border border-blue-400/30 hover:bg-[#0d2752] active:scale-[0.98] transition-all cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#0276FD] text-white flex items-center justify-center font-black text-xs shadow-xs">
                  {cartCount}
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold block leading-tight">
                    ₹{cartTotal}
                  </span>
                  <span className="text-[10px] text-blue-200 block leading-tight">
                    Tap to review & checkout
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs font-bold text-[#0276FD] bg-white px-3 py-1.5 rounded-xl shadow-xs">
                <span>View Cart</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        )}

        {/* Bottom Tab Bar */}
        <nav
          aria-label="Mobile Navigation"
          className="bg-white/95 backdrop-blur-xl border-t border-slate-200/80 px-2 py-1.5 shadow-[0_-8px_24px_rgba(10,30,63,0.08)] flex items-center justify-around"
        >
          {/* Home Tab */}
          <button
            onClick={() => onNavigate('home')}
            className={`flex flex-col items-center justify-center py-1 px-2.5 min-w-[54px] min-h-[44px] rounded-xl transition-colors cursor-pointer ${
              activeSection === 'home'
                ? 'text-[#0276FD]'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Home className="w-5 h-5" strokeWidth={activeSection === 'home' ? 2.5 : 2} />
            <span className="text-[10px] font-bold mt-0.5">Home</span>
          </button>

          {/* Products Tab */}
          <button
            onClick={() => onNavigate('products')}
            className={`flex flex-col items-center justify-center py-1 px-2.5 min-w-[54px] min-h-[44px] rounded-xl transition-colors cursor-pointer ${
              activeSection === 'products'
                ? 'text-[#0276FD]'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Grid className="w-5 h-5" strokeWidth={activeSection === 'products' ? 2.5 : 2} />
            <span className="text-[10px] font-bold mt-0.5">Products</span>
          </button>

          {/* Trails Pack Tab */}
          <button
            onClick={() => onNavigate('trails-pack')}
            className={`relative flex flex-col items-center justify-center py-1 px-2.5 min-w-[54px] min-h-[44px] rounded-xl transition-colors cursor-pointer ${
              activeSection === 'trails-pack'
                ? 'text-[#0276FD]'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <div className="relative">
              <KeyRound className="w-5 h-5" strokeWidth={activeSection === 'trails-pack' ? 2.5 : 2} />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400" />
            </div>
            <span className="text-[10px] font-bold mt-0.5">Trials</span>
          </button>

          {/* Cart Tab */}
          <button
            onClick={onOpenCart}
            className="relative flex flex-col items-center justify-center py-1 px-3 min-w-[56px] min-h-[44px] rounded-xl text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5" strokeWidth={2} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 min-w-4 h-4 px-1 bg-[#0276FD] text-white text-[9px] font-black rounded-full flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="text-[10px] font-bold mt-0.5">Cart</span>
          </button>

          {/* Fast Order Tab */}
          <button
            onClick={onOpenOrder}
            className="flex flex-col items-center justify-center py-1 px-3 min-w-[56px] min-h-[44px] rounded-xl text-[#0276FD] hover:text-[#0060d6] transition-colors cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 fill-[#0276FD]" />
            </div>
            <span className="text-[10px] font-black mt-0.5">Order</span>
          </button>
        </nav>
      </div>
    </div>
  );
};
