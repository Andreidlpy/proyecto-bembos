import { useState } from "react";

const useCounter = () => {
  const [cart, setCart] = useState([]);
  const [pendingProducts, setPendingProducts] = useState([]);

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

  function addToCart(promocion, pending = true ) {
    if( pending ){
      setPendingProducts( ( prev) => addToCartHandle( prev, promocion ))
    }else{
      setCart((prev) => addToCartHandle(prev, promocion));
    }
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

  function decrementFromCart(id, pending = true ) {
    if( pending ){
      setPendingProducts((prev) => decrementFromCartHandle(prev, id));
    }else{
      setCart((prev) => decrementFromCartHandle(prev, id));
    }
  }

  const transferToCart = () => {
    setCart((prev) => [
      ...prev,
      ...pendingProducts.map((item) => ({ ...item, id: crypto.randomUUID() })),
    ]);
    setPendingProducts([]);
  };

  const totalProductos = () => {

    let total = 0;

    cart.forEach( ( item  ) => {
      total += item.cantidad * item.precio_actual;
    })
    
    return total.toFixed(2)
  }
  return {
    //Actions
    addToCart,
    decrementFromCart,
    transferToCart,

    //State
    cart,
    pendingProducts,
    totalProductos,
  };
};

export default useCounter;
