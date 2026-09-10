export interface Product {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  price: number;
  originalPrice?: number;
  unit: string;
  options: { label: string; price: number }[];
  nutrition: {
    fat: string;
    protein: string;
    calcium: string;
    energy: string;
  };
  highlights: string[];
}

export interface CartItem {
  product: Product;
  selectedOption: { label: string; price: number };
  quantity: number;
}

export interface ProcessStep {
  id: number;
  title: string;
  subtitle: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  comment: string;
  avatar: string;
}
