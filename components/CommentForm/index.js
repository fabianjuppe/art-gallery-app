import { nanoid } from "nanoid";
import styled from "styled-components";
import Send from "/icons/send.svg";

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const StyledInput = styled.input`
  width: 500px;
  height: 2rem;
  font-size: 1.25rem;
  border: 2px solid var(--color-primary);
  outline: none;
  color: var(--color-primary);
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const StyledSend = styled(Send)`
  stroke: var(--color-primary);
  height: 30px;

  &:hover {
    fill: var(--color-secondary);
  }
`;

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
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        id="comment"
        name="comment"
        placeholder="Write a comment..."
        required
      />
      <StyledButton type="submit">
        <StyledSend />
      </StyledButton>
    </StyledForm>
  );
}
