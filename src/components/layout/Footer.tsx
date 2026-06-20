"use client";

import * as Globals from "@/app/globals";
import { FaFacebook, FaGithub, FaInstagram, FaSpotify, FaTiktok, FaYoutube } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="text-light">
      <div className="d-flex flex-column justify-content-center p-3 gap-3">

        {/* Social Media Icons */}
        <div id="footer-socials" className="row">
            <div className="d-flex justify-content-center align-items-center gap-3">
              <a className="text-white" href={Globals.SOCIALS.INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer"><FaInstagram size={25}/></a>
              <a className="text-white" href={Globals.SOCIALS.FACEBOOK_LINK} target="_blank" rel="noopener noreferrer"><FaFacebook size={25}/></a>
              <a className="text-white" href={Globals.SOCIALS.TIKTOK_LINK} target="_blank" rel="noopener noreferrer"><FaTiktok size={25}/></a>
              <a className="text-white" href={Globals.SOCIALS.YOUTUBE_LINK} target="_blank" rel="noopener noreferrer"><FaYoutube size={25}/></a>
              <a className="text-white" href={Globals.SOCIALS.SPOTIFY_LINK} target="_blank" rel="noopener noreferrer"><FaSpotify size={25}/></a>
              <a className="text-white" href={Globals.SOCIALS.YOUTUBE_MUSIC_LINK} target="_blank" rel="noopener noreferrer"><SiYoutubemusic size={25}/></a>
            </div>
        </div>

        {/* Sponsor List */}
        <div id="footer-sponsors" className="row" hidden>
          <div className="d-flex flex-column align-items-center gap-2">
            <span>Sponsors</span>
            {/* <div className="d-flex flex-wrap justify-content-center align-items-center container gap-3">
              <a href="https://www.brandedstarr.com/" target="_blank" rel="noopener noreferrer"><img src="/icons/branded_starr.png" alt="Branded Starr" height={80}/></a>
            </div> */}
          </div>
        </div>
       

        {/* Credit Line */}
        <div id="footer-credits" className="row">
          <div className="d-flex justify-content-center align-items-center gap-1 small">
            <span>Thomas Guest Music</span>
            <span className="mx-1">·</span>
            <span>Built by</span>
            <a href={Globals.GITHUB_LINK} target="_blank" className="text-light text-decoration-none d-inline-flex align-items-center gap-1">
              <FaGithub size={21}/>
              Davis Guest
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
