import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <Link href="/gallery">← Gallery</Link>
      <h2>{title}</h2>
      <Image src={image} alt={title} width={192} height={256} />
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
    </>
  );
}
