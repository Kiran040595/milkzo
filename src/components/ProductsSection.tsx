import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import type { Product } from '../types';

interface ProductsSectionProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
}) => {
  return (
    <section id="products" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0276FD] block mb-1">
              Dairy Essentials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0A1E3F] tracking-tight leading-tight">
              Our Products
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-xl leading-relaxed">
              Wholesome dairy products, made with care, for a healthier and happier tomorrow.
            </p>
          </div>
          <div>
            <button
              onClick={() => {
                const el = document.getElementById('products');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-[#0276FD] text-[#0276FD] hover:bg-[#0276FD] hover:text-white text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer group shadow-2xs hover:shadow-md hover:shadow-blue-500/20 active:scale-97"
            >
              View All Products
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-white rounded-3xl border border-slate-100 p-5 sm:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(2,118,253,0.1)] hover:border-blue-200/80 transition-all duration-300 relative hover:-translate-y-1"
            >
              {/* Product Image Stage */}
              <div
                onClick={() => onSelectProduct(product)}
                className="relative w-full aspect-square bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9]/50 rounded-2xl overflow-hidden mb-5 cursor-pointer flex items-center justify-center p-4 group-hover:from-blue-50/50 group-hover:to-white transition-colors duration-500"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-contain drop-shadow-md group-hover:scale-106 transition-transform duration-500"
                />

                {/* Quick Add overlay button */}
                <button
                  onClick={(e) => onAddToCart(product, e)}
                  title="Quick Add to Cart"
                  aria-label={`Quick add ${product.name} to cart`}
                  className="absolute bottom-3.5 right-3.5 w-10 h-10 bg-white/95 backdrop-blur-xs hover:bg-[#0276FD] text-slate-700 hover:text-white rounded-full shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95 border border-slate-100"
                >
                  <Plus className="w-4 h-4" strokeWidth={2.5} />
                </button>
              </div>

              {/* Product Info */}
              <div className="flex-1 flex flex-col justify-between space-y-3.5">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="text-lg sm:text-xl font-extrabold text-[#0A1E3F] hover:text-[#0276FD] cursor-pointer transition-colors"
                    >
                      {product.name}
                    </h3>
                    <div className="text-right">
                      <span className="text-sm font-black text-[#0276FD]">
                        ₹{product.price}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium block">
                        {product.unit}
                      </span>
                    </div>
                  </div>
                  <p className="mt-1.5 text-xs sm:text-[13px] text-slate-500 line-clamp-2 leading-relaxed">
                    {product.shortDesc}
                  </p>
                </div>

                {/* Action Button: View Details */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border-2 border-[#0276FD] text-[#0276FD] hover:bg-[#0276FD] hover:text-white text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer group/btn shadow-2xs hover:shadow-sm"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
