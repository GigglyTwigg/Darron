
import React from 'react';
function Home(){
    const[theme, SetTheme]=React.useState("neutral");

    function ChangeTheme(){

        if(theme==="neutral"){
            SetTheme("hot");
        }
          else if(theme==="hot"){

                SetTheme("cold");
                
            }
            else if(theme === "cold"){
                SetTheme("neutral");
            }
    }

  return (
      <div className={theme}> 

    <div  >
      <h1 style={{
        textAlign:"center",
        fontFamily: 'Patrick Hand', 
       padding:"5%"

      }} >Welcome To My WebSite!</h1>
      <div style={{
        textAlign:"right",
        fontFamily: 'Patrick Hand', 
       paddingRight:"1%"

      }} >
      <h3>Dont Like the Theme?</h3>       
      <button onClick={ChangeTheme} className='themeButton'>Change Theme</button>
    
      <div class="intro">
      <h4 >Hi i'm Darron.</h4>
    <img class="profile_img" src="/Dax.png" alt="A picture of Darron" />
    <p class="intro_sum">Web & Software Developer, HVAC & BMS/BAC Specialist, Martial Artist.</p>
  </div>


     <div class="hero-foot">
        <div class="container Logo">
        <img className={theme} />
        </div>
      </div>


    <div class=" container-fluid mt-4 cols">
      <div class="row justify-content-md-center">
        <div class="col-lg-3 col-sm-12 homecol">
          <h3 class="text-center">Web & Software Development.</h3>
          <ul >
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</li>
            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</li>
            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</li>
          </ul>
        </div>
        <div class="col-lg-3 col-sm-12 homecol">
          <h3 class="text-center">HVAC & BMS/BAC.</h3>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</li>
            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</li>
            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</li>
          </ul>
        </div>
        <div class="col-lg-3 col-sm-12 homecol">
          <h3 class="text-center">Martial-Arts.</h3>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</li>
            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</li>
            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</li>
          </ul>
        </div>
      </div>
    </div>
<div>
    ...
</div>
    
      </div>

    </div>

    </div>
  );
};
  
export default Home;