import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  color: var(--color-primary);
  line-height: 40%;
  margin: 0;
  padding: 0;
`;

export default function CommentList({ comments }) {
  return (
    <StyledList>
      {comments &&
        comments.map((comment) => {
          const date = new Date(comment.date);
          const formattedDate = date.toLocaleDateString("de-DE");
          const formattedTime = date.toLocaleTimeString("de-DE");

          return (
            <li key={comment.id}>
              <h2>{comment.comment}</h2>
              <p>
                {formattedDate}, {formattedTime} Uhr
              </p>
            </li>
          );
        })}
    </StyledList>
  );
}
