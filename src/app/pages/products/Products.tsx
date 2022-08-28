import { useEffect } from "react";
import { useLikedItems } from "../../shared/hooks/LikedItems";

export const Products = () => {
  const { likedItems } = useLikedItems();

  useEffect(() => {
    document.title = "Produtos - Store Buy";
  }, []);

  return (
    <div>
      Products e
      {likedItems &&
        likedItems.map((item: any) => {
          return <p>{item.title}</p>;
        })}
    </div>
  );
};
