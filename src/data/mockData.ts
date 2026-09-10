import type { Product, ProcessStep, Testimonial } from '../types';

export const products: Product[] = [
  {
    id: 'fresh-milk',
    name: 'Fresh Milk',
    shortDesc: 'Pure, natural and nutritious milk for your family.',
    fullDesc: 'Procured daily at dawn directly from local dairy farmers. Untoned, free from preservatives and artificial additives, retaining all natural bioactive nutrients, creaminess, and vitamins.',
    image: '/images/product-milk.jpg',
    price: 38,
    originalPrice: 42,
    unit: '500 ml',
    options: [
      { label: '500 ml Pouch', price: 38 },
      { label: '1 Litre Pouch', price: 72 },
      { label: '2 Litres Can', price: 140 },
    ],
    nutrition: {
      fat: '6.5% min',
      protein: '3.6 g',
      calcium: '120 mg',
      energy: '68 kcal',
    },
    highlights: [
      '100% Raw & Untoned',
      'Tested for 26+ adulterants',
      'Cold-chain delivered within 12 hours',
      'No synthetic hormones or antibiotics',
    ],
  },
  {
    id: 'fresh-paneer',
    name: 'Fresh Paneer',
    shortDesc: 'Soft, fresh and full of protein.',
    fullDesc: 'Crafted traditionally by curdling pure unadulterated cow & buffalo milk with organic lemon extracts. Velvety soft texture, high moisture retention, and rich in natural casein protein.',
    image: '/images/product-paneer.jpg',
    price: 95,
    originalPrice: 110,
    unit: '200 g',
    options: [
      { label: '200 g Block', price: 95 },
      { label: '500 g Block', price: 230 },
      { label: '1 kg Family Pack', price: 440 },
    ],
    nutrition: {
      fat: '22 g',
      protein: '18.5 g',
      calcium: '480 mg',
      energy: '265 kcal',
    },
    highlights: [
      'Zero starch or flour binders',
      'Porous texture absorbs flavours easily',
      'Ideal for curries, tikka, and salads',
      'Freshly prepared every morning',
    ],
  },
  {
    id: 'curd',
    name: 'Curd',
    shortDesc: 'Thick, fresh and delicious.',
    fullDesc: 'Traditional Indian dahi set in hygienic conditions using active, wholesome probiotic cultures. Rich, naturally thick without any gelatin, starch, or thickeners.',
    image: '/images/product-curd.jpg',
    price: 45,
    originalPrice: 50,
    unit: '400 g',
    options: [
      { label: '400 g Matka Cup', price: 45 },
      { label: '1 kg Tub', price: 95 },
      { label: '2 kg Party Bucket', price: 180 },
    ],
    nutrition: {
      fat: '4.5 g',
      protein: '4.2 g',
      calcium: '150 mg',
      energy: '72 kcal',
    },
    highlights: [
      'Live probiotic gut-friendly bacteria',
      'Naturally thick & sweet-tangy taste',
      'Zero artificial emulsifiers',
      'Perfect for raita, lassi, or direct meals',
    ],
  },
  {
    id: 'ghee',
    name: 'Ghee',
    shortDesc: 'Pure, nutritious and full of natural goodness.',
    fullDesc: 'Prepared using traditional bilona churning of curd fermented from farm fresh cow milk. Golden granules, rich aromatic scent, and loaded with fat-soluble vitamins A, D, E, and K.',
    image: '/images/product-ghee.jpg',
    price: 380,
    originalPrice: 420,
    unit: '500 ml',
    options: [
      { label: '500 ml Glass Jar', price: 380 },
      { label: '1 Litre Glass Jar', price: 740 },
      { label: '5 Litres Tin', price: 3500 },
    ],
    nutrition: {
      fat: '99.8 g',
      protein: '0 g',
      calcium: 'Trace',
      energy: '897 kcal',
    },
    highlights: [
      'Authentic Danedaar (granular) texture',
      'High smoke point of 250°C',
      'Enhances immunity & digestion',
      '100% natural, no color or preservatives',
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Trusted Farmers',
    subtitle: 'Procured ethically from certified indigenous farmers',
    iconName: 'cow',
  },
  {
    id: 2,
    title: 'Milk Procurement',
    subtitle: 'Chilled collection centers within 2 hours of milking',
    iconName: 'procurement',
  },
  {
    id: 3,
    title: 'Quality Testing',
    subtitle: '26+ stringent laboratory purity and safety checks',
    iconName: 'testing',
  },
  {
    id: 4,
    title: 'Chilling & Packing',
    subtitle: 'Automated 4°C cooling & tamper-evident packing',
    iconName: 'chilling',
  },
  {
    id: 5,
    title: 'Safe Delivery',
    subtitle: 'Temperature-controlled insulated logistics fleet',
    iconName: 'delivery',
  },
  {
    id: 6,
    title: 'To Your Homes',
    subtitle: 'Fresh at your doorstep before 7:00 AM every morning',
    iconName: 'home',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'riya',
    name: 'Riya Sharma',
    city: 'Bengaluru',
    rating: 5,
    comment: 'The milk quality is excellent. Feels good to support a brand that works directly with farmers.',
    avatar: '/images/avatar-riya.jpg',
  },
  {
    id: 'amit',
    name: 'Amit Verma',
    city: 'Hyderabad',
    rating: 5,
    comment: 'Fresh paneer and curd, just like homemade. Highly recommended!',
    avatar: '/images/avatar-amit.jpg',
  },
  {
    id: 'sneha',
    name: 'Sneha Iyer',
    city: 'Chennai',
    rating: 5,
    comment: 'Finally a brand that delivers pure and untoned milk. My family loves MilkZo.',
    avatar: '/images/avatar-sneha.jpg',
  },
];
