import Image from "next/image";
import Link from "next/link";
import Comments from "./Comments";
import CommentForm from "./commentForm";

export default function ArtPieceDetails({ pieces }) {
  const { dimensions, imageSource, title, name, artist, year, genre } = pieces;

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
      <Comments title={title} />
      <CommentForm title={title} />
      <Link href="/art_pieces">Go back to all pieces</Link>
    </article>
  );
}
