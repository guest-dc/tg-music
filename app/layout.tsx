import "./styles.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
  title: "Thomas Guest Music",
  description: "Official website for Thomas Guest Music. Explore new song releases, events, and updates.",
  keywords: ["Thomas Guest", "Thomas Guest Music", "Singer", "Country Music", "Music", "Macon", "Georgia", "Macon Georgia"],
  authors: [{ name: "Thomas Guest" }],

  openGraph: {
    title: "Thomas Guest Music",
    description: "Official website for Thomas Guest Music. Explore new song releases, events, and updates.",
    url: "https://tg-music-seven.vercel.app/",
    siteName: "Thomas Guest Music",
    type: "website",
    images: [
      {
        url: "https://tg-music-seven.vercel.app/icons/logo-gw.png",
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
    images: ["https://tg-music-seven.vercel.app/icons/logo-gw.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">

      <head>
        <meta name="viewport" content="width=device-width, initial-scale=0.85"/>
      </head>

      <body>

        <Header />

        <main>{children}</main>

        <Footer />

      </body>

    </html>
  );
}
