import Link from "next/link";
import Image from "next/image";

import EventCarousel from "./components/eventcarousel";
import PhotoDisplay from "./components/photodisplay";

export default function Home() {
  return (
    <main>

      <PhotoDisplay src="/photos/johndeer.jpg" alt="johndeer"/>
      
      <div id="events" className="section-a">
        <EventCarousel title="Events"/>
      </div>

    </main>
  );
}
