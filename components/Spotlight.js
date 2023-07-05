import ArtCard from "./ArtCard";
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
      <ArtCard
        pieces={randomArtPiece}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </div>
  );
}
