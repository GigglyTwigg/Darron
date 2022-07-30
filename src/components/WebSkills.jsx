
import React from "react" ;

function WebSkills(){
  return( <div className="webSkillTree ">

    <div className="webSkillBranch Language">
    <h4>Language</h4>
    <ul>
    <li>C#/.net</li>
    <li>JavaScript</li>
    <li>Python</li>
    </ul>
    </div>

    <div className=" webSkillBranch frontEndTree">
    <h4>Front-End</h4>
    <ul>
    <li>html</li>
    <li>CSS/Sass</li>
    <li>Bootstrap</li>
    <li>React</li>
    </ul>
    </div>


    <div className=" webSkillBranch Backend">
    <h4>Backend</h4>
    <ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>React.js</li>
    </ul>
    </div>


    <div className="webSkillBranch sourceControl">
    <h4>Source-Control</h4>
    <ul>
    <li>Git-Hub</li>
    <li>Git-Lab</li>
    <li>Source Tree</li>
    </ul>
    </div>

  </div>
);
}

export default WebSkills;
