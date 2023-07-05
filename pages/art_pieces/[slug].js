import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails.js";

export default function ArtPieceDetailsPage({
  pieces,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  const router = useRouter();

  const { slug } = router.query;
  const piece = pieces.find((piece) => piece.slug === slug);

  if (!piece) {
    return <p>it is not working</p>;
  }
  return (
    <ArtPieceDetails
      pieces={piece}
      artPiecesInfo={artPiecesInfo}
      handleToggleFavorite={handleToggleFavorite}
    />
  );
}
