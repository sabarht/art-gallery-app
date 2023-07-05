// export default function FavoriteButton({ pieces, artPiecesInfo, handleToggleFavorite }) {
//   return (
//     <button onClick={() => handleToggleFavorite(pieces.slug)}>{isFavorite ? "🥱" : "🖤"}</button>
//   );
// }

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
