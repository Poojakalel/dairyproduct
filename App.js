import React from "react";

import { BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./Home";
import Allproduct from "./Allproduct";
import './index.css';
import NavBar from "./NavBar";
import IceCream from "./IceCream";
import Sweets from "./Sweets";
import Milk from './Milk';

const App=()=>{
  return(
    <BrowserRouter>



   {/* <NavBar/>
   <Home/>
   <Allproduct/> */}
   
   
   
   
   
   <Routes>
    <Route path="/" element={<NavBar/>}/>
    
    <Route path="/home" element={<Home/>}/>
    <Route path="/allproduct" element={<Allproduct/>}/>
    <Route path="/icecream" element={<IceCream/>}/>
    <Route path="/sweets" element={<Sweets/>}/>
   </Routes>
 
    </BrowserRouter>
  )
}
export default App;


