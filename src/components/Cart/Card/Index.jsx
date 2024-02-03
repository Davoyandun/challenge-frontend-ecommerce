import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import "./Card.css";
function Card({ image, id, price, quantity }) {
  const { removeFromCart, addToCart } = useContext(CartContext);

  const handleAddQuantity = () => {
    addToCart({
      id: id,
      price: price,
      image: image,
      quantity: quantity + 1,
    });
  };

  const handleRemoveQuantity = () => {
    removeFromCart({
      id: id,
      price: price,
      image: image,
      quantity: quantity - 1,
    });
  };
  return (
    <div className="CartCardContainer">
      <div className="CartProductImageContainer">
        <img src={image} alt="img not found" />
      </div>
      <span>{price * quantity}</span>

      <div className="CartButtonContainer">
        <button onClick={handleRemoveQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={handleAddQuantity}>+</button>
      </div>
    </div>
  );
}

export { Card };
