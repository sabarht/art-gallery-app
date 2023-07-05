import ArtCard from "../../components/ArtCard";

export default function ArtPieces({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <>
      <h1>Art pieces</h1>

      <ul style={{ listStyle: "none" }}>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <ArtCard
              pieces={piece}
              artPiecesInfo={artPiecesInfo}
              handleToggleFavorite={handleToggleFavorite}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
