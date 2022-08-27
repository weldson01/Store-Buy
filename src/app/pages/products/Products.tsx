import { useLikedItems } from "../../shared/hooks/LikedItems";

export const Products = () => {
  const { likedItems, setLikedItems } = useLikedItems();

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
