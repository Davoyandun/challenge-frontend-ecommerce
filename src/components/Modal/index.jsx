import { useContext, useState } from "react";
import "./Modal.css";
import { Rating } from "../Filter/RatingFilter/Rating";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { SearchContext } from "../../contexts/SearchContext";
import { CartContext } from "../../contexts/CartContext";

function Modal() {
  const {
    setIsOpen,
    imageProduct,
    titleProduct,
    priceProduct,
    ratingProduct,
    descriptionProduct,
    idProduct,
  } = useContext(SearchContext);
  const { addToCart, setIsOpen: setIsOpenCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const [buttonInfo, setButtonInfo] = useState("Add");

  const setCloseModal = () => {
    setIsOpen(false);
  };

  const handleRemoveQuantity = () => {
    setQuantity(quantity - 1);
  };
  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addToCart({
      id: idProduct,
      price: priceProduct,
      title: titleProduct,
      image: imageProduct,
      rating: ratingProduct,
      quantity: quantity,
    });
    setButtonInfo("Product Added!");
    setTimeout(() => {
      setButtonInfo("Add");
      setQuantity(0);
    }, 3000);
    setIsOpenCart(true);
  };

  return (
    <div className="ModalContainer">
      <div className="ContentModalContainer">
        <div className="ProductImageContainer">
          <AiOutlineCloseCircle
            className="closeModal"
            onClick={setCloseModal}
            data-testid="close-modal-svg"
          />
          <img src={imageProduct} alt="product not found" />
        </div>
        <div className="DetailsModalContainer">
          <div className="HeaderDetailModalContainer">
            <h3>{titleProduct}</h3>
            <h3>${priceProduct}</h3>
          </div>
          <Rating stars={ratingProduct} />
          <h6>{descriptionProduct}</h6>
          <div className="CartHeaderModalContainer">
            <div className="QuantityCartHeaderModalContainer">
              <button
                onClick={() => handleRemoveQuantity()}
                disabled={quantity < 2}
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                onClick={() => handleAddQuantity()}
                disabled={quantity > 9}
              >
                +
              </button>
            </div>
            <div className="ButtonCartHeaderModalContainer">
              <button disabled={quantity < 1} onClick={() => handleAddToCart()}>
                {buttonInfo}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Modal };
