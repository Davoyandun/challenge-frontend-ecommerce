import { useContext } from "react";
import { Rating } from "./Rating";
import "./RatingFilter.css";
import { SearchContext } from "../../../contexts/SearchContext";

function RatingFilter() {
  const { ratingFilter, setRatingFilter } = useContext(SearchContext);
  
  const handleClick = (rating) => {
    if (ratingFilter === rating) {
      setRatingFilter(0);
    } else {
      setRatingFilter(rating);
    }
  };

  const applyStyles = (rating = 0) => {
    return ratingFilter === rating ? "RatingButtonActive" : "RatingButton";
  };

  return (
    <div className="RatingFilterContainer">
      <h2>Rates:</h2>
      <div className="RatingsContainer">
        <button className={applyStyles(4)} onClick={() => handleClick(4)}>
          <Rating stars={4} />
        </button>
        <button className={applyStyles(3)} onClick={() => handleClick(3)}>
          <Rating stars={3} />
        </button>
        <button className={applyStyles(2)} onClick={() => handleClick(2)}>
          <Rating stars={2} />
        </button>

        <button className={applyStyles(1)} onClick={() => handleClick(1)}>
          <Rating stars={1} />
        </button>
      </div>
    </div>
  );
}

export { RatingFilter };
