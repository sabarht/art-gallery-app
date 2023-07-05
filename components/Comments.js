import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState";
import styled from "styled-components";

export default function Comments({ slug }) {
  const [artPiecesComments, updateArtPiecesComments] =
    useImmerLocalStorageState("art-pieces-comments", {
      defaultValue: {},
    });
  console.log(artPiecesComments);
  return (
    <StyledUl>
      <h4>Comments:</h4>
      {(artPiecesComments[slug] || []).map((commentObj, index) => {
        const { comment, time } = commentObj;
        return (
          <li className="commentList" key={index}>
            <span>&quot;{comment}&quot;</span>
            <span className="time">{time}</span>
          </li>
        );
      })}
    </StyledUl>
  );
}

const StyledUl = styled.ul`
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap: 4pxpx;
  }

  .time {
    color: gray;
  }
`;
