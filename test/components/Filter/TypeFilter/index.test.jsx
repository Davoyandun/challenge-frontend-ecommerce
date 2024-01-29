import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { TypeFilter } from "../../../../src/components/Filter/TypeFilter";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(() => ({
    setCategoriesFilter: jest.fn(),
  })),
}));
describe("TypeFilter", () => {
  const options = [
    { id: "1", label: "Option 1" },
    { id: "2", label: "Option 2" },
    { id: "3", label: "Option 3" },
  ];

  it("updates categories filter when a checkbox is checked/unchecked", () => {
    const setCategoriesFilterMock = jest.fn();
    React.useContext.mockReturnValueOnce({
      setCategoriesFilter: setCategoriesFilterMock,
    });

    render(<TypeFilter name="Test Filter" options={options} />);

    fireEvent.click(screen.getAllByRole("checkbox")[0]);
    expect(setCategoriesFilterMock).toHaveBeenCalledWith(expect.any(Function));

    fireEvent.click(screen.getAllByRole("checkbox")[0]);
    expect(setCategoriesFilterMock).toHaveBeenCalledWith(expect.any(Function));
    expect(setCategoriesFilterMock).toHaveBeenCalledTimes(2);
  });
});
