import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <Link href="/">
        <Image src="/logo1.png" alt="Logo" width={100} height={100} />
      </Link>
      <div className="flex gap-4">
        <Link href="/tastings">Tastings</Link>
        <Link href="/events">Events</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/reservations">Reservations</Link>
      </div>
    </div>
  );
}
