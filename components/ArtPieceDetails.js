import Image from "next/image";
export default function ArtPieceDetails({ piece }) {
  const { imageSource, name, artist, year, genre } = piece;

  return (
    <article>
      <Image src={imageSource} alt="meow" />
      <h1>{name}</h1>
      <ul>
        <li>{artist}</li>
        <li>{year}</li>
        <li>{genre}</li>
      </ul>
    </article>
  );
}
