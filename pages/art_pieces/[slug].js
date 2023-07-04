import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({ data }) {
  const router = useRouter();

  const { slug } = router.query;
  const piece = data.find((piece) => piece.slug === slug);
  const { dimensions, imageSource, name, artist, year, genre } = piece;

  if (!piece) {
    return <p>it is not working</p>;
  }
  return (
    <article>
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
      <Link href="/art_pieces">Go back to all pieces</Link>
    </article>
  );
}
