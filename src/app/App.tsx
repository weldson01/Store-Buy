import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/Routes";
import { Footer, Header } from "./shared/components/layout";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
};
