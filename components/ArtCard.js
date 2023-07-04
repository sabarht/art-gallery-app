import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

export default function ArtCard({ data, onToggleFavorite }) {
  const { imageSource, dimensions, name, artist } = data;
  return (
    <div className="card">
      <Image
        src={imageSource}
        height={dimensions.height / 5}
        width={dimensions.width / 5}
        alt={`Name: ${name}, Artist: ${artist}`}
      />
      <p>{`"${name}" by ${artist}`}</p>
      <FavoriteButton />
    </div>
  );
}
