import React from "react";
import content from "./content";

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
  if(isExpanded==true)
   {
    SetToggleButton("webDevMidBod")
   }
   else if(isExpanded==false)
   {
        SetToggleButton("webDevMidBodOff")
   }
  }

  return(
    <div className= "webDevSkillBod">
    <div>
    <div className="webgrid-box">

    <div className="two-images ">

    <div className=" webimgone two-image">
    <h2>Code</h2>
    </div>

    <div className="webdisc webdiscOne">

    <h4>Language</h4>
    <ul>
    <li>C#/.net</li>
    <li>JavaScript</li>
    <li>Python</li>
    </ul>
    </div>
    </div>
    <div className="two-images ">

    <div className=" webimgone two-image">
    <h2>UI/UX</h2>
    </div>

    <div className="webdisc webdiscTwo">

    <h4>UI</h4>
    <ul>
    <li>C#/.net</li>
    <li>JavaScript</li>
    <li>Python</li>
    </ul>
    </div>
    </div>
    <div className="two-images ">

    <div className=" webimgone two-image">
    <h2>Git</h2>
    </div>

    <div className="webdisc webdiscThree">

    <h4>Version-Ctrl</h4>
    <ul>
    <li>C#/.net</li>
    <li>JavaScript</li>
    <li>Python</li>
    </ul>
    </div>
    </div>
  </div>
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

    {content[1].lang.map(CreateList)}
      </div>
          </div>
            </div>
  );
}


export default WebDevSkill;
