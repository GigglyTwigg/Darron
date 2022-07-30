import React from "react";
import content from "./content";
import WebSkills from"./WebSkills";

function WebDevSkill(){

  const[toggledBtn, SetToggleButton]= React.useState("webDevMidBodOff");
let isExpanded = false;
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

  function ToggleSkillsBtn()
  {
    isExpanded =!isExpanded;
  if(isExpanded===true)
   {
    SetToggleButton("webDevMidBod")
   }
   else if(isExpanded===false)
   {
        SetToggleButton("webDevMidBodOff")
   }
  }

  return(
    <div className= "webDevSkillBod">
    <div>

    <button onClick={ToggleSkillsBtn} > See My States
      <span className="toggle-statsBar "/><span className="toggle-statsBar "/><span className="toggle-statsBar "/><a href="/"></a></ button>
    </div>
    <div className={toggledBtn}>
          <h2>Skills</h2>
          <div className=" col-md-6 frameworkBod2">
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
    <div className="webgrid-box">
    <WebSkills />
  </div>
      </div>
          </div>
            </div>
  );
}


export default WebDevSkill;
