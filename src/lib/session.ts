import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

export type UserAuth = {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  roles?: string[];
  departments?: string[];
};

export type Session = {
  accessToken: string;
  accessTokenExpiresAt: number; // Unix timestamp in milliseconds
  user?: UserAuth;
};

// Function to encrypt data using JWT
export async function encrypt(data: string, secret: string): Promise<string> {
  const secretKey = new TextEncoder().encode(secret);
  return await new SignJWT({ data })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(secretKey);
}

// Function to decrypt data using JWT
export async function decrypt(
  ciphertext: string,
  secret: string
): Promise<string> {
  try {
    const secretKey = new TextEncoder().encode(secret);
    const { payload } = await jwtVerify(ciphertext, secretKey);
    return payload.data as string;
  } catch (error) {
    throw new Error("Failed to decrypt data", { cause: error });
  }
}

export async function saveSession(session: Session) {
  console.log("session", session);

  // Validate session data
  if (!session.accessToken || !session.user) {
    throw new Error("Invalid session data");
  }

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

  const authSecret = process.env.AUTH_SECRET;
  if (!authSecret) {
    throw new Error("AUTH_SECRET is not configured");
  }

  const encryptedUser = await encrypt(cookieUser, authSecret);

  const cookieStore = await cookies();

  // Calculate maxAge in seconds from the expiration timestamp
  const maxAge = Math.floor((session.accessTokenExpiresAt - Date.now()) / 1000);

  cookieStore.set({
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

export async function getSession(): Promise<Session | null> {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("currentUserWinebar");

  // First try to get the current session from cookie
  if (cookie?.value) {
    try {
      const authSecret = process.env.AUTH_SECRET;
      if (!authSecret) {
        throw new Error("AUTH_SECRET is not configured");
      }

      const decryptedValue = await decrypt(cookie.value, authSecret);
      const sessionData = JSON.parse(decryptedValue);

      if (sessionData?.accessToken && sessionData?.user) {
        return {
          accessToken: sessionData.accessToken,
          accessTokenExpiresAt: sessionData.accessTokenExpiresAt,
          user: sessionData.user,
        };
      }
    } catch (error) {
      console.error(
        "Error parsing or decrypting currentUserWinebar cookie:",
        error
      );
    }
  }
  return null;
}

export async function deleteCurrentUser() {
  const cookieStore = await cookies();

  cookieStore.set({
    name: "currentUserWinebar",
    value: "",
    path: "/",
    maxAge: -1,
    domain: process.env.COOKIE_DOMAIN || "localhost",
  });

  cookieStore.delete("currentUserWinebar");
}
