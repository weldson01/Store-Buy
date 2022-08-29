import { createContext, useState } from "react";
import { IItemsAPI } from "../types";

export const LikedItemsContext = createContext<any>([]);

export const LikedItemsContextProvider = ({ children }: any) => {
  const [likedItems, setLikedItems] = useState<IItemsAPI[]>([]);

  return (
    <LikedItemsContext.Provider value={[likedItems, setLikedItems]}>
      {children}
    </LikedItemsContext.Provider>
  );
};
