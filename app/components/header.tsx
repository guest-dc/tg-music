"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Globals from "@/app/globals";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const toggleMenu = () => {
    if (menuOpen) {
      setClosing(true);
      setTimeout(() => {
        setClosing(false);
        setMenuOpen(false);
      }, 350);
    } else {
      setMenuOpen(true);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      toggleMenu();
    }
  };

  return (
    <header>
      <Link href="/">
        <Image
          src="/icons/logo-gw.png"
          alt="My Logo"
          width={110}
          height={40}
          className="logo"
        />
      </Link> 

      <div className={`nav-container ${menuOpen ? "active" : ""} ${closing ? "closing" : ""}`}>
        <nav className="page-nav">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("events")}>Events</button>
          <button onClick={() => scrollToSection("music")}>Music</button>
          <button onClick={() => scrollToSection("about")}>About</button>

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

      <div className={`hamburger ${menuOpen ? "active" : ""} ${closing ? "closing" : ""} `} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
