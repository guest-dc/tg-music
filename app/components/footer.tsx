import * as Globals from "@/app/globals";

export default function Footer() {
     return (
          <footer>
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

               <p>Sponsored By:</p>

               <div className="sponsors">
                    <a href="https://www.brandedstarr.com/" target="_blank" rel="noopener noreferrer" >
                         <img src="/icons/branded_starr.png" alt="Branded Starr" width={120} height={60} />
                    </a>
               </div>
          </footer>
     );
}
