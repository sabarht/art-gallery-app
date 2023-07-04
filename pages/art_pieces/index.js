import ArtCard from "../../components/ArtCard";

export default function ArtPieces({ data }) {
  return (
    <>
      <h1>Art pieces</h1>

      <ul>
        {data.map((piece) => (
          <li key={piece.slug}>
            <ArtCard data={piece} />
          </li>
        ))}
      </ul>
    </>
  );
}
