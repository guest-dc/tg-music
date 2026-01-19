"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import * as Globals from "@/app/globals";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

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
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      toggleMenu();
    }
  };

  const handleNavClick = (id: string) => {
    if (pathname === "/") {
      scrollToSection(id);
    } else {
      toggleMenu();
      sessionStorage.setItem("scrollTarget", id);
      router.push("/");
    }
  };

  return (
    <header>

      <Link href="/">
        <img className="logo" src="/icons/logo-gw.png" alt="Logo" width={110} height={40} />
      </Link>

      <div className={`nav-container ${menuOpen ? "active" : ""} ${closing ? "closing" : ""}`}>
        <nav className="page-nav">
          <button onClick={() => handleNavClick("home")}>Home</button>
          <button onClick={() => handleNavClick("events")}>Events</button>
          <button onClick={() => handleNavClick("music")}>Music</button>
          <button onClick={() => handleNavClick("about")}>About</button>
          <Link href="/pages/epk" passHref>
            <button onClick={() => { toggleMenu(); }}>EPK</button>
          </Link>
          <Link href="/pages/contact" passHref>
            <button onClick={() => { toggleMenu(); }}>Contact</button>
          </Link>

        </nav>

        <div className="social-nav">
          <a href={Globals.SOCIALS.INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
          </a>
          <a href={Globals.SOCIALS.FACEBOOK_LINK} target="_blank" rel="noopener noreferrer">
            <img src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
          </a>
          <a href={Globals.SOCIALS.TIKTOK_LINK} target="_blank" rel="noopener noreferrer">
            <img src="/icons/tiktok.svg" alt="TikTok" width={24} height={24} />
          </a>
          <a href={Globals.SOCIALS.YOUTUBE_LINK} target="_blank" rel="noopener noreferrer">
            <img src="/icons/youtube.svg" alt="YouTube" width={24} height={24} />
          </a>
          <a href={Globals.SOCIALS.SPOTIFY_LINK} target="_blank" rel="noopener noreferrer">
            <img src="/icons/spotify.svg" alt="Spotify" width={24} height={24} />
          </a>
          <a href={Globals.SOCIALS.YOUTUBE_MUSIC_LINK} target="_blank" rel="noopener noreferrer">
            <img src="/icons/youtube-music.svg" alt="YouTubeMusic" width={24} height={24} />
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
