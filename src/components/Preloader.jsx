import React from 'react'
import { useState, useEffect } from "react";


const Preloader = () => {
  const [progress, setProgress] = useState(0);

  const fillProggres = async () => {
    var preloader = document.getElementById("preloader")
    preloader.style.opacity=0;
    // preloader.style.height=0;
    preloader.style.visibility="hidden";
    setProgress(100)


      }
      
  useEffect(() => {
const interval = setInterval(() => {
setProgress((oldProgress) => {
const newProgress = oldProgress + 0.5
 if(newProgress === 95) {
  window.addEventListener('load', fillProggres());
   clearInterval(interval)
 }
 return newProgress
})
}, 50)
  }, []);

  
  return (
    
    <div id="preloader">
      <img class="preloader-logo" src="assets/images/logo/logo.png" alt=''/>
      <div className="progress-bar" id='progress-bar' style={{"--width": progress, "color":"white"}} data-label="Загрузка..."></div>
    </div>
  )
}

export default Preloader