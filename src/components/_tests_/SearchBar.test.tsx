import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";
import SearchBar from "../SearchBar";
import { usersActions } from "../../store/slices";

jest.mock("../../store/slices", () => ({
  usersActions: {
    fetchUsersRequest: jest.fn(),
  },
}));

describe("SearchBar Component", () => {
  test("should update search query on input change", () => {
    let searchQuery = "";
    const setSearchQuery = jest.fn((newValue) => (searchQuery = newValue));

    renderWithProviders(
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    );

    const input = screen.getByPlaceholderText("Search GitHub users...");
    fireEvent.change(input, { target: { value: "React" } });

    expect(setSearchQuery).toHaveBeenCalledWith("React");
  });
});
