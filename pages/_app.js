import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import Layout from "../components/Layout.js";
import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState.js";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

let isFavorite = false;

export default function App({ Component, pageProps }) {
  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    {
      ...data,
      defaultValue: [],
    }
  );

  if (error) {
    return <div>Error loading...</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  function handleToggleFavorite(slug) {
    if (artPiecesInfo.includes(slug)) {
      updateArtPiecesInfo(artPiecesInfo.filter((element) => element !== slug));
      isFavorite = false;
    } else {
      updateArtPiecesInfo([...artPiecesInfo, slug]);
      isFavorite = true;
    }
    console.log("isFavorite", isFavorite);
  }

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component
          {...pageProps}
          pieces={data}
          handleToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        />
        <Layout />
      </SWRConfig>
    </>
  );
}
