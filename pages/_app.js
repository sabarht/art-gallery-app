// import GlobalStyle from "../styles";
// import { SWRConfig } from "swr";
// import useSWR from "swr";
// import Layout from "../components/Layout.js";
// import { useImmer } from "use-immer";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

// export default function App({ Component, pageProps }) {
//   const { data, error } = useSWR(
//     "https://example-apis.vercel.app/api/art",
//     fetcher
//   );
//   const [artPiecesInfo, setArtPiecesInfo] = useImmer({
//     ...data,
//     favoriteArtPieces: [],
//   });

//   const setFavoriteArtPieces = (favorites) => {
//     setArtPiecesInfo((draft) => {
//       draft.favoriteArtPieces = favorites;
//     });
//   };

//   const updateArtPieceInfo = (slug, updatedInfo) => {
//     setArtPiecesInfo((draft) => {
//       draft[slug] = { ...draft[slug], ...updatedInfo };

//       if (updatedInfo.favorite) {
//         setFavoriteArtPieces((favorites) => [...favorites, draft[slug]]);
//       } else {
//         setFavoriteArtPieces((favorites) =>
//           favorites.filter((piece) => piece.slug !== slug)
//         );
//       }
//     });
//   };

//   if (error) {
//     return <div>Error loading...</div>;
//   }

//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <GlobalStyle />
//       <SWRConfig value={{ fetcher }}>
//         <Component
//           {...pageProps}
//           data={data}
//           artPiecesInfo={artPiecesInfo}
//           updateArtPieceInfo={updateArtPieceInfo}
//           setFavoriteArtPieces={setFavoriteArtPieces}
//         />
//         <Layout />
//       </SWRConfig>
//     </>
//   );
// }
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
  // const [artPiecesInfo, updateArtPiecesInfo] = useImmer({
  //   ...data,
  //   favoriteArtPieces: [],
  // });

  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    {
      defaultValue: [],
    }
  );

  // const updateArtPieceInfo = (slug, updatedInfo) => {
  //   setArtPiecesInfo((draft) => {
  //     draft[slug] = { ...draft[slug], ...updatedInfo };

  //     if (updatedInfo.favorite) {
  //       draft.favoriteArtPieces.push(draft[slug]);
  //     } else {
  //       const index = draft.favoriteArtPieces.findIndex(
  //         (piece) => piece.slug === slug
  //       );
  //       if (index !== -1) {
  //         draft.favoriteArtPieces.splice(index, 1);
  //       }
  //     }
  //   });
  // };

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

  if (error) {
    return <div>Error loading...</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
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
