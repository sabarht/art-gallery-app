import Spotlight from "../components/Spotlight";

export default function SpotlightPage({ data, updateArtPieceInfo }) {
  return <Spotlight pieces={data} updateArtPieceInfo={updateArtPieceInfo} />;
}
