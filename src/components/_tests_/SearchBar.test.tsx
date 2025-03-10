import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../SearchBar";

describe("SearchBar component", () => {
  test("renders input with default placeholder", () => {
    render(<SearchBar onChange={() => {}} />);
    expect(
      screen.getByPlaceholderText("Search GitHub users...")
    ).toBeInTheDocument();
  });

  test("renders input with custom placeholder", () => {
    render(
      <SearchBar onChange={() => {}} placeholder="Search repositories..." />
    );
    expect(
      screen.getByPlaceholderText("Search repositories...")
    ).toBeInTheDocument();
  });

  test("calls onChange when typing", () => {
    const handleChange = jest.fn();
    render(<SearchBar onChange={handleChange} />);
    const input = screen.getByPlaceholderText("Search GitHub users...");
    fireEvent.change(input, { target: { value: "React" } });
    expect(handleChange).toHaveBeenCalledWith("React");
  });

  test("renders input with initial value", () => {
    render(<SearchBar onChange={() => {}} value="Initial value" />);
    expect(screen.getByDisplayValue("Initial value")).toBeInTheDocument();
  });
});
