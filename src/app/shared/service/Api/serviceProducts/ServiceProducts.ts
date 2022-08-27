import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

export interface IProducts {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: { rate: number; count: number };
}

const getProducts = async (): Promise<IProducts[] | ApiException> => {
  try {
    const { data } = await Api().get("");
    return data;
  } catch (err: any) {
    return err;
  }
};
const getProductById = async (id: number) => {
  const data = await Api().get(`/${id}`);
  return data;
};
export const ServiceProducts = () => {
  return { getProducts, getProductById };
};
