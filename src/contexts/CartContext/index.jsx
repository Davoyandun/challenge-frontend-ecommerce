import { useState, createContext } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const newCart = [...cart];
    const itemInCart = newCart.find((item) => product.id === item.id);
    if (itemInCart) {
      itemInCart.quantity += product.quantity;
    } else {
      newCart.push({ ...product, quantity: product.quantity });
    }
    setCart(newCart);
  };

  const obtainTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const removeFromCart = (product) => {
    const newCart = [...cart];
    const itemInCart = newCart.find((item) => product.id === item.id);
    if (itemInCart.quantity === 1) {
      const index = newCart.indexOf(itemInCart);
      newCart.splice(index, 1);
    } else {
      itemInCart.quantity--;
    }
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const contextValues = {
    isOpen,
    setIsOpen,
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    obtainTotalItems,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
