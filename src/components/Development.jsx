
import React from 'react';
import content from "./content";
import WebDevHeading from"./webDevHeading";
import WebDevIntro from "./WebDevIntro";
import WebDevSkill from "./WebDevSkill";
import WebDevProjects from "./WebDevProjects";
import WebDevPreviews from "./WebDevPreviews";


const Development = () => {

  return (
    <div className="devBody">
<WebDevHeading />
<WebDevIntro />
<hr className="webDevHr"/>
<WebDevSkill />

<WebDevProjects />
<hr className="webDevHr"/>
<WebDevPreviews />
    </div>
  );
};

export default Development;
