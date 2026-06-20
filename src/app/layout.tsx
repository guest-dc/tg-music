import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/site.css";

import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { BootstrapClient } from "@/components/clients";

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

                {children}
                
                <Footer />

                <BootstrapClient />
            </body>
        </html>
    );
}