import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../page";
import "@testing-library/jest-dom";

describe("Home Page", () => {
  it("renders banner and form", () => {
    render(<Home />);
    expect(screen.getByText("Things I Enjoy")).toBeInTheDocument();
    expect(screen.getByLabelText("Change Banner Background:")).toBeInTheDocument();
  });

  it("changes banner background on selection", () => {
    render(<Home />);
    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "bg-green-500" } });
    const banner = screen.getByText("Things I Enjoy").closest("section");
    expect(banner).toHaveClass("bg-green-500");
  });
});