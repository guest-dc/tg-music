// probably wont need
//import type { Metadata } from "next";

import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";

export const metadata = {
  title: "Thomas Guest Music",
  description: "Official website for Thomas Guest Music. Explore new song releases, events, and updates.",
  keywords: ["Thomas Guest", "Music", "Singer", "Country Music", "Music"],
  authors: [{ name: "Thomas Guest" }],

  openGraph: {
    title: "Thomas Guest Music",
    description: "Official website for Thomas Guest Music. Explore new song releases, events, and updates.",
    url: "https://tg-music-seven.vercel.app/",
    siteName: "Thomas Guest Music",
    type: "website",
    images: [
      {
        url: "https://tg-music-seven.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thomas Guest Music",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Thomas Guest Music",
    description: "Official website for Thomas Guest Music. Explore new song releases, events, and updates.",
    images: ["https://tg-music-seven.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({ children }: Readonly <{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>

        <Header/>

        {/* baliusdbliuasbd */}

        <main>{children}</main>

        <footer>
          Blah blah blah
        </footer>

      </body>

    </html>
  );
}
