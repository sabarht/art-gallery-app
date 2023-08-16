// import { render, screen } from "@testing-library/react";
// import ArtPieceDetails from "./ArtPieceDetails.js";

// const mockArtPieces = {
//   slug: "orange-red-and-green",
//   artist: "Steve Johnson",
//   name: "Orange Red and Green Abstract Painting",
//   imageSource:
//     "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
//   year: "2018",
//   genre: "Abstract Painting",
//   colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
//   dimensions: {
//     height: 2432,
//     width: 1920,
//     type: "jpg",
//   },
// };

// test("displays the art piece image", () => {
//   render(<ArtPieceDetails pieces={mockArtPieces} artPiecesInfo={[]} />);
//   const image = screen.getByAltText(`${mockArtPieces.name}`);
//   expect(image).toBeInTheDocument();
// });

// test("displays the art piece title", () => {
//   render(<ArtPieceDetails pieces={mockArtPieces} artPiecesInfo={[]} />);
//   const title = screen.getByText(`${mockArtPieces.name}`);
//   expect(title).toBeInTheDocument();
// });

// test("displays the art piece artist", () => {
//   render(<ArtPieceDetails pieces={mockArtPieces} artPiecesInfo={[]} />);
//   const artist = screen.getByText((content, element) => {
//     return (
//       element.tagName.toLowerCase() === "p" && content.includes("Artist name:")
//     );
//   });
//   expect(artist).toHaveTextContent("Steve Johnson");
// });

// test("displays the art piece year", () => {
//   render(<ArtPieceDetails pieces={mockArtPieces} artPiecesInfo={[]} />);
//   const year = screen.getByText((content, element) => {
//     return element.tagName.toLowerCase() === "p" && content.includes("Year:");
//   });
//   expect(year).toBeInTheDocument();
// });

// test("displays the art piece genre", () => {
//   render(<ArtPieceDetails pieces={mockArtPieces} artPiecesInfo={[]} />);
//   const genre = screen.getByText((content, element) => {
//     return element.tagName.toLowerCase() === "p" && content.includes("Genre:");
//   });
//   expect(genre).toBeInTheDocument();
// });

// test("renders FavoriteButton component", () => {
//   const pieces = {
//     imageSource: "/path/to/image.jpg",
//     dimensions: { height: 500, width: 500 },
//     name: "Art Piece Name",
//     artist: "Artist Name",
//     slug: "art-piece-slug",
//   };
//   const handleToggleFavorite = jest.fn();
//   const artPiecesInfo = ["art-piece-slug"];

//   const { getByTestId } = render(
//     <ArtPieceDetails
//       pieces={pieces}
//       handleToggleFavorite={handleToggleFavorite}
//       artPiecesInfo={artPiecesInfo}
//     />
//   );

//   const favoriteButton = getByTestId("favorite-button");
//   expect(favoriteButton).toBeInTheDocument();
// });
