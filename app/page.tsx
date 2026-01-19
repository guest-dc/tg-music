"use client";
import { useState, useEffect } from "react";
import EventCarousel from "./components/eventcarousel";
import PhotoDisplay from "./components/photodisplay";
import MusicShowcase, { Track } from "./components/musicshowcase";

export default function Home() {

  const [photos, setPhotos] = useState<string[]>([]);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);

  // Waits for all events and tracks are finished loading
  useEffect(() => {
    async function fetchData() {
      try {
        const [eventsRes, musicRes] = await Promise.all([
          fetch("/api/events").then(async res => {
            if (!res.ok) throw new Error(`HTTP error ${res.status}`);
            const text = await res.text();
            return text ? JSON.parse(text) : [];
          }),
          fetch("/api/music").then(async res => {
            if (!res.ok) throw new Error(`HTTP error ${res.status}`);
            const text = await res.text();
            return text ? JSON.parse(text) : { tracks: [] };
          })
        ]);
        setPhotos(eventsRes.map((f: { url: string }) => f.url));
        setTracks(musicRes.tracks || []);

      } catch (err) {
        console.error(err);

      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Scrolls to clicked button's section when navigating back to home
  useEffect(() => {
    const target = sessionStorage.getItem("scrollTarget");
    if (!target || loading) return;

    // Wait until next paint cycle so layout is stable
    requestAnimationFrame(() => {
      const el = document.getElementById(target);
      if (el) {
        const yOffset = -100;
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      sessionStorage.removeItem("scrollTarget");
    });
  }, [loading]);

  return (
    <main>

      <section id="home">
        <PhotoDisplay src="/photos/walking_guitar.png" alt="Artist photo"/>
      </section>

      <section id="events" className="section-events">
        <EventCarousel title="Upcoming Events"/>
      </section>

      <section id="music" className="section-music">
        <MusicShowcase/>
      </section>

      <section id="about" className="section-bio">
        <div className="content">
          <div className="left">
            <img src="/photos/johndeer.jpg" alt="Artist photo" />
          </div>
          <div className="right">
          <h2>About</h2>
          <p>
            Born and raised in historic Macon, Georgia, Thomas Guest began developing his musical talents where 
            legends were born and performed. Influenced by iconic artists in country, hip-hop, gospel, and southern 
            rock, Thomas infuses his own unique personal charm in his music. Although relatively new to the scene, 
            Thomas has made headway with his first single, <i>Find You</i>. The track debuted on iHeartRadio’s 
            96.5 The Bull during <i>Back Yard Country</i> with host William "WB" Barber. Thomas has performed at
            Macon’s Cherry Blossom Festival, The Society Garden, The Hummingbird Stage & Taproom, and various other
            local venues in Middle and South Georgia. He has performed his songs, along with a mix of covers, both 
            acoustically and with his full band. <i>Making Changes in Macon</i>, his second release, again carries 
            heartfelt emotions, centered on his hometown of Macon, Georgia. He performed this song on the morning 
            show of the local country station, WDEN 99.1, with hosts Laura Starling and Vance Shepard. <i>Mystery Girl</i> 
            is his third single, and he has several additional songs planned for release this year. Thomas Guest is 
            quickly establishing himself as an exciting new voice rising from Macon’s rich musical soil.
          </p>
          <br/>
          <p>
            Thomas Guest started his musical career at the age of 14, singing in chapel at his high school, 
            Windsor Academy in Macon, Georgia. His musical talent was well received by his peers and faculty 
            at the school. His passion, though, was for country music, a love that came from his papa. They 
            listened together while riding around town and in the mountains of North Georgia near the family cabin 
            at Lake Burton, Georgia. The songs of Alan Jackson, George Strait, and various other '90s country hits 
            were embedded deep. Thomas’s time with his papa created a special bond that still lasts even after 
            his passing in June of 2025. Thomas had an electric guitar custom-made by Danny Boyles of Jackson, Georgia. It 
            features a hand-painted image of Lake Burton with a pin labeled “Home” where the cabin still exists, 
            painted by his aunt, Beth Guest. The guitar strap is made from an old work belt of his papa’s, adorned 
            with replica 12-gauge shotgun emblems along its length, with paint and sweat stains still showing on 
            the weathered belt.
          </p>
          </div>
        </div>
    </section>

    </main>
  );
}
