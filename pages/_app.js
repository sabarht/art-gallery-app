import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import Layout from "../components/Layout/Layout.js";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
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
  return (
    <>
      <GlobalStyle />
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <Component {...pageProps} data={data} />
        <Layout />
      </SWRConfig>
    </>
  );
}
