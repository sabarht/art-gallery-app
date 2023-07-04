import Link from "next/link";
import ArtCard from "../../components/ArtCard";

export default function ArtPieces({ data }) {
  return (
    <>
      <h1>Art pieces</h1>

      <ul>
        {data.map((piece) => (
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
