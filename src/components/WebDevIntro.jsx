import React from "react";
import content from "./content";

  function WebDevIntro(){

    const[introState, SetIntroState]=React.useState(false);
let webDevIntroClassName;
let webDevIntroContent;
    if(introState==false)
    {
      webDevIntroClassName="webDevProfile" ;
      webDevIntroContent = content[2].content;
    }
    else if (introState ==true)
    {
webDevIntroClassName="webDevProfileNxt" ;
webDevIntroContent = content[2].profile;
    }

    return(
          <div className="webDevProfile" onMouseEnter={() =>  SetIntroState(true)}  onMouseLeave={() => SetIntroState(false)}>
              <h4>{ webDevIntroContent} </h4>
          </div>
    );
  }

  export default WebDevIntro;
