import React from "react";
import "./cart.css";
import { CartButtons } from "./CartButtons";


export const Cart = ({ onToggleDrawer }) => {
  return (
    <div className="cart">
      <div className="cart-heading">
        <div className="cart-heading__text-alert">
          <img src="/images/alert-icon.svg" alt="cart" />
          <p>
            No tiene una dirección asignada. <b>Click aquí</b> para ingresar su
            dirección.
          </p>
        </div>
        <button className="cart-heading__close" onClick={onToggleDrawer}>
          ✕
        </button>
      </div>

      <div className="cart__content">
        <img src="/images/cart.svg" alt="cart" />
        <p className="cart__content-empty">Tu canasta está vacía</p>
        <p className="cart__content-add">
          Te invitamos a volver a nuestras tiendas y agregar productos a tu
          canasta
        </p>
      </div>
      <CartButtons />
    </div>
  );
};
