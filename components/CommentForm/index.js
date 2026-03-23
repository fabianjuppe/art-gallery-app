import { nanoid } from "nanoid";

export default function CommentForm({ slug, onAddComment }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddComment(slug, {
      id: nanoid(),
      comment: data.comment,
      date: new Date(),
    });

    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Comment</label>
      <textarea id="comment" name="comment" rows={5} cols={40} required />
      <button type="submit">Send</button>
    </form>
  );
}
