import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation.js";

test("displays a navigation link labeled 'Spotlight'", () => {
  render(<Navigation />);
  const spotlightLink = screen.getByRole("link", { name: /spotlight/i });
  expect(spotlightLink).toBeInTheDocument();
});

test("displays a navigation link labeled 'Pieces'", () => {
  render(<Navigation />);
  const piecesLink = screen.getByRole("link", { name: /pieces/i });
  expect(piecesLink).toBeInTheDocument();
});
