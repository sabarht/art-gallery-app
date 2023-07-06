import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import styled from "styled-components";

export default function ArtPieceDetails({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  const { dimensions, imageSource, name, artist, year, colors, genre, slug } =
    pieces;

  return (
    <>
      <StyledArticle>
        <h1>Art piece details</h1>
        <Image
          src={imageSource}
          height={dimensions.height / 5}
          width={dimensions.width / 5}
          alt={name}
        />
        <h3>{name}</h3>
        <FavoriteButton
          pieces={pieces}
          handleToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        />

        <div>
          <p>Artist name: {artist}</p>
          <p>Year: {year}</p>
          <p>Genre: {genre}</p>
        </div>
        <div key={slug}>
          <Comments slug={slug} />
          <CommentForm slug={slug} />
        </div>
      </StyledArticle>
      <Link href="/art_pieces" className="back">
        ⇽ back to all pieces
      </Link>
    </>
  );
}

const StyledArticle = styled.article`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
