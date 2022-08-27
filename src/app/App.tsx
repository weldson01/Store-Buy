import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/Routes";
import { Footer, Header } from "./shared/components/layout";
import { LikedItemsContextProvider } from "./shared/contexts/LikedItemsContext";

export const App = () => {
  return (
    <BrowserRouter>
      <LikedItemsContextProvider>
        <Header />
        <AppRoutes />
        <Footer />
      </LikedItemsContextProvider>
    </BrowserRouter>
  );
};
