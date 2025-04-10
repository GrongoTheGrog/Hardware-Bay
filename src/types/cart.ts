import { Product } from "./product";

export type CartType = {
  totalPrice: number,
  products: Product[];
}

export type CartContextType = {
  state: CartType,
  dispatch: (action: Action) => void;
}

export type AddToCart = {
  type: "add-to-cart",
  product: Product
}

export type RemoveFromCart = {
  type: 'remove-from-cart',
  product: Product,
}

export type ClearCart = {
  type: 'clear-cart'
}

export type Action = AddToCart | RemoveFromCart | ClearCart;