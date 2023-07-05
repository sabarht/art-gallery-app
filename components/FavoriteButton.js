export default function FavoriteButton({
  handleToggleFavorite,
  pieces,
  artPiecesInfo,
}) {
  return (
    <>
      {artPiecesInfo.includes(pieces.slug) ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            handleToggleFavorite(pieces.slug);
          }}
        >
          💖
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.preventDefault();
            handleToggleFavorite(pieces.slug);
          }}
        >
          🖤
        </button>
      )}
    </>
  );
}
