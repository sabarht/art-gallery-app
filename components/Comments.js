import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState";

export default function Comments({ slug }) {
  const [artPiecesComments, updateArtPiecesComments] =
    useImmerLocalStorageState("art-pieces-comments", {
      defaultValue: {},
    });
  console.log(artPiecesComments);
  return (
    <ul>
      {(artPiecesComments[slug] || []).map((commentObj, index) => {
        const { comment, time } = commentObj;
        return (
          <li className="commentList" key={index}>
            <p>{comment}</p>
            <p>{time}</p>
          </li>
        );
      })}
    </ul>
  );
}
