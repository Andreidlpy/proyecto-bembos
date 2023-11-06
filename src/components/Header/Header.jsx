import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header_horarios">
        <p>Atención en Lima*</p>
        <div className="line"></div>
        <p>
          Delivery: Hasta las 11 pm. <br />
          Recojo en tienda: Hasta las 10 pm. <br />
          *Los horarios pueden variar por tienda.
        </p>
      </div>

      <div className="header_banner_color">
        <div className="header_banner container">
          <div className="header_banner_logo">
            <a href="">
              <img src="./src/assets/bembos_logo.webp" alt="" />{" "}
            </a>
          </div>

          <div className="header_banner_sub">
            <p className="header_banner_sub_delivery">
              <img src="./src/assets/phone-volume-solid.svg" alt="" />
              <span> Delivery</span> LIMA <br />
              014191919
            </p>
            <button className="header_banner_sub_login">
              {" "}
              <img src="./src/assets/usuario.png" alt="" /> Ingresar o crear tu
              cuenta
            </button>
          </div>
        </div>
      </div>

      <div className="header">
        <nav className="container">
          <ul className="header_navbar_nav_ul">
            <div className="header_navbar_list">
              <li className="header_navbar_nav_ul_item">
                <a href="">MENÚ</a>
              </li>
              <li className="header_navbar_nav_ul_item">
                <a href="">BENEFICIOS</a>
              </li>
              <li className="header_navbar_nav_ul_item">
                <a href="">PROMOCIONES</a>
              </li>
              <li className="header_navbar_nav_ul_item">
                <a href="">LOCALES</a>
              </li>
              <li className="header_navbar_nav_ul_item">
                <a href="">ZONAS DE REPARTO</a>
              </li>
              <li className="header_navbar_nav_ul_item">
                <a href="">NOSOTROS</a>
              </li>
            </div>

            <div className="header__logo">
                <img src="./src/assets/Bembos_logo15.png" alt="" />
            </div>

            <div className="header_navbar_actions">
                <div className="header_navbar_actions_button">
                    <button className="header_navbar_nav_ul_order">
                        <img src="./src/assets/storeIcon.svg" alt="storeIcon" />
                        <div className="header_navbar_text">
                            Pide en tiendas <strong>sin colas</strong>
                        </div>
                    </button>
                </div>
                <button className="header_navbar_nav_ul_cart">
                    <div className="cart_number">0</div>
                    <img src="./src/assets/shopping-cart.png" alt="" />
                </button>
            </div>
           

          </ul>
        </nav>
      </div>
    </header>
  );
};
