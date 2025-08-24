"use client"; // this file is a client component
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Globals from "@/app/globals";

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
          className="logo"
        />
      </Link>

      <div className={`nav-container ${menuOpen ? "active" : ""}`}>
        <nav className="page-nav">
          <Link href="/">Home</Link>
          <Link href="/music">Music</Link>
          <Link href="/events">Events</Link>
          <Link href="/about">About</Link>
        </nav>

        <div className="social-nav">
          <a href={Globals.SOCIALS.INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
            <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
          </a>
          <a href={Globals.SOCIALS.FACEBOOK_LINK} target="_blank" rel="noopener noreferrer">
            <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
          </a>
          <a href={Globals.SOCIALS.TIKTOK_LINK} target="_blank" rel="noopener noreferrer">
            <Image src="/icons/tiktok.svg" alt="TikTok" width={24} height={24} />
          </a>
          <a href={Globals.SOCIALS.SPOTIFY_LINK} target="_blank" rel="noopener noreferrer">
            <Image src="/icons/spotify.svg" alt="Spotify" width={24} height={24} />
          </a>
          <a href={Globals.SOCIALS.YOUTUBE_LINK} target="_blank" rel="noopener noreferrer">
            <Image src="/icons/youtube.svg" alt="YouTube" width={24} height={24} />
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
