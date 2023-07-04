import Link from "next/link";
import ArtCard from "../../components/ArtCard";
import ArtPieceDetails from "./[slug]";

export default function ArtPieces({ data }) {
  return (
    <>
      <h1>Art pieces</h1>

      <ul>
        {data.map((piece) => (
          //1
          <li key={piece.slug}>
            <Link href={`/art_pieces/${piece.slug}`}>
              <ArtCard data={piece} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
