import ArtCard from "../../components/ArtCard";
import useSWR from "swr";
import Spotlight from "../../components/Spotlight";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ArtPieces() {
  // render data
  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) {
    return <div>Error loading...</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
  console.log("randomindex", data[Math.floor(Math.random() * data.length)]);

  // render data
  return (
    <>
      <Spotlight pieces={data} />
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
