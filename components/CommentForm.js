import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState";

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
    <form onSubmit={handleSubmit}>
      <div data-testid="comment-container">
        <label htmlFor="comment">Your comment: </label>
        <textarea id="comment" name="comment" rows="5" cols="33"></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
