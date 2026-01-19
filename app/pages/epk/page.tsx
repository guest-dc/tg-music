"use client";
import { useEffect, useRef } from "react";
import * as Globals from "@/app/globals";

export default function EpkPage() {

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
         <div id="epk" className="epk">
            <iframe
               src="/pdfs/epk.pdf#view=Fit"
               title="Electronic Press Kit"
               width="100%"
               height="100%"
            />
         </div>
   );
}
