import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Modal } from "../../../src/components/Modal";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
  useState: jest.fn(),
}));

describe("Modal component", () => {
  const mockContextValues = {
    setIsOpen: jest.fn(),
    imageProduct: "mockImage",
    titleProduct: "mockTitle",
    priceProduct: 10.99,
    descriptionProduct: "mockDescription",
    idProduct: 1,
    ratingProduct: 5,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    React.useContext.mockReturnValue(mockContextValues);
    React.useState.mockReturnValue([0, jest.fn()]);
  });

  it("Should renders modal content correctly", () => {
    render(<Modal />);

    expect(screen.getByText("mockTitle")).toBeInTheDocument();
    expect(screen.getByText("$10.99")).toBeInTheDocument();
    expect(screen.getByText("mockDescription")).toBeInTheDocument();
  });

  it("Should calls setIsOpen when close button is clicked", () => {
    render(<Modal />);

    const closeButton = screen.getByTestId("close-modal-svg");
    fireEvent.click(closeButton);

    expect(mockContextValues.setIsOpen).toHaveBeenCalledWith(false);
  });

  it("Should calls addToCart when add button is clicked", () => {
    const mockAddToCart = jest.fn();
    React.useContext.mockReturnValue({
      ...mockContextValues,
      addToCart: mockAddToCart,
    });
    React.useState.mockReturnValue(["Add", jest.fn()]);

    render(<Modal />);

    const addButton = screen.getByText("Add", { selector: "button" });
    fireEvent.click(addButton);

    expect(mockAddToCart).toHaveBeenCalledWith({
      id: 1,
      image: "mockImage",
      price: 10.99,
      quantity: "Add",
      rating: 5,
      title: "mockTitle",
    });
  });
});
