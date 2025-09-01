'use client';

import { useEffect, useState } from 'react';

interface Track {
  id: string;
  name: string;
  preview_url: string;
  album: { images: { url: string }[] };
  external_urls: { spotify: string };
}

export default function MusicShowcase() {
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    fetch('/api/music')
      .then(res => res.json())
      .then(data => setTracks(data.tracks || []))
      .catch(err => console.error('Error fetching tracks:', err));
  }, []);

  return (
     <div className="section-music">

      <h2>Available Music</h2>

     <div className="tracks-grid">
        {tracks.map(track => (
          <div key={track.id} className="track-item">

            <a href={track.external_urls.spotify} target="_blank" rel="noopener noreferrer">
              <img src={track.album.images[0].url} alt={track.name} />
            </a>

            <p>{track.name}</p>

            {track.preview_url && <audio controls src={track.preview_url} />}

          </div>
        ))}
      </div>
      
    </div>
  );
}
