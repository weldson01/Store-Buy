import { createContext, useState } from "react";

interface ILikedItems {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const LikedItemsContext = createContext<any>([]);

export const LikedItemsContextProvider = ({ children }: any) => {
  const [likedItems, setLikedItems] = useState<ILikedItems[]>([]);

  return (
    <LikedItemsContext.Provider value={[likedItems, setLikedItems]}>
      {children}
    </LikedItemsContext.Provider>
  );
};
