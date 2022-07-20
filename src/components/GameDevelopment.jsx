
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
    <SidePanel />
    <div className="gameDevBody">
      <GameDevHeading />

      <div className="gameDevAbout">
        <Slider/>
      <hr />
      </div>
      <div className="gameDevAboutRight">
       <p>{content[3].profile}</p>
        <p>  {content[3].about}</p>
      </div>

      <GameDevRef />
      <GamePreviews />
    </div>
      </div>
        </div>
  );
};

export default GameDevelopment;
