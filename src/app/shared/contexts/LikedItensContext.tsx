import { createContext, useState } from "react";

interface ILikedItens {
  id: number;
  title: string;
  description: string;
  image: string;
}
const [likedItems, setLikedItems] = useState<ILikedItens[]>([]);

export const LikedItensContext = createContext([likedItems, setLikedItems]);

export const LikedItensContextProvider = () => {
  return (
    <LikedItensContext.Provider
      value={[likedItems, setLikedItems]}
    ></LikedItensContext.Provider>
  );
};
