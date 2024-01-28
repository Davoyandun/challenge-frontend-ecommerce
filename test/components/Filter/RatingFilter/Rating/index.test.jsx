import React from "react";
import { render, screen } from "@testing-library/react";
import { Rating } from "../../../../../src/components/Filter/RatingFilter/Rating";

describe("Rating Component", () => {
  it("renders the correct number of filled and unfilled stars", () => {
    render(<Rating stars={3} />);

    const unfilledStars = screen.getAllByTestId("unfilled-stars");
    const filledStars = screen.getAllByTestId("filled-stars");

    expect(filledStars.length).toBe(3);
    expect(unfilledStars.length).toBe(2);
  });

  it("renders the correct text", () => {
    render(<Rating stars={3} />);

    const textElement = screen.getByText("& up");
    expect(textElement).toBeInTheDocument();
  });
});
