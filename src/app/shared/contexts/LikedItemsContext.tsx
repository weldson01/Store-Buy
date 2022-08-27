import { createContext, useState } from "react";

export interface ILikedItems {
  id: number;
  title: string;
  description: string;
  image: string;
  liked: boolean;
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
