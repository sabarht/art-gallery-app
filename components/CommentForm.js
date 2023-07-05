export default function CommentForm({ onSubmitComment }) {
  const [artPiecesComments, updateArtPiecesComments] =
    useImmerLocalStorageState("art-pieces-comments", {
      defaultValue: {},
    });
  function handleSubmit(event) {
    event.preventDefault();
    const commentInput = event.target.elements.comment.value;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="comment">Your comment: </label>
        <textarea id="comment" name="comment" rows="5" cols="33"></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
