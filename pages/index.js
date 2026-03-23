import Navigation from "@/components/Navigation";
import Spotlight from "@/components/spotlight";

export default function HomePage({ data }) {
  return (
    <div>
      <h1>Art Gallery App</h1>
      <Spotlight data={data}></Spotlight>
    </div>
  );
}
