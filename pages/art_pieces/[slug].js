import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails.js";

export default function ArtPieceDetailsPage({ data }) {
  const router = useRouter();

  const { slug } = router.query;
  const piece = data.find((piece) => piece.slug === slug);

  if (!piece) {
    return <p>it is not working</p>;
  }
  return <ArtPieceDetails data={piece} />;
}
