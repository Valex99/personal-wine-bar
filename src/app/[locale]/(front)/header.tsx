"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Degustacije", href: "/tastings" },
  { label: "Dogodki", href: "/events" },
  { label: "Galerija", href: "/gallery" },
  { label: "Rezervacije", href: "/reservations" },
];

export default function NavBar() {
  const pathname = usePathname();
  const params = useParams();
  // Remove locale from path for matching
  const locale = params.locale as string | undefined;
  const cleanPath = pathname.replace(`/${locale ?? ""}`, "") || "/";

  // Determine if homepage
  const isHome = cleanPath === "/";

  return (
    <nav className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex items-center justify-between border-2 border-wine-bar-red bg-white rounded-full px-5 py-1 w-fit gap-2 min-w-[500px] h-[50px]">
      <div className="flex items-center">
        <Image
          src={isHome ? "/logo1.png" : "/logo2.png"}
          alt="Logo"
          width={20}
          height={20}
          className="mr-2"
        />
      </div>
      {navItems.map((item) => {
        // For homepage, match both "/" and "" (root)
        const isActive =
          (item.href === "/" && cleanPath === "/") ||
          (item.href !== "/" && cleanPath.startsWith(item.href));
        return (
          <Link
            key={item.href}
            href={locale ? `/${locale}${item.href}` : item.href}
            className={cn(
              "font-satoshi font-medium text-[15px] px-3 py-1 rounded-full transition-colors",
              isActive
                ? "bg-wine-bar-red text-white"
                : "bg-white text-wine-bar-red"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
