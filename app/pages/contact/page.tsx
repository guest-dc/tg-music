import * as Globals from "@/app/globals";

export default function ContactPage() {
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