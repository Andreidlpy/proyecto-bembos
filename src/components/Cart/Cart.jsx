import React from "react";
import "./cart.css";
import { CartButtons } from "./CartButtons";

export const Cart = ({
  onToggleDrawer,
  handleIncrement,
  handleDecrement,
  cart,
}) => {
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

      {cart.length < 1 ? (
        <div className="cart__content">
          <img src="/images/cart.svg" alt="cart" />
          <p className="cart__content-empty">Tu canasta está vacía</p>
          <p className="cart__content-add">
            Te invitamos a volver a nuestras tiendas y agregar productos a tu
            canasta
          </p>
        </div>
      ) : (
        <div>
          <h1 className="cart__title">Tu Carrito</h1>
          <p className="cart__subtitle">
            <strong>¿Cuentas con cupones de Dscto.?</strong> Ingrésalos en el siguiente paso
          </p>
          {cart.map((c) => (
            <article className="cart-item" key={c.id}>
              <div className="cart-item__content">
                <img className="cart-item__image" src={c.img} alt={c.nombre} />
                <div className="cart-item__info">
                  <h2 className="cart-item__nombre">{c.nombre}</h2>
                  <span className="cart-item__price">
                    S/. {  (c.precio_actual * c.cantidad).toFixed( 2 ) }
                  </span>
                </div>
              </div>
              <div className="cart-item__actions">
                <button onClick={() =>   handleDecrement( c.id ) } className="cart-item__button">-</button>
                <span className="cart-item__count">{ c.cantidad }</span>
                <button onClick={() =>  handleIncrement( c) } className="cart-item__button">+</button>
              </div>
            </article>
          ))}
        </div>
      )}
      <CartButtons />
    </div>
  );
};
