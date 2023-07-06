import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState";
import styled from "styled-components";

export default function CommentForm({ slug }) {
  function getTime() {
    const currentTime = new Date();
    const date = currentTime.getDate();
    const month = currentTime.getMonth() + 1;
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    console.log(hours, date, month, minutes);
    return `${month}.${date} - ${hours}:${minutes}`;
  }
  const [artPiecesComments, updateArtPiecesComments] =
    useImmerLocalStorageState("art-pieces-comments", {
      defaultValue: {},
    });

  function handleSubmit(event) {
    const time = getTime();
    event.preventDefault();
    const comment = event.target.elements.comment.value;
    if (!artPiecesComments[slug]) {
      updateArtPiecesComments({
        ...artPiecesComments,
        [slug]: [{ comment, time: time }],
        time,
      });
    } else {
      updateArtPiecesComments({
        ...artPiecesComments,
        [slug]: [...artPiecesComments[slug], { comment, time }],
      });
    }
    event.target.reset();
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <div data-testid="comment-container">
        <label htmlFor="comment">Your comment: </label>
        <textarea id="comment" name="comment" rows="4" cols="40"></textarea>
      </div>
      <button type="submit">Send</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  label {
    display: block;
  }
  button {
    font-weight: 700;
    font-size: 1.1rem;
    padding: 1rem 2.2rem;
  }
`;
