import { Route, Routes } from "react-router-dom";
import { Home, Liked, Cart } from "../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/liked" element={<Liked />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
