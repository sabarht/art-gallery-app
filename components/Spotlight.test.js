import { render, screen, waitFor } from "@testing-library/react";
import Spotlight from "./Spotlight.js";

const mockArtPieces = [
  {
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
  },
];

test("renders artist name and image", async () => {
  render(<Spotlight pieces={mockArtPieces} />);

  await waitFor(() => {
    const artistElement = screen.getByText(`Artist: ${mockArtPieces.artist}`);
    const imageElement = screen.getByAltText(`${mockArtPieces.name}`);

    expect(artistElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });
});
