import Image from "next/image";
import Link from "next/link";
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";
import ColorPalette from "../ColorPalette";
import FavButton from "../FavButtons";

export default function ArtPieceDetails({
  slug,
  image,
  title,
  artist,
  year,
  genre,
  colors,
  comments,
  addComment, 
  toggleFavorite,
  isFavorite,
}) {
  return (
    <>
      <Link href="/gallery">← Gallery</Link>
      <h2>{title}</h2>
      {/* TODO: dimensionen noch anpassen (aus API auslesen) */}
      <Image src={image} alt={title} width={192} height={256} />
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <FavButton onClick={() => toggleFavorite(slug)} isFavorite={isFavorite} />
      <CommentForm slug={slug} onAddComment={addComment} />
      <CommentList comments={comments} />
      <ColorPalette colors={colors} />
    </>
  );
}
