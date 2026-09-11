import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer id="contact" className="bg-[#07152B] text-white pt-14 sm:pt-16 pb-24 sm:pb-10 border-t border-slate-800/80 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 sm:pb-14 border-b border-slate-800/80">
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/images/footer-logo.png"
                alt="MilkZo - Nourishing Life Naturally"
                className="h-11 w-auto object-contain brightness-110"
              />
            </div>
            <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed max-w-xs font-normal">
              Direct from our farmers to your family. 100% pure, untoned, and wholesome dairy delivered fresh every sunrise.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-200">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="py-1 hover:text-white hover:translate-x-0.5 transition-all cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="py-1 hover:text-white hover:translate-x-0.5 transition-all cursor-pointer"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('process')}
                  className="py-1 hover:text-white hover:translate-x-0.5 transition-all cursor-pointer"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="py-1 hover:text-white hover:translate-x-0.5 transition-all cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="py-1 hover:text-white hover:translate-x-0.5 transition-all cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-200">
              Our Products
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="py-1 hover:text-white hover:translate-x-0.5 transition-all cursor-pointer"
                >
                  Fresh Milk
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="py-1 hover:text-white hover:translate-x-0.5 transition-all cursor-pointer"
                >
                  Fresh Paneer
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="py-1 hover:text-white hover:translate-x-0.5 transition-all cursor-pointer"
                >
                  Curd
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="py-1 hover:text-white hover:translate-x-0.5 transition-all cursor-pointer"
                >
                  Pure Ghee
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="py-1 hover:text-white hover:translate-x-0.5 transition-all cursor-pointer"
                >
                  Other Dairy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-200">
              Follow Us
            </h4>
            <div className="flex items-center gap-3 text-slate-300">
              <a
                href="#instagram"
                aria-label="MilkZo on Instagram"
                className="w-10 h-10 rounded-full border border-slate-700 bg-white/5 flex items-center justify-center hover:bg-[#0276FD] hover:border-[#0276FD] hover:text-white hover:scale-110 active:scale-95 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#facebook"
                aria-label="MilkZo on Facebook"
                className="w-10 h-10 rounded-full border border-slate-700 bg-white/5 flex items-center justify-center hover:bg-[#0276FD] hover:border-[#0276FD] hover:text-white hover:scale-110 active:scale-95 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a
                href="#youtube"
                aria-label="MilkZo on YouTube"
                className="w-10 h-10 rounded-full border border-slate-700 bg-white/5 flex items-center justify-center hover:bg-[#0276FD] hover:border-[#0276FD] hover:text-white hover:scale-110 active:scale-95 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="#linkedin"
                aria-label="MilkZo on LinkedIn"
                className="w-10 h-10 rounded-full border border-slate-700 bg-white/5 flex items-center justify-center hover:bg-[#0276FD] hover:border-[#0276FD] hover:text-white hover:scale-110 active:scale-95 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 5: Stay Updated */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-200">
              Stay Updated
            </h4>
            <p className="text-xs text-slate-400 font-normal">
              Get the latest farm updates, recipe guides, and discounts from MilkZo.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2 pt-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                className="w-full px-3.5 py-2.5 text-xs bg-white text-slate-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0276FD] placeholder:text-slate-400 font-medium"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#0276FD] hover:bg-[#0060d6] text-white text-xs font-bold rounded-xl shadow-md transition-all shrink-0 cursor-pointer flex items-center gap-1.5 hover:scale-102 active:scale-97"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    Subscribed!
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
            {subscribed && (
              <p className="text-[11px] text-emerald-400 font-semibold animate-in fade-in duration-200">
                Welcome to the MilkZo family!
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© 2024 MilkZo. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#terms" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
