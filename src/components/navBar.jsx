import  {useState} from 'react';


const NavBar = () => {

const[isNavExpanded, SetIsNavExpanded]= useState(true);
console.log(isNavExpanded);
  return (    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/">DMG</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="Development">Development</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="HVAC">HVAC</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="MartialArts">MartialArts</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="Contact">Contact</a>
        </li>
      </ul>

    </div>
  </nav>
       
  );
};

export default NavBar;
