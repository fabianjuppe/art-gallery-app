import Spotlight from "@/components/spotlight";

export default function HomePage({ data, toggleFavorite }) {
  return <Spotlight data={data} toggleFavorite={toggleFavorite}></Spotlight>;
}
