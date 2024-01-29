import {
  applyFilterCategory,
  applySortByPrice,
} from "../../../src/components/utils/intex";

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
