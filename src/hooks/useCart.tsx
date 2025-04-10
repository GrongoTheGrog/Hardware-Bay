import { createContext, ReactNode, useContext, useReducer } from "react";
import { CartType, Action, CartContextType } from "../types/cart";

const CartContext = createContext<null | CartContextType>(null);

function reducer(state: CartType, action: Action): CartType{
  switch (action.type) {
    case "add-to-cart":
      
      return {
        totalPrice: state.totalPrice + action.product.price,
        products: [...state.products, action.product]
      }

    case "remove-from-cart":
      return {
        totalPrice: state.totalPrice - action.product.price,
        products: state.products.filter(product => product.id !== action.product.id)
      }

    default:
      return state;
  }
}

export const CartContextElement = ({children}: {children: ReactNode}) => {

  const [state, dispatch] = useReducer(reducer, {
    totalPrice: 0,
    products: []
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