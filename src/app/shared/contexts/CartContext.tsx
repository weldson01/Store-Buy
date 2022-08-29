import { createContext, useState } from "react";
import { IItemsAPI } from "../types";

export const CartContext = createContext<any>({});

export const CartContextProvider = ({ children }: any) => {
  const [cart, setCart] = useState<IItemsAPI[]>([]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};
