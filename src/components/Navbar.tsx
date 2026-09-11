import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  cartTotal?: number;
  onOpenCart: () => void;
  onOpenOrder: () => void;
  onOpenSearch: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  cartTotal = 0,
  onOpenCart,
  onOpenOrder,
  onOpenSearch,
  activeSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'process', label: 'Our Process' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-100/80 shadow-2xs transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="MilkZo Homepage"
          >
            <img
              src="/images/logo.png"
              alt="MilkZo - Nourishing Life Naturally"
              className="h-9 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-11">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative text-[15px] font-semibold tracking-tight transition-all duration-200 cursor-pointer py-1.5 ${
                    isActive
                      ? 'text-[#0276FD]'
                      : 'text-slate-600 hover:text-[#0A1E3F]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0276FD] rounded-full shadow-xs shadow-blue-500/30 transition-all duration-300" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Button */}
          <div className="flex items-center gap-1.5 sm:gap-3 lg:gap-4">
            {/* Desktop Search Pill (lg+) */}
            <button
              onClick={onOpenSearch}
              aria-label="Search dairy products"
              className="hidden lg:flex items-center gap-2.5 px-3.5 py-2 bg-slate-100/80 hover:bg-blue-50/80 text-slate-500 hover:text-[#0276FD] rounded-full border border-slate-200/60 hover:border-blue-200 transition-all duration-200 cursor-pointer group"
            >
              <Search className="w-4 h-4 text-slate-400 group-hover:text-[#0276FD] transition-colors" strokeWidth={2.2} />
              <span className="text-xs font-medium text-slate-500 group-hover:text-slate-700">Search dairy...</span>
              <kbd className="text-[10px] font-mono bg-white text-slate-500 px-1.5 py-0.5 rounded shadow-2xs border border-slate-200 group-hover:border-blue-200">
                ⌘K
              </kbd>
            </button>

            {/* Compact Search Button (< lg) */}
            <button
              onClick={onOpenSearch}
              aria-label="Search dairy products"
              className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-slate-600 hover:text-[#0276FD] hover:bg-blue-50/70 rounded-full transition-all duration-200 cursor-pointer"
            >
              <Search className="w-5 h-5" strokeWidth={2.2} />
            </button>

            {/* Shopping Cart Button with Desktop Hover Badge */}
            <div className="relative group">
              <button
                onClick={onOpenCart}
                aria-label={`Shopping cart with ${cartCount} items`}
                className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-slate-600 hover:text-[#0276FD] hover:bg-blue-50/70 rounded-full transition-all duration-200 cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5" strokeWidth={2.2} />
                <span className="absolute top-1 right-1 min-w-4.5 h-4.5 px-1 bg-[#0276FD] text-white text-[10px] font-extrabold rounded-full flex items-center justify-center shadow-md shadow-blue-500/30 animate-in zoom-in-50 duration-200">
                  {cartCount}
                </span>
              </button>

              {/* Desktop Hover Tooltip */}
              {cartCount > 0 && (
                <div className="hidden md:group-hover:flex absolute top-full right-0 mt-1 pointer-events-none flex-col items-center z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="w-2.5 h-2.5 bg-[#0A1E3F] rotate-45 -mb-1" />
                  <div className="bg-[#0A1E3F] text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap border border-slate-700/50">
                    {cartCount} {cartCount === 1 ? 'item' : 'items'} • ₹{cartTotal}
                  </div>
                </div>
              )}
            </div>

            {/* Order Now Pill Button */}
            <button
              onClick={onOpenOrder}
              className="hidden sm:inline-flex items-center justify-center px-6 lg:px-7 py-2.5 bg-gradient-to-r from-[#0276FD] to-[#0062e0] hover:from-[#0067e6] hover:to-[#0054c2] text-white text-sm font-bold rounded-full shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 active:scale-97 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              Order Now
            </button>

            {/* Mobile Hamburger Toggle with 44px touch target */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-11 h-11 flex items-center justify-center text-slate-700 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-5 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-left px-3.5 py-2.5 text-base font-semibold rounded-xl transition-all ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-[#0276FD]'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrder();
              }}
              className="w-full py-3 bg-gradient-to-r from-[#0276FD] to-[#0062e0] text-white text-base font-bold rounded-full shadow-md transition-all text-center cursor-pointer"
            >
              Order Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
