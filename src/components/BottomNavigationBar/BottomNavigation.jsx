import React from "react";
import "./bottomnavigation.css";
import { Link } from "react-router-dom";

export const BottomNavigation = ({cart, toggleDrawer , openDrawer}) => {

  const link = [
    { text: 'MENU' , imageLink: '/images/hamburger-icon.svg' },
    { text: 'FAVORITOS' , imageLink: '/images/fav-icon.svg' },
    { text: 'CARRITO' , imageLink: '/images/cart-icon.svg' },
    { text: 'MI CUENTA' , imageLink: '/images/login-icon.svg' },
  ]


  return (
    <div className="bottomnav_container">
      <div className="bottomnav">
        <li className="bottomnav__list">
          <Link className="bottomnav__item" to={'/menu'}>
            <img src="/images/hamburger-icon.svg" alt="menu-icon" />
            <p className="bottomnav__item__text">MENU</p>
          </Link>
        </li>
        <li className="bottomnav__list">
          <Link className="bottomnav__item" to={'promotions'}>
            <img src="/images/fav-icon.svg" alt="" />
            <p className="bottomnav__item__text">FAVORITOS</p>
          </Link>
        </li>
        <li className="bottomnav__list">
          <div className="bottomnav__item" onClick={toggleDrawer}>
            <img src="/images/cart-icon.svg" alt="cart-icon" />
            <span className="bottomnav__item__count">{cart.length}</span>
            <p className="bottomnav__item__text">CARRITO</p>
          </div>
        </li>
        <li className="bottomnav__list">
          <Link className="bottomnav__item" >
            <img src="/images/login-icon.svg" alt="login-icon" />
            <p className="bottomnav__item__text">MI CUENTA</p>
          </Link>
        </li>
      </div>
    </div>
  );
};
