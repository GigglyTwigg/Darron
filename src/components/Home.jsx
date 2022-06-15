import React from 'react';

function Home() {
  const [theme, SetTheme] = React.useState("neutral");

  function ChangeTheme() {

    if (theme === "neutral") {
      SetTheme("hot");

    } else if (theme === "hot") {

      SetTheme("cold");


    } else if (theme === "cold") {
      SetTheme("neutral");
    }
  }

  return ( <
    div className = {
      theme
    } >

    <  div >
    <
    h1 style = {
      {
        textAlign: "center",

        padding: "5%"

      }
    } > Welcome To My WebSite! < /h1> <
    div style = {
      {
        textAlign: "right",
        fontFamily: 'Patrick Hand',
        paddingRight: "1%"

      }
    } >
    <
    h3 className = "dltt" > Dont Like the Theme ? < /h3> <
    button onClick = {
      ChangeTheme
    }
    className = 'themeButton' > Change Theme < /button>

    <
    div class = "intro" >
    <
    h4 > Hi i 'm Darron.</h4> <
    img class = "profile_img"
    src = "/Dax.png"
    alt = "A picture of Darron" / >
    <
    p class = "intro_sum" > Web & Software Developer, HVAC & BMS / BAC Specialist, Martial Artist. < /p> <
    /div> <
    div className = "logo" >

    <
    /div>



    <
    div class = " container-fluid mt-4 cols" >
    <
    div class = "row justify-content-md-center" >
    <
    div class = "col-lg-3 col-sm-12 homecol" >
    <
    h3 class = "text-center" > Web & Software Development. < /h3> <
    ul >
    <
    li > Front-End, UX/UI (CSS, Bootstrap, ReactJS). < /li> <
    li > NPM, Node, Express. < /li> <
    li > javascript, python, C# & GCL+ < /li>
    <li > Unity 2D, 3D & mobile game Development < /li> <
    li > SQL, MongoDB, DataBases. < /li> <
    /ul> <
    /div> <
    div class = "col-lg-3 col-sm-12 homecol" >
    <
    h3 class = "text-center" > HVAC & BMS / BAC. < /h3> <
    ul >
    <
    li > 15 Years Exp. < /li> <
    li > Delta controls (BMS/BAC). < /li> <
    li > Chilled Water, Freon And Ammonia Refrigeration. < /li> <
    li > Domestic to industrial pharmacuticles. < /li>
    <
    li > Design, Maintenance, fault finding and installation. < /li> <
    /ul> <
    /div> <
    div class = "col-lg-3 col-sm-12 homecol" >
    <
    h3 class = "text-center" > Martial - Arts. < /h3> <
    ul >
    <
    li > 18 Years Exp. < /li> <
    li > Brazilian Jiu-Jitsu. < /li> <
    li > Mauy-Thai. < /li> <
    li > Tang-Soo-Do. < /li>
    <
   li >Systema. < /li> <
    /ul> <
    /div> <
    /div> <
    /div> <
    div >
    <
    /div>

    <
    /div>

    <
    /div>

    <
    /div>
  );
};

export default Home;
