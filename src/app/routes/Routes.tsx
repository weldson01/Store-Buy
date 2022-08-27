import { Route, Routes } from "react-router-dom";
import { Home, Liked, Products } from "../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/liked" element={<Liked />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
