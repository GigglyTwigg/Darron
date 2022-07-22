
import React from "react";

import CreateWebDevPreviewBox from "./WebDevPreviewBox";

function WebDevPreviews(){

  return(<div>
<div className="GP_Main">
<CreateWebDevPreviewBox
name="Website1"
cssName="website1"
link="https://phatjesuslive.itch.io/prepare-2-die"

/>

<CreateWebDevPreviewBox
name="Website2"
cssName="website2"
link="https://phatjesuslive.itch.io/prepare-2-die"

/>



<CreateWebDevPreviewBox
name="Website3"
cssName="website3"
link="https://phatjesuslive.itch.io/prepare-2-die"

/>



<CreateWebDevPreviewBox
name="Website4"
cssName="website4"
link="https://phatjesuslive.itch.io/prepare-2-die"

/>

<CreateWebDevPreviewBox
name="Website5"
cssName="website5"
link="https://phatjesuslive.itch.io/prepare-2-die"

/>

</div>
    </div>
  );
}

export default WebDevPreviews;
