import React from "react";
import content from "./content";

  function WebDevIntro(){
    return(
          <div className="webDevProfile" >
              <p> {content[2].content}  </p>
          </div>
    );
  }

  export default WebDevIntro;
