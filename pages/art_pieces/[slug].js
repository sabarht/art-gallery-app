import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({ piece }) {
  const router = useRouter();
  //   const { slug } = router.query;
  //   const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);
  //   const volume = volumes[volumeIndex];

  const { imageSource, name, artist, year, genre } = piece;
  return (
    <article>
      <Image src={imageSource} />
      <h1>{name}</h1>
      <ul>
        <li>{artist}</li>
        <li>{year}</li>
        <li>{genre}</li>
      </ul>
      <Link href="/art_pieces"></Link>
    </article>
  );
}
