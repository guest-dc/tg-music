// probably wont need
//import type { Metadata } from "next";

import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";

export const metadata = {
  title: "Thomas Guest Music",
  description: "Official website for my music, events, and updates",
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
