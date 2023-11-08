import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./views/Home/Home";

import {
  Route,
  Routes,
} from "react-router-dom";
import { Promotions } from "./views/Promotions/Promotions";
import { Nosotros } from "./views/Nosotros/Nosotros";
import ScrollTop from "./components/ScrollTop";

export const App = () => {
  return (
    <>
      <ScrollTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
      <Footer />
    </>
  );
};
