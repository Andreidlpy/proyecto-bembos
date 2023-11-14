import React from "react";

export const CartButtons = ({ cart , totalProductos}) => {
  return (
    <div className="cart__buttons">
      <button className={`cart__button cart__button--pay ${cart.length > 0 ? "cart-button--available" : ""}`}>
        <span className="cart__button-count">{cart.length}</span>
        <span className="cart__button-name">
          Ir a pagar
        </span>
        <span className="cart__button-price">S/{totalProductos()}</span>
      </button>
      <button className="cart__button cart__button--shop">
        Seguir comprando
      </button>
    </div>
  );
};
