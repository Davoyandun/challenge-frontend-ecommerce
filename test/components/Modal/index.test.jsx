import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
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
    render(<Modal />);

    expect(screen.getByText("mockTitle")).toBeInTheDocument();
    expect(screen.getByText("$10.99")).toBeInTheDocument();
    expect(screen.getByText("mockDescription")).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  it("Should calls setIsOpen when close button is clicked", () => {
    render(<Modal />);

    const closeButton = screen.getByTestId("close-modal-svg");

    fireEvent.click(closeButton);

    expect(mockContextValues.setIsOpen).toHaveBeenCalledWith(false);
  });
});
