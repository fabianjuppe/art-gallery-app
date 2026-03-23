import GlobalStyle from "../styles";
import useSWR from "swr";
import Navigation from "@/components/Navigation";
import { useEffect, useState } from "react";

async function fetcher(url) {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }
  return response.json();
}

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  const [artPieces, setArtPieces] = useState([]);
  useEffect(() => {
    if (data && artPieces.length === 0) {
      setArtPieces(data);
    }
  }, [data, artPieces.length]);

  function addComment(slug, newComment) {
    setArtPieces(
      artPieces.map((artPiece) =>
        artPiece.slug === slug
          ? {
              ...artPiece,
              comments: artPiece.comments
                ? [newComment, ...artPiece.comments]
                : [newComment],
            }
          : artPiece
      )
    );
  }

  if (error) return <div>failed to load</div>;
  if (isLoading && artPieces.length === 0) return <div>Loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} data={artPieces} addComment={addComment} />
      <Navigation />
    </>
  );
}
