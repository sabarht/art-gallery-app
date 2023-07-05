import { render, screen } from "@testing-library/react";
import ArtPieceDetails from "./ArtPieceDetails.js";

const mockArtPieces = {
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
  render(<ArtPieceDetails pieces={mockArtPieces} artPiecesInfo={[]} />);
  const image = screen.getByAltText(`${mockArtPieces.name}`);
  expect(image).toBeInTheDocument();
});

test("displays the art piece title", () => {
  render(<ArtPieceDetails pieces={mockArtPieces} artPiecesInfo={[]} />);
  const title = screen.getByText(`${mockArtPieces.name}`);
  expect(title).toBeInTheDocument();
});

test("displays the art piece artist", () => {
  render(<ArtPieceDetails pieces={mockArtPieces} artPiecesInfo={[]} />);
  const artist = screen.getByText(`${mockArtPieces.artist}`);
  expect(artist).toBeInTheDocument();
});

test("displays the art piece year", () => {
  render(<ArtPieceDetails pieces={mockArtPieces} artPiecesInfo={[]} />);
  const year = screen.getByText(`${mockArtPieces.year}`);
  expect(year).toBeInTheDocument();
});

test("displays the art piece genre", () => {
  render(<ArtPieceDetails pieces={mockArtPieces} artPiecesInfo={[]} />);
  const genre = screen.getByText(`${mockArtPieces.genre}`);
  expect(genre).toBeInTheDocument();
});
