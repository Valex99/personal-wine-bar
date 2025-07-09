"use client";

import { type LocaleTypes, locales } from "@/i18n/settings";
import { cn } from "@/lib/utils";
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
        "flex-inline items-center flex justify-center font-satoshi gap-2 text-[12px] lg:text-[16px] font-bold cursor-pointer border-2 border-white rounded-full p-0.5 px-0.5 bg-wine-bar-white",
        className
      )}
    >
      <div
        className={`${
          locale === "si"
            ? black
              ? "text-wine-bar-white bg-wine-bar-red"
              : "text-wine-bar-white bg-wine-bar-red py-0.5 px-2 rounded-full"
            : black
            ? "text-wine-bar-red bg-wine-bar-white"
            : "text-wine-bar-red bg-wine-bar-white py-0.5 px-2 rounded-full"
        }`}
        onClick={() => handleLocaleChange("si")}
      >
        SLO
      </div>
      {/* <Dot
        className={`size-6 ${
          black ? "text-wine-bar-red" : "text-wine-bar-red"
        } cursor-default`}
      /> */}
      <div
        className={`${
          locale === "en"
            ? black
              ? "text-wine-bar-white bg-wine-bar-red"
              : "text-wine-bar-white bg-wine-bar-red py-0.5 px-2 rounded-full"
            : black
            ? "text-wine-bar-red bg-wine-bar-white"
            : "text-wine-bar-red bg-wine-bar-white py-0.5 px-2 rounded-full"
        }`}
        onClick={() => handleLocaleChange("en")}
      >
        ENG
      </div>
    </div>
  );
}
