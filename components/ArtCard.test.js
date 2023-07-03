import { render, screen } from "@testing-library/react";
import ArtCard from "./ArtCard";

const mockArtPiece = {
  slug: "orange-red-and-green",
  artist: "Steve Johnson",
  name: "Orange Red and Green Abstract Painting",
  imageSource:
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  year: "2018",
  genre: "Abstract Painting",
  colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
  dimensions: {
    height: 2432,
    width: 1920,
    type: "jpg",
  },
};

test("displays the art piece image", () => {
  render(<ArtCard data={mockArtPiece} />);
  const imageElement = screen.getByAltText(
    /name: orange red and green abstract painting, artist: steve johnson/i
  );
  expect(imageElement).toBeInTheDocument();
});

test("displays the art piece title", () => {
  render(<ArtCard data={mockArtPiece} />);
  const titleElement = screen.getByText(
    /"orange red and green abstract painting" by steve johnson/i
  );
  expect(titleElement).toBeInTheDocument();
});
