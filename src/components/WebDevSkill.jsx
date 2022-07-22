import React from "react";
import content from "./content";

function WebDevSkill(){

  function CreateSkillBar(prop){
    let skillbarClass=[prop.skill,"skills", "C"];
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
    <div className="webDevMidBod">

          <div className="col-md-6  frameworkBod2">
<CreateSkillBar skill="html" perc="90%" />
<CreateSkillBar skill="CSS" perc="94%" />
<CreateSkillBar skill="ReactJS" perc="80%" />
<CreateSkillBar skill="C#" perc="92%" />
<CreateSkillBar skill="SQL" perc="50%" />
<CreateSkillBar skill="MongoDB" perc="55%" />
<CreateSkillBar skill="NodeJS" perc="73%" />
<CreateSkillBar skill="Bootstrap" perc="90%" />
<CreateSkillBar skill="JavaScript" perc="75%" />
<CreateSkillBar skill="Python" perc="45%" />
<CreateSkillBar skill="Unity" perc="95%" />
</div>
<div className="col-md-6  frameworkBod">
      <h3>{content[1].title}</h3>
    {content[1].lang.map(CreateList)}
      </div>
          </div>
  );
}


export default WebDevSkill;
