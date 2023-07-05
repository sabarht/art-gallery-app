import Image from "next/image";
import FavoriteButton from "./FavoriteButton.js";
import Link from "next/link.js";

export default function ArtCard({ pieces }) {
  const { imageSource, dimensions, name, artist, slug, favorite } = pieces;

  // function handleToggleFavorite() {
  //   updateArtPieceInfo(slug, { favorite: !favorite });
  // }

  return (
    <div className="card">
      <Image
        src={imageSource}
        height={dimensions.height / 5}
        width={dimensions.width / 5}
        alt={`Name: ${name}, Artist: ${artist}`}
      />
      <p>{`"${name}" by ${artist}`}</p>
    </div>
  );
}
