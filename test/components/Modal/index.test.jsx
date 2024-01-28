import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Modal } from "../../../src/components/Modal";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

describe("Modal component", () => {
  const mockContextValues = {
    setIsOpen: jest.fn(),
    imageProduct: "mockImage",
    titleProduct: "mockTitle",
    priceProduct: 10.99,
    descriptionProduct: "mockDescription",
  };

  beforeEach(() => {
    jest.clearAllMocks();
    React.useContext.mockReturnValue(mockContextValues);
  });

  it("Should renders modal content correctly", () => {
    const { getByText, getByAltText } = render(<Modal />);

    expect(getByText("mockTitle")).toBeInTheDocument();
    expect(getByText("$10.99")).toBeInTheDocument();
    expect(getByText("mockDescription")).toBeInTheDocument();
    expect(getByText("Add")).toBeInTheDocument();
  });

  it("Should calls setIsOpen when close button is clicked", () => {
    const { baseElement } = render(<Modal />);

    const closeButton = baseElement.querySelector(".closeModal");

    fireEvent.click(closeButton);

    expect(mockContextValues.setIsOpen).toHaveBeenCalledWith(false);
  });
});
