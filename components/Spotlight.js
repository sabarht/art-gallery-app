import ArtCard from "./ArtCard";
import styled from "styled-components";

export default function Spotlight({
  pieces,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  const getRandomArtPiece = () => {
    const randomIndex = Math.floor(Math.random() * pieces.length - 1);
    return pieces[randomIndex];
  };

  const randomArtPiece = getRandomArtPiece();
  return (
    <StyledADiv>
      <h1>Spotlight </h1>
      <ArtCard
        pieces={randomArtPiece}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </StyledADiv>
  );
}

const StyledADiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  align-items: center;
`;
