import logo from './logo.svg';
import './App.css';
import { React, useState, useEffect, useContext } from 'react'
import {BrowserRouter, Routes, Route  } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Admin from './Admin/Admin'
import Dashboard from './Dashboard-components/Dashboard'

import Home from './Pages/Home.js'
import Services from './Pages/Services'
import About from './Pages/About'
import News from './Pages/News'
import Login from './Components/Login'


function App() {

  return (
    <>
    <div>
  <BrowserRouter>
        <Routes>
          {/*MY ADMIN*/}
          <Route path="/tamarin" element={<Admin/>}/>

          {/*UX COMPONENTS*/}
          <Route path="/admin/:id" element={<Dashboard/>}/>

          <Route path="/" element={<Home/>}/>
          <Route path="/nosso-servico" element={<Services/>}/>
          <Route path="/sobre-nos" element={<About/>}/>
          <Route path="news" element={<News/>}/>
          <Route path="/login" element={<Login/>}/>

        </Routes>
      </BrowserRouter>    
    </div>

    </>
  );
}

export default App;




/*



*/