import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenOrder: () => void;
  onOpenSearch: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
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
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative text-sm lg:text-[15px] font-medium tracking-tight transition-colors cursor-pointer py-1 ${
                    isActive
                      ? 'text-[#0276FD] font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0276FD] rounded-full transition-all" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Button */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              aria-label="Search dairy products"
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
            >
              <Search className="w-5 h-5" strokeWidth={2.2} />
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              aria-label={`Shopping cart with ${cartCount} items`}
              className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={2.2} />
              <span className="absolute 0 top-0.5 right-0.5 min-w-4 h-4 px-1 bg-[#0276FD] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">
                {cartCount}
              </span>
            </button>

            {/* Order Now Pill Button */}
            <button
              onClick={onOpenOrder}
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 bg-[#0276FD] hover:bg-[#0060d6] text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg shadow-blue-500/20 active:scale-98 transition-all cursor-pointer"
            >
              Order Now
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-left px-3 py-2.5 text-base font-medium rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-[#0276FD] font-semibold'
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
              className="w-full py-3 bg-[#0276FD] hover:bg-[#0060d6] text-white text-base font-semibold rounded-full shadow-md transition-all text-center cursor-pointer"
            >
              Order Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
