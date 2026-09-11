import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import type { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  return (
    <SearchModalContent
      onClose={onClose}
      products={products}
      onSelectProduct={onSelectProduct}
    />
  );
};

const SearchModalContent: React.FC<{
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}> = ({ onClose, products, onSelectProduct }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(query.toLowerCase()) ||
      p.highlights.some((h) => h.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-start justify-center pt-3 sm:pt-20 px-3 sm:px-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[85vh]">
        {/* Search Input Bar */}
        <div className="p-3.5 sm:p-4 border-b border-slate-100 flex items-center gap-2.5 sm:gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search fresh milk, paneer, curd, ghee..."
            className="flex-1 text-base sm:text-sm bg-transparent focus:outline-none text-slate-800 placeholder:text-slate-400 font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 px-1.5 py-1 cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            aria-label="Close search"
            className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Chips (when query is empty) */}
        {!query && (
          <div className="p-3 border-b border-slate-100 bg-slate-50/60 flex items-center gap-1.5 overflow-x-auto text-xs">
            <span className="text-slate-400 font-semibold shrink-0 pl-1">Popular:</span>
            {['Milk', 'Paneer', 'Curd', 'Ghee'].map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-[#0276FD] transition-colors cursor-pointer shrink-0 font-medium active:scale-95"
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Results List */}
        <div className="p-2 sm:p-3 max-h-[60vh] sm:max-h-80 overflow-y-auto space-y-1">
          {filtered.length === 0 ? (
            <div className="py-10 text-center text-xs text-slate-400">
              No matching dairy products found for "{query}"
            </div>
          ) : (
            filtered.map((p) => (
              <div
                key={p.id}
                onClick={() => {
                  onSelectProduct(p);
                  onClose();
                }}
                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 active:bg-blue-50 cursor-pointer transition-colors group border border-transparent hover:border-blue-100"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-12 h-12 rounded-lg object-contain bg-slate-50 p-1 border border-slate-100 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-[#0A1E3F] group-hover:text-[#0276FD] transition-colors truncate">
                    {p.name}
                  </h4>
                  <p className="text-xs text-slate-500 truncate">
                    {p.shortDesc}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-black text-[#0276FD] block">
                    ₹{p.price}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {p.unit}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Desktop Keyboard Navigation Footer */}
        <div className="hidden sm:flex items-center justify-between px-4 py-2.5 bg-slate-50/80 border-t border-slate-100 text-[11px] text-slate-400">
          <span>Click any product to view details</span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200 text-slate-500 text-[10px]">ESC</kbd> to exit
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
