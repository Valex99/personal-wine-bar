import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
//import { Toaster } from 'sonner'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const satoshi = localFont({
  src: [
    {
      path: "../assets/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../assets/fonts/Satoshi-Bold.woff2",
      weight: "600",
      style: "bold",
    },
    {
      path: "../assets/fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "light",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Bled Wine Bar",
  description: "Spletna stran je v pripravi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} antialiased ${inter.variable} font-satoshi`}
        suppressHydrationWarning
      >
        {children}
        {/* <Toaster /> */}
      </body>
    </html>
  );
}
