import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const useCartItems = () => {
  const [cart, setCart] = useContext(CartContext);
  return { cart, setCart };
};
