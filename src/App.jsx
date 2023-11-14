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
import { DeliveryBurguer } from "./views/DeliveryBurguer/DeliveryBurguer";
import { useDrawer } from "./hooks/useDrawer";
import { MenuHamburguesas } from "./views/MenuHamburguesas/MenuHamburguesas";

export const App = () => {
  

  const { addToCart, decrementFromCart, cart } = useCounter();
  const { isOpenCart, isOpenDrawerBottom, toggleDrawer, openDrawer } =
    useDrawer();

  return (
    <>
      <ScrollTop />
      <Header
        handleIncrement={addToCart}
        handleDecrement={decrementFromCart}
        cart={cart}
        toggleDrawer={toggleDrawer}
        openDrawer={openDrawer}
        isOpenCart={isOpenCart}
        isOpenDrawerBottom={isOpenDrawerBottom}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/promociones" element={<Promotions />} />
        <Route
          path="/promociones/delivery-hamburguesas"
          element={<DeliveryBurguer />}
        />
        <Route
          path="/promociones/:name"
          element={
            <Producto
              handleIncrement={addToCart}
              handleDecrement={decrementFromCart}
              cart={cart}
            />
          }
        />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/locales" element={<Locals />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<Home />} />
        <Route path="/menu/:name" element={<MenuHamburguesas />} />
      </Routes>

      <BottomNavigation toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
      {isOpenDrawerBottom && (
        <div className="drawer">
          <div className="drawer__buton">
            <button onClick={openDrawer}>Ver carrito</button>
          </div>
        </div>
      )}
    </>
  );
};
