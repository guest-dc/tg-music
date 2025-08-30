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
    <section id="music" style={{ padding: '2rem 1rem' }}>
      <h2>Listen on Spotify</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem'
      }}>
        {tracks.map(track => (
          <div key={track.id} style={{ textAlign: 'center' }}>
            <a href={track.external_urls.spotify} target="_blank" rel="noopener noreferrer">
              <img src={track.album.images[0].url} alt={track.name} style={{ width: '100%', borderRadius: '8px' }} />
            </a>
            <p style={{ margin: '0.5rem 0' }}>{track.name}</p>
            {track.preview_url && <audio controls src={track.preview_url} style={{ width: '100%' }} />}
          </div>
        ))}
      </div>
    </section>
  );
}
