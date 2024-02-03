import React, { useContext } from "react";
import "./Cart.css";
import { Card } from "./Card/Index";
import { CartContext } from "../../contexts/CartContext";

function Cart() {
  const { cart, isOpen } = useContext(CartContext);

  const getSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const subtotal = getSubtotal();

  if (isOpen) {
    return (
      <div className="CartContainer">
        <div className="CartInfo">
          <h5>Subtotal</h5>
          <p>{subtotal.toFixed(2)}</p>
          <button disabled={cart.length === 0}>Continue</button>
        </div>
        <div className="Sidebar">
          {cart.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              id={item.id}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>
    );
  }
}

export { Cart };
