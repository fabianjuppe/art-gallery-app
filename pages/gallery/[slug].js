import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({ data, addComment }) {
  const router = useRouter();
  const { slug } = router.query;

  const artPiece = data.find((artPiece) => artPiece.slug === slug);
  if (!artPiece) {
    return null;
  }

  return (
    <ArtPieceDetails
      slug={slug}
      image={artPiece.imageSource}
      title={artPiece.name}
      artist={artPiece.artist}
      year={artPiece.year}
      genre={artPiece.genre}
      colors={artPiece.colors}
      comments={artPiece.comments}
      addComment={addComment}
    />
  );
}
