import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, CheckCircle, ShieldCheck } from 'lucide-react';
import type { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (
    product: Product,
    selectedOption: { label: string; price: number },
    quantity: number
  ) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  return (
    <ProductModalContent
      key={product.id}
      product={product}
      onClose={onClose}
      onAddToCart={onAddToCart}
    />
  );
};

const ProductModalContent: React.FC<{
  product: Product;
  onClose: () => void;
  onAddToCart: (
    product: Product,
    selectedOption: { label: string; price: number },
    quantity: number
  ) => void;
}> = ({ product, onClose, onAddToCart }) => {
  const [selectedOption, setSelectedOption] = useState(product.options[0]);
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleAdd = () => {
    onAddToCart(product, selectedOption, quantity);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
    }, 600);
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-t-[28px] sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[92vh] sm:max-h-[90vh] flex flex-col">
        {/* Mobile drag handle */}
        <div className="sm:hidden w-12 h-1.5 bg-slate-300 rounded-full mx-auto mt-2.5 mb-1 shrink-0" />

        {/* Close Button */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 flex items-center gap-2">
          <span className="hidden sm:inline-block text-[10px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
            ESC
          </span>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-5 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-center">
            {/* Product Image */}
            <div className="w-full aspect-[4/3] sm:aspect-square bg-slate-50 rounded-2xl flex items-center justify-center p-3 sm:p-4 border border-slate-100">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full object-contain drop-shadow-lg"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-3 sm:space-y-4">
              <div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0276FD] uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" /> 100% Farm Fresh
                </span>
                <h2 className="text-xl sm:text-3xl font-extrabold text-[#0A1E3F] mt-1 sm:mt-1.5">
                  {product.name}
                </h2>
                <div className="flex items-baseline gap-2 mt-0.5 sm:mt-1">
                  <span className="text-xl sm:text-2xl font-black text-[#0276FD]">
                    ₹{selectedOption.price * quantity}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs sm:text-sm text-slate-400 line-through">
                      ₹{Math.round(product.originalPrice * (selectedOption.price / product.price)) * quantity}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.fullDesc}
              </p>

              {/* Weight / Pack size options */}
              <div className="space-y-1.5">
                <label className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Select Pack Size:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.options.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => setSelectedOption(opt)}
                      className={`min-h-[38px] px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        selectedOption.label === opt.label
                          ? 'border-[#0276FD] bg-blue-50 text-[#0276FD]'
                          : 'border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {opt.label} - ₹{opt.price}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3 sm:gap-4 pt-1">
                <div className="flex items-center border border-slate-200 rounded-full px-2 py-1 bg-slate-50">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    className="w-8 h-8 flex items-center justify-center text-slate-600 hover:text-slate-900 rounded-full cursor-pointer active:scale-95"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center text-sm font-bold text-[#0A1E3F]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                    className="w-8 h-8 flex items-center justify-center text-slate-600 hover:text-slate-900 rounded-full cursor-pointer active:scale-95"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className={`flex-1 py-3 sm:py-3.5 px-4 sm:px-6 rounded-full text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 ${
                    addedAnimation
                      ? 'bg-green-600 text-white'
                      : 'bg-[#0276FD] hover:bg-[#0060d6] text-white shadow-blue-500/20'
                  }`}
                >
                  {addedAnimation ? (
                    <>
                      <CheckCircle className="w-4 h-4" /> Added to Cart!
                    </>
                  ) : (
                    'Add to Cart'
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Nutrition Table & Highlights */}
          <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Nutrition Facts */}
            <div className="bg-slate-50/70 p-4 rounded-2xl border border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0A1E3F] mb-3">
                Nutritional Values (Approx)
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white p-2 rounded-lg border border-slate-100">
                  <span className="text-slate-400 block">Milk Fat</span>
                  <span className="font-bold text-slate-800">{product.nutrition.fat}</span>
                </div>
                <div className="bg-white p-2 rounded-lg border border-slate-100">
                  <span className="text-slate-400 block">Protein</span>
                  <span className="font-bold text-slate-800">{product.nutrition.protein}</span>
                </div>
                <div className="bg-white p-2 rounded-lg border border-slate-100">
                  <span className="text-slate-400 block">Calcium</span>
                  <span className="font-bold text-slate-800">{product.nutrition.calcium}</span>
                </div>
                <div className="bg-white p-2 rounded-lg border border-slate-100">
                  <span className="text-slate-400 block">Energy</span>
                  <span className="font-bold text-slate-800">{product.nutrition.energy}</span>
                </div>
              </div>
            </div>

            {/* Quality Highlights */}
            <div className="bg-blue-50/40 p-4 rounded-2xl border border-blue-100/60">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0A1E3F] mb-3">
                Quality Highlights
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {product.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#0276FD] shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
