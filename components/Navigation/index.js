import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <ul>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/">Spotlight</Link>
        </li>
        <li>
          <Link href="/favorits">Favoriten</Link>
        </li>
      </ul>
    </>
  );
}
