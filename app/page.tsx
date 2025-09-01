import PhotoCarousel from "./components/photocarousel";
import PhotoDisplay from "./components/photodisplay";
import MusicShowcase from "./components/musicshowcase";

export default function Home() {
  return (
    <main>

      <section id="home">
        <PhotoDisplay src="/photos/johndeer.jpg" alt="Artist photo"/>
      </section>

      <section id="events" className="section-events">
        <PhotoCarousel title="Events Dates" path="events"/>
      </section>

      <section id="music" className="section-music">
        <MusicShowcase/>
      </section>

      <section id="about" className="section-bio">
        <div className="content">
          <div className="left">
            <img src="/photos/wildwings.png" alt="Artist photo" />
          </div>
          <div className="right">
          <h2>Bio</h2>
          <p>
            Born and raised in historic Macon, Georgia, Thomas Guest began developing his musical talents where 
            legends were born and performed. Influenced by iconic artists in country, hip-hop, gospel, and southern 
            rock, Thomas infuses his own unique personal charm in his music. Although relatively new to the scene, 
            Thomas has made headway with his first single, <i>Find You</i>, and debuted the song on iHeartRadio’s 
            Back Yard Country with host WB/William Barber. Thomas has performed at Macon’s Cherry Blossom Festival, 
            The Society Garden, The Hummingbird Stage & Taproom, and various other local venues in the Middle and 
            South Georgia areas. He has performed his songs, along with a mix of covers, both acoustically and with 
            his full band. <i>Making Changes in Macon</i> is his second release and again carries heartfelt emotions 
            with the center being his hometown, Macon, Georgia. He performed this song on the morning show of the 
            local country station, WDEN 99.1, with hosts Laura Starling and Vance Shepard. <i>Mystery Girl</i> is 
            his third single, and he has several additional songs planned for release this year. Thomas Guest is 
            quickly establishing himself as an exciting new voice rising from Macon, Georgia’s rich musical soil.
          </p>
          <p>
            Thomas Guest started his musical career at the age of 14 singing in chapel at his high school, 
            Windsor Academy in Macon, Georgia. His musical talent was well received by his peers and faculty 
            at the school. His passion, though, was for country music, and that came from his papa. They 
            listened together riding around town and in the mountains of North Georgia near the family cabin 
            at Lake Burton, Ga. The songs of Alan Jackson, George Strait, and various other 90’s country hits 
            were embedded deep. Thomas’s time with his papa created a special bond that still lasts even after 
            his passing in June of 2025. Thomas had an electric guitar made by Danny Boyles of Jackson, Ga. It 
            featured a hand-painted image of Lake Burton with a pin labeled “Home” where the cabin still exists, 
            painted by his aunt, Beth Guest. The guitar strap is made from an old work belt of his papa’s that 
            has replica 12-gauge shotgun emblems along the length, with paint and sweat stains still showing on 
            the weathered belt. asd
          </p>
          </div>
        </div>
    </section>

    </main>
  );
}
