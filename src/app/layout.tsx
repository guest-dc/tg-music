import Script from "next/script";
import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";

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
                {children}
                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
            </body>
        </html>
    );
}