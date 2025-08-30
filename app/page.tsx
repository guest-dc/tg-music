import Link from "next/link";
import Image from "next/image";

import PhotoCarousel from "./components/photocarousel";
import PhotoDisplay from "./components/photodisplay";

export default function Home() {
  return (
    <main>

      <div id="home">
        <PhotoDisplay src="/photos/johndeer.jpg" alt="johndeer"/>
      </div>

      <div id="events" className="section-a">
        <PhotoCarousel title="Events" path="events"/>
      </div>

      <div id="music">
      
      </div>

      <div id="about">
      
      </div>

    </main>
  );
}
