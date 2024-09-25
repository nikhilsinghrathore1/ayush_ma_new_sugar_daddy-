import React, { useState } from 'react'
import Home from './Pages/Home';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [color, setColor] = useState(false);

  const handleNavMenuColor=(dark)=>{
    setColor(dark);
  }
  const [isLight, setIsLight] = useState(false);

  const handleLightColor=(light)=>{
    setIsLight(light);
  }
// console.log(color)
  return (
    <div className="overflow-x-hidden max-w-[1900px] mx-auto">
      <BrowserRouter>
          <Navbar isDark={color} isLight={isLight}/>
          <Routes>
            <Route path="/" element={<Home onBlackBackground={handleNavMenuColor} onLightBackground={handleLightColor}/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
