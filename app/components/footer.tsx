import Image from "next/image";
import * as Globals from "@/app/globals";

export default function Footer() {

     return (
          <footer>

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

          </footer>
     );
}