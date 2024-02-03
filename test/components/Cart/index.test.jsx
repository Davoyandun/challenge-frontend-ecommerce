import React from "react";
import { render, screen } from "@testing-library/react";
import { CartContext } from "../../../src/contexts/CartContext";
import { Cart } from "../../../src/components/Cart";

describe("Cart Component", () => {
  test("renders Cart component with subtotal and Continue button", () => {
    const cart = [
      { id: 1, image: "image1.jpg", price: 10, quantity: 2 },
      { id: 2, image: "image2.jpg", price: 15, quantity: 1 },
    ];

    render(
      <CartContext.Provider value={{ cart, isOpen: true }}>
        <Cart />
      </CartContext.Provider>
    );

    const subtotalElement = screen.getByText("Subtotal");
    expect(subtotalElement).toBeInTheDocument();

    const continueButton = screen.getByRole("button", { name: /continue/i });
    expect(continueButton).toBeInTheDocument();
  });

  test("disables Continue button when cart is empty", () => {
    const cart = [];

    render(
      <CartContext.Provider value={{ cart, isOpen: true }}>
        <Cart />
      </CartContext.Provider>
    );

    const continueButton = screen.getByRole("button", { name: /continue/i });
    expect(continueButton).toBeDisabled();
  });

  test("renders Cart items in the Sidebar", () => {
    const cart = [
      { id: 1, image: "image1.jpg", price: 10, quantity: 2 },
      { id: 2, image: "image2.jpg", price: 15, quantity: 1 },
    ];

    render(
      <CartContext.Provider value={{ cart, isOpen: true }}>
        <Cart />
      </CartContext.Provider>
    );

    const cartItems = screen.getAllByRole("img", { name: /img not found/i });
    expect(cartItems).toHaveLength(cart.length);
  });
});
