import styled from "styled-components";
import Heart from "/icons/herz.svg";

const StyledButton = styled.button`
  width: 2rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const StyledHeart = styled(Heart)`
  stroke: ${(props) =>
    props.$isFavorite ? "var(--color-secondar)" : "var(--color-primary)"};
  stroke-width: 5px;
  fill: ${(props) =>
    props.$isFavorite ? "var(--color-primary)" : "var(--color-white)"};

  &:hover {
    fill: ${(props) =>
      props.$isFavorite ? "var(--color-secondary)" : "var(--color-secondary)"};
  }
`;

export default function FavButton({ onClick, isFavorite }) {
  return (
    <StyledButton onClick={onClick}>
      <StyledHeart $isFavorite={isFavorite} />
    </StyledButton>
  );
}
