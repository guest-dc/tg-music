import BootstrapClient from "@/components/BootstrapClient";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/site.css";

import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";

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
            <body className="d-flex flex-column min-vh-100">
                <Header />

                <main className="flex-grow-1">
                    {children}
                </main>

                <Footer />

                <BootstrapClient />
            </body>
        </html>
    );
}