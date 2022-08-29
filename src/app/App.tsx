import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { AppRoutes } from "./routes/Routes";
import { Footer, Header } from "./shared/components/layout";
import { CartContextProvider } from "./shared/contexts/CartContext";
import { LikedItemsContextProvider } from "./shared/contexts/LikedItemsContext";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    text-decoration: none;
  }
  main{
    padding: 2rem 1rem;
  }
`;

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <LikedItemsContextProvider>
        <CartContextProvider>
          <Header />
          <AppRoutes />
          <Footer />
        </CartContextProvider>
      </LikedItemsContextProvider>
    </BrowserRouter>
  );
};
