import Spotlight from "@/components/Spotlight";

export default function HomePage({ data }) {
  return (
    <div>
      <h1>Art Gallery App</h1>
      <Spotlight data={data}></Spotlight>
    </div>
  );
}
