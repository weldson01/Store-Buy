import { useEffect, useState } from "react";
import { ApiException } from "../../shared/service/Api/ApiException";
import {
  IProducts,
  ServiceProducts,
} from "../../shared/service/Api/serviceProducts/ServiceProducts";
import { Card } from "./components/Card";
import { CardWrapper } from "./components/CardWrapper";

export const Home = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
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
    <CardWrapper>
      {products &&
        products.map((item) => {
          return (
            <Card
              title={item.title}
              description={item.description}
              image={item.image}
            />
          );
        })}
    </CardWrapper>
  );
};
