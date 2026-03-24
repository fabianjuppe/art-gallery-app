import Image from "next/image";
import { useEffect, useState } from "react";

export default function Spotlight({ data }) {
  const [randomArtPiece, setRandomArtPiece] = useState();

  useEffect(() => {
    if (!data || data.length === 0) return;

    setRandomArtPiece(data[Math.floor(Math.random() * data.length)]);
  }, [data]);

  if (!randomArtPiece) return <p>Loading...</p>;

  // TODO: Link zu ArtPieceDetails
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
