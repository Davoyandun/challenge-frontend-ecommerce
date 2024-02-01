import { useContext } from "react";
import { Detail } from "./Detail";
import { SearchContext } from "../../../contexts/SearchContext";
import "./Card.css";

function Card({ image, title, price, description, rating, id }) {
  const {
    setIsOpen,
    setImageProduct,
    setTitleProduct,
    setPriceProduct,
    setDescriptionProduct,
    setRatingProduct,
    setIdProduct,
  } = useContext(SearchContext);

  const openModal = () => {
    setIsOpen(true);
    setImageProduct(image);
    setTitleProduct(title);
    setPriceProduct(price);
    setDescriptionProduct(description);
    setRatingProduct(rating);
    setIdProduct(id);
  };
  return (
    <div
      className="CardContainer"
      onClick={openModal}
      data-testid="card-container"
    >
      <div className="ProductImageContainer">
        <img src={image} alt="img not found" />
      </div>
      <Detail title={title} price={price} rating={rating} />
    </div>
  );
}

export { Card };
