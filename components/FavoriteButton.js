import styled from "styled-components";

export default function FavoriteButton({
  handleToggleFavorite,
  pieces,
  artPiecesInfo,
}) {
  return (
    <>
      {artPiecesInfo.includes(pieces.slug) ? (
        <StyledNButton
          onClick={(e) => {
            e.preventDefault();
            handleToggleFavorite(pieces.slug);
          }}
        >
          💖
        </StyledNButton>
      ) : (
        <StyledNButton
          onClick={(e) => {
            e.preventDefault();
            handleToggleFavorite(pieces.slug);
          }}
        >
          🖤
        </StyledNButton>
      )}
    </>
  );
}
const StyledNButton = styled.button`
  border-radius: 20%;
  border: 1px solid gray;
  padding: 0.6rem 0.7rem;
`;
