import { useEffect, useState } from "react";
import "./Header.css";
import { NavLink } from "../NavLink";

import Drawer from "react-modern-drawer";
import { useLocation } from "react-router-dom";

export const Header = () => {
  
  const { pathname } = useLocation();
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenDrawerBottom, setIsOpenDrawerBottom] = useState(false);
  
  const toggleDrawer = () => {
    setIsOpenCart((prevState) => !prevState);
  
    if ( isOpenCart ) {
      setIsOpenDrawerBottom(true);
    } else {
      setIsOpenDrawerBottom(false);
    }
  };
  
  const openDrawer = () => {
    setIsOpenCart((prevState) => !prevState);
    setIsOpenDrawerBottom(false);
  }
  
  useEffect(() => {
    if (pathname !== '/promotions') {
      setIsOpenDrawerBottom(false);
    } else {
      setIsOpenDrawerBottom(true);
    }
  }, [pathname]);
  
  return (
    <header>
      <Drawer
        open={isOpenCart}
        onClose={toggleDrawer}
        direction="right"
        style={{maxWidth: "90%", width: "500px"}}
      >
        <h1>Hola</h1>
      </Drawer>
      {
        isOpenDrawerBottom && 
        <div className="drawer"> 
          <div className="drawer__buton">
            <button onClick={openDrawer}  >Ver carrito</button>
          </div>
        </div>
      }
      <div className="header__horarios">
        <p>Atención en Lima*</p>
        <div className="line"></div>
        <p>
          Delivery: Hasta las 11 pm. <br />
          Recojo en tienda: Hasta las 10 pm. <br />
          *Los horarios pueden variar por tienda.
        </p>
      </div>

      <div className="header__banner__color">
        <div className="header__banner container">
          <div className="header__banner__logo">
            <NavLink to="/">
              <img src="./src/assets/bembos_logo.webp" alt="bembos__logo" />{" "}
            </NavLink>
          </div>

          <div className="header__banner__sub">
            <p className="header__banner__sub__delivery">
              <img
                src="./src/assets/phone-volume-solid.svg"
                alt="phone__icon"
              />
              <span> Delivery</span> LIMA <br />
              014191919
            </p>
            <button className="header__banner__sub__login">
              <img src="./src/assets/usuario.png" alt="usuario__imagen" />{" "}
              <span>Ingresar o crear tu cuenta</span>
            </button>
          </div>
        </div>
      </div>

      <div className="header__navbar">
        <nav className="container">
          <ul className="header__navbar__nav__ul">
            <div className="header__navbar__list">
              <li className="header__navbar__nav__ul__item">
                <NavLink to="/menu">MENÚ</NavLink>
              </li>
              <li className="header__navbar__nav__ul__item">
                <NavLink to="/promotions">PROMOCIONES</NavLink>
              </li>
              <li className="header__navbar__nav__ul__item">
                <NavLink to="/locales">LOCALES</NavLink>
              </li>
              <li className="header__navbar__nav__ul__item">
                <NavLink to="/nosotros">NOSOTROS</NavLink>
              </li>
            </div>

            <div className="header____logo">
              <img src="./src/assets/Bembos__logo15.png" alt="" />
            </div>

            <div className="header__navbar__actions">
              <div className="header__navbar__actions__button">
                <button className="header__navbar__nav__ul__order">
                  <img src="./src/assets/storeIcon.svg" alt="storeIcon" />
                  <div className="header__navbar__text">
                    Pide en tiendas <strong>sin colas</strong>
                  </div>
                </button>
              </div>
              <button className="header__navbar__nav__ul__cart" onClick={ toggleDrawer }>
                <div className="cart__number">0</div>
                <img src="./src/assets/shopping-cart.png" alt="" />
              </button>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};
