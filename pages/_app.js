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

  // Toggle Funktion für Fav Button
  function toggleFavorite(slug) {
    setArtPieces(
      artPieces.map((artPiece) =>
        artPiece.slug === slug
          ? { ...artPiece, isFavorite: !artPiece.isFavorite }
          : artPiece
      )
    );
  }

  const [artPieces, setArtPieces] = useState([]);
  useEffect(() => {
    if (data && artPieces.length === 0) {
      // Für jedes Objekt im data-Array dieses Objekt wiedergeben + isFavorite: false als key und Wert hinzufügen
      setArtPieces(data.map((art) => ({ ...art, isFavorite: false })));
    }
  }, [data, artPieces.length]);

  if (error) return <div>failed to load</div>;
  if (isLoading && artPieces.length === 0) return <div>Loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        data={artPieces}
        setArtPieces={setArtPieces}
        toggleFavorite={toggleFavorite}
      />
      <Navigation />
    </>
  );
}
