import React from "react";

export const CartButtons = () => {
  return (
    <div className="cart__buttons">
      <button className="cart__button cart__button--pay">
        <span className="cart__button-count">0</span> 
        <span className="cart__button-name">Ir a pagar</span>
        <span className="cart__button-price">0</span>
      </button>
      <button className="cart__button cart__button--shop">
        Seguir comprando
      </button>
    </div>
  );
};
