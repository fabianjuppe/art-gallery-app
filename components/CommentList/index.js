export default function CommentList({ comments }) {
  return (
    <>
      <h3>Comments:</h3>
      <ul>
        {comments &&
          comments.map((comment) => (
            <li key={comment.id}>
              <p>{comment.comment}</p>
              <p>{comment.date.toLocaleString()}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
