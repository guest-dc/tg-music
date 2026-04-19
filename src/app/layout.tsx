import BootstrapClient from "@/components/BootstrapClient";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/site.css";

import { Header } from "@/components/layout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TG Music",
  description: "Music application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}