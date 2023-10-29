import "./globals.css";
import type { Metadata } from "next";
import { Frank_Ruhl_Libre } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const font = Frank_Ruhl_Libre({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HM - Bienvenue",
  description:
    "Bienvenue sur la page de présentation de Hubert Moncenis, développeur web freelance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={font.className} suppressHydrationWarning={true}>
        <Link href="/">
          <Image
            src="/me.gif"
            width={200}
            height={100}
            alt="Photo de profil de Hubert Moncenis"
            className={`absolute xl:fixed top-2 right-0 md:top-12 md:right-12 z-0 opacity-100`}
          />
        </Link>
        {children}
      </body>
    </html>
  );
}
