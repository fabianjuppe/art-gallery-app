import ArtPreview from "@/components/ArtPreview";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
`;

const StyledInfo = styled.h1`
  text-align: center;
  color: var(--color-secondary);
`;

export default function Favorites({ data, toggleFavorite }) {
  const favorites = data.filter((artPiece) => artPiece.isFavorite);

  if (favorites.length === 0) {
    return <StyledInfo>No favorite art pieces saved yet!</StyledInfo>;
  }

  return (
    <StyledList>
      {favorites.map((artPiece) => (
        <li key={artPiece.slug}>
          <ArtPreview
            slug={artPiece.slug}
            image={artPiece.imageSource}
            dimensions={artPiece.dimensions}
            title={artPiece.name}
            artist={artPiece.artist}
            toggleFavorite={toggleFavorite}
            isFavorite={artPiece.isFavorite}
          />
        </li>
      ))}
    </StyledList>
  );
}
