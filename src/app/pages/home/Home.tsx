import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLikedItems } from "../../shared/hooks/LikedItems";
import { ApiException } from "../../shared/service/Api/ApiException";
import {
  IProducts,
  ServiceProducts,
} from "../../shared/service/Api/serviceProducts/ServiceProducts";
import { Card } from "./components/Card";
import { CardWrapper } from "./components/CardWrapper";

export const Home = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const { likedItems, setLikedItems } = useLikedItems();

  useEffect(() => {
    setLikedItems([
      {
        id: 0,
        title: "fkskf",
        description: "foksfo",
        image: "kfoskofk",
      },
    ]);
    console.log(likedItems);
  }, []);

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
                key={item.id}
              />
            );
          })}
      </CardWrapper>
    </>
  );
};
