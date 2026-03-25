import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import FavButton from "../FavButtons";

const StyledDiv = styled.div`
  display: flex;
  gap: 2rem;
  color: #2f00ff;
  justify-content: center;
`;

const Title = styled.p`
  grid-area: text;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  flex: auto;
  display: block;
  justify-content: center;
  max-width: 1000px;
  width: fit-content;
  margin: 0 auto;

  &:hover {
    opacity: 60%;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  max-width: 1000px;
  max-height: 1000px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
`;

export default function Spotlight({ data }) {
  const [randomArtPiece, setRandomArtPiece] = useState();

  useEffect(() => {
    if (!data || data.length === 0) return;

    setRandomArtPiece(data[Math.floor(Math.random() * data.length)]);
  }, [data]);

  if (!randomArtPiece) return <></>;

  return (
    <>
      <StyledDiv>
        <Title>{randomArtPiece.name}</Title>
        <p>{randomArtPiece.artist}</p>
      </StyledDiv>

      <StyledLink href={`/gallery/${randomArtPiece.slug}`}>
        <StyledImage
          src={randomArtPiece.imageSource}
          alt={randomArtPiece.name}
          width={randomArtPiece.dimensions.width}
          height={randomArtPiece.dimensions.height}
        />
      </StyledLink>
    </>
  );
}
