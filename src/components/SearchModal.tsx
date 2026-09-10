import React, { useState } from 'react';
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

  const [query, setQuery] = useState('');

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(query.toLowerCase()) ||
      p.highlights.some((h) => h.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search fresh milk, paneer, curd, ghee..."
            className="flex-1 text-sm bg-transparent focus:outline-none text-slate-800 placeholder:text-slate-400"
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="p-1 text-slate-400 hover:text-slate-700 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-3 max-h-80 overflow-y-auto space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-400">
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
                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 cursor-pointer transition-colors group"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-12 h-12 rounded-lg object-contain bg-slate-50 p-1 border border-slate-100"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-[#0A1E3F] group-hover:text-[#0276FD] transition-colors">
                    {p.name}
                  </h4>
                  <p className="text-xs text-slate-500 truncate">
                    {p.shortDesc}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-[#0276FD] block">
                    ₹{p.price}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {p.unit}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
