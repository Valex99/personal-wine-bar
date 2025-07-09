import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex justify-between items-center bg-wine-bar-white rounded-full p-2 px-5 min-w-[500px] h-[50px]">
      <Link href="/" className="flex h-full">
        <Image src="/logo2.png" alt="Logo" width={30} height={30} />
      </Link>

      <Link href="/tastings" className="text-wine-bar-red">
        Tastings
      </Link>
      <Link href="/events" className="text-wine-bar-red">
        Events
      </Link>
      <Link href="/gallery" className="text-wine-bar-red">
        Gallery
      </Link>
      <Link href="/reservations" className="text-wine-bar-red">
        Reservations
      </Link>
    </div>
  );
}
