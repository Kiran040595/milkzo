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
    <section id="products" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1E3F] tracking-tight">
              Our Products
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-xl">
              Wholesome dairy products, made with care, for a healthier and happier tomorrow.
            </p>
          </div>
          <div>
            <button
              onClick={() => {
                const el = document.getElementById('products');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-[#0276FD] text-[#0276FD] hover:bg-[#0276FD] hover:text-white text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer group"
            >
              View All Products
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-white rounded-2xl sm:rounded-3xl border border-slate-100 hover:border-blue-200 p-4 sm:p-5 shadow-xs hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Product Image Area */}
              <div
                onClick={() => onSelectProduct(product)}
                className="relative w-full aspect-square bg-[#F8FAFC] rounded-xl sm:rounded-2xl overflow-hidden mb-4 cursor-pointer flex items-center justify-center p-3 group-hover:scale-[1.02] transition-transform duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-contain drop-shadow-md"
                />

                {/* Quick Add overlay button */}
                <button
                  onClick={(e) => onAddToCart(product, e)}
                  title="Quick Add to Cart"
                  aria-label={`Quick add ${product.name} to cart`}
                  className="absolute bottom-3 right-3 w-9 h-9 bg-white/90 hover:bg-[#0276FD] text-slate-700 hover:text-white rounded-full shadow-md flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4" strokeWidth={2.5} />
                </button>
              </div>

              {/* Product Info */}
              <div className="flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="text-lg sm:text-xl font-bold text-[#0A1E3F] hover:text-[#0276FD] cursor-pointer transition-colors"
                    >
                      {product.name}
                    </h3>
                    <span className="text-xs font-semibold text-slate-400">
                      ₹{product.price}
                    </span>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
                    {product.shortDesc}
                  </p>
                </div>

                {/* Action Button: View Details */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-full border border-[#0276FD] text-[#0276FD] hover:bg-[#0276FD] hover:text-white text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5" />
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
