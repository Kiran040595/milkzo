import React from 'react';
import { ArrowRight, Plus, Star } from 'lucide-react';
import type { Product } from '../types';

interface ProductsSectionProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart?: (product: Product, e: React.MouseEvent) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
}) => {
  const productBadges: Record<string, { label: string; bg: string; text: string }> = {
    'fresh-milk': { label: 'Bestseller', bg: 'bg-emerald-500', text: 'text-white' },
    'fresh-paneer': { label: 'Farm Fresh', bg: 'bg-[#0276FD]', text: 'text-white' },
    'curd': { label: 'Probiotic Rich', bg: 'bg-purple-600', text: 'text-white' },
    'ghee': { label: '100% Desi Cow', bg: 'bg-amber-500', text: 'text-white' },
  };

  return (
    <section id="products" className="scroll-mt-20 py-12 sm:py-16 lg:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0276FD]" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0276FD]">
                Dairy Essentials
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0A1E3F] tracking-tight leading-tight">
              Our Products
            </h2>
            <p className="mt-1 text-xs sm:text-sm lg:text-base text-slate-500 max-w-xl leading-relaxed">
              Wholesome dairy products, made with care, for a healthier and happier tomorrow.
            </p>
          </div>

          {/* View All Products Button on Right */}
          <div>
            <button
              onClick={() => {
                const el = document.getElementById('products');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[#0276FD] text-[#0276FD] hover:bg-[#0276FD] hover:text-white text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-md hover:shadow-blue-500/20 active:scale-97"
            >
              View All Products
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4 Product Cards Grid: 2 cols on mobile, 4 cols on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-6 xl:gap-7">
          {products.slice(0, 4).map((product) => {
            const badge = productBadges[product.id];
            return (
              <div
                key={product.id}
                className="group flex flex-col bg-white rounded-2xl sm:rounded-3xl border border-slate-100 hover:border-blue-200 p-3 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(2,118,253,0.12)] transition-all duration-300 relative hover:-translate-y-1"
              >
                {/* Product Image Container with Quick Add */}
                <div
                  onClick={() => onSelectProduct(product)}
                  className="relative w-full aspect-square bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9]/60 rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4 cursor-pointer flex items-center justify-center p-2.5 sm:p-4 group-hover:from-blue-50/50 group-hover:to-white transition-colors duration-500"
                >
                  {/* Floating Pill Badge */}
                  {badge && (
                    <div className="absolute top-2 left-2 z-10">
                      <span className={`text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs ${badge.bg} ${badge.text}`}>
                        {badge.label}
                      </span>
                    </div>
                  )}

                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-contain drop-shadow-sm group-hover:scale-108 transition-transform duration-500"
                  />

                  {/* Quick Add overlay button */}
                  {onAddToCart && (
                    <button
                      onClick={(e) => onAddToCart(product, e)}
                      title="Quick Add to Cart"
                      aria-label={`Quick add ${product.name} to cart`}
                      className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-7 h-7 sm:w-9 sm:h-9 bg-white/95 backdrop-blur-xs hover:bg-[#0276FD] text-slate-700 hover:text-white rounded-full shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95 border border-slate-100"
                    >
                      <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2.5} />
                    </button>
                  )}
                </div>

                {/* Product Info */}
                <div className="flex-1 flex flex-col justify-between space-y-2.5">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <div className="flex items-center text-amber-400">
                        <Star className="w-3 h-3 fill-amber-400" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold text-slate-700">4.9</span>
                      <span className="text-[10px] text-slate-400 hidden sm:inline">(500+ orders)</span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-2">
                      <h3
                        onClick={() => onSelectProduct(product)}
                        className="text-sm sm:text-lg font-extrabold text-[#0A1E3F] hover:text-[#0276FD] cursor-pointer transition-colors truncate"
                      >
                        {product.name}
                      </h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm sm:text-base font-black text-[#0276FD]">
                          ₹{product.price}
                        </span>
                        <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium">
                          /{product.unit}
                        </span>
                      </div>
                    </div>

                    <p className="hidden sm:block mt-1 text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {product.shortDesc}
                    </p>
                  </div>

                  {/* Action Button: View Details */}
                  <div className="pt-1">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 sm:py-2 px-3 rounded-full border border-blue-200 hover:border-[#0276FD] bg-blue-50/40 hover:bg-[#0276FD] text-[#0276FD] hover:text-white text-[11px] sm:text-xs font-bold transition-all duration-200 cursor-pointer group/btn"
                    >
                      View Details
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Purity & Delivery Guarantee Strip */}
        <div className="mt-8 sm:mt-12 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-blue-50/80 via-slate-50 to-blue-50/80 border border-blue-100 flex flex-wrap items-center justify-around gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            <span className="text-xs font-bold text-slate-700">100% Natural Farm Milk</span>
          </div>
          <div className="hidden sm:block text-slate-300">•</div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0276FD] shrink-0" />
            <span className="text-xs font-bold text-slate-700">Zero Hormones or Adulteration</span>
          </div>
          <div className="hidden sm:block text-slate-300">•</div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
            <span className="text-xs font-bold text-slate-700">Delivered Cold Before 7:00 AM Daily</span>
          </div>
        </div>
      </div>
    </section>
  );
};
