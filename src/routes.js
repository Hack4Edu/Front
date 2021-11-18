import React from "react";
import {  
  Routes,
  Route
} from "react-router-dom";
import Home from "./Pages/Home";
import Publicacoes from "./Pages/Publicacoes";
import Upload from "./Pages/Upload";

export default function MainRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/publicacoes" element={<Publicacoes/>}/>
      <Route path="/upload" element={<Upload/>}/>
    </Routes>
  )
} 