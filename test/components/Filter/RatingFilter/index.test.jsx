import React, { useContext } from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { RatingFilter } from "../../../../src/components/Filter/RatingFilter";

const mockSetRatingFilter = jest.fn();

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(() => ({
    ratingFilter: 3,
    setRatingFilter: mockSetRatingFilter,
  })),
}));

describe("RatingFilter", () => {
  it("should call setRatingFilter when a button is clicked", () => {
    render(<RatingFilter />);
    const fourStarsButton = screen.getAllByRole("button")[0];
    expect(fourStarsButton).toHaveClass("RatingButton");

    fireEvent.click(fourStarsButton);
    expect(mockSetRatingFilter).toHaveBeenCalledWith(4);
  });

  it("should have the correct button active when ratingFilter is set to 3", () => {
    render(<RatingFilter />);
    const fourStarsButton = screen.getAllByRole("button")[1];
    expect(fourStarsButton).toHaveClass("RatingButtonActive");
  });
});
