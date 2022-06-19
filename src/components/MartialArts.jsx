
import React from 'react';
import content from"./content";
const MartialArts = () => {
  return (
    <div >
      <h1>Welcome to MartialArts Page</h1>
      <div></div>
      <div>
      <p>{content[4].about}</p>
      </div>
      <p>If you would like to find out more check out my social media.</p>
      <a href="">{content[4].links[0]}</a>
    </div>
  );
};

export default MartialArts;
