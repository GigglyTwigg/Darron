
import React from 'react';
import content from "./content";



const Development = () => {
const[selection, setSelection]=React.useState("about");


function CreateList(items){
  return <li> {items}</li>
}
  return (
    <div className="devBody">
      <h1>Development.</h1>
      <div className="devSumm">
      </div>
        <section>
      <div >
          <p className="devsum"> {content[2].content}  </p>
      </div>
      <container className="row framework">
<div className="col-md-6  frameworkBod">
      <h3>{content[1].title}</h3>
    {content[1].lang.map(CreateList)}
      </div>

      <div className="col-md-6  frameworkBod2">
            <h3>{content[1].title}</h3>
          {content[1].lang.map(CreateList)}
            </div>
  </container>
            <div >
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

export default Development;
