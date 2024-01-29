import { useContext } from "react";
import "./TypeFilter.css";
import { SearchContext } from "../../../contexts/SearchContext";

function TypeFilter({ name, options }) {
  const { setCategoriesFilter } = useContext(SearchContext);
  const handleFilter = (e) => {
    const { checked, name } = e.target;
    if (checked) {
      setCategoriesFilter((prev) => [...prev, name]);
    } else {
      setCategoriesFilter((prev) => prev.filter((item) => item !== name));
    }
  };
  return (
    <div className="TypeFilterContainer">
      <h2>{name}:</h2>
      {options.map((option, id) => (
        <div key={id} className="CheckBox">
          <input
            type="checkbox"
            id={option.id}
            name={option.label}
            onClick={handleFilter}
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </div>
  );
}

export { TypeFilter };
