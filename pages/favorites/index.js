import ArtCard from "../../components/ArtCard.js";

export default function FavoritePage({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <>
      <h1>Favorite Art Pieces</h1>
      <ul style={{ listStyle: "none" }}>
        {pieces.map((piece) => {
          return (
            <li key={piece.slug}>
              {artPiecesInfo.includes(piece.slug) && (
                <ArtCard
                  key={piece.slug}
                  pieces={piece}
                  handleToggleFavorite={handleToggleFavorite}
                  artPiecesInfo={artPiecesInfo}
                />
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
