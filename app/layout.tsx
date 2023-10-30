"use client";

import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { fontBody } from "@/utils/fonts";

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
      <body className={fontBody.className} suppressHydrationWarning={true}>
        <main className="min-h-screen pt-32 p-16 bg-gradient-to-b from-black via-50% via-[#010208] to-90% to-[#122E52] print:bg-white print:from-transparent print:to-transparent print:text-black print:p-8">
          <Link href="/" className="print:hidden">
            <Image
              src="/me.gif"
              width={200}
              height={100}
              alt="Photo de profil de Hubert Moncenis"
              className={`absolute xl:fixed top-2 right-0 md:top-12 md:right-12 z-0 opacity-100 w-[200px] h-auto hover:scale-110 transition-transform`}
            />
          </Link>
          <section className="xl:max-w-screen-lg 2xl:max-w-screen-xl">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
