"use client";
import { useEffect } from "react";
import * as Globals from "@/app/globals";

export default function ContactPage() {

     useEffect(() => {
          document.body.style.backgroundImage = "var(--blackstatic)";
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

                    <h3>
                         Have Questions?
                         <br/>
                         Contact Me!
                    </h3>

                    <p className="booking-text-b">
                         Please email me with any questions regarding upcoming events and availablility 
                         to sing at your next event. You can also follow me on all social media platforms 
                         to stay up to date with the latest news and events!
                         <br/><br/>
                         Thank you, I look forward to hearing from you!
                         <br/>
                         <br/>
                         <a href={`mailto:${Globals.BOOKING_EMAIL}`}>
                              <i className="fa-solid fa-envelope"></i>
                              {Globals.BOOKING_EMAIL}
                         </a>
                    </p>
               </div>
          </main>
     );
}