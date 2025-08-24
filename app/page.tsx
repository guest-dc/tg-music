import Image from "next/image";
import Link from "next/link";

import EventCarousel from "./components/eventcarousel";

export default function Home() {
  return (
    <main>
      
      <div style={{
        backgroundImage: `url('/photos/wildwings.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        backgroundRepeat: 'no-repeat'
      }}>
        <EventCarousel title="Events"/>
      </div>
      
      asdasdasdasd

    </main>
  );
}
