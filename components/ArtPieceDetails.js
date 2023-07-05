import Image from "next/image";
import Link from "next/link";
import Comments from "./Comments";
import CommentForm from "./CommentForm";

export default function ArtPieceDetails({ pieces }) {
  const { dimensions, imageSource, slug, name, artist, year, genre } = pieces;
  console.log(pieces);
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
      {/* {pieces.map((piece) => ( */}
      <div key={slug}>
        <Comments slug={slug} />
        <CommentForm slug={slug} />
      </div>
      {/* ))} */}
      <Link href="/art_pieces">Go back to all pieces</Link>
    </article>
  );
}
