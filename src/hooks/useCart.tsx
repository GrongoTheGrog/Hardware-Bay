import { createContext, ReactNode, useContext, useReducer } from "react";
import { CartType, Action, CartContextType } from "../types/cart";

const CartContext = createContext<null | CartContextType>(null);

function reducer(state: CartType, action: Action): CartType{
  switch (action.type) {
    case "add-to-cart":
      const updateAdd = {
        totalPrice: state.totalPrice + action.product.price,
        products: [...state.products, action.product]
      };
      localStorage.setItem('cart', JSON.stringify(updateAdd));
      return updateAdd;
      

    case "remove-from-cart":
      const updateRemove = {
        totalPrice: state.totalPrice - action.product.price,
        products: state.products.filter(product => product.id !== action.product.id)
      }
      localStorage.setItem('cart', JSON.stringify(updateRemove));
      return updateRemove

    case "clear-cart":
      const updateClear = {
        totalPrice: 0,
        products: []
      }
      localStorage.setItem('cart', JSON.stringify(updateClear));
      return updateClear;


    default:
      return state;
  }
}

export const CartContextElement = ({children}: {children: ReactNode}) => {

  const cartStorage = localStorage.getItem('cart');

  const [state, dispatch] = useReducer(reducer, cartStorage ? JSON.parse(cartStorage) : {
    products: [],
    totalPrice: 0
  });

  const context: CartContextType = {state, dispatch};

  return (
    <CartContext.Provider value={context}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}