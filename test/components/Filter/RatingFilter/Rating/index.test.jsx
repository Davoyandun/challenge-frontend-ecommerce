import React from "react";
import { render } from "@testing-library/react";
import { Rating } from "../../../../../src/components/Filter/RatingFilter/Rating";

describe("Rating Component", () => {
  it("renders the correct number of filled and unfilled stars", () => {
    const { container } = render(<Rating stars={3} />);

    const filledStars = container.querySelectorAll(".StarFilled");
    expect(filledStars.length).toBe(3);

    const unfilledStars = container.querySelectorAll(".StarNotFilled");
    expect(unfilledStars.length).toBe(2);
  });

  it("renders the correct text", () => {
    const { getByText } = render(<Rating stars={3} />);

    const textElement = getByText("& up");
    expect(textElement).toBeInTheDocument();
  });
});
