import Image from "next/image";
import Link from "next/link";
import FavButton from "../FavButtons";

export default function ArtPreview({
  slug,
  image,
  title,
  artist,
  toggleFavorite,
  isFavorite,
}) {
  return (
    <div>
      <Link href={`/gallery/${slug}`}>
        <h2>{title}</h2>
        <Image src={image} alt={title} width={192} height={256} />
        <p>Artist: {artist}</p>
      </Link>
      <FavButton onClick={() => toggleFavorite(slug)} isFavorite={isFavorite} />
    </div>
  );
}
