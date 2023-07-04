import { ReactComponent as Heart } from "../assets/heart.svg";
export default function FavoriteButton({ isFavorite, updateArtPieceInfo }) {
  const slug = "orange-red-and-green";
  console.log(updateArtPieceInfo);
  function handleToggleFavorite() {
    updateArtPieceInfo(slug, { favorite: true });
  }
  return <button onClick={handleToggleFavorite}>fav</button>;
  //   return <Heart onClick={handleToggleFavorite} />;
}
