import React from "react";
import "./bottomnavigation.css";
import { Link } from "react-router-dom";

export const BottomNavigation = () => {
  return (
    <div className="bottomnav_container">
      <div className="bottomnav">
        <li className="bottomnav__list">
          <Link className="bottomnav__item" to={'/menu'}>
            <img src="images/hamburger-icon.svg" alt="" />
            <p className="bottomnav__item__text">MENU</p>
          </Link>
        </li>
        <li className="bottomnav__list">
          <Link className="bottomnav__item" to={'promotions'}>
            <img src="images/fav-icon.svg" alt="" />
            <p className="bottomnav__item__text">FAVORITOS</p>
          </Link>
        </li>
        <li className="bottomnav__list">
          <Link className="bottomnav__item" to={''}>
            <img src="images/cart-icon.svg" alt="" />
            <span className="bottomnav__item__count">0</span>
            <p className="bottomnav__item__text">CARRITO</p>
          </Link>
        </li>
        <li className="bottomnav__list">
          <Link className="bottomnav__item" >
            <img src="images/login-icon.svg" alt="" />
            <p className="bottomnav__item__text">MI CUENTA</p>
          </Link>
        </li>
      </div>
    </div>
  );
};
