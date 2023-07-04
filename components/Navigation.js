import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <Link href="/">Spotlight</Link>
      <Link href="/art_pieces">Art pieces</Link>
    </nav>
  );
}
