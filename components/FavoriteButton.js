export default function FavoriteButton({
  handleToggleFavorite,
  pieces,
  artPiecesInfo,
}) {
  return (
    <>
      {artPiecesInfo.includes(pieces.slug) ? (
        <button onClick={() => handleToggleFavorite(pieces.slug)}>💖</button>
      ) : (
        <button onClick={() => handleToggleFavorite(pieces.slug)}>🖤</button>
      )}
    </>
  );
}
