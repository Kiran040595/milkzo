import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsBar } from './components/StatsBar';
import { ProductsSection } from './components/ProductsSection';
import { PromiseBanner } from './components/PromiseBanner';
import { ProcessSection } from './components/ProcessSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { MilkComparisonSlider } from './components/MilkComparisonSlider';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AppDownloadSection } from './components/AppDownloadSection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { OrderModal } from './components/OrderModal';
import { SearchModal } from './components/SearchModal';
import { ProcessModal } from './components/ProcessModal';
import { TrailsPackPage } from './pages/TrailsPackPage';
import type { TrialOrderData } from './components/TrailsPackSection';
import { products } from './data/mockData';
import type { Product, CartItem } from './types';

import { CheckCircle2 } from 'lucide-react';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'trails-pack'>(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#trails-pack') {
      return 'trails-pack';
    }
    return 'home';
  });
  const [activeSection, setActiveSection] = useState(() => (
    typeof window !== 'undefined' && window.location.hash === '#trails-pack' ? 'trails-pack' : 'home'
  ));
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [processModalOpen, setProcessModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedTrialOrder, setSelectedTrialOrder] = useState<TrialOrderData | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#trails-pack') {
        setCurrentPage('trails-pack');
        setActiveSection('trails-pack');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Auto hide toast after 3s
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3200);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // Handle active section on scroll (only on home page)
  useEffect(() => {
    if (currentPage !== 'home') return;

    const handleScroll = () => {
      const sections = ['home', 'products', 'process', 'about', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const handleAddToCart = (
    product: Product,
    selectedOption?: { label: string; price: number },
    quantity = 1
  ) => {
    const option = selectedOption || product.options[0];
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedOption.label === option.label
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, selectedOption: option, quantity }];
      }
    });

    showToast(`Added ${quantity}x ${product.name} (${option.label}) to your cart!`);
  };

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    handleAddToCart(product, product.options[0], 1);
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
    showToast('Item removed from cart');
  };

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'trails-pack') {
      setCurrentPage('trails-pack');
      setActiveSection('trails-pack');
      window.location.hash = 'trails-pack';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentPage !== 'home') {
      setCurrentPage('home');
      window.location.hash = sectionId === 'home' ? '' : sectionId;
      setTimeout(() => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
      return;
    }

    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookTrial = (trialData: TrialOrderData) => {
    setSelectedTrialOrder(trialData);
    setOrderOpen(true);
    showToast(`Configured ${trialData.planDays}-Day ${trialData.milkTypeName} Trial!`);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalCartPrice = cartItems.reduce(
    (acc, item) => acc + item.selectedOption.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 left-4 sm:left-auto z-50 flex items-center justify-center sm:justify-start gap-2.5 px-4 py-3 bg-[#0A1E3F] text-white text-xs sm:text-sm font-semibold rounded-2xl shadow-xl border border-blue-400/30 animate-in slide-in-from-bottom-5 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Header */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenOrder={() => {
          setSelectedTrialOrder(null);
          setOrderOpen(true);
        }}
        onOpenSearch={() => setSearchOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Page Content: Separate Trails Pack Page vs Home Page */}
      {currentPage === 'trails-pack' ? (
        <main className="flex-1">
          <TrailsPackPage
            onBackToHome={() => handleNavigate('home')}
            onBookTrial={handleBookTrial}
          />
        </main>
      ) : (
        <main className="flex-1">
          {/* Hero Section */}
          <HeroSection onOrderClick={() => {
            setSelectedTrialOrder(null);
            setOrderOpen(true);
          }} />

          {/* Floating Trust & Stats Bar */}
          <StatsBar />

          {/* Products Grid Section */}
          <ProductsSection
            products={products}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToCart={handleQuickAdd}
          />

          {/* The MilkZo Promise Banner */}
          <PromiseBanner />

          {/* Our Process Section */}
          <ProcessSection onKnowMoreClick={() => setProcessModalOpen(true)} />

          {/* Why Choose MilkZo Section */}
          <WhyChooseSection onOrderClick={() => {
            setSelectedTrialOrder(null);
            setOrderOpen(true);
          }} />

          {/* Interactive Before/After Purity Comparison Slider */}
          <MilkComparisonSlider />

          {/* Customer Testimonials Section */}
          <TestimonialsSection />

          {/* App Download Section */}
          <AppDownloadSection />
        </main>
      )}

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Sticky Bottom Navigation Bar & Cart Pill */}
      <MobileBottomNav
        cartCount={totalCartCount}
        cartTotal={totalCartPrice}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenCart={() => setCartOpen(true)}
        onOpenOrder={() => {
          setSelectedTrialOrder(null);
          setOrderOpen(true);
        }}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(p, opt, qty) => handleAddToCart(p, opt, qty)}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => {
          setSelectedTrialOrder(null);
          setOrderOpen(true);
        }}
      />

      {/* Checkout / Fast Order Modal */}
      <OrderModal
        isOpen={orderOpen}
        onClose={() => {
          setOrderOpen(false);
          setSelectedTrialOrder(null);
        }}
        cartItems={cartItems}
        trialOrder={selectedTrialOrder}
        onOrderSuccess={() => {
          setCartItems([]);
          setSelectedTrialOrder(null);
          showToast('Order scheduled! Delivery will arrive by 7:00 AM.');
        }}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        products={products}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Process "Know More" Modal */}
      <ProcessModal
        isOpen={processModalOpen}
        onClose={() => setProcessModalOpen(false)}
      />
    </div>
  );
}

export default App;
