export default function CommentList({ comments }) {
  return (
    <>
      <h3>Comments:</h3>
      <ul>
        {comments &&
          comments.map((comment) => (
            <li key={comment.id}>
              <p>{comment.comment}</p>
              {/* TODO: Datum besser formatieren */}
              <p>{comment.date.toLocaleString()}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
