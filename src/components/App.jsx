import React,{useState} from'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./navBar";
import Home from "./Home";
import Development from "./Development";
import HVAC from "./HVAC";
import MartialArts from "./MartialArts";
import Contact from "./Contact";
import Footer from "./Footer";
function App(){

  
  return ( <div >
   <Router>
      <NavBar />
      <Routes>
        <Route path='/'  element={<Home  />} />
        <Route path='/Development' element={<Development />} />
        <Route path='/HVAC' element={<HVAC />} />
        <Route path='/MartialArts' element={<MartialArts />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </Router>
    <Footer />
   


  </div> 
  );
 }


export default App;

