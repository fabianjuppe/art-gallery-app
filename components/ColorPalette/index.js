import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 1rem;
`;

const StyledColor = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ $color }) => $color};
`;

export default function ColorPalette({ colors }) {
  return (
    <StyledList>
      {colors.map((color) => (
        <li key={color}>
          <StyledColor $color={color} />
        </li>
      ))}
    </StyledList>
  );
}
