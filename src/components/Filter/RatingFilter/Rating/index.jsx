import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import "./Rating.css";
import PropTypes from "prop-types";

function Rating({ stars }) {
  const fillStars = () => {
    const etiquetas = [];
    const starSelected = [...Array(stars)].map((_, index) => (
      <AiFillStar
        className="StarFilled"
        key={index}
        data-testid="filled-stars"
      />
    ));
    const starNotSelected = [...Array(5 - stars)].map((_, index) => (
      <AiOutlineStar
        className="StarNotFilled"
        key={index}
        data-testid="unfilled-stars"
      />
    ));
    etiquetas.push(starSelected);
    etiquetas.push(starNotSelected);
    return etiquetas;
  };

  return (
    <div className="RatingContainer">
      {fillStars()}
      <h3>& up</h3>
    </div>
  );
}

Rating.propTypes = {
  stars: PropTypes.number.isRequired,
};

export { Rating };
