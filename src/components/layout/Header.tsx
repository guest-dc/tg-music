"use client";

import * as Globals from "@/app/globals";
import { useEffect } from "react";
import { FaFacebook, FaInstagram, FaSpotify, FaTiktok, FaYoutube } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";

export default function Header() {

   useEffect(() => {
   const mq = window.matchMedia("(min-width: 768px)");

   const handleChange = () => {
      if (mq.matches) {
         const collapseEl = document.getElementById("headerNavbar");
         const toggler = document.querySelector(".navbar-toggler");

         if (collapseEl) {
            collapseEl.classList.remove("show");
         }

         if (toggler) {
            toggler.classList.add("collapsed");
            toggler.setAttribute("aria-expanded", "false");
         }
      }
   };

   handleChange();
   mq.addEventListener("change", handleChange);

   return () => mq.removeEventListener("change", handleChange);
}, []);

   return (
      <nav className="navbar navbar-expand-md navbar-dark px-5 py-0 sticky-top">

         <a className="navbar-brand d-flex align-items-center" href="/">
            <img src="icons/logo.png" alt="logo" height="100"/>
         </a>

         <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#headerNavbar" aria-controls="headerNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="toggler-icon">
               <span></span>
               <span></span>
               <span></span>
            </span>
         </button>

         <div id="headerNavbar" className="collapse navbar-collapse pb-0">
            <div id="navbar-items" className="ms-auto d-flex flex-column align-items-end gap-3">
               <ul id="header-pages" className="navbar-nav align-items-end d-flex gap-3">
                  <li className="nav-item"><a className="nav-link py-0" style={{paddingLeft:"0"}} href="#home">Home</a></li>
                  <li className="nav-item"><a className="nav-link py-0" href="#events">Events</a></li>
                  <li className="nav-item"><a className="nav-link py-0" href="#music">Music</a></li>
                  <li className="nav-item"><a className="nav-link py-0" href="#about">About</a></li>
                  <li className="nav-item"><a className="nav-link py-0" style={{paddingRight:"0"}} href="#contact">Contact</a></li>
               </ul>

               <div id="header-socials" className="d-flex gap-3">
                  <a className="text-white" href={Globals.SOCIALS.INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer"><FaInstagram size={28}/></a>
                  <a className="text-white" href={Globals.SOCIALS.FACEBOOK_LINK} target="_blank" rel="noopener noreferrer"><FaFacebook size={28}/></a>
                  <a className="text-white" href={Globals.SOCIALS.TIKTOK_LINK} target="_blank" rel="noopener noreferrer"><FaTiktok size={28}/></a>
                  <a className="text-white" href={Globals.SOCIALS.YOUTUBE_LINK} target="_blank" rel="noopener noreferrer"><FaYoutube size={28}/></a>
                  <a className="text-white" href={Globals.SOCIALS.SPOTIFY_LINK} target="_blank" rel="noopener noreferrer"><FaSpotify size={28}/></a>
                  <a className="text-white" href={Globals.SOCIALS.YOUTUBE_MUSIC_LINK} target="_blank" rel="noopener noreferrer"><SiYoutubemusic size={28}/></a>
               </div>
            </div>
         </div>

      </nav>
   );
}