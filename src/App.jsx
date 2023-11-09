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
import { Locals } from "./views/Locals/Locals";

import { Menu } from "./views/Menu/Menu";

export const App = () => {
  return (
    <>
      <ScrollTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/locales" element={<Locals/>} /> 
        <Route path="/menu" element={<Menu />} />
      </Routes>
        
      <Footer />
    </>
  );
};
