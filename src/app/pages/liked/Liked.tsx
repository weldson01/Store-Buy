import { Card } from "../../shared/components/cards/Card";
import { CardWrapper } from "../../shared/components/cards/CardWrapper";
import { useLikedItems } from "../../shared/hooks/LikedItems";

export const Liked = () => {
  const { likedItems, setLikedItems } = useLikedItems();
  return (
    <>
      <h3>Items marcados como gostado</h3>
      <CardWrapper>
        {likedItems &&
          likedItems.map((item: any) => {
            return (
              <Card
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                liked={true}
                key={item.id}
              />
            );
          })}
      </CardWrapper>
    </>
  );
};
