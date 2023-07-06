import ArtCard from "./ArtCard";
import styled from "styled-components";

export default function Spotlight({
  pieces,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  const getRandomArtPiece = () => {
    const randomIndex = Math.floor(Math.random() * pieces.length);
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
  margin: 0 auto;
  text-align: center;
  padding: 3rem;
`;
