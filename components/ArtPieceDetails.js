import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function ArtPieceDetails({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  const { dimensions, imageSource, name, artist, year, genre } = pieces;

  return (
    <article>
      <h1>Art piece details</h1>
      <Image
        src={imageSource}
        height={dimensions.height / 5}
        width={dimensions.width / 5}
        alt={name}
      />
      <h1>{name}</h1>
      <div>
        <p>{artist}</p>
        <p>{year}</p>
        <p>{genre}</p>
      </div>
      <FavoriteButton
        pieces={pieces}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
      <Link href="/art_pieces">Go back to all pieces</Link>
    </article>
  );
}
