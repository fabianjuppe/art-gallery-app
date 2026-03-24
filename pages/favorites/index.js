import ArtPreview from "@/components/ArtPreview";

export default function Favorites({ data, toggleFavorite }) {
  const favorites = data.filter((artPiece) => artPiece.isFavorite);

  return (
    <div>
      <h1>Favorites</h1>
      {/* Falls nichts geliked ist */}
      {favorites.length === 0 && <p>Nocht keine Favoriten, like etwas!</p>}

      {favorites.map((artPiece) => (
        <ArtPreview
          key={artPiece.slug}
          slug={artPiece.slug}
          image={artPiece.imageSource}
          title={artPiece.name}
          artist={artPiece.artist}
          toggleFavorite={toggleFavorite}
          isFavorite={artPiece.isFavorite}
        />
      ))}
    </div>
  );
}
