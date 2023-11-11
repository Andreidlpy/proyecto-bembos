import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./views/Home/Home";

import { Route, Routes } from "react-router-dom";
import { Promotions } from "./views/Promotions/Promotions";
import { Nosotros } from "./views/Nosotros/Nosotros";
import ScrollTop from "./components/ScrollTop";
import { Locals } from "./views/Locals/Locals";

import { Menu } from "./views/Menu/Menu";
import { Producto } from "./views/Producto/Producto";
import useCounter from "./hooks/useCounter";


import { BottomNavigation } from "./components/BottomNavigationBar/BottomNavigation";

export const App = () => {
  const { cart, incrementar, decrementar, counter } = useCounter();

  return (
    <>
      <ScrollTop />
      <Header 
        onIncrement={incrementar}
        cart={cart}
        onDecrement={decrementar}
        counter={counter}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/promociones" element={<Promotions />} />
        <Route
          path="/promociones/:name"
          element={
            <Producto
              onIncrement={incrementar}
              cart={cart}
              onDecrement={decrementar}
              counter={counter}
            />
          }
        />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/locales" element={<Locals />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
      <BottomNavigation/>
    </>
  );
};
