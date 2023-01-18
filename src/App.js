import React from 'react';
// import '../../src/App.css';
// import Navigation from '../components/Navigation';
// import { useState } from "react";
// import Preloader from '../components/Preloader';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import styled from 'styled-components'
import Preloader from "../src/components/Preloader"
import MainPage from './components/MainPage';
import Navigation from './components/Navigation';

const App = () => {
   

  // const [open, setOpen] = useState(false)
  // const [prev, setPrev] = useState(sessionStorage.getItem("firstPrev"))
  // const [modalName, setModalName] = useState("")
  // const [modalInfo, setModalInfo] = useState("")
  // const [modalImg, setModalImg] = useState("")

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>
          <Preloader/>
        <Navigation/>
        <MainPage/>
    
            </div>} />
          <Route path="1" element={<div>page1</div>} />
          <Route path="2" element={<div>page2</div>} />
          <Route path="3" element={<div>page3</div>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App