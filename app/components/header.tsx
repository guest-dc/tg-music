"use client"; // this file is a client component
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <Link href="/">
        <Image
          src="/logo.png"
          alt="My Logo"
          width={90}
          height={40}
          className="logo" />
      </Link>

      <div className={`nav-container ${menuOpen ? "active" : ""}`}>

        <nav className="page-nav">
          <Link href="/">Home</Link>
          <Link href="/music">Music</Link>
          <Link href="/events">Events</Link>
          <Link href="/about">About</Link>
        </nav>

        <div className="social-nav">
          <a href="https://instagram.com" target="_blank">
            <Image src="/icons/instagram.png" alt="Instagram" width={24} height={24} />
          </a>
          <a href="https://facebook.com" target="_blank">
            <Image src="/icons/facebook.png" alt="Facebook" width={24} height={24} />
          </a>
          <a href="https://tiktok.com" target="_blank">
            <Image src="/icons/tiktok.png" alt="Tiktok" width={24} height={24} />
          </a>
          <a href="https://spotify.com" target="_blank">
            <Image src="/icons/spotify.png" alt="Spotify" width={24} height={24} />
          </a>
          <a href="https://youtube.com" target="_blank">
            <Image src="/icons/youtube.png" alt="YouTube" width={24} height={24} />
          </a>
        </div>

      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </header>
  );
}