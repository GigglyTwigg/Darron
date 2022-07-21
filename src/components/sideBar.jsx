
import React from 'react';

import content from "./content";


function SidePanel(){



    function CreateSkillBar(prop){
      let skillbarClass=[prop.skill,"skills"];
      skillbarClass=skillbarClass.join(" ");
      return <div class="skillbar container">
        <p>{prop.skill}</p>
        <div className={skillbarClass}>{prop.perc}</div>
      </div>
    }



    function CreateList(items){

      return <li> {items}</li>
    }

  return(
<div className="gameDevSidePannel">
<h4>Skills</h4>
<div className="skillsPanel">
<ul>{content[1].gameDevSkills.map(CreateList)}</ul>

<hr />

<div className ="skillsBar">
<CreateSkillBar skill="Game-Mechanics" perc="90%" />
<div class="skillbar container">
<p>C#/.Net</p>
<div className="Net skills">72%</div>
</div>
<CreateSkillBar skill="Level-Design" perc="65%" />
<CreateSkillBar skill="Source-Control" perc="25%" />
<CreateSkillBar skill="Sound" perc="10%" />
</div>
<hr />
<div className="linka"><h4 ><a href="https://gigglytwigg.itch.io/">ITCH.IO</a></h4></div>
<div className="cvLinka">
<h3><a href="GDCV.pdf">CV</a></h3>
</div>
</div>

</div>
);
}

export default SidePanel;
