import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 1rem;
`;

const StyledDiv = styled.div`
  width: 50px;
  height: 50px;
`;

export default function ColorPalette({ colors }) {
  return (
    <StyledList>
      {colors.map((color) => (
        <li key={color}>
          <StyledDiv style={{ backgroundColor: color }}></StyledDiv>
        </li>
      ))}
    </StyledList>
  );
}
