

import React from 'react';
import content from "./content";
import Slider from "./GameDevSlideShow"
import SidePanel from "./sideBar"
import GameDevRef from "./gameDevRef";
import GameDevHeading from "./gameDevHeading";
import GamePreviews from "./GamePreviews"

function GameDevelopment() {

  return (
      <div>

    <div className="gameDev-Container">

    <div className="gameDevBody">
      <GameDevHeading />
        <Slider/>
    <SidePanel />

      <div className="gameDevAboutRight">
       <p>{content[3].profile}</p>
        <p>  {content[3].about}</p>
          <p>  {content[3].aboutMore}</p>
      </div>
    </div>
      </div>


      <GameDevRef />
      <GamePreviews />
        </div>
  );
};

export default GameDevelopment;
