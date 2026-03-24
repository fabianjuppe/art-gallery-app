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
        {/* TODO: dimensionen noch anpassen (aus API auslesen) */}
        <Image src={image} alt={title} width={192} height={256} />
        <p>Artist: {artist}</p>
      </Link>
      {/* TODO: FavButton ins Bild integrieren */}
      <FavButton onClick={() => toggleFavorite(slug)} isFavorite={isFavorite} />
    </div>
  );
}
