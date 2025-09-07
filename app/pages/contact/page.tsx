"use client";
import { useEffect } from "react";
import * as Globals from "@/app/globals";

export default function ContactPage() {

     useEffect(() => {
          document.body.style.backgroundImage = "url('/black-static.png')";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundPosition = "center";
          document.body.style.backgroundRepeat = "no-repeat";
      
          return () => {
            document.body.style.backgroundImage = "";
            document.body.style.backgroundSize = "";
            document.body.style.backgroundPosition = "";
            document.body.style.backgroundRepeat = "";
          };
        }, []);

     return (
          <main>
               <div className="contact">
                    <h2>Contact</h2>
                    <p className="booking-text">
                         Get in touch for bookings at:<br/>
                         <a href={`mailto:${Globals.BOOKING_EMAIL}`}>{Globals.BOOKING_EMAIL}</a>
                    </p>
               </div>
          </main>
     );
}