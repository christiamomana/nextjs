export interface Product {
  description: string;
  name: string;
  img: string[];
  price: number;
}

export interface ProductCardProps {
  product: Product;
}
