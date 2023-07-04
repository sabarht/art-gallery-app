import Image from "next/image";
export default function Spotlight({ pieces }) {
  const getRandomArtPiece = () => {
    const randomIndex = Math.floor(Math.random() * pieces.length);
    return pieces[randomIndex];
  };

  const randomArtPiece = getRandomArtPiece();
  if (!randomArtPiece) {
    return null;
  }
  return (
    <div>
      <h2>Spotlight </h2>
      <p>Artist: {randomArtPiece.artist}</p>
      <Image
        src={randomArtPiece.imageSource}
        height={randomArtPiece.dimensions.height / 5}
        width={randomArtPiece.dimensions.width / 5}
        alt={randomArtPiece.name}
      />
    </div>
  );
}
