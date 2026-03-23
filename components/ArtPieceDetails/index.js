import Image from "next/image";
import Link from "next/link";
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";

export default function ArtPieceDetails({
  slug,
  image,
  title,
  artist,
  year,
  genre,
  comments,
  addComment,
}) {
  return (
    <>
      <Link href="/gallery">← Gallery</Link>
      <h2>{title}</h2>
      <Image src={image} alt={title} width={192} height={256} />
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <CommentForm slug={slug} onAddComment={addComment} />
      <CommentList comments={comments} />
    </>
  );
}
