import ArtList from "@/components/ArtList";

export default function GalleryPage({ data, toggleFavorite }) {
  return <ArtList data={data} toggleFavorite={toggleFavorite} />;
}
