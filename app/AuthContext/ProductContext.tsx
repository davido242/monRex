import { createContext } from 'react';

type Product = {
  id: number;
  name: string;
  size: number;
  price: number;
  image: string
}

type ProductProps = {
  products?: Product[];
  setProducts?: (products: Product[]) => void
}

export const ProductContext = createContext<ProductProps>({})