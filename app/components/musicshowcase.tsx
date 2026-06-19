export default function MusicShowcase() {
  return (
     <div className="section-music">

      <h2>Available Music</h2>

     <div className="tracks-grid">

        <div key="kickingstones" className="track-item">
            <a href="https://open.spotify.com/track/0PZ2I2VLmdeJJ02FBTbXGM?si=0094c8979fde4c0b" target="_blank" rel="noopener noreferrer">
              <img src="/musicThumbnails/kickingstones.jpg" alt="spotify-kickingstones" />
            </a>
            <p>Find You</p>
        </div>

        <div key="mysterygirl" className="track-item">
          <a href="https://open.spotify.com/track/3DdyYwJPBHwGtxX2ziepBQ?si=cc00bf87b93b47d0" target="_blank" rel="noopener noreferrer">
            <img src="/musicThumbnails/mysterygirl.jpg" alt="spotify-mysterygirl" />
          </a>
          <p>Mystery Girl</p>
        </div>

        <div key="makingchangesinmacon" className="track-item">
          <a href="https://open.spotify.com/track/7MBkgApGwLiUspxt7RWcBC?si=2d38b54e574849ad" target="_blank" rel="noopener noreferrer">
            <img src="/musicThumbnails/makingchangesinmacon.jpg" alt="spotify-makingchangesinmacon" />
          </a>
          <p>Making Changes in Macon</p>
        </div>

        <div key="findyou" className="track-item">
            <a href="https://open.spotify.com/track/2mExeMPZel1WrFQ2p9rWur?si=0044125b3e354020" target="_blank" rel="noopener noreferrer">
              <img src="/musicThumbnails/findyou.jpg" alt="spotify-findyou" />
            </a>
            <p>Find You</p>
        </div>

      </div>
      
    </div>
  );
}