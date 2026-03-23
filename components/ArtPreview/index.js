import Image from "next/image";
import Navigation from "../Navigation";

export default function ArtPreview({ image, title, artist }) {
  return (
    <>
      <h2>{title}</h2>
      <Image src={image} alt={title} width={192} height={256} />
      <p>Artist: {artist}</p>
  
    </>
  );
}
