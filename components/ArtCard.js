import Image from "next/image";
import FavoriteButton from "./FavoriteButton.js";
import Link from "next/link.js";

export default function ArtCard({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  const { imageSource, dimensions, name, artist, slug } = pieces;

  return (
    <div>
      <Link href={`/art_pieces/${slug}`}>
        <Image
          src={imageSource}
          height={dimensions.height / 5}
          width={dimensions.width / 5}
          alt={`Name: ${name}, Artist: ${artist}`}
        />
        <h3>{name} </h3>
        <p>{`by ${artist}`}</p>
      </Link>
      <FavoriteButton
        pieces={pieces}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </div>
  );
}
