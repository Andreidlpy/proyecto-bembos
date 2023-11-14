import { useState } from "react";

const useCounter = () => {
  const [cart, setCart] = useState([]);

  function findProductById(products, id) {
    return products.find((item) => item.id === id);
  }

  function incrementProductQuantity(products, id) {
    return products.map((item) =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    );
  }
  function addToCartHandle(prev, promocion) {
    const producto = findProductById(prev, promocion.id);

    if (producto) {
      return incrementProductQuantity(prev, promocion.id);
    }
    return [...prev, { ...promocion, cantidad: 1 }];
  }

  function addToCart(promocion) {
    setCart((prev) => addToCartHandle(prev, promocion));
  }

  function decrementProductQuantity(prev, prodCantidad, id) {
    if (prodCantidad === 1) {
      const newArrayProductos = prev.filter((i) => i.id !== id);
      return newArrayProductos;
    } else {
      return prev.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
      );
    }
  }

  function decrementFromCartHandle(prev, id) {
    const producto = findProductById(prev, id);

    if (producto) {
      return decrementProductQuantity(prev, producto.cantidad, id);
    } else {
      return prev;
    }
  }

  function decrementFromCart(id) {
    setCart((prev) => decrementFromCartHandle(prev, id));
  }

  return {
    addToCart,
    decrementFromCart,
    cart,
  };
};

export default useCounter;
