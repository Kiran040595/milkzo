import React, { useState } from 'react';
import { ArrowRight, Plus, Star } from 'lucide-react';
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
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Essentials' },
    { id: 'milk', label: 'Fresh Milk' },
    { id: 'paneer', label: 'Fresh Paneer' },
    { id: 'curd', label: 'Thick Curd' },
    { id: 'ghee', label: 'Pure Ghee' },
  ];

  const filteredProducts = products.filter((product) => {
    if (activeCategory === 'all') return true;
    return product.category.toLowerCase() === activeCategory;
  });

  return (
    <section id="products" className="py-14 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0276FD] block mb-1">
              Dairy Essentials
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-[#0A1E3F] tracking-tight leading-tight">
              Our Products
            </h2>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-base text-slate-500 max-w-xl leading-relaxed">
              Wholesome dairy products, made with care, for a healthier and happier tomorrow.
            </p>
          </div>

          {/* Desktop Filter Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#0276FD] text-white shadow-sm shadow-blue-500/25 scale-102'
                    : 'bg-slate-100/80 hover:bg-slate-200/80 text-slate-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Product Cards Grid: 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-white rounded-2xl sm:rounded-3xl border border-slate-100 p-3 sm:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(2,118,253,0.12)] hover:border-blue-200 transition-all duration-300 relative hover:-translate-y-1.5"
            >
              {/* Product Image Stage */}
              <div
                onClick={() => onSelectProduct(product)}
                className="relative w-full aspect-square bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9]/50 rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-5 cursor-pointer flex items-center justify-center p-2.5 sm:p-4 group-hover:from-blue-50/40 group-hover:to-white transition-colors duration-500"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-contain drop-shadow-md group-hover:scale-108 transition-transform duration-500"
                />

                {/* Rating Badge */}
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex items-center gap-1 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full shadow-2xs border border-slate-100 text-[10px] sm:text-xs font-bold text-slate-700">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>4.9</span>
                </div>

                {/* Quick Add overlay button */}
                <button
                  onClick={(e) => onAddToCart(product, e)}
                  title="Quick Add to Cart"
                  aria-label={`Quick add ${product.name} to cart`}
                  className="absolute bottom-2 right-2 sm:bottom-3.5 sm:right-3.5 w-9 h-9 sm:w-10 sm:h-10 bg-white/95 backdrop-blur-xs hover:bg-[#0276FD] text-slate-700 hover:text-white rounded-full shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110 active:scale-90 border border-slate-100"
                >
                  <Plus className="w-4 h-4" strokeWidth={2.5} />
                </button>
              </div>

              {/* Product Info */}
              <div className="flex-1 flex flex-col justify-between space-y-2.5 sm:space-y-3.5">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5 sm:gap-1">
                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="text-sm sm:text-lg lg:text-xl font-extrabold text-[#0A1E3F] hover:text-[#0276FD] cursor-pointer transition-colors truncate"
                    >
                      {product.name}
                    </h3>
                    <div className="flex sm:block items-baseline gap-1 text-left sm:text-right">
                      <span className="text-sm sm:text-base font-black text-[#0276FD]">
                        ₹{product.price}
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium">
                        /{product.unit}
                      </span>
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] sm:text-[13px] text-slate-500 line-clamp-2 leading-relaxed hidden sm:block">
                    {product.shortDesc}
                  </p>
                </div>

                {/* Action Button: View Details */}
                <div className="pt-1 sm:pt-2">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 sm:px-4 rounded-full border-2 border-[#0276FD] text-[#0276FD] hover:bg-[#0276FD] hover:text-white text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer group/btn shadow-2xs hover:shadow-sm min-h-[42px] active:scale-97"
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
