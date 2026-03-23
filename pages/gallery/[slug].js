import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({ data }) {
  const router = useRouter();
  const { slug } = router.query;

  const artPiece = data.find((artPiece) => artPiece.slug === slug);
  if (!artPiece) {
    return null;
  }

  return (
    <ArtPieceDetails
      image={artPiece.imageSource}
      title={artPiece.name}
      artist={artPiece.artist}
      year={artPiece.year}
      genre={artPiece.genre}
    />
  );
}
