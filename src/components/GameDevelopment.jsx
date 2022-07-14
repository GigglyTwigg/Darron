
import React from 'react';
import content from "./content";
import Slider from "./GameDevSlideShow"
import SidePanel from "./sideBar"




function GameDevelopment() {

  return (
    //Top Heading
    <div className="gameDev-Container">
    <SidePanel />
    <div className="gameDevBody">
      <h1>Game Development.</h1>

      <div className="gameDevAbout">
        <Slider/>
      <hr />
      </div>
      <div className="gameDevAboutRight">
       <p>{content[3].profile}</p>
        <p>  {content[3].about}</p>

      </div>

<div className="grid-box">

<div className="three-images ">

<div className=" imgone three-image">

</div>

<div className="disc discOne">

<h2>Codeing</h2>
<h3>Frameworks</h3>
<ul>
<li>C#/.net</li>
<li>JavaScript</li>
<li>Python</li>
</ul>
</div>
</div>

<div className="three-images ">

<div className="imgtwo three-image">

</div>
<div className="disc disctwo">
<h2>Codeing</h2>
<h3>Frameworks</h3>
<ul>
<li>C#/.net</li>
<li>JavaScript</li>
<li>Python</li>
</ul>
</div>
</div>

<div className="three-images ">
<div className=" imgthree three-image">

</div>
<div className="disc discthree">
<h2>Codeing</h2>
<h3>Frameworks</h3>
<ul>
<li>C#/.net</li>
<li>JavaScript</li>
<li>Python</li>
</ul>
</div>
</div>

</div>

    </div>
      </div>
  );
};

export default GameDevelopment;
