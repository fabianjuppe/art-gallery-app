import Image from "next/image";
import Back from "/icons/Back.svg";
import Link from "next/link";
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";
import ColorPalette from "../ColorPalette";
import FavButton from "../FavButtons";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 6rem;
  gap: 2rem;
`;

const TextContainer = styled.div`
  color: var(--color-primary);
  margin-top: 2rem;
  line-height: 40%;
`;

const StyledBack = styled(Back)`
  width: 50px;
  margin-left: -5px;
  stroke: var(--color-primary);

  &:hover {
    fill: var(--color-secondary);
  }
`;

const ArtPieceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
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

export default function ArtPieceDetails({
  slug,
  image,
  dimensions,
  title,
  artist,
  year,
  genre,
  colors,
  comments,
  addComment,
  toggleFavorite,
  isFavorite,
}) {
  return (
    <Wrapper>
      <TextContainer>
        <Link href="/gallery">
          <StyledBack />
        </Link>
        <h2>{title}</h2>
        <p>{artist}</p>
        <p>{year}</p>
        <p>{genre}</p>
        <FavButton
          onClick={() => toggleFavorite(slug)}
          isFavorite={isFavorite}
        />
      </TextContainer>

      <ArtPieceContainer>
        <StyledImage
          src={image}
          alt={title}
          width={dimensions.width}
          height={dimensions.height}
        />

        <CommentForm slug={slug} onAddComment={addComment} />
        <CommentList comments={comments} />
      </ArtPieceContainer>
      <ColorPalette colors={colors} />
    </Wrapper>
  );
}
