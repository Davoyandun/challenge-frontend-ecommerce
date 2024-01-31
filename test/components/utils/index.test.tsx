import {
  applyFilterByRating,
  applyFilterCategory,
  applySortByPrice,
} from "../../../src/components/utils";

describe("applySortByPrice", () => {
  const sampleProducts = [
    { id: 1, price: 20 },
    { id: 2, price: 15 },
    { id: 3, price: 25 },
  ];

  it("should sort products by low price", () => {
    const result = applySortByPrice(sampleProducts, "Price_Low");

    expect(result[0].price).toBe(15);
  });

  it("should sort products by high price", () => {
    const result = applySortByPrice(sampleProducts, "Price_High");

    expect(result[0].price).toBe(25);
  });

  it("should sort products by default order (by id)", () => {
    const result = applySortByPrice(sampleProducts);

    expect(result[0].id).toBe(1);
    expect(result[1].id).toBe(2);
  });
});

describe("applyFilterCategory", () => {
  it("Should returns all products when no filters are applied", () => {
    const products = [
      { category: "Electronics" },
      { category: "Clothing" },
      { category: "Books" },
    ];
    const categoriesFilter = [];

    const result = applyFilterCategory(products, categoriesFilter);

    expect(result).toEqual(products);
  });

  it("Should filters products by category correctly", () => {
    const products = [
      { category: "Electronics" },
      { category: "Clothing" },
      { category: "Books" },
    ];
    const categoriesFilter = ["Electronics", "Clothing"];

    const result = applyFilterCategory(products, categoriesFilter);

    expect(result).toEqual([
      { category: "Electronics" },
      { category: "Clothing" },
    ]);
  });

  it("Should does not filter any product when categories do not match", () => {
    const products = [
      { category: "Electronics" },
      { category: "Clothing" },
      { category: "Books" },
    ];
    const categoriesFilter = ["Toys"];

    const result = applyFilterCategory(products, categoriesFilter);

    expect(result).toEqual([]);
  });
});

describe("applyFilterByRating", () => {
  const mockProducts = [
    { id: 1, name: "Product 1", rating: { rate: 4 } },
    { id: 2, name: "Product 2", rating: { rate: 3 } },
    { id: 3, name: "Product 3", rating: { rate: 2 } },
    { id: 4, name: "Product 4", rating: { rate: 1 } },
  ];

  it("should filter products by rating correctly", () => {
    const result1 = applyFilterByRating(mockProducts, 3);
    expect(result1).toEqual([
      { id: 1, name: "Product 1", rating: { rate: 4 } },
      { id: 2, name: "Product 2", rating: { rate: 3 } },
    ]);

    const result2 = applyFilterByRating(mockProducts, 2);
    expect(result2).toEqual([
      { id: 1, name: "Product 1", rating: { rate: 4 } },
      { id: 2, name: "Product 2", rating: { rate: 3 } },
      { id: 3, name: "Product 3", rating: { rate: 2 } },
    ]);

    const result3 = applyFilterByRating(mockProducts, 0);
    expect(result3).toEqual(mockProducts);
  });
});
