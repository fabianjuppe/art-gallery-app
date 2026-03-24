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
          <Link href="/favorites">Favoriten</Link>
        </li>
      </ul>
    </>
  );
}
