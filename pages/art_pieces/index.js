import Link from "next/link";
import ArtCard from "../../components/ArtCard";
import FavoriteButton from "../../components/FavoriteButton";

export default function ArtPieces({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  // function handleToggleFavorite() {
  //   updateArtPieceInfo(slug, { favorite: !favorite });
  // }

  return (
    <>
      <h1>Art pieces</h1>

      <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <Link href={`/art_pieces/${piece.slug}`}>lalala</Link>
            <ArtCard pieces={piece} artPieceInfo={artPiecesInfo} />
            <FavoriteButton
              pieces={piece}
              handleToggleFavorite={handleToggleFavorite}
              artPiecesInfo={artPiecesInfo}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
