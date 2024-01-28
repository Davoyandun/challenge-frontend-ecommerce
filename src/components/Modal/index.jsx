import { useContext } from "react";
import "./Modal.css";
import { Rating } from "../Filter/RatingFilter/Rating";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { SearchContext } from "../../contexts/SearchContext";

function Modal() {
  const {
    setIsOpen,
    imageProduct,
    titleProduct,
    priceProduct,
    descriptionProduct,
  } = useContext(SearchContext);

  const setCloseModal = () => {
    setIsOpen(false);
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
          <Rating stars={3} />
          <h6>{descriptionProduct}</h6>
          <div className="CartHeaderModalContainer">
            <div className="QuantityCartHeaderModalContainer">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
            <div className="ButtonCartHeaderModalContainer">
              <button>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Modal };
