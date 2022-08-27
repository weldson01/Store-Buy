import { useCallback, useContext } from "react";
import { LikedItemsContext } from "../contexts/LikedItemsContext";

export const useLikedItems = () => {
  const [likedItems, setLikedItems] = useContext(LikedItemsContext);

  return {
    likedItems,
    setLikedItems,
  };
};
