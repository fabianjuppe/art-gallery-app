import ArtPreview from "../ArtPreview";

export default function ArtList({ data, toggleFavorite }) {
  return (
    <ul>
      {data.map((artPiece) => (
        <li key={artPiece.slug}>
          <ArtPreview
            slug={artPiece.slug}
            image={artPiece.imageSource}
            title={artPiece.name}
            artist={artPiece.artist}
            toggleFavorite={toggleFavorite}
            isFavorite={artPiece.isFavorite}
          ></ArtPreview>
        </li>
      ))}
    </ul>
  );
}
