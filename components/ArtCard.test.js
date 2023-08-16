// import { render, screen } from "@testing-library/react";
// import ArtCard from "./ArtCard";

// const mockArtPiece = {
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

// test("renders the image with correct height, width, and alt text", () => {
//   const artPiece = mockArtPiece;

//   render(<ArtCard pieces={artPiece} artPiecesInfo={[]} />);

//   const imageElement = screen.getByAltText(
//     `Name: ${artPiece.name}, Artist: ${artPiece.artist}`
//   );

//   expect(imageElement).toBeInTheDocument();
// });

// test("renders the title and artist name", () => {
//   const artPiece = mockArtPiece;

//   render(<ArtCard pieces={artPiece} artPiecesInfo={[]} />);

//   const titleElement = screen.getByText(artPiece.name);

//   expect(titleElement).toBeInTheDocument();
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
//     <ArtCard
//       pieces={pieces}
//       handleToggleFavorite={handleToggleFavorite}
//       artPiecesInfo={artPiecesInfo}
//     />
//   );

//   const favoriteButton = getByTestId("favorite-button");
//   expect(favoriteButton).toBeInTheDocument();
// });
