import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { Product } from '../types';

interface ProductsSectionProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart?: (product: Product, e: React.MouseEvent) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  products,
  onSelectProduct,
}) => {
  return (
    <section id="products" className="py-14 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <h2 className="text-2xl sm:text-4xl lg:text-[38px] font-black text-[#0A1E3F] tracking-tight leading-tight">
              Our Products
            </h2>
            <p className="mt-1.5 text-xs sm:text-base text-slate-500 max-w-xl leading-relaxed">
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
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-[#0276FD] text-[#0276FD] hover:bg-[#0276FD] hover:text-white text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer"
            >
              View All Products
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4 Product Cards Grid: 4 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {products.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-white rounded-2xl border border-slate-100 p-4 sm:p-5 shadow-xs hover:shadow-lg hover:border-blue-200 transition-all duration-300"
            >
              {/* Product Image Container */}
              <div
                onClick={() => onSelectProduct(product)}
                className="w-full aspect-[4/3.8] bg-[#F4F8FC] rounded-xl overflow-hidden mb-4 cursor-pointer flex items-center justify-center p-3 sm:p-4 group-hover:scale-102 transition-transform duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="text-base sm:text-lg font-bold text-[#0A1E3F] hover:text-[#0276FD] cursor-pointer transition-colors"
                  >
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xs sm:text-[13px] text-slate-500 leading-relaxed line-clamp-2">
                    {product.shortDesc}
                  </p>
                </div>

                {/* Action Button: View Details */}
                <div className="pt-1">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full border border-[#0276FD] text-[#0276FD] hover:bg-[#0276FD] hover:text-white text-xs font-semibold transition-all duration-200 cursor-pointer group/btn"
                  >
                    View Details
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
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
