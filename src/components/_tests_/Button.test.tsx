import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("Button component", () => {
  test("renders children correctly", () => {
    render(<Button onClick={() => {}}>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("disables button when disabled prop is true", () => {
    render(
      <Button onClick={() => {}} disabled>
        Click me
      </Button>
    );
    expect(screen.getByText("Click me").closest("button")).toBeDisabled();
  });

  test("disables button when isLoading is true", () => {
    render(
      <Button onClick={() => {}} isLoading>
        Click me
      </Button>
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("shows loading spinner when isLoading is true", () => {
    render(
      <Button onClick={() => {}} isLoading>
        Click me
      </Button>
    );
    expect(screen.getByRole("button")).toContainHTML("animate-spin");
  });
});
