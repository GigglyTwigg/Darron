
import React from 'react';
import content from "./content";



const GameDevelopment = () => {
const[selection, setSelection]=React.useState("about");

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
  return (
    <div className="devBody">
      <h1>Game Development.</h1>
      <div className="devSumm">
      </div>
        <section>
      <div >
          <p className="devsum"> {content[3].content}  </p>
      </div>
      <container className="row framework">
<div className="col-md-6  frameworkBod">
      <h3>{content[1].title}</h3>
    {content[1].lang.map(CreateList)}
      </div>

      <div className="col-md-6  frameworkBod2">
      <CreateSkillBar skill="Unity" perc="95%" />
      <CreateSkillBar skill="C#.net" perc="92%" />
      <CreateSkillBar skill="JavaScript" perc="75%" />
<CreateSkillBar skill="html" perc="90%" />
<CreateSkillBar skill="CSS" perc="94%" />
<CreateSkillBar skill="ReactJS" perc="70%" />
<CreateSkillBar skill="Python" perc="45%" />

            </div>
  </container>
            <div className="gamedev">
                <h3>{content[3].title}</h3>
                <p> {content[3].about}  </p>

                <div>
                <p>Check out my games and ideas. </p>
               <a href = "link"> {content[3].accounts} </a>
                </div>
            </div>

      </section>

    </div>
  );
};

export default GameDevelopment;
