import { useState, useEffect, createContext } from "react";
import {
  applyFilterCategory,
  applySortByPrice,
  applyFilterByRating,
} from "../../components/utils";

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [imageProduct, setImageProduct] = useState("");
  const [titleProduct, setTitleProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [ratingProduct, setRatingProduct] = useState(0);
  const [sortByPrice, setSortByPrice] = useState("name");
  const [categories, setCategories] = useState([]);
  const [categoriesFilter, setCategoriesFilter] = useState([]);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [originalProducts, setOriginalProducts] = useState([]);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    return data;
  };
  const getCategories = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productList = await getData();
        const categoriesList = await getCategories();
        setProducts(productList);
        setOriginalProducts(productList);
        setCategories(categoriesList);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const productosFilteredByCategory = applyFilterCategory(
      originalProducts,
      categoriesFilter
    );
    const productsFilteredByRating = applyFilterByRating(
      productosFilteredByCategory,
      ratingFilter
    );
    const sortedProducts = applySortByPrice(
      productsFilteredByRating,
      sortByPrice
    );

    setProducts(sortedProducts);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortByPrice, categoriesFilter, ratingFilter]);

  const searchedProducts = products.filter((product) => {
    const productName = product.title.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return productName.includes(searchText);
  });

  return (
    <SearchContext.Provider
      value={{
        categories,
        searchValue,
        setSearchValue,
        searchedProducts,
        isLoading,
        isOpen,
        setIsOpen,
        imageProduct,
        setImageProduct,
        titleProduct,
        setTitleProduct,
        priceProduct,
        setPriceProduct,
        descriptionProduct,
        setDescriptionProduct,
        ratingProduct,
        setRatingProduct,
        sortByPrice,
        setSortByPrice,
        setCategoriesFilter,
        setRatingFilter,
        ratingFilter,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
