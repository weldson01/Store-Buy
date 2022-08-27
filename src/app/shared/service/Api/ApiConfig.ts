import axios from "axios";

export const Api = () => {
  return axios.create({
    baseURL: "https://fakestoreapi.com/products",
  });
};
