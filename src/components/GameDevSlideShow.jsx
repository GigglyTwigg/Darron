
import React from 'react';
import {Slide} from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";


const SlideImagesGameDev= ["Game","Game1","Game2", "Game3", "Game4", "Game5", "Game6", "Game7", "Game8", "Game9", "Game10", "Game11","Game12", "Game13","Game14"
                     ]


const  Slider =()=>
{
  return (
    <div className="slideContainer">
    <Slide easing="ease">
    {SlideImagesGameDev.map((slide, index)=>{
      return(
      <div className="slide" key={slide}>
        <div className={SlideImagesGameDev[index]}>

<span>Slide {index +1}</span>
</div>
</div>
);
})}
</Slide>
</div>
);
}
 export default Slider;
