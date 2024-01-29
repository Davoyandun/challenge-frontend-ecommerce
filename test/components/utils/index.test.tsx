import { applySortByPrice } from "../../../src/components/utils/intex";

// Pruebas para applySortByPrice
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
