import Image from "next/image";
import Link from "next/link";

import EventCarousel from "./components/eventcarousel";

export default function Home() {
  return (
    <main>
      
      <div style={{
        backgroundImage: `url('/photos/temp.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <EventCarousel title="Events"/>
      </div>
      
      asdasdasd

    </main>
  );
}
