
import React from "react";

import CreatePreviewBox from "./PreviewBox";

function GamePreviews(){

  return(<div>
<div className="GP_Main">
<CreatePreviewBox
name="Prepare2Die"
cssName="p2d"
link="https://phatjesuslive.itch.io/prepare-2-die"

/>

<CreatePreviewBox
name="Franko's Hat"
cssName="FrankosHat"
link="https://gigglytwigg.itch.io/frankos-hat"

/>



<CreatePreviewBox
name="Run From Responsibilities"
cssName="RFR"
link="https://gigglytwigg.itch.io/RFR"

/>



<CreatePreviewBox
name="Escape From Anxi"
cssName="anxi"
link="https://gigglytwigg.itch.io/runfromanxi"

/>

<CreatePreviewBox
name="Life-On"
cssName="life"
link="https://gigglytwigg.itch.io/lifeof"

/>

</div>
    </div>
  );
}

export default GamePreviews;
