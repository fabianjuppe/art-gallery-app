import Image from "next/image";
import Link from "next/link";
import FavButton from "../FavButtons";
import styled from "styled-components";

const TextContainer = styled.div`
  background-color: ${({$isFavorite}) =>
    $isFavorite ? "var(--color-secondary)" : "var(--color-primary)"};
  color: ${({$isFavorite}) =>
    $isFavorite ? "var(--color-primary)" : "var(--color-white)"};
  display: flex;
  gap: 2rem;
  margin: 3rem 3rem 0 0;
`;

const Title = styled.p`
  margin-left: 1rem;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-self: center;
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

export default function ArtPreview({
  slug,
  image,
  dimensions,
  title,
  artist,
  toggleFavorite,
  isFavorite,
}) {
  return (
    <>
      <TextContainer $isFavorite={isFavorite}>
        <Title>{title}</Title>
        <p>{artist}</p>
        <FavButton
          onClick={() => toggleFavorite(slug)}
          isFavorite={isFavorite}
        />
      </TextContainer>

      <StyledLink href={`/gallery/${slug}`}>
        <StyledImage
          src={image}
          alt={title}
          width={dimensions.width}
          height={dimensions.height}
        />
      </StyledLink>
    </>
  );
}
