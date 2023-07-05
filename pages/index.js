import Spotlight from "../components/Spotlight";

export default function SpotlightPage({
  pieces,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  return (
    <Spotlight
      pieces={pieces}
      artPiecesInfo={artPiecesInfo}
      handleToggleFavorite={handleToggleFavorite}
    />
  );
}
