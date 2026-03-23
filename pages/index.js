import Spotlight from "../components/Spotlight/index.js";

export default function HomePage({ data }) {
  return (
    <div>
      <h1>Art Gallery App</h1>
      <Spotlight data={data}></Spotlight>
    </div>
  );
}
