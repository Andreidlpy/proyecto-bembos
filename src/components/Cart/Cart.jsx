import React from "react";
import "./cart.css";
import { CartButtons } from "./CartButtons";

export const Cart = ({
  onToggleDrawer,
  onIncrement,
  cart,
  onDecrement,
  counter,
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

      {
        cart.length < 1 ? 
       ( <div className="cart__content">
          <img src="/images/cart.svg" alt="cart" />
          <p className="cart__content-empty">Tu canasta está vacía</p>
          <p className="cart__content-add">
            Te invitamos a volver a nuestras tiendas y agregar productos a tu
            canasta
          </p>
        </div>)
        :
        (
          <div>
            { 
              cart.map( c => (
                <article className="cart-item" key={ c.id }>
                  <div className="cart-item__content">
                    <img className="cart-item__image" src={ c.img }  
                      alt={c.nombre}
                      />
                   <div className="cart-item__info">
                    <h2 className="cart-item__nombre">{ c.nombre }</h2>
                    <span className="cart-item__price">S/. {c.precio_actual}</span>
                   </div>
                  </div>
                  <div className="cart-item__actions">
                    <button>+</button>
                    <button>+-</button>
                  </div>
                </article>
              ))
            }
          </div>
        )
      }
      <CartButtons />
    </div>
  );
};
