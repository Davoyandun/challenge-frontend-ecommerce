import { TypeFilter } from "./TypeFilter";
import { RatingFilter } from "./RatingFilter";
import "./Filter.css";
import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";

function Filter() {
  const { categories } = useContext(SearchContext);
  const options = categories.map((category) => ({
    id: category,
    label: category[0].toUpperCase() + category.slice(1),
  }));
  return (
    <div className="FilterContainer">
      <TypeFilter name="Category" options={options} />
      <RatingFilter />
    </div>
  );
}

export { Filter };
