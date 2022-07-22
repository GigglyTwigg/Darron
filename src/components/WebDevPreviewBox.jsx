import React from"react"

function CreateWebDevPreviewBox(props)
{
  let cssName = props.cssName+" GP_Img  WDlink";
  let imgName = props.imgURL;

  return(
    <div className="WebDevGp_box">
    <div className={cssName}>
    <h4><a href={props.link}>{props.name}</a></h4>
    </div>
    </div>

  );
}

export default CreateWebDevPreviewBox;
