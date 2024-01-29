export const applySortByPrice = (products, sortByPrice) => {
  let sortedProducts = JSON.parse(JSON.stringify(products));
  console.log(sortedProducts);
  if (sortByPrice === "Price_Low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortByPrice === "Price_High") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else {
    sortedProducts.sort((a, b) => a.id - b.id);
  }
  return sortedProducts;
};

