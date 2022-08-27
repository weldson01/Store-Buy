import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLikedItems } from "../../shared/hooks/LikedItems";
import { ApiException } from "../../shared/service/Api/ApiException";
import {
  IProducts,
  ServiceProducts,
} from "../../shared/service/Api/serviceProducts/ServiceProducts";
import { Card } from "../../shared/components/cards/Card";
import { CardWrapper } from "../../shared/components/cards/CardWrapper";

export const Home = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const { likedItems } = useLikedItems();

  useEffect(() => {
    ServiceProducts()
      .getProducts()
      .then((data) => {
        if (data instanceof ApiException) {
          alert(data.message);
        } else {
          setProducts(data);
        }
      });
  }, []);
  return (
    <>
      <Link to="/products">produtcs</Link>
      <Link to="/liked">marcados como gostei</Link>

      <p>
        Liked Items:{" "}
        {likedItems &&
          likedItems.map((item: any) => {
            return <>{item.title}</>;
          })}
      </p>
      <CardWrapper>
        {products &&
          products.map((item) => {
            return (
              <Card
                title={item.title}
                description={item.description}
                image={item.image}
                id={item.id}
                liked={likedItems.some((lItem: any) => {
                  return lItem.id === item.id;
                })}
              />
            );
          })}
      </CardWrapper>
    </>
  );
};
