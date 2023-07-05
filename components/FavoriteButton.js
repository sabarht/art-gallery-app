export default function FavoriteButton({
  handleToggleFavorite,
  pieces,
  artPiecesInfo,
}) {
  return (
    <>
      {artPiecesInfo.includes(pieces.slug) ? (
        <button
          data-testid="favorite-button"
          onClick={(e) => {
            e.preventDefault();
            handleToggleFavorite(pieces.slug);
          }}
        >
          💖
        </button>
      ) : (
        <button
          data-testid="favorite-button"
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
