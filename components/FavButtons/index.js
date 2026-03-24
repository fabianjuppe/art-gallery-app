import styled from "styled-components";

export default function FavButton({ onClick, isFavorite }) {
  // Funktion die beim klicken auf ein Bild das Bild auf isFavorite: true setzt und den State updatet.

  // bei styled component mit $ davor schreiben, damit nur für component und nicht ins HTML geschreiben
  return (
    <StyledButton onClick={onClick} $isFavorite={isFavorite}>
      {isFavorite ? "iLIKE" : "LIKE?"}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  text-decoration: none;
  width: 5em;
  height: auto;
  &:hover {
    color: red;
  }

  background-color: ${({ $isFavorite }) => ($isFavorite ? "red" : "gray")};
`;
