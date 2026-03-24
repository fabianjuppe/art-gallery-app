export default function ColorPalette({ colors }) {
  return (
    <>
      <h3>Color Palette:</h3>
      <ul>
        {colors.map((color) => (
          <li key={color}>
            <div style={{ backgroundColor: color }}>{color}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
