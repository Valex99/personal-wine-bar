import type { SearchParams } from "@/types/api-response";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createQueryString(
  searchParams?: SearchParams,
  extraParams?: SearchParams
): string {
  const queryParams = new URLSearchParams();

  if (!searchParams && !extraParams) {
    return "";
  }

  // Combine with extra params if provided
  const combinedParams = { ...searchParams, ...extraParams };

  // Process all parameters
  for (const [key, value] of Object.entries(combinedParams)) {
    if (value !== undefined) {
      if (Array.isArray(value)) {
        // Handle arrays by adding multiple entries with the same key
        for (const item of value) {
          queryParams.append(key, String(item));
        }
      } else {
        queryParams.append(key, String(value));
      }
    }
  }

  return queryParams.toString();
}
