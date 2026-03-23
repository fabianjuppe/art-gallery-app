import Image from "next/image";

export default function Spotlight({ data }) {
  const randomArtPiece = data[Math.floor(Math.random() * data.length)];
  return (
    <>
      <Image
        src={randomArtPiece.imageSource}
        // dimensionen noch anpassen
        width={500}
        height={500}
        alt={randomArtPiece.name}
      ></Image>
      <p>{randomArtPiece.artist}</p>
    </>
  );
}
