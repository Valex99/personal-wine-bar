"use client";

import { type LocaleTypes, locales } from "@/i18n/settings";
import { cn } from "@/lib/utils";
import { Dot } from "lucide-react";
import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {
  className?: string;
  black?: boolean;
};

export default function LanguageSwitcher({ className, black }: Props) {
  const router = useRouter();
  const params = useParams();
  const path = usePathname();

  const locale = params.locale as string;

  const handleLocaleChange = (value: string) => {
    const newLocale = value;
    const pathSegments = path.split("/").filter(Boolean);
    if (locales.includes(pathSegments[0] as LocaleTypes)) {
      pathSegments.shift();
    }

    router.push(`/${newLocale}/${pathSegments.join("/")}`);
  };

  return (
    <div
      className={cn(
        "flex-inline items-center flex justify-center font-satoshi  text-[12px] lg:text-[16px] cursor-pointer",
        className
      )}
    >
      <div
        className={`${
          locale === "si"
            ? black
              ? "text-black"
              : "text-white"
            : black
            ? "text-black/50"
            : "text-white/50"
        }`}
        onClick={() => handleLocaleChange("si")}
      >
        SLO
      </div>
      <Dot
        className={`size-6 ${
          black ? "text-black" : "text-white"
        } cursor-default`}
      />
      <div
        className={`${
          locale === "en"
            ? black
              ? "text-black"
              : "text-white"
            : black
            ? "text-black/50"
            : "text-white/50"
        }`}
        onClick={() => handleLocaleChange("en")}
      >
        ENG
      </div>
    </div>
  );
}
