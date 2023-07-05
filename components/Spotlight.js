import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
export default function Spotlight({
  pieces,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  const getRandomArtPiece = () => {
    console.log("Pieces:", pieces);
    console.log("Pieces length:", pieces.length);
    const randomIndex = Math.floor(Math.random() * pieces.length - 1);
    return pieces[randomIndex];
  };

  const randomArtPiece = getRandomArtPiece();
  if (!randomArtPiece) {
    return null;
  }
  return (
    <div>
      <h1>Spotlight </h1>
      <p>Artist: {randomArtPiece.artist}</p>
      <Image
        src={randomArtPiece.imageSource}
        height={randomArtPiece.dimensions.height / 5}
        width={randomArtPiece.dimensions.width / 5}
        alt={randomArtPiece.name}
      />
      <FavoriteButton
        pieces={pieces}
        artPiecesInfo={artPiecesInfo}
        handleToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}
