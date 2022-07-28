

import React,{useState} from'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./navBar";
import Home from "./Home";
import Development from "./Development";
import GameDevelopment from "./GameDevelopment";
import Contact from "./Contact";
import Footer from "./Footer";

function App(){

  return ( <div >
   <Router>
      <NavBar />
      <Routes>
        <Route path='/'  element={<Home  />} />
        <Route path='/Development' element={<Development />} />
        <Route path='/GameDevelopment' element={<GameDevelopment />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </Router>
    <Footer />



  </div>
  );
 }


export default App;
