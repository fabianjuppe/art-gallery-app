import ArtPreview from "../ArtPreview";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
`;

export default function ArtList({ data, toggleFavorite }) {
  return (
    <StyledList>
      {data.map((artPiece) => (
        <li key={artPiece.slug}>
          <ArtPreview
            slug={artPiece.slug}
            image={artPiece.imageSource}
            dimensions={artPiece.dimensions}
            title={artPiece.name}
            artist={artPiece.artist}
            toggleFavorite={toggleFavorite}
            isFavorite={artPiece.isFavorite}
          ></ArtPreview>
        </li>
      ))}
    </StyledList>
  );
}
