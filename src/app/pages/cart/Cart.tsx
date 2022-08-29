import { useEffect } from "react";
import { Card } from "../../shared/components/cards/Card";
import { CardWrapper } from "../../shared/components/cards/CardWrapper";
import { useCartItems } from "../../shared/hooks/CartItems";
import { useLikedItems } from "../../shared/hooks/LikedItems";
import { IItemsAPI } from "../../shared/types";

export const Cart = () => {
  const { likedItems } = useLikedItems();
  const { cart } = useCartItems();
  useEffect(() => {
    document.title = "Carrinho - Store Buy";
  }, []);
  return (
    <main>
      <CardWrapper>
        {cart &&
          cart.map((item: IItemsAPI) => {
            return (
              <Card
                id={item.id}
                description={item.description}
                image={item.image}
                liked={
                  likedItems.filter((i: any) => {
                    i.id === item.id;
                  })
                    ? true
                    : false
                }
                title={item.title}
              />
            );
          })}
      </CardWrapper>
    </main>
  );
};
