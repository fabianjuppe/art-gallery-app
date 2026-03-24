import Image from "next/image";

export default function Spotlight({ data }) {
  if (!data || data.length === 0) {
    return <p>Loading...</p>;
  }

  // TODO: Link zu ArtPieceDetails
  const randomArtPiece = data[Math.floor(Math.random() * data.length)];
  return (
    <>
      <li>
        <Image
          src={randomArtPiece.imageSource}
          // TODO: dimensionen noch anpassen (aus API auslesen)
          width={500}
          height={500}
          alt={randomArtPiece.name}
        ></Image>
        <p>{randomArtPiece.artist}</p>
      </li>
    </>
  );
}
