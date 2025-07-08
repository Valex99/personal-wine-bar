import { fallbackLng, locales } from "@/i18n/settings";
import { type Session, decrypt, encrypt } from "@/lib/session";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const authSecret = process.env.AUTH_SECRET;
  if (!authSecret) {
    throw new Error("AUTH_SECRET is not configured");
  }
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  if (!appUrl) {
    throw new Error("NEXT_PUBLIC_APP_URL is not configured");
  }

  let response: NextResponse = NextResponse.next();
  let isLoggedIn = false;

  let session: Session | null = null;

  const cookieStore = request.cookies;
  const currentUserCookie = cookieStore.get("currentUserWinebar");

  if (currentUserCookie) {
    const cookieValue = currentUserCookie.value;
    if (cookieValue) {
      const decryptedValue = await decrypt(cookieValue, authSecret);
      const sessionData = JSON.parse(decryptedValue);

      // Token is still valid
      isLoggedIn = true;
      session = {
        accessToken: sessionData.accessToken,
        accessTokenExpiresAt: sessionData.accessTokenExpiresAt,
        user: sessionData.user,
      };
    }
  }

  const restrictedPages = ["/admin"];
  const nextUrl = request.nextUrl.clone();
  const pathname = nextUrl.pathname;
  const searchParams = nextUrl.searchParams.toString();

  const isRestrictedPage = restrictedPages.some((path) =>
    pathname.includes(path)
  );

  const currentLocale =
    locales.find((locale) => pathname.startsWith(`/${locale}`)) || fallbackLng;

  const loginUrl = `${appUrl}/${currentLocale}/login`;

  if (isRestrictedPage && !isLoggedIn) {
    response = NextResponse.redirect(new URL(loginUrl, nextUrl));
  } else if (
    pathname.startsWith(`/${fallbackLng}/`) ||
    pathname === `/${fallbackLng}`
  ) {
    // e.g. incoming request is /en/about
    const newPathname = pathname.replace(
      `/${fallbackLng}`,
      pathname === `/${fallbackLng}` ? "/" : ""
    );

    // The new URL is now /about
    const newUrl = `${newPathname}${searchParams ? `?${searchParams}` : ""}`;
    response = NextResponse.redirect(new URL(newUrl, nextUrl));
  } else {
    const pathnameIsMissingLocale = locales.every(
      (locale) =>
        !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
      // We are on the default locale
      // Rewrite so Next.js understands

      // e.g. incoming request is /about
      // Tell Next.js it should pretend it's /en/about
      const newUrl = `/${fallbackLng}${pathname}${
        searchParams ? `?${searchParams}` : ""
      }`;
      response = NextResponse.rewrite(new URL(newUrl, nextUrl));
    }
  }

  if (session) {
    // Convert string date to timestamp if needed
    const expiresAt =
      typeof session.accessTokenExpiresAt === "string"
        ? new Date(session.accessTokenExpiresAt).getTime()
        : session.accessTokenExpiresAt;

    if (typeof expiresAt !== "number" || expiresAt <= Date.now()) {
      throw new Error("Invalid or expired access token expiration time");
    }

    // Update the session object with the converted timestamp
    session.accessTokenExpiresAt = expiresAt;

    const cookieUser = JSON.stringify({
      user: session.user,
      accessToken: session.accessToken,
      accessTokenExpiresAt: session.accessTokenExpiresAt,
    });
    const encryptedUser = await encrypt(cookieUser, authSecret);

    // Calculate maxAge in seconds from the expiration timestamp
    const maxAge = Math.floor(
      (session.accessTokenExpiresAt - Date.now()) / 1000
    );

    response.cookies.set({
      name: "currentUserWinebar",
      value: encryptedUser,
      httpOnly: true,
      maxAge: maxAge > 0 ? maxAge : 0, // Ensure maxAge is not negative
      path: "/",
      sameSite: "strict",
      secure: process.env.SECURE_COOKIE
        ? process.env.SECURE_COOKIE === "true"
        : process.env.NODE_ENV === "production",
      domain: process.env.COOKIE_DOMAIN || "localhost",
    });
  }

  return response;
}

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.(?:png|jpg|webp|jpeg|pdf|svg)$).*)",
  ],
};
